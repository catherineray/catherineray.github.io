---
title: "SPOILERS: Using Simple Combinatorics"
date: "2014-01-27"
categories: 
  - "code"
  - "haskell"
  - "math"
  - "python"
---

DISCLAIMER: This is the solution to Project Euler’s problem 15. Please attempt to solve the problem yourself before reading my solution.

**Starting in the top left corner of a 2×2 grid, and only being able to move to the right and down, there are exactly 6 routes to the bottom right corner.**

[![](/wp-content/uploads/2014/01/p_015.gif)](/wp-content/uploads/2014/01/p_015-1.gif)

**How many such routes are there through a 20×20 grid?**

I like to use this problem to demonstrate the efficacy of using simple maths to improve code.

Instead of the naive solution….

```
from itertools import permutations
def unique(iterable):
    seen = set()
    for x in iterable:
        if x in seen:
            continue
        seen.add(x)
        yield x
options = [1]*20 + [0]*20
counter = 0
for a in unique(permutations(options)):
 counter = counter+1
print counter
```

Use simple combinatorics!

To find the number of unique routes through a 20×20 grid, use our friend: the concept of permutations with repeated elements:

\(\frac{\text{number of elements}!}{\text{repetitions of character}!*\text{repetitions of other character}!*…}\)

```
import math
print math.factorial(40)/(math.factorial(20)*math.factorial(20))
```

Even better - one line in Haskell:

```
product [1..40] `div` product[1..20]^2
```
