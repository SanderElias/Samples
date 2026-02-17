# Performance

Performance is something we discuss a lot. We want to make sure that our
applications are fast and responsive. According to the grape-vine, if our
app doesn't load in a few seconds, users will leave.

Heck, we even created our own holy grail:

> Every app must load in under 100ms, never fall below 60fps, and feel buttery
> smooth. Also it must respond to every user interaction in under 50ms.

And to be honest, that is wholly possible. It requires paying attention to detail. It requires measuring and optimizing. I brought this to quite a few teams and they were able to achieve it. It is not easy, but it is possible. And it is worth it. Because if we can achieve that, we can create amazing user experiences. We can create apps that are fast and responsive. We can create apps that users love to use.

## But first things first

The above is a great goal to strive for, but before we can even think about optimizing for performance, we need to make sure that our app is actually working. We need to make sure that it is functional and that it meets the requirements of our users. Honestly, a lot of apps out there forgot about that part. They are so focused on performance that they forget about the user experience. They forget about the fact that users want to be able to use their app and that they want to be able to do what they need to do.

Then there is the fact that performance can mean very different things to different people. And it can even be different for different apps.
For most apps, the most important performance metric seems to be "developer velocity". How fast can we ship features? How fast can we fix bugs? How fast can we iterate? And that is a very valid metric. If we can't ship features, if we can't fix bugs, if we can't iterate, then our app is not going to be successful.
Turns out, if you put the whip to your developers, they will start cutting corners. In most cases those corners are very costly, especially in the context of our "holy grail".

Then there is the next thing. The "holy grail" is aimed at public facing apps that are trying to sell something. The app we are working on might be very different. Should we just forego performance in that case? No, of course not. But we should be realistic about our goals. We should be realistic about what we can achieve and what we should achieve. We should focus on the things that matter and not get distracted by the things that don't matter.

You must have a performance talk with your team and include all stakeholders in this discussion. Make sure you start off by identifying what performance means for your app. Make a list of goals and non-goals. Then set up tooling that measures those goals, and make sure you don't merge anything that doesn't meet them. And when it turns out you can't meet the goals, inform all stakeholders, and adjust the goals.

Also, short and long term performance goals can be different.
However, when your short term goal is "optimize velocity", be aware that "fixing" performance is going to be a lot more expensive. And that is not just because of the technical debt you are creating, but also because of the fact that you are creating a culture of cutting corners. And that is going to be very hard to change. So be careful with that.

As with all things in life, it is about finding balance. Easy to write, hard to do.

## What kinds of performance are there?

The list is endless, but I'm going to list a few common ones:

- Load time: The time it takes for the app to be ready to use.
- Responsiveness: The time it takes for the app to respond to user interactions.
- Memory usage: The amount of memory the app uses.
- CPU usage: The amount of CPU the app uses.
- Network usage: The amount of network bandwidth the app uses.
- Battery usage: The amount of battery the app uses.
- feature to feature switching: The time it takes to switch from one feature to another.

For all of those, there is a _very_ simple rule: Less is more.
There is a common trait here. Most of those will adhere to: 'ship less JS'.
Moderation is key, especially when it comes to JS.

### that feels arbitrary

Yeah, it is. Also, it is only focusing on the frontend part of your app. We tend to forget that the frontend is _not_ the whole story. The backend is even more important. When your API calls take 5 seconds, there is _nothing_ you can do in your frontend to make your app fast. You can only manage the perceived performance so far. So, make sure that your backend is included in your goals and that you are measuring it as well. Realize that scalability is also a performance metric. And that that depends so much more on your backend than on your frontend. So, make sure you are paying attention to that as well.

Here is a small overview of things you should monitor for your backend:

- API response time: The time it takes for your API to respond to a request.
- Database query time: The time it takes for your database to respond to a query.
- Server CPU usage: The amount of CPU your server uses.
- Server memory usage: The amount of memory your server uses.
- Server network usage: The amount of network bandwidth your server uses.
- Server disk usage: The amount of disk space your server uses.

Again, less is more. Even on "serverless" architectures those numbers matter. Perhaps even more, because you are paying for them. So, make sure you are monitoring those as well and that you are optimizing for them as well.

### Do you have more data?

Sure, I have heaps of data. Which brings me to the performance of data.
Yes, there are performance metrics for data as well. I'm not even talking about the API timings.
List time:

- The total amount of data you are sending to the client.
- the number of rows you are requesting
- the number of columns you are requesting.
- the number of API calls you make.

Again, less is more. This is even more of a balancing act than the other kinds of performance. Requesting all data is the easiest way to make sure your app is fast. But it is also the easiest way to make sure your app is slow. Huh? Well, while building the app, your test data-set will probably have a couple of hundred rows. Requesting all data is fast, because you only have to do 1 request. But once you hit 100K rows problems start appearing. Firstly, client memory will fill up, making your app slower. Secondly, parsing this amount of data will take its toll. Not to forget about the fact that all this data needs to be sent to the client to begin with.

> [!NOTE] Requesting all data upfront is an antipattern that is very common. It often stems from the so called smart/dumb component pattern. The smart component is responsible for fetching all data and then passing it down to the dumb components. This is a very common pattern, but it can lead to performance problems. So, be careful with that.

> [!TIP] ProTip: Only load the data you need for the component at hand. If you need to show a list of items, just fetch the ID's for the list. The backend can take care of sorting and filtering. You can then iterate over the list, and hand the ID's to the child components, which can then fetch the data they need. This way you are only fetching the data you need, and you are not fetching data that you don't need.

> [!TIP] Bonus tip: Don't worry about the number of API calls. If this becomes a problem, you can put in a cache, or batching layer. This should not be a concern of the component itself. The component should just be able to fetch the data it needs, and not worry about how that data is fetched.

On the other hand, when you are fetching a list of IDs and then fetching each item separately, you are making way more API calls. There are ways to mitigate this, but again, it's a balancing act. For some use cases it might be worth it to fetch all data upfront (this is more unlikely than you think, but it can happen). For most use cases, it is not worth it. So, make sure you are paying attention to this as well.
Also, most backends do have a way to do batch requests. So, you can put in a data-layer that takes care of batching and caching for you. This way, you can fetch the data you need, without worrying about the number of API calls you are making.

Note that I'm mostly talking about fetching rows of data. I'm not ignoring the number of columns. In most databases it is not worth it to fetch partial records. But when you have 1000 fields/columns in a table, the metric will shift. In that case, it might be worth it to fetch only the columns you need as well. So, make sure you are paying attention to that as well.

Side note: When you need a list out of a table with only a few columns, it might be worth it to read all of it in one request. Again, all of this is a balancing act.

> Finding the sweet spot for your application is key.

## Jeez, that's a lot

Yup. Sorry. Also, I have not even scratched the surface. This is the tip of the iceberg. There are many more things that come into play here. I didn't even talk about how to get the metrics. Or even about how to decide what metrics matter to your app. But I hope this gives you at least some grounding on the topic. Also I hope that you start to realize that performance is not a stand-alone topic. Read some more of my articles and you will start to understand that building applications needs a way more holistic approach than just highlighting the problem of the week. You need to understand the whole picture, and how all the pieces fit together. Only then you can make informed decisions on how to optimize for performance.

## Conclusion

Performance is not a single number, and it is not a frontend-only concern. It is a set of trade-offs across product, people, and technology. If you want the “holy grail” (fast load, 60fps, quick interactions), you can absolutely get there — but only if you treat it as an intentional practice: define what “fast” means for *your* app, measure it continuously, and make it part of your delivery process.

If you only remember a few things:

- Align on goals with stakeholders first; pick explicit goals and non-goals.
- Measure what you care about and enforce it (tooling + merge gates).
- Optimize end-to-end: backend latency and scalability will dominate perceived speed.
- For frontend, the default heuristic holds: ship less JS.
- For data, also ship less: fewer rows, fewer columns, fewer bytes — load what you need, when you need it.

Most importantly: watch the culture you create. A short-term focus on “velocity at any cost” tends to produce long-term performance costs — technical and organizational. Balance is hard, but it’s the difference between an app that *works* and an app people actually enjoy using.
