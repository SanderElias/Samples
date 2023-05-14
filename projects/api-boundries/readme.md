ng# Angular components API-boundaries talk.

In this talk I will go over the beginnings of API design, what makes a good API, and how we can apply that to angular components.

> ## DISCLAIMER:
> To learn the most, before you read on, or watch the video,
>  look into the source. Look at the different version  of the same thing in the `relation` and `bRelation` modules. Then make up your mind about what  you think the best way. And _why_ you think that. 

### if you want to check out the code:
```bash
git clone git@github.com:SanderElias/Samples.git
cd Samples
yarn 
npx ng serve ApiBoundries
```
The code for this app is in the folder `projects/ApiBoundries`. (yes I'm aware of the spelling mistake ☺)
By default it will go to the `B-side` of the app. you can route around if you like. It will probably work with `NPM install` instead of `yarn` too.

## STOP READING!
Did you read the disclaimer? Good, you are ready to scroll down :-D

<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>

# Angular components API-boundaries

To watch the video click: [API-boundaries talk](https://youtu.be/YjGrjySEhtM?t=2513). The slides can be found [here](./Angular%20component%20boundries.pdf)

## Foreword
When I look into applications I often see a load of unneeded complexity. A lot of this comes from API boundaries that are too complex. 
What I mean with unneeded complexity, is a lot of extra code that is there only because we are using a pattern that doesn't match our workload, or framework, or both. It is trying to solve a problem that isn't there. _(or can be solved in a much simpler way)_


> ### Pro-tip:
> Don't add code that is solving a problem you don't have.

## The problem:
We have components that have lots of inputs/outputs, and/or those take/emit objects/function instead of primitives.
I did put in a sample in my code, which I'm going to highlight. The order-row component.

in [this version](./src/app/relation-list/relation-detail/order-row/order-row.component.ts) the input seems simple:
```typescript
  private order$ = new ReplaySubject(1)
  @Input() set order(x:any) {this.order$.next(x)}
```
_(well, that is not the actual code in there, but it should have been, as this makes it react to input changes, as the version in the code is not. As the opposite version also is reactive, this **should** have been there)_

While in the [opposite version](./src/app/b-relation-list/order-row/order-row.component.ts)
```typescript
  private orderId$ = new ReplaySubject<string>(1)
  @Input() set orderId(x: string) {
    if (typeof x === 'string' && x.length > 0) {
      this.orderId$.next(x);
    }
  };
  order$ = this.orderId$.pipe(
    switchMap(id => this.order.getOrder(id))
  );
```

>**Wait.. What??** you said less complexity, the second one is _way_ more complex, are you trying to pull my leg?

Nope! Let me explain. The first version will get an JSON object, that is hopefully better typed as the `any` in my sample. All the data that is needed is in there. that sounds easy, **BUT** i have to trust that all data is there, or put in local checks. Also, there is a load of that in there that I don't even need in this component. I'm only handing it down.
look at the `order.processor` and the `order.transporter`, and even the `order.products` The second version even has more functionality in place. To be honest, I gave up on reproducing the same thing here, as the complexity I wanted to show was already there, but I'll get back to this.
But first think about the `handing down` part. In the sample, the app-relation is responsible for showing the relation. When someone decides that they want to upper-case the name they might do this in the template: 
```html
    <app-relation 
       [relation]="{...order.processor, name:order.processor.name.toUpperCase()}"
    ></app-relation>
```
(This syntax might not be valid, its about making a point)

While this might be an entirely valid thing to do, it exposes one of the biggest problems in this setup. The `app-relation` component, the part which has the job to _show_ the actual relation, isn't in control over the data. While uppercasing a name probably will not break anything, what will happen if one of the components in the hierarchy removes the 'name' property completely? The data needed to display the relation might have traveled through numerous levels of components, and  might be modified by any of them. Debugging this, means i have to go to every component in the chain, and read all the code of it **and** its template.
So, instead of going to the `app-relation` component, and look at its code to see why the name is suddenly missing, I need to seek all the uses off `app-relation` and then go up the tree to find where the data is coming from, and checking where the alteration is done. 
I have gone from reading 1 component, to reading a large portion of my entire program. And reading is only the beginning.

The above pararaph does already give away a big pointer. Simplicity is not always directly obvious. What is the simple part in the second example? The input takes a `string` only. It is even run-time checked for being one. The attribute is called `relationId`, which is a pretty decent clue to begin with.
When the component is used. It will go to the service, and get all the data it needs by itself. The big difference in the controller is this line:
```typescript
  order$ = this.orderId$.pipe(
    switchMap(id => this.order.getOrder(id))
  );
```
Well, that is actually not really complex at all. But it does make the component so much more atomic. By doing it this way, it becomes much easier to reason about. When i have something off in the display of a relation, I check out _this_ component, and can find/solve the issue.

_The maintenance costs of my application just went down by a landslide._

# wrap-up
If you think the above is _meh_ for the complexity of the app, I have a surprise for you. If you already convinced, you will get a kick out of this one.
```typescript
  relation$ = this.relationId$.pipe(
    switchMap(id => this.relation.getRelation(id)),
    shareReplay({ bufferSize: 1, refCount: true }));
  orders$ = this.relation$.pipe(
    pluck('orders'),
    switchMap(orders =>
      zip(...orders.map(order => this.getOrderWithDetail(order)))
    ),
    shareReplay({ bufferSize: 1, refCount: true })
  );

  constructor(
    private route: ActivatedRoute,
    private order: OrdersService,
    private relation: RelationsService,
    private product: ProductsService
  ) { }

  getOrderWithDetail(id: string) {
    // console.log('det', id);
    return this.order.getOrder(id).pipe(
      switchMap(order => zip(
        of(order),
        this.relation.getRelation(order.processor),
        this.relation.getRelation(order.transporter),
        this.getOrderProducts(order.products)
      )),
      map(([order, processor, transporter, products]) => ({ ...order, processor, transporter, products })),
      take(1),
    );
  }

  getOrderProducts(p: { productId: string, handler: string }[]) {
    return combineLatest(p.map(({ handler, productId }) => {
      return combineLatest([
        this.product.getProduct(productId),
        this.relation.getRelation(handler),
      ]).pipe(map(([product, handler]) => ({ productName: product.name, handlerName: handler.name })));
    }));
  }
```

Versus:
```typescript
  relation$ = this.relationId$.pipe(
    switchMap(id => this.rel.getRelation(id))
  );
```

The first code comes from [here](./src/app/b-relation-list/relation-detail/relation-detail.component.ts), the second from [here](./src/app/b-relation-list/relation-detail/relation-detail.component.ts)

The first block of code, is the code i need to gather all the data I need for display upfront. The second one is when I use simple component APIs. ***This code is completely gone. It is not scattered over the code base. it is GONE!***
Think about that. And the sample isn't even that complex.

If you have any questions/remarks or want to discuss [this is the place](https://github.com/SanderElias/Samples/discussions/categories/api-boundaries)

