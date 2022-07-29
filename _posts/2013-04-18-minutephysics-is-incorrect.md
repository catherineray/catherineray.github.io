---
title: "MinutePhysics is Naively Incorrect: Finding the Limit of a Geometric Series"
date: "2013-04-18"
categories: 
  - "explanation"
  - "math"
---

I recently watched a [video by MinutePhysics](http://www.youtube.com/watch?v=kIq5CZlg8Rg) where he seems to prove that infinity = -1.

He took the sum of the infinite series, beginning with 1, where each term is double the previous term.

[![](/wp-content/uploads/2013/04/Rin-2013-04-18-at-12.16.18-AM.png)](/wp-content/uploads/2013/04/Rin-2013-04-18-at-12.16.18-AM.png)

He claims that S = infinity (so far, so good). _I would argue that S approaches infinity, but this is purely technical tricky business._

Then he doubles S, thus doubling all of it’s terms (still okay).

[![](/wp-content/uploads/2013/04/Rin-2013-04-18-at-12.17.38-AM.png)](/wp-content/uploads/2013/04/Rin-2013-04-18-at-12.17.38-AM.png)

He then subtracts the two,

[![](/wp-content/uploads/2013/04/Rin-2013-04-18-at-12.18.22-AM.png)](/wp-content/uploads/2013/04/Rin-2013-04-18-at-12.18.22-AM.png)

terms cancel, leaving S = -1.

This is a geometric series (each term gets multiplied by a common factor; in this case, the common factor is 2). If you take the common factor to be 1/2 instead, then you’ll have

[![](/wp-content/uploads/2013/04/Rin-2013-04-17-at-9.29.29-PM.png)](/wp-content/uploads/2013/04/Rin-2013-04-17-at-9.29.29-PM.png)

Each term is getting smaller, approaching zero. If you calculate S, you’ll see that the partial sums approach 2:

[![](/wp-content/uploads/2013/04/Rin-2013-04-17-at-9.29.36-PM.png)](/wp-content/uploads/2013/04/Rin-2013-04-17-at-9.29.36-PM.png)

Thus, the value 2 is the limit of the series. We call this type of series a convergent series, because the sum of the series converges to one number.

However, the example used by MinutePhysics is not a convergent series (the terms double each time). We call this a divergent series.

A divergent series needn’t sum to infinity. Divergent is an umbrella term that covers all series that are non-convergent. This includes periodic series (series that flip between two values), such as

[![](/wp-content/uploads/2013/04/Rin-2013-04-17-at-9.38.24-PM.png)](/wp-content/uploads/2013/04/Rin-2013-04-17-at-9.38.24-PM.png)The terms of this series will flip between the two values -1 and 1. Its sum will alternate between 0 and -1.

However, just because a series is divergent doesn’t mean you can’t give its sum a value. This is not the limit, for there is no limit that the sum approaches.

Let’s say you have a general geometric series; each term is being multiplied by a common factor, r.

[![](/wp-content/uploads/2013/04/Rin-2013-04-17-at-9.40.00-PM.png)](/wp-content/uploads/2013/04/Rin-2013-04-17-at-9.40.00-PM.png)

You can use the same tricks as before to find a general limit for this series:

[![](/wp-content/uploads/2013/04/Rin-2013-04-17-at-9.41.29-PM-300x46.png)](/wp-content/uploads/2013/04/Rin-2013-04-17-at-9.41.29-PM.png)

This reduces to

[![](/wp-content/uploads/2013/04/Rin-2013-04-17-at-9.42.24-PM.png)](/wp-content/uploads/2013/04/Rin-2013-04-17-at-9.42.24-PM.png)

This trick only finds the limit of convergent series, because **the limit of a divergent series doesn’t exist**.

In other words, the limit has to exist in order to find it!

For the limit to exist, each term must be smaller than the last (the common ratio must be less than 1).

[![](/wp-content/uploads/2013/04/Rin-2013-04-17-at-9.43.22-PM.png)](/wp-content/uploads/2013/04/Rin-2013-04-17-at-9.43.22-PM.png)

If you apply this formula to a convergent series, you’ll get the limit. When the common ratio was 1/2, the limit = 2.

If you apply this formula to a divergent series, you’ll get a value. But it won’t be the limit of the series, because **the limit doesn’t exist**.

Side Note: When you apply [![](/wp-content/uploads/2013/04/Rin-2013-04-17-at-9.42.24-PM.png)](/wp-content/uploads/2013/04/Rin-2013-04-17-at-9.42.24-PM.png) to the original example (the common ratio was 2), you’ll find the value -1. This isn’t the limit, because **the limit doesn’t exist**, it’s what the limit would be if it was a convergent series.

If the common ratio is -1, the sequence will flip between two values, for example, 6 and -6. When you add up the partial sums, these flip as well. You’ll get 6, then 0, then 6, then 0… If you apply [![](/wp-content/uploads/2013/04/Rin-2013-04-17-at-9.42.24-PM.png)](/wp-content/uploads/2013/04/Rin-2013-04-17-at-9.42.24-PM.png), you’ll get the average of the partial sums (in this case, 3). Finding the average of partial sums is applicable to all series:

When you find the average of the partial sums of a convergent series, you’ll find that it coincides with the limit.

If you apply it to divergent series, you don’t get the limit; you get this average of partial sums.

Either way, this value has meaning.

* * *

So, what was the problem with the video _Adding Past Infinity_?

He used a method that can be applied to all geometric series.

When you apply this method to a convergent geometric series, you get the limit of the series.

MinutePhysics applied this method to a divergent geometric series (which is fine).

He got a value (which is fine).

But he claimed that this value was the limit of the series (which is not fine, because **the limit doesn’t exist**)!

* * *

#### Technical Addendum:

First of all: [zeta function regularization](https://en.wikipedia.org/wiki/Zeta_function_regularization).

Additionally, a good friend of mine (who happens to be the math professor that taught me geometric series) has pointed out some incorrect assumptions I made in my post about finding the limit of a geometric series.

I begin by declaring that \(S = 1 + 2 + 4 + … = \lim_{n \rightarrow \infty} \Sigma_{i=0}^n 2^i = \infty\). This is fine.

The tricky business starts when I subtract S from 2S. Finite addition and subtraction are commutative. But adding and subtracting over infinity needn’t behave nicely.
