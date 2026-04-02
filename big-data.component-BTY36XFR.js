import {
  createUniqueId
} from "./chunk-XUVHIZKL.js";
import {
  AsyncPipe
} from "./chunk-MTKF5SUL.js";
import "./chunk-72AYNUCX.js";
import {
  BehaviorSubject,
  ChangeDetectionStrategy,
  Component,
  Injectable,
  Subject,
  combineLatest,
  distinctUntilChanged,
  firstValueFrom,
  inject,
  interval,
  map,
  mergeMap,
  setClassMetadata,
  shareReplay,
  startWith,
  switchMap,
  take,
  tap,
  timer,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵdefineInjectable,
  ɵɵdomElement,
  ɵɵdomElementEnd,
  ɵɵdomElementStart,
  ɵɵdomListener,
  ɵɵdomProperty,
  ɵɵgetCurrentView,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate2
} from "./chunk-4YMCON7N.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-KCHQYSDT.js";

// src/app/demo-users.service.ts
var chanceProm = import("./chance-EEDBTRO4.js").then((m) => m).then(({ default: Change }) => {
  return new Change();
});
var UserState;
(function(UserState2) {
  UserState2[UserState2["isNew"] = 0] = "isNew";
  UserState2[UserState2["isAccepted"] = 1] = "isAccepted";
  UserState2[UserState2["isActive"] = 2] = "isActive";
})(UserState || (UserState = {}));
var DemoUserService = class _DemoUserService {
  /** the coconstructor */
  constructor() {
    this.flush$ = new Subject();
    this.updatedUsers$ = new Subject();
    this.allUsers$ = this.flush$.pipe(
      // use switchMap to replace the 'flush' with an http.xxx
      mergeMap(() => this.updatedUsers$),
      startWith([]),
      // use shareReplay to 'cache' the data. (note: only when you need an cache!)
      shareReplay({ bufferSize: 1, refCount: false })
    );
    this.admins$ = this.allUsers$.pipe(map((userList) => userList.filter((row) => row.isAdmin)));
    this.users$ = this.allUsers$.pipe(map((userList) => userList.filter((row) => !row.isAdmin)));
    this.flushCache();
  }
  async addUsers(newUserCount) {
    const users = await firstValueFrom(this.allUsers$);
    const base = users.length;
    const newUsers = await Promise.all(Array.from({ length: newUserCount }).map(async (e, i) => __spreadProps(__spreadValues({}, await fakeUser()), {
      id: createUniqueId()
    })));
    this.updatedUsers$.next(users.concat(newUsers));
  }
  /** async helper to 'save' users. async makes it easier to read if we wait on the suer promise */
  async saveUser(user) {
    const users = await firstValueFrom(this.allUsers$);
    const index = users.findIndex((row) => row.id === user.id);
    if (index > -1) {
      Object.assign(users[index], user);
    } else {
      let id = createUniqueId();
      users.unshift(__spreadProps(__spreadValues({}, user), { id }));
    }
    this.updatedUsers$.next(users);
  }
  /** helper to 'delete' a user  */
  async deleteUser(user) {
    const users = (await firstValueFrom(this.allUsers$)).filter((row) => row.id !== user.id);
    this.updatedUsers$.next(users);
  }
  /** call this to flush out the captured data in this service */
  async flushCache() {
    const chance = await chanceProm;
    await new Promise((r) => setTimeout(r));
    this.flush$.next();
    timer(0, 250).pipe(tap(() => this.addUsers(chance.integer({ min: 100, max: 400 }))), take(20)).subscribe();
  }
  static {
    this.\u0275fac = function DemoUserService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _DemoUserService)();
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _DemoUserService, factory: _DemoUserService.\u0275fac, providedIn: "root" });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DemoUserService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [], null);
})();
async function fakeUser() {
  const chance = await chanceProm;
  return {
    userState: chance.integer({ min: 0, max: 3 }),
    username: chance.name(),
    isAdmin: chance.bool(),
    isActive: chance.bool(),
    email: chance.email()
  };
}

// src/app/big-data/big-data.component.ts
function BigDataComponent_Conditional_2_For_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "tr")(1, "td");
    \u0275\u0275text(2);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(3, "td");
    \u0275\u0275text(4);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(5, "td");
    \u0275\u0275text(6);
    \u0275\u0275domElementEnd()();
  }
  if (rf & 2) {
    const user_r3 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(user_r3.id);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(user_r3.username);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(user_r3.email);
  }
}
function BigDataComponent_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275domElementStart(0, "section");
    \u0275\u0275text(1);
    \u0275\u0275domElement(2, "br");
    \u0275\u0275domElementStart(3, "label");
    \u0275\u0275text(4, "Search ");
    \u0275\u0275domElementStart(5, "input", 0);
    \u0275\u0275domListener("input", function BigDataComponent_Conditional_2_Template_input_input_5_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.setProp("search", $event));
    });
    \u0275\u0275domElementEnd()();
    \u0275\u0275domElementStart(6, "div", 1)(7, "button", 2);
    \u0275\u0275domListener("click", function BigDataComponent_Conditional_2_Template_button_click_7_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.setProp("sort", $event));
    });
    \u0275\u0275text(8, "none");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(9, "button", 3);
    \u0275\u0275domListener("click", function BigDataComponent_Conditional_2_Template_button_click_9_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.setProp("sort", $event));
    });
    \u0275\u0275text(10, " username ");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(11, "button", 4);
    \u0275\u0275domListener("click", function BigDataComponent_Conditional_2_Template_button_click_11_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.setProp("sort", $event));
    });
    \u0275\u0275text(12, "email");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(13, "button", 5);
    \u0275\u0275domListener("click", function BigDataComponent_Conditional_2_Template_button_click_13_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.setProp("sort", $event));
    });
    \u0275\u0275text(14, "id");
    \u0275\u0275domElementEnd()();
    \u0275\u0275domElementStart(15, "div", 6)(16, "input", 7);
    \u0275\u0275domListener("input", function BigDataComponent_Conditional_2_Template_input_input_16_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.setProp("position", $event));
    });
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(17, "table")(18, "tbody");
    \u0275\u0275repeaterCreate(19, BigDataComponent_Conditional_2_For_20_Template, 7, 3, "tr", null, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275domElementEnd()()()();
  }
  if (rf & 2) {
    const vm_r4 = ctx;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2(" Available users:", vm_r4.users.length, " (Loading done:", vm_r4.done, "%)");
    \u0275\u0275advance(15);
    \u0275\u0275domProperty("max", vm_r4.users.length / vm_r4.state.pageSize);
    \u0275\u0275advance(3);
    \u0275\u0275repeater(vm_r4.page);
  }
}
var BigDataComponent = class _BigDataComponent {
  constructor() {
    this.user = inject(DemoUserService);
    this.state$ = new BehaviorSubject({
      pageSize: 20,
      position: 0,
      search: "",
      sort: ""
    });
    this.users$ = this.state$.pipe(
      /** only interested in the 'sort' state */
      map((results) => results.sort),
      /** don't update unless the sort key is changed */
      distinctUntilChanged(),
      /** switch to the actual users */
      switchMap((sort) => (
        /** use the observable allUsers that comes from the service. */
        this.user.allUsers$.pipe(
          /**
           * in here I'm sing the sort key (if there is one!) to sort my list
           * as the list is hot, and will grow, this is a bad idea, and will
           * block the stack. This is done here anyway to be able to show the impact of doing this
           */
          map((users) => sort === "" ? users : users.sort((a, b) => a[sort] < b[sort] ? -1 : 1))
        )
      ))
    );
    this.doneLoadingPer$ = interval(100).pipe(
      /** using an interval of 100Ms a 1000 times means I'm loading for ~100 seconds  */
      take(1e3),
      /** as a side effect I have my users-service generate 500 additional users, that will stream in. */
      tap(() => this.user.addUsers(500)),
      /** do the math on how much we have done as a percentage. */
      map((n) => Math.ceil(n / 1e3 * 100))
    );
    this.curPage$ = this.state$.pipe(
      /** user the entire state, and update when there is a change. */
      distinctUntilChanged(),
      /**
       * Merge in the state with the complete (or partial) user list.
       * the find users will take the state, and the users-list and return what needs to be displayed for this page.
       */
      mergeMap((state) => this.users$.pipe(map((users) => this.findFirst(users, state))))
    );
    this.vm$ = combineLatest({
      users: this.users$,
      state: this.state$,
      page: this.curPage$,
      done: this.doneLoadingPer$
    });
  }
  /** utility method to extract the users I need to display. */
  findFirst(users, { position, pageSize, search }) {
    if (!search) {
      return users.slice(position * pageSize, position * pageSize + pageSize);
    }
    let n = 0;
    const foundUsers = [];
    while (n < users.length && foundUsers.length < pageSize) {
      if (users[n].username.toLowerCase().includes(search.toLowerCase())) {
        foundUsers.push(users[n]);
      }
      n += 1;
    }
    return foundUsers;
  }
  /**
   * helper to set the local state$ from user events.
   * takes a property-name from the state, and an event.
   * In here I'm casting the event to `ev: { target: HTMLInputElement }` to make it easier to consume
   */
  setProp(prop, ev) {
    const domElement = ev.target;
    const state = this.state$.value;
    const isNum = typeof state[prop] === "number";
    this.state$.next(__spreadProps(__spreadValues({}, state), {
      /**
       * [prop] = use a computed property name to update the state we want to update, I used the TS type system to only allow existing props.
       * if it is supposed to be a number, read it as number from the input element otherwise user the string representation.
       */
      [prop]: isNum ? domElement.valueAsNumber : domElement.value
    }));
  }
  static {
    this.\u0275fac = function BigDataComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _BigDataComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _BigDataComponent, selectors: [["app-big-data"]], decls: 4, vars: 3, consts: [[3, "input"], ["id", "buttons"], ["value", "", 3, "click"], ["value", "username", 3, "click"], ["value", "email", 3, "click"], ["value", "id", 3, "click"], ["id", "scroll"], ["type", "range", 3, "input", "max"]], template: function BigDataComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275domElementStart(0, "h1");
        \u0275\u0275text(1, "Big data and performance demo");
        \u0275\u0275domElementEnd();
        \u0275\u0275conditionalCreate(2, BigDataComponent_Conditional_2_Template, 21, 3, "section");
        \u0275\u0275pipe(3, "async");
      }
      if (rf & 2) {
        let tmp_0_0;
        \u0275\u0275advance(2);
        \u0275\u0275conditional((tmp_0_0 = \u0275\u0275pipeBind1(3, 1, ctx.vm$)) ? 2 : -1, tmp_0_0);
      }
    }, dependencies: [AsyncPipe], styles: ["\n#scroll[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 40px 1fr;\n}\n#buttons[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, 154px);\n}\n#scroll[_ngcontent-%COMP%]    > input[_ngcontent-%COMP%] {\n  transform: translateY(-100%) rotate(90deg);\n  transform-origin: left bottom;\n  width: 20rem;\n  height: 40px;\n}"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BigDataComponent, [{
    type: Component,
    args: [{
      imports: [AsyncPipe],
      changeDetection: ChangeDetectionStrategy.OnPush,
      selector: "app-big-data",
      template: `
    <h1>Big data and performance demo</h1>
    <!--
      use the VM$ and assign it to the vm view-variable,
      only show when the first complete set of results is there.
    -->
    @if (vm$ | async; as vm) {
      <section>
        <!-- show how many users are currently available, and how much e have done. -->
        Available users:{{ vm.users.length }} (Loading done:{{
          vm.done
        }}%)<br />
        <!-- update the search property in the state when the user inputs something. -->
        <label>Search <input (input)="setProp('search', $event)" /></label>
        <div id="buttons">
          <!--
          set a value on a button so we can use that in the click handler.
          use a button to update the 'sort' state
        -->
          <button value="" (click)="setProp('sort', $event)">none</button>
          <button value="username" (click)="setProp('sort', $event)">
            username
          </button>
          <button value="email" (click)="setProp('sort', $event)">email</button>
          <button value="id" (click)="setProp('sort', $event)">id</button>
        </div>
        <div id="scroll">
          <!--
          Use a range-input to select the current page.
          using css, you are able to mimic a scroll-bar, I didn't went into this trouble for a demo.
          I'm using the state to set the max,
          and using the setProp again to update the position property in the state$
        -->
          <input
            type="range"
            [max]="vm.users.length / vm.state.pageSize"
            (input)="setProp('position', $event)"
          />
          <table>
            <tbody>
              <!--
              A simple ngFor to display the current page of users.
             -->
              @for (user of vm.page; track user) {
                <tr>
                  <td>{{ user.id }}</td>
                  <td>{{ user.username }}</td>
                  <td>{{ user.email }}</td>
                </tr>
              }
            </tbody>
          </table>
        </div>
      </section>
    }
    <!-- I like my styling inlined. -->
    <style>
      /* use a bit of css to position the range upright, next to the table. I did choose before, but it can be after just as easily */
      #scroll {
        display: grid;
        grid-template-columns: 40px 1fr;
      }
      #buttons {
        display: grid;
        grid-template-columns: repeat(auto-fit, 154px);
      }
      #scroll > input {
        transform: translateY(-100%) rotate(90deg); /** rotate  */
        transform-origin: left bottom;
        width: 20rem; /** 20 lines should be the same as 20rem unless there are css shenanigans  */
        height: 40px; /** ballpark guess :-D */
      }
    </style>
  `
    }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(BigDataComponent, { className: "BigDataComponent", filePath: "src/app/big-data/big-data.component.ts", lineNumber: 101 });
})();
export {
  BigDataComponent
};
