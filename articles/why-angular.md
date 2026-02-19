# Why [Angular?](https://angular.dev/)

I get this question quite a bit. It is a fair question, but every time I just stand there, looking sheepish. Not because I don't have the answer, but because there is an enormity to this question that makes it hard to verbalize concisely.

For this reason, I decided to write this so I can provide a one-liner and point to it for the full answer.

For a long time my answer was:

> It allows me to do more with less code.

There is a lot to unpack in that statement. I'll get to that in a while.
And why don't I say that anymore? Not because it isn't true, but rather because it undersells what Angular brings. Also, my perspective has changed, and there are other things I value equally — perhaps even more.

## Personal history

I was building web applications for over a decade before Angular (then called AngularJS) came out. It was rough. At a certain point I decided to scratch my own itch and started building a library to make my life easier. I didn't even name it. What I realized was that everything I was building lacked a single source of truth. I was passing and parsing data left and right, and there was no way to know where the data was coming from or where it was going. I was also doing a lot of DOM manipulation, and it was getting out of hand.
So I started building a library that would allow me to bind data to the relevant DOM elements so I could update the data and have a clear single source of truth. While I was working on this somewhere in 2009, I stumbled upon AngularJS.
There was a lot of similarity between what I was building and what AngularJS was doing. I wasn't really surprised that Misko had similar ideas to mine, because I think everyone at that time was trying to solve the same problem.
However, I found out that he worked for Google and had a team of people working on this. As I was just a single developer who needed to deliver products, switching from my own library to AngularJS seemed the smart thing to do. I could leverage the work of a team and focus on building products rather than a library.

There are days when I still miss the simplicity of that era. An app was often a single HTML file with a few lines of JS — no build step, no bundling, no transpiling.
Just some HTML, CSS, and a few lines of JS.

So, that is **_how_** I got into Angular.

## Things in Angular I value

Here is a list of things I value in Angular, in no particular order:

- stability
- completeness
- tooling
- community
- opinions
- supporting web standards
- consistency

### Stability

This word sums up a lot. It means I can be confident that the apps I build with Angular will continue to work for a long time. This is a _very important_ feature: the apps I deliver are often used for many years, and I don't like rewriting them.

But _why_ is Angular so stable?

- solid engineering practices
- rigorous testing
- migrating code to newer versions is part of the process
- clear documentation
- an open culture of communication and feedback
- _high‑quality_ team members
- long‑term vision and commitment to the framework
- attention to detail and quality in the development process

I know this sounds like I'm a fanboy — and I do love Angular because it checks most of my requirements. However, I recognize it has its own set of costs that I might not be willing to pay for some projects.

### Completeness

I can be brief here. Angular is feature-complete: it has everything you need to build a modern web application. You don't need any other third‑party libraries to build a complete app.

### Tooling

The CLI is the best framework tool I know. Let me just list some of the things it can do:

- generate:
  - components
  - directives
  - pipes
  - services
  - guards
  - interceptors
  - applications
  - libraries
- build
- development server
- testing orchestration
  - unit testing
  - end-to-end testing
  - integration testing
  - supports multiple testing frameworks, including Vitest
- linting
- updates
- migration

And I'm sure that list is missing things. The CLI is a huge time saver and allows me to focus on building my app rather than setting up the tooling.

#### Migration

This needs to be called out separately. The CLI has a built‑in migration tool that allows you to migrate your code to newer versions of Angular. This is a huge time saver and lets me keep my apps up to date with the latest features and security patches. It lets me move between versions in minutes. The only time it takes more than a few minutes is when the project has third‑party dependencies that break things (mumbles something about TypeScript).

### Community

The best. Period. Somehow Angular attracts the best people: willing to help, ready to share their knowledge, humble, and able to see the bigger picture. I have never seen a community like this — it is a pleasure to be part of it. It really creates a win‑win‑win environment.

### Opinions

It is not a secret that Angular is an opinionated framework — the team has a clear vision of how things should be done.

Why is this a good thing? It means that team members can fully focus on solving the problem at hand instead of spending time debating how things should be done. It also enables much quicker knowledge transfer between teams and team members.

> [!TIP] Knowledge transfer might be the most important feature Angular brings.

This means it becomes much easier to onboard new team members, but also to move team members between projects. Including third party contractors. And not to forget, it makes it easy to help each other.

### Supporting web standards

Work with the web, not against it. This principle is deeply ingrained in the Angular team. For me, this is obvious, but sadly it's not that common.

> side rant: Sadly, I see projects that try to reinvent the wheel and come up with increasingly worse solutions. Building a custom DOM engine in JS because they think a small team can do a better job than browser vendors with huge teams and budgets. Or re‑implementing CSS in JS for the sake of type‑checking. Sure, re‑implementing CSS in JS is going to be much better! Shipping way more JS is the solution to everything, right?

### Consistency

This is a consequence of the framework's opinions: when you learn something in Angular, you can be confident it will work the same way across projects. This is a huge time saver.

But that's not the only consistency it brings. The team is also consistent in how they evolve the framework. I can repeat many of the stability points here. In addition, they have a consistent process for introducing new things.
There are clearly documented phases for new features. Most have a public RFC process where the team shares their thinking and invites feedback. Then there is the 'experimental' phase, a 'developer preview' phase, and the 'stable' phase. All of this is clearly documented and allows planning ahead.

The same goes for deprecations: they are clearly documented and come with a migration path. Quite often there is tooling to help with this. This lets me plan ahead and avoid surprises from breaking changes.


## Less valued

### The perceived learning curve

This is a common complaint — notice how I added 'perceived' to it. This was never true: you never need to learn everything in Angular to be productive. After the 'Angular renaissance' it became even less true.

Yes, if you want to build a complex app with routing, transitions, a large backend API, and many features, there is a _lot_ to learn. However, when you use Angular, you can save much of that learning because it has you covered: no need to set up tooling, which itself saves a lot of time, and no need to learn the quirks of integrating third‑party libraries.

Angular saves you from a lot of learning and allows you to focus on building your app rather than setting up the tooling or learning how to integrate third‑party libraries.

### The size of the framework

Yes, it's bigger than I would like. Still, it gives you easy ways to lazy‑load everything, down to parts of templates. Its tooling does a good job with tree shaking and bundling. Compared to other _complete_ solutions, it is often much smaller. At this point, I would say that if your payload is too big, it's more of a _skill_ issue than a framework issue.

### Tendencies to cave to community pressure

This is a personal one. People who know me know that I have strong opinions about how things should be done. One of the things I loved (past tense) was that templates were fully HTML‑spec‑compliant. This meant that tools that validate HTML could be used to validate templates. Even though I protested loudly, this is no longer the case. We now have, for example, self‑closing tags like `<component-name />`. This is not valid HTML: the `/>` part is _not_ in the HTML spec. It is a common practice in XML, but not in HTML. It's a small thing, but it still irks me. The control‑flow syntax also made templates lose HTML‑spec compliance.
The control‑flow syntax made this worth it, if you ask me. But I still wish they could have found a way to keep templates HTML‑spec‑compliant. I understand this is a trade‑off and that the team made the right decision, but it still irks me.
By the way, talking about community pressure: the original syntax used `#`, as in `#if (...)`. This is a fairly common syntax in multiple languages. I preferred that! However, the community preferred `@`, so that is what we got. 

I'm actually not sure if this is good or bad. Listening to the community is a good thing — unless the community is wrong. And sometimes it is. Still, the team seems to strike a good balance here.

> [!NOTE] When I say the community is wrong, I don't mean that they disagree with me. I mean there are cases when there are technically proven better solutions, but somehow the community prefers the worse one. This is an even bigger issue outside the Angular ecosystem, where many solutions are technically worse but more popular. I don't understand this phenomenon, but it is a fact of life.

TL;DR: The team doesn't really cave!

### The complexity of the framework

Read the learning curve section. It's not that the framework is complex; it's that it has a lot of features.

### Must learn Observables

This was never fully true; now that Angular has landed signals, it is completely false.
You can build a fully reactive, complex app and never need to touch Observables.

In fact, I would say that removing all Observable code from an Angular app would often make the app easier to understand and maintain. It would also make it easier to onboard new team members and move team members between projects.

> [!NOTE] I have nothing against Observables — I love them. But they are not for everyone. They are not ideal for managing state, though they shine when handling event streams, which are not common in a typical B2B or B2C app.

### TypeScript

Yes.

But if you aim for apps the size Angular can easily handle, there is actually a lot of added value in TypeScript.


## unpack "allows me to do more with less code"

When I said that, I meant that Angular allows me to build complex apps with less code. This was a bit more true in the AngularJS days.
But I'm not talking only about the amount of code I need to write — I'm talking about the total amount of code I need to _ship_.

Let that sink in for a moment.

## Conclusion

Ultimately, it boils down to trust and efficiency. I want a platform that respects the web, empowers my team, and stands the test of time. I want tools that work for me, not against me. Angular offers a comprehensive ecosystem that removes the friction of decision fatigue and glue code, allowing me to focus entirely on the unique problems my application solves. It transforms the chaotic landscape of web development into a structured, maintainable, and enjoyable craft.

When you weigh the stability, the community, and the sheer power it puts at your fingertips, you have found the answer to the question:

**Why Angular?**

