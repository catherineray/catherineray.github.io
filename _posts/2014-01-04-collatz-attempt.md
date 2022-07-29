---
title: "A Method to Not Prove the Collatz Conjecture"
date: "2014-01-04"
categories: 
  - "explanation"
  - "math"
  - "research-projects"
---

_[Number theory is the cocaine of mathematics.](http://rjlipton.wordpress.com/2009/11/04/on-mathematical-diseases/) The following resulted [not from my intention to prove the conjecture,](http://terrytao.wordpress.com/2011/08/25/the-collatz-conjecture-littlewood-offord-theory-and-powers-of-2-and-3/) but from the drive to deeply understand its underlying structure._

After obsessively thinking about it for a few weeks, I came up with a possible approach out of the blue.

I scribbled the proof down at the breakfast table on Christmas day, and this rushed, unedited transcription of thought to paper led to [assumptions and oversights that I could not justify](http://terrytao.wordpress.com/career-advice/dont-prematurely-obsess-on-a-single-big-problem-or-big-theory/) when I revisited my scribblings.

As I was transcribing my proof from messy scribbles in my notebook into LaTeX, I found errors (described below). I encourage the reader to attempt to **find the errors** before they are explained!

In the spirit of [How Not to Prove the Poincare Conjecture](http://citeseerx.ist.psu.edu/viewdoc/download?doi=10.1.1.32.3404&rep=rep1&type=pdf), I present the following:

**Claim**:

\(\forall n \in \mathbb{N}\) the number sequence \(\) n_{i+1} = \begin{cases} n_i/2, & \text{if }n_i\text{ is even} \\ 3n_i+1, & \text{if }n_i\text{ is odd} \end{cases} \(\) will always contain the closed chain \(4 \rightarrow 2 \rightarrow 1 \rightarrow 4\).

**Proof:** Let \(f \equiv\) the product factor between \(n_i\) and \(n_{i+1}\)

If \(n_i\) is odd:

\(n_{i+1} = 3n_i+1\)

\(n_{i+1} = fn_i\)

\(f_{i, i+1} = \frac{3n_{i+1}}{n_i} \Leftrightarrow f_{i+1, i} = \frac{n_i}{3n_i+1}\) [Eq. 1]

Let \(n_1 \rightarrow n_2 \rightarrow \ldots \rightarrow n_{g-1} \rightarrow n_g\) be any Collatz sequence, started by an arbitrary number \(n_1 \in \mathbb{N}\) and ended after \(g-1\) steps on a number \(n_g \in \mathbb{N}\).

Every even number has an odd number somewhere in it’s sequence, so we will assume that \(n_1\) is always odd.

A number sequence is an **open chain** when \(n_i \neq n_j, i \neq j\) for \(g-1\) steps. (In other words, there are no repeated numbers in the number sequence.) The chain has \(e\) even and \(o\) odd steps.

For the total factor between \(n_1\) and \(n_g\) after \(g-1\) steps for an open chain, it follows from Eq. 1 that

\(2^e\prod_{j=1}^o\frac{n_j}{3n_j+1} = \frac{n_1}{n_g}\) where \(j\) is the \(j^{th}\) odd number in the sequence. [Eq. 2]

A number sequence is a **closed chain** if \(n_g = n_1\) and \(n_i \neq n_j, i \neq j\); \(i, j \in [2, g-1]\) for \(g\) steps.

The total factor between \(n_i\) and \(n_g\) for closed chains is thus

\(2^e\prod_{j=1}^o\frac{n_j}{3n_j+1} = 1\)

This proof will demonstrate that no other closed chain exists and no open chain exists with endless length.

Let’s reverse engineer it. We start at the last element of the sequence with \(g\) steps and show that given \(n_g = 1\) we can reach all odd numbers > 1 by the inverse Collatz sequence.

Using the definition [Eq. 2] of an open chain

\(2^e\prod_{j=1}^o\frac{n_j}{3n_j+1} = \frac{n_1}{n_g} = n_1\)

Let’s do a proof by exception. If we have no other odd numbers apart from 1 in our sequence (\(o =0\)), it follows that

\(2^{e_{g}} = n_1\)

\(o = 0\) is the only open chain with only even steps. We will address this abnormality later in the [attempted] proof.

Let \(o =1\)

\(2^{e_{0}}\frac{n_1}{3n_1 + 1} = n_1 \Rightarrow n_1 = \frac{2^{e_{1}}-1}{3}\)

Let \(o = 2\)

\(2^{e_{2}}\frac{n_1}{3n_1+1}\frac{n_2}{3n_2+1} \Rightarrow n_1 = \frac{2^{e_{2} - e_{1}}(n_2-1)}{3}\).

Let \(o=3\)

\(2^{e_{3}}\frac{n_1}{3n_1+1}\frac{n_2}{3n_2+1}\frac{n_3}{3n_3+1} = n_1\)

\(2^{e_{3} - (e_{2} - e_{g-1})}\frac{n_1}{3n_1+1}n_2 = n_1\)

and so on.

It follows in general

\(n_1 = \frac{2^{x}n_2-1}{3}, x \in \mathbb{N}\) [Eq.3]

* * *

ERROR EXPLANATION:

The \(o=2\) simplification doesn’t work. I use the \(o=1\) equation to substitute in a simpler form for \(n_2\), but that equation only holds when \(n_1\) is the end of a cycle. In this case \(n_2\) would not be the end of a cycle, thus the \(o=1\) equation for \(n_1\) cannot be plugged in for \(n_2\).The same follows for \(o=3\) etc.

I did the following: \(2^{e_2}[\frac{n_1}{(3n_1 + 1)}][\frac{n_2}{(3n_2 + 1)}] = n_1\) \(2^{e_2}[\frac{n_2}{(3n_2 + 1)}] = 3n_1 + 1\) \(n_1 = \frac{(2^{e_2}[\frac{n_2}{(3n_2 + 1)}] - 1)}{3}\)

from \(o=1\):

\(2^{e_1}[\frac{n_1}{(3n_1 + 1)}] = n_1\) \(\frac{n_1}{(3n_1 + 1)} = \frac{n_1}{2^{e_1}}\) sub in 2 for 1 \(\leftarrow\) DOES NOT FOLLOW \(\frac{n_2}{(3n_2 + 1)} = \frac{n_2}{2^{e_1}}\) \(\leftarrow\) DOES NOT FOLLOW

sub in that mess:

\(n_1 = \frac{(2^{e_2}[\frac{n_2}{(3n_2 + 1)}] - 1)}{3}\) \(n_1 = \frac{(2^{e_2}[{n_2}{2^{e_1}}] - 1)}{3}\) \(\leftarrow\) DOES NOT FOLLOW \(n_1 = \frac{[2^{(e_2-e_1)}n_2 - 1]}{3}\)

Even if that did work, I have several arithmetic errors. If we plug in 2’s for 1’s in the \(o=1\) equation and solve for \(\frac{n_2}{(3n_2 + 1)}\), the result should be \(\frac{n_2}{2^{e_2}}\) rather than \(\frac{n_2}{2^{e_1}}\).

Further, even if \(\frac{n_2}{2^{e_1}}\) was the right thing to plug in for \(\frac{n_2}{(3n_2 + 1)}\) the result in \(o=2\) should be \(\frac{[2^{(e_2-e_1)}n_2 - 1}{3}\) (i.e., no parentheses around “\(n_2 - 1\)”). I correct this in \(o=3\). The rest of the proof depends on finding solutions to [Eq. 3], which I’ve just shown to be moot. Nevertheless, back to the attempted proof…

* * *

So when do integer solutions to [Eq. 3] exist? Let’s partition the set of odd natural number into 3 disjoint subsets. \(1^{st}\) subset is set of all odds which are multiples of 3. There are no solutions for this subset, since

\(n_1 = \frac{2^x3_j-1}{3} = 2^xj - \frac{1}{3}\), \(j \in \mathbb{N}\)

The second subset is given by \(n_{3ep} = 6i_{ep} + 1\), \(i_{ep} \in \mathbb{N}\) which solves the recurrence formula [Eq. 3] for even powers \(x_{ep}\).

The third subset is given by \(n_{3op} = 6i_{op} - 1\), \(i_{op} \in \mathbb{N}\) which solves the recurrence formula [Eq. 3] for odd powers \(x_{op}\).

With these two subsets satisfying the recursion formula, we can get all start numbers \(n_1\) of Collatz sequences generated by their direct follower. But, addressing the previous anomaly, we have one exception to our recurrence formula. The case \(n_2,n_1 = 1,1\) gives us \(4 \rightarrow 2 \rightarrow 1 \rightarrow 4\). Here, the only odd number (1) in the sequence is the factor between \(n_1\) and \(n_g\), for \(4 \rightarrow 2 \rightarrow 1 \rightarrow 4\) is a closed chain. This sequence continues to iterate on itself and is an exception to the recurrence relations.

* * *

ERROR EXPLANATION:

My 3 subsets are ill defined and not mutually exhaustive. Subset 1 is clear because \(n_2\mod 3 = 0\) will never satisfy [Eq. 3]. For the second and third subsets, I state that \(2^x\mod 3 = 1\) when \(x\) is even and \(2^x\mod 3 = 2\) when \(x\) is odd. Which is sound. Subset 2 (\(x\) even): \(n_2 = (6i + 1)\), therefore \([(2^x)(n_2) - 1]\mod 3 = [2^x\mod 3][(6i + 1) \mod 3] - (1 \mod 3)\) \(= (1 \mod 3)(1 \mod 3) - (1 \mod 3)\) \(= (1 \mod 3) - (1 \mod 3) = 0 \mod 3\) which satisfies [Eq. 3].

Subset 3 (\(x\) odd): \(n_2 = (6i - 1)\), therefore \([(2^x)(n_2) - 1] \mod 3 = [2^x \mod 3][(6i - 1) \mod 3] - (1 mod 3)\) \(= (2 \mod 3)(2 \mod 3) - (1 \mod 3)\) \(= (1 \mod 3) - (1 \mod 3) = 0 \mod 3\) which satisfies [Eq. 3].

It was pointed out to me that I could have used \(3i + 1\) and \(3i - 1\) instead of \(6i + 1\) and \(6i - 1\) to convey the same result (it’s just mod 3).

In my approach, we find not 3 but 5 disjoint subsets: 1. \(n_2 \mod 3 = 0\), no solution 2. \(n_2 \mod 3 = 1\) and \(x\) even, solution 3. \(n_2 \mod 3 = 1\) and \(x\) odd, no solution 4. \(n_2 \mod 3 = 2\) and \(x\) even, no solution 5. \(n_2 \mod 3 = 2\) and \(x\) odd, solution

These subsets are both mutually exclusive and mutually exhaustive.

* * *

I wrapped up the [incorrect] proof as follows:

The conjecture is true for all odd numbers. Every even number has an odd number somewhere in its sequence. \(\Rightarrow\) The conjecture is true for all evens. \(\Rightarrow\) The conjecture is true for all \(n \in \mathbb{N}.\) QED
