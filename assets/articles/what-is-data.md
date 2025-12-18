# What is data

Well, let see what [Wikipedia](https://en.wikipedia.org/wiki/Data) has to say about it:

> Data are a collection of discrete or continuous values that convey information, describing the quantity, quality, fact, statistics, other basic units of meaning, or simply sequences of symbols that may be further interpreted formally. A datum is an individual value in a collection of data. Data are usually organized into structures such as tables that provide additional context and meaning, and may themselves be used as data in larger structures. Data may be used as variables in a computational process

## done?

Well, its is a wall of text, but even after I read it a couple of times, it really doesn't say anything useful. Also, it seems to miss quite some things.

So, let me summarize it for you:

> data is everything.

hmm, that is not very useful either. While true, we should make it a bit more concrete.

> data is anything that can be stored, processed or transmitted by a computer.

Well, at least in the context of programming, and that is the take I'm taking here, that is a better definition. but while talking about context, we should probably add that as well.

> data is how we describe a thing in a known context

ooo, more things to unpack there. What is a "thing"? what is a "known context"? And why would we want to describe that anyway?

### what is a "thing"?

Yeah, euhm, well, a thing is... any thing. Usually something that has a meaning to us. It can be a physical object, like a chair, a car, a house.
it can be a transaction, like a money transfer, a purchase, a sale.
it can be an event, like a meeting, a birthday, a holiday.
it can be a concept, like a customer, an order, a product.
it can be a measurement, like a temperature, a weight, a distance.
it can be ....

Euhm, sorry, lost myself a bit there. Well, you get the idea. A thing is anything that we can point to, or name.

### what is a "known context"?

> A known context is the environment in which we understand the thing. It is the set of rules, conventions, and assumptions that we use to interpret the data.

Wow, autocomplete, you actually got something right for once. Lets elaborate on that a bit. what does that mean? Well, I'm going to provide you with a a data point:

```text
word
```

Word!. what does that mean? I have been told that on the streets, it means "rad" or "cool". It seems to be part of sentences too. In computer science it means the number of bytes that a computer can process at once. In linguistics it means a unit of language that carries meaning. In typography it means a sequence of characters that are separated by spaces.
So, the meaning of "word" depends on the context in which it is used. Without context, it is just a sequence of characters. With context, it can have different meanings.

Cool, uehm, Word!

I'm very tempted to continue this with more examples, but I think you get the idea. Context is important. Without context, data is meaningless.

### why would we want to describe that anyway?

Well, we are human. We need to make sense of the world around us. Also, we somehow love to catalog, and administer things.
For that, we need data. Data helps us to understand the world, to communicate with others, to make decisions, to solve problems, to create new things. (I'm feeling very philosophical all of a sudden).

So, in the end, data is everything, because everything can be described by data. And we need data to understand everything.

## So, everything is data?

Yah, and data is everything. And we have gone full circle. Congratulations me, achieved circular reasoning! (please excuse me, I need to kick my own but now)

### That is all very philosophical, how does that help me as a programmer?

Well, as a developer, you are working with data all the time. With this I want to give you a broader perspective. Let me give you some thought exercises.

- create a list of persons.
- create a list of products.

You have those two lists now, right? Good, I'm going to ask questions about them now.

- what data do you need to define a person?
- is there a difference between a person and a customer?
- is there a difference between a person and an employee?
- is there a difference between a friend an a person?
- did you add an address to the person?
- isn't that address also a thing on its own?
- how are you going to contact the person?
- is that data😜 in there as well?
- can a person have multiple addresses?
- can a person deliver a service?
- can a service be a product?
- can a product be a service?
- can a product be a product? (sorry, going to see myself out now)
- now, add 5 more questions like this.

Hah!, got you. Thinking that is, I hope. The point is, I want you to think a bit more when you are designing your data structures. Don't just throw in everything that comes to mind. Think about the context, think about the relationships, think about the meaning. Think about deduplication, think about normalization, think about future requirements.

Wow, loads of thinking, and buzzwords too. I want you to make the connections. I picked persons above for a reason. Almost all systems I have come across have them. In most they even are a core part. And then when a person is a customer, and also works for an supplier, we end up with two of them. A person can have multiple roles, do we really have to store them multiple times? No, we don't. But we do need to think about it.
And that is just one sample. There is way more correlation in our data-sets as we usually think off.

Hmmm, correlation, would that be data too? Yep, one can describe a correlation into a data-point. That is what graph-databases do. (look it up, very interesting stuff).

## conclusion

Data is pretty abstract. At the same time it is also concrete. (no not the stuff they use to glue bricks together, hmmm, set in stone? am I onto something here?). I don't really have a conclusion for you. I hope I have given you some food for thought.

Because data is everything. And everything is data.
