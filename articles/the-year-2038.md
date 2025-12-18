# The year 2038 problem

Just like the year 2000 problem, the year 2038 problem is a potential issue that may arise in computer systems and software applications due to the way dates are represented and processed. As we approach the year 2038, some systems may encounter difficulties in handling dates beyond this point, leading to errors, data corruption, or system failures.

## the year 2000 problem

This brings me back to the year 2000 problem, also known as the Y2K problem. In the late 1990s, many computer systems represented years using only the last two digits (e.g., "99" for 1999). As a result, when the year rolled over to 2000, these systems interpreted "00" as 1900 instead of 2000, leading to potential errors in date calculations and data processing.
This made the headlines back then. Remember this was a time where headlines still mattered. Before things like the "look at this panda scared of his own cub" would made it onto TV. &lt;/sarcasm&gt;

I looked into my codebases back then, only to find out I didn't have any code that was affected by this. I did find some code that was using two digit years, but only for display purposes. Phew.
There were some banks and other institutions that had to do update some of their ancient database systems. But in the end, the millennium bug turned out to be a reasonable friendly critter.

## the year 2038 problem

The year 2038 problem is similar in nature but stems from different technical limitations. Some systems may use a 32-bit signed integer to represent dates as the number of seconds since January 1, 1970 (the Unix epoch). This representation can only accommodate dates up to January 19, 2038. Beyond this point, the integer value will overflow, leading to incorrect date calculations and potential system failures.
This time around, we are more aware, and many systems have already been updated.
The only problem will be legacy codebases, that survived for decades without maintenance. (remember, at the time I write this, its 2025, we still have 13 years to go!)

## the nitty gritty

### what _is_ a 32-bit signed integer?

A 32-bit signed integer is a data type used in computer programming to represent whole numbers. It uses 32 bits (4 bytes) of memory to store the value, with one bit reserved for indicating the sign (positive or negative) of the number. This allows for a range of values from -2,147,483,648 to 2,147,483,647.

### What does that translate to in dates?

Well, let do the math.

```math
2,147,483,647 / (60 * 60 * 24) = 24,855 days (approx)
```

which is:

```math
24,855 / 365.25 = 68 years (approx)
```

so, `1970 + 68 = 2038`

### what means rollover?

That is what happens when we add `1` to the maximum value of a 32-bit signed integer, adding `1` to `2,147,483,647` causes the value to "roll over" to `-2,147,483,648`, which is the minimum value for this data type.
In systems using a signed 32 bit integer this will lead to a date of `December, 1902`. (1970 - 68).
You can see how this could lead to all sorts of problems in date calculations and data processing.

### How can we solve this?

well, we can add more bits.

| Bits | Maximum Value  | years           |
| ---- | -------------- | --------------- |
| 32   | 2,147,483,647  | 68              |
| 33   | 4,294,967,295  | 136             |
| 34   | 8,589,934,591  | 272             |
| ...  | ...            | ...             |
| 48   | 2.814749767e14 | 8,925,899       |
| ...  | ...            | ...             |
| 64   | 9.223372036e18 | 292,471,208,677 |

> [!NOTE] the number of years is an approximation, done by dividing the maximum value by the number of seconds in a year (60 &ast; 60 &ast; 24 &ast; 365.25)

So, by using a 64-bit signed integer we can go up to almost 300 billion years into the future (or past). That should be enough for now.

## How did we end up here again?

I mean, even when they designed the original systems, they must have known this would be a problem in the future, right? a range of dates that does not even span one and a half century? They did put a man on the moon with this tech, were they this stupid?
Well, no. At the time (1960s) memory and storage were _very expensive_ and limited resources. Using a 32-bit signed integer was a practical choice that balanced the need for date representation with the constraints of the hardware. At that point in time a main memory of a kilobyte was considered large. Remember the uproar when the IBM PC AT came with 256 kilobytes of RAM as standard? And then when Bill Gates said that 640 kilobytes should be enough for anyone? (1981, and yes, I know he claims he never said that).

> [!NOTE] take a second look at those numbers in the above paragraph. A kilobyte is 1024 bytes. The numbers are measured in _kilobytes_! Nowadays, we measure main memory in gigabytes. Lets line that up: 
> | | | 
> | -------- | ------------ | 
> | kilobyte | 1024 | 
> | gigabyte | 1,073,741,824 | 
>
> Let that sink in for a moment.

## What does this mean to me?

The good news is probably nothing!. Most modern systems have already addressed this issue. To be extra certain, you can check your own stack, and look up of any of the languages, libraries, databases or frameworks you are using have any known issues with the year 2038 problem. When you are maintaining a legacy system build duren the last century switch, you might want to take a closer look.

## TL;DR

The year 2038 problem is a potential issue in computer systems due to the limitations of 32-bit signed integers used to represent dates. As we approach January 19, 2038, some systems may encounter errors when handling dates beyond this point. Most modern systems have already addressed this issue, but legacy systems may still be vulnerable. Upgrading to 64-bit signed integers can effectively solve the problem.
