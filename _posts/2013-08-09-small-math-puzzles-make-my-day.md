---
title: "Small Math Puzzles Make My Day"
date: "2013-08-09"
categories: 
  - "code"
  - "explanation"
  - "math"
  - "python"
---

I was recently hanging out with some friends, and one of them brought out an old math problem sheet. This problem sheet was briefly passed around and then put away again. One of the problems was a cute math puzzle. This problem was...

_Find the sum of the first 1234 elements in following sequence 1, 2, 1, 2, 2, 1, 2, 2, 2, 1, 2, 2, 2, 2, 1, ..._

* * *

Sidenote: There is a difference between a sequence and a series. The difference is: a **sequence** is a **list** of numbers (1, 2, 1, 2, 2, ...) a **series** is the **sum of a sequence** (1 + 2 + 1 + 2 + 2 + ... )

* * *

Before proceeding, I encourage you to solve the problem yourself.

The first thing I recognized was that the positions of "1" in the sequence corresponded to the triangle numbers. 1, 2, 1, 2, 2, 1, 2, 2, 2, 1, 2, 2, 2, 2, 1, ... After the sheet was put away, the little problem stuck in my head. When I got the opportunity, I [used my phone](http://mathcs.holycross.edu/~kwalsh/python/) to run my quickly written script.

```
x=1234
for n in range(0, x-1):
  if (n*(n+1))/2 > x: 
    tri =n-1
    print x*2-tri 
    break
```

This finds the number of triangle numbers less than 1234 (which corresponds to the number of 1s in the sequence), then subtracts this number from 1234*2.
