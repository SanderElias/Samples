# Dry kiss Yagni ASAP.

When you where lured here by the title and was expecting some story about why someone would to dry kiss this Yagni person, I'm sorry, the following will be probably boring for you.
If you came here because you recognized the title as having some interesting keywords. Congratulations, you are into coding, and you came to the right place.
When you recognized the title consists only out of principle abbreviations, I'm sorry too ;) you are probably a bit too much into coding.

By now you probably understand this this article is going to be about coding. It is indeed. But first things first, lets un-abbreviate the title.

- DRY: Don't Repeat Yourself
- KISS: Keep It Stupid Simple (or super simple, or short and simple, or ...)
- YAGNI: You Ain't Gonna Need It
- ASAP: As Simple As Possible

So, with that out of the way, lets ask us the most important question: Why would I combine these four principles in one title?
Well first of all, because I can. It came to me in a dream. Well, not actually, but I found it amusing enough to create an article about it.
Secondly, because those four principles are very important for coding. I'm not going to say they are the _most_ important, because I would like to leave that up to you. But they are a solid(pun intended) way to keep your sanity while coding.

Enough with the introduction, let me start with high level explanation of the four principles. (I'm going to assume you know them, if not, please look them up, there are plenty of resources available)

## The four principles:

### DRY

This is about not repeating (copy-pasting) code. When you need to do the same thing in multiple places, you should abstract this away into a function, class, macro, decorator, whaterver your language supports. This way, when you need to change the behavior, you only need to change it in one place.

### KISS

This is about keeping readability. When you write code, you should always keep in mind that someone else is going to read it. This can be a colleague, a future you. The more readable your code is, the easier it is to understand, and the less likely it is to contain bugs. The simple is about 'simple' as in 'easy to understand', not 'simple' as in 'easy to write'.

### YAGNI

This is about not over-engineering. When you write code, you should always keep in mind that you are writing it for a purpose. You should only write the code that you need right now, not the code that you might need in the future. Only construct for the _current_ requirements. We tend to be very bad at predicting the future. So, don't try to predict it, just write the code that you need right now. If you need it in the future, you can always add it later.

### ASAP

This is about keeping it simple. But not entirely the same as KISS. The 'As Possible' part is operative here. This is a warning against under-engineering.

## Whats in common between them?

All four principles are about keeping your code maintainable, readable, and understandable. They are about keeping your code bug-free, and keeping your code future-proof. They are about the quality of your code in good shape. They are telling you to be friendly to the person that has to maintain the code in the future. Keep in mind that this person might be you. But there is _no_ guarantee that this person is you. So, be nice to them.

## But, are they not contradicting?

Yes, No, probably.

Euhm, that's probably not helpful. The thing is, it is about finding balance. You should not over-engineer, but you should not under-engineer either. You should not repeat yourself, but you should not abstract everything away. You should keep it simple, but you should not make it too simple. You should only write the code that you need right now, but still make sure it is written in a way that it can be extended in the future.
this all is _not_ simple. It is a balancing act. With experience you will get better at it. But you will never be perfect at it. And that is okay. As long as you keep trying to get better at it.

### Interlude.

Writing all this, reminded me of a very old quote from a french mathematician, Blaise Pascal:

> Je n’ai fait celle-ci plus longue que parce que je n’ai pas eu le loisir de la faire plus courte.

Well, not the french version, but the translated version:

> I have made this letter longer than usual because I lack the time to make it shorter.

This _underscribes_ the problem with all of the principles. It is _harder_ and more _time consuming_ to write good code. Why would we do that then? Because it is _easier_ and _less time consuming_ to maintain good code. Also the likelihood of bugs is _lower_. And the likelihood of future requirements being met is _higher_. So, in the end, it is _easier_ and _less time consuming_ to write good code.
Remember, we usually spend more time on maintaining as we do on writing new code.

## HELP! I'm lost!

Don't worry. You are not alone. We are all lost. But let's try to get at least a bit less lost. Here are some tips to help you on your way:

### DRY

When you find yourself copy-pasting code, stop. Is this the first time? A second copy for something similar, with only a little difference isn't a real problem. You are OK.
No difference, but only a different "input"? Abstract it away.
No difference, but a very different context? probably not a good idea to abstract it away. But keep it in mind, maybe you will find a way to abstract it away later.
But when you find yourself copy-pasting code for the third time, you should start thinking about putting this in a reusable unit!

> [!NOTE] Reusable Unit:
> This means a function, a Class, a Macro, a Decorator, a Template, a Partial, a Component, a Module, a Package, a Library, a Framework, a Service, a Microservice, a Plugin, a Middleware, a Hook, a Mixin, a Trait, a Aspect, a ... you get the idea. There are many ways to abstract code away. Choose the one that fits your language and your problem best.

### KISS

Look at your code. Are there many brackets? Is it deeply nested? Are there multiple exit points? Does it update things that are not in the same scope(aka side-effects)? Make the variable names sense? _Do they?_ Is my unit larger than fits my screen? Look at the amount of conditionals. See if it makes sense to split it out in smaller pieces.

### YAGNI

When you are writing code, and you think: "I might need this in the future", stop. Ask yourself: "Do I need this now?" If the answer is no, don't write it. If the answer is yes, write it. But keep in mind that you are writing it for the current requirements. If you need it in the future, you can always add it later. But you might not need it in the future. So, don't write it now. You Ain't Gonna Need It.

> [!TIP] your 85% sure you are going to need it in the future?
> Write it down in a TODO. But don't write the code. Just write down what you think you are going to need. This way, you can always look it up later. And you can always decide to write it later. But you might not need it at all. So, don't write it now.

> [!TIP] PRO-TIP
> your 98% sure you are going to need it in the very near future? **write it!**

### ASAP

Look at your unit. Check for KISS, Check for DRY, Check for YAGNI. If you are OK with all of them, you are probably OK with ASAP. But keep in mind that ASAP is about keeping it simple, _as possible_. So, are you sure _all_ edge-cases are dealt with? Are _all_ requirements indeed met?

## Conclusion

Those four principles will help you to fight the complexity of your day to day job. Keeping them in mind will help code quality. But remember, just as with anything else (eyeballing "best practices" especially here!), that those are guidelines. It is oke to violate them. Make sure there is a just cause for it though. And if you do, strongly consider documenting in a code-comment why you did it. This way, the person that has to maintain your code in the future, will at least have a fighting chance to understand why you did it.

```javascript
// not DRY: performance reasons.

// not DRY: time restrictions.

// not KISS: a bug in the library I'm using.
```

Are the kind of comments one would like to see. The last one could be a bit more specific, but you get the idea.

## final thoughts.

Let me quote Antoine de Saint-Exupéry

> Perfection is achieved, not when there is nothing more to add, but when there is nothing left to take away.

This _is_ the essence of the four principles. He was talking about design. But it is even more true (yes, there are gradations in truth!) for code. It actually means you are doing the job with the most optimal amount of code. And in most cases that will also means the best possible performance. (There is a whole slew of other things that can influence performance, but that is a whole other article)

So, when you are going back to code, make sure you are going to:

`Dry kiss yagni asap!`
