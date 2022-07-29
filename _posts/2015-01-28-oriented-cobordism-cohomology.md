---
title: "Oriented Cobordism Cohomology"
date: "2015-01-28"
categories: 
  - "math"
---

_Edit: When I say cobordism, I mean oriented cobordism unless stated otherwise. Also note that I accidentally flip-flopped \(\Omega^*\) and \(\Omega_*\) — \(\Omega^n\) should be cobordism classes of maps from manifolds of codimension \(n\) to \(X\), and \(\Omega_n\) is cobordism classes of maps from manifolds of dimension \(n\) to \(X\)._

Let’s say \(M_1, M_2,\) and \(X\) are differentiable manifolds. We have a map \(f_1\), and a map \(f_2\).

[![Screenshot from 2015-01-27 15:55:55](/wp-content/uploads/2015/01/Screenshot-from-2015-01-27-155555.png)](/wp-content/uploads/2015/01/Screenshot-from-2015-01-27-155555.png)

Let’s think of a movie: Our first frame is the map from \(M_1 \to X\) Our last frame is the map from \(M_2 \to X\) What is in between? The instructions for how to deform \(M_1 \to X\) to look like \(M_2 \to X\).

Each movie frame is a map from \(M \to X\), which we can stack up (like a CT-scan — such that the first frame is \(M_1 \to X\), and the last is \(M_2 \to X\)) to get another map, \(W \to X \times [0,1]\) which is “bounded” by the first and last map: \([0,1]\) is our time interval.

If such a \(W\) exists, \(M_1 \to X\) and \(M_2 \to X\) are “cobordant” (same boundary), and \(W\) is their “cobordism” (the manifold that has them as its boundary). It’s just an equivalence relation.

Note that we can also play with cobordism _without_ \(X\) by looking at cobordism classes of \(n\)-dimensional oriented manifolds.

_Note that the pair of pants is just an aesthetically pleasing example of a cobordism, and there are many other examples!_

Let’s make something using [the recipe](/recipe/):

1. Take in a manifold \(X\)
2. Look the collection of maps from \(n\)-dimensional oriented manifolds to \(X\) (up to cobordism of maps)
3. Equip the collection with connected sum.
4. Output: \(n\)-dimensional oriented cobordism group (wrt X).

\(\Omega^*(X)\) is the slice category \(\text{Man}/X\), up to cobordism of maps.

_Why are the non-trivial groups \(\Omega^{2n}(-)\)? I’ve been told that all manifolds with odd dimension are nilbordant, but I’m not sure I believe this._

But this is just a group! Let’s make it a ring! _This particular ring is called “Thom’s ring” in the literature._

1. Take in a manifold \(X\)
2. Look the collection of maps from \(n\)-dimensional oriented manifolds to \(X\) (up to cobordism of maps) for all \(n \in \mathbb{N}\)
3. Equip the collection with connected sum and cartesian product.
4. Output: oriented cobordism ring (wrt X).

The graded ring \(\Omega^*(-)\) is a cohomology theory (graded by dimension).

_Notational aside: \(MU^*(-)\) and \(\Omega^*_{U}\) are alternative notations for \(\Omega^*(-)\) used in the literature._
