# Code/Style guidelines

In this document I will jot down my guiding principles for writing and architecting code.
Some of the things might be controversial, but I believe they will help to keep the codebase maintainable, readable and easy to understand.

This guide is an forever in progress document that I update from time to time.

1. Document your code. Add comments where necessary to explain the why, not the what.
   - Use TSDoc style comments for public APIs.
   - Add readme files to explain the purpose the [^code-unit].
     - Most files don't need a separate readme, but for larger code-units it helps.
   - Keep comments up to date with code changes.
   - working on a issue? put a link to the issue in the comment.
   - working around a 3rth-party bug? put a link to the bug report in the comment. 
   - I'll add a separate article about documenting code later.
2. Follow the [Angular Style Guide](https://angular.dev/style-guide) as much as possible. 
   - Read it, it even applies to non-Angular code.
   - When in doubt, follow it.
3. Keep functions and methods small and focused.
   - Aim for single responsibility principle.
   - If a function/method exceeds 15-25 lines, consider breaking it down.
4. Keep the size of your files small.
    - when possible, make sure it fits your screen without scrolling.
    - when a file exceeds ~150 lines, consider splitting it into smaller modules.
5. Limit the number of indentation levels.
   - Aim for a maximum of 4 levels of indentation.
   - If you find yourself exceeding this, consider refactoring.
   - Deeply nested code is hard to read and understand.
6. Use meaningful and descriptive names.
    - Choose names that clearly convey the purpose of your code-unit.
    - be consistent, use a naming convention that fits your project
    - don't SHOUT your variable names. (NO ALL CAPS!!!!)
      - not even for constants. the `const` keyword already tells you it is a constant.
      - not ever.
      - there is **no exception** to this rule.
      - never.
      - ever.
      - some "conventions" say otherwise? ignore them.
      - just don't do it.
      - when in doubt, don't do it.
      - If you think you have a proper reason, come talk to me about it. I'll give you some free counselling. I will probably have to refer you to a real therapist though.
      - none of the above is a joke!. just don't do it.
      - (no, I don't have pet peeves. why do you ask?)
7. Prefer composition over inheritance.
   - Favor using smaller, reusable components over large, monolithic ones.
   - This promotes code reuse and easier testing.
8. keep the number of inputs/outputs/parameters low.
   - this is an early warning sign that your code-unit has too many responsibilities.
   - this reduces cognitive load. 
     - those things define the API of your code-unit.
     - the more there are, the harder it is to understand and use it.
     - there is a high probability that each of them will cause conditionals inside of your code-unit.
     - this increases complexity and reduces readability.
   - aim for a maximum of 3-5 inputs/outputs/parameters (combined!) per code-unit.
   - grouping things into objects can be a valid option, when (all of the following apply):
     - the grouped things are related.
     - the grouped things are optional.
     - the group itself is optional.

> [!NOTE] code-unit: chis means a variable, a function, a Class, a Macro, a Decorator, a Template, a Partial, a Component, a Module, a Package, a Library, a Framework, a Service, a Microservice, a Plugin, a Middleware, a Hook, a Mixin, a Trait, a Aspect, a ... you get the idea. There are many ways to abstract code away. Choose the one that fits your language and your problem best.

## Conclusion

Following these guidelines will help you write clean, maintainable, and readable code. Remember that these are guidelines, not strict rules. Use your judgment and adapt them to fit the specific needs of your project.
I will add more guidelines over time, so check back every now and then. Also I will add some explanations and examples (or links to relevant articles) later.



<span style="display:none;">
## (old version, kept for now, so I don't forget adding things to the above one. also this one was made for a public repo with user committed demos) Those are my recommendations on top of the Angular Style guide:

In random order, as they pop into mind, and all are open for discussion.

* Every sample _must_ have a readme that explains at least the main goal/point for that example
  * it must be named `readme.md` and be located in the demos root.
  * the readme will be available in the demo app, next to the demo.
* Every sample _must_ be tagged for its target (beginner/immediate/advanced)
* Every sample _should_ be tagged for the group/kind
* Every sample should be in its own lazy-loaded route. 
  * create with `npx ng generate module mySampleName --routing mySampleRoute --module app`
  * Makes it easy to read/reason about the sample
  * clears out eventual dependencies
  * keeps rebuild time low, when working on something
* inputs and outputs should be limited to max 5 total.
  * When there are more, the component at had has too many responsibilities
  * exceptions are possible, but _not without documenting the **why**_  
* same for DI, do not inject more than 5 things. 
  * when needing more, consider a service that aggregates it into 1 service
* 3trh party libs
  * must be lazy-loaded.
  * must be retained to the module that needs it.
  * should not be used at all if possible!
  * if used, ***must*** have an readme entry on _why!_
* Variable naming
  * should be sensible
  * keep all variables camelCase
* Inline arrow functions.
  * Should be used for 1-liners only.
  * Prefer assignment to a named var.
  ```typescript
  const DropOpeningSlash = (s:string) => s.startWith('/') ? s.sclice(1) : s
  ```
  * when longer as 1 line this is even more mandatory.
  * use sensible naming
* Restrict size of single files to max ~100 lines.
  * Makes it more easy to reason about it.
  * makes it way harder to put too much responsibilities into 1 component/service/pipe/gizmodo
  * 
* prettier all the things.
* eslint all the things. (we will provide some reasonable yet rigid default there)
* I'm not sure, but perhaps demand at least a unit test? But that might scare beginners of off contributing.
* for beginners, everything in a CLI monorepo. We can have multiple projects in there. (libraries/etc)
* for experts the same, but perhaps with NX/lerna? ~~Although I do have some doubts about this. (let me explain, those things are actually tooling that has little to nothing to do with Angular, although they are related)~~ 
* No CSS frameworks, only plain CSS.
  * also no deviriates. we are teaching Angular, not CSS
  * by doing this, it highlight the strong CSS separation Angular already provides.
  * a set of reasonable defaults will be provided.
  * exception for when the framework is the lesson.


All of those are _guidelines_ and can be broken when there is a compelling reason to do so. However, when one of the rules needs to be broken, this needs to be **documented** inside of the demos readme. 
</span>
