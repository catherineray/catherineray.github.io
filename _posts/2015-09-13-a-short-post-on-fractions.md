---
title: "A Short Post on a Problem of Euler"
date: "2015-09-13"
categories: 
  - "math"
---

I came across a free book giveaway with everything from Maugham’s tropical works to various Russian math titles which I couldn’t read.

I picked up a copy of Khintchine’s _Kettenbrüche_.

Reading through it I was reminded of a conversation I had with Laurens on a related concept, one usually referred to as “partial fractions.” This blog post is a quilt of quotes from that conversation.

_I was also reminded of a different conversation I had much more recently with Aaron and Laurens when we uncovered a whisp of a connection between group cohomology and chained fractions, but that’s for a different blog post._

1/A - 1/B = 1/(A + X), what is X?

Since we need 1/(A+X) = 1/(AB/(A-B)) = A-B/AB for the equation to hold, so A+X = AB/A-B (A+X)(A-B) = AB A^2 -AB + XA -XB = AB X(A-B) = AB-A^2-AB X = -A^2/A-B

The next exercise is far harder. Why do you suppose that Euler wanted to express 1/A - 1/B as 1/(A + X), where X = A^2/(B - A)?

The hint is: the result can be iterated.

In general, when Euler found that it was possible to do something once, he immediately wanted to know whether you could continue to do it infinitely often!

How do we iterate the effect of: subtracting 1/B from 1/A is the same as that of adding to A the quantity A^2/(B - A).

If we are to imagine occupying mind of Euler, we have to fiddle! Let’s replace 1/B by 1/B - 1/C.

Then we can subtract from 1/A not merely 1/B, but 1/B - 1/C.

Which will give us 1/A - 1/B + 1/C.

At this point, I suspect you can see that Euler is interested in finding an alternative form for an infinite series consisting of reciprocals with alternating signs.

If, for example, I ask you to find the best rational approximation to sqrt(2) whose denominator is less than, say, 50, would you know off the top of your head how to do that, right away?

I sure as hell didn’t.

It turns out that Euler was quite interested in this sort of question, just as Huyghens and Newton before him had been. And he knew certain key things about the problem, too.

In particular, he learned from his studies of Fermat’s arithmetic how to compute the best possible rational approximations to sqrt(n), for non-square n. And the algorithm likely fascinated him.

Let me share with you its output, in the case of sqrt(2), just so you get the idea.

The best rational approximations to sqrt(2) are

1/1, 3/2, 7/5, 17/12, 41/29, 99/70, …

Now, these numbers are not at all random (A/B, A+B+B/B+A).

Let me point out another thing here. First, 3/2 - 1/1 = 1/2. Then 7/5 - 3/2 = -1/10. 1/2 - 1/10 = 7/5 - 1/1.

And this continues.

It forms, you guessed it, an alternating sequence of reciprocals on the left-hand side, and the best possible rational approximation on the right-hand side.

Euler certainly knew that the best possible rational approximations to sqrt(n) typically took this form.

It made him curious to know as much as he could about such expressions. To massage them as artfully as he could.

The beautiful thing is that the first step was to figure out what he could do with just plain old 1/A - 1/B — the elementary building block, so to speak, of all such alternating sums.
