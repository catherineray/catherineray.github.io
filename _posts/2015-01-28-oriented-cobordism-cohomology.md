---
title: "Oriented Cobordism Cohomology"
date: "2015-01-28"
categories: 
  - "math"
---

_Edit: When I say cobordism, I mean oriented cobordism unless stated otherwise. Also note that I accidentally flip-flopped \\(\\Omega^\*\\) and \\(\\Omega\_\*\\) â€” \\(\\Omega^n\\) should be cobordism classes of maps from manifolds of codimension \\(n\\) to \\(X\\), and \\(\\Omega\_n\\) is cobordism classes of maps from manifolds of dimension \\(n\\) to \\(X\\)._

Letâ€™s say \\(M\_1, M\_2,\\) and \\(X\\) are differentiable manifolds. We have a map \\(f\_1\\), and a map \\(f\_2\\).

[![Screenshot from 2015-01-27 15:55:55](/wp-content/uploads/2015/01/Screenshot-from-2015-01-27-155555.png)](/wp-content/uploads/2015/01/Screenshot-from-2015-01-27-155555.png)

Letâ€™s think of a movie: Our first frame is the map from \\(M\_1 \\to X\\) Our last frame is the map from \\(M\_2 \\to X\\) What is in between? The instructions for how to deform \\(M\_1 \\to X\\) to look like \\(M\_2 \\to X\\).

Each movie frame is a map from \\(M \\to X\\), which we can stack up (like a CT-scan â€” such that the first frame is \\(M\_1 \\to X\\), and the last is \\(M\_2 \\to X\\)) to get another map, \\(W \\to X \\times \[0,1\]\\) which is â€œboundedâ€ by the first and last map: \\(\[0,1\]\\) is our time interval.

If such a \\(W\\) exists, \\(M\_1 \\to X\\) and \\(M\_2 \\to X\\) are â€œcobordantâ€ (same boundary), and \\(W\\) is their â€œcobordismâ€ (the manifold that has them as its boundary). Itâ€™s just an equivalence relation.

Note that we can also play with cobordism _without_ \\(X\\) by looking at cobordism classes of \\(n\\)-dimensional oriented manifolds.

_Note that the pair of pants is just an aesthetically pleasing example of a cobordism, and there are many other examples!_

Letâ€™s make something using [the recipe](/recipe/):

1. Take in a manifold \\(X\\)
2. Look the collection of maps from \\(n\\)-dimensional oriented manifolds to \\(X\\) (up to cobordism of maps)
3. Equip the collection with connected sum.
4. Output: \\(n\\)-dimensional oriented cobordism group (wrt X).

\\(\\Omega^\*(X)\\) is the slice category \\(\\text{Man}/X\\), up to cobordism of maps.

_Why are the non-trivial groups \\(\\Omega^{2n}(-)\\)? Iâ€™ve been told that all manifolds with odd dimension are nilbordant, but Iâ€™m not sure I believe this._

But this is just a group! Letâ€™s make it a ring! _This particular ring is called â€œThomâ€™s ringâ€ in the literature._

1. Take in a manifold \\(X\\)
2. Look the collection of maps from \\(n\\)-dimensional oriented manifolds to \\(X\\) (up to cobordism of maps) for all \\(n \\in \\mathbb{N}\\)
3. Equip the collection with connected sum and cartesian product.
4. Output: oriented cobordism ring (wrt X).

The graded ring \\(\\Omega^\*(-)\\) is a cohomology theory (graded by dimension).

_Notational aside: \\(MU^\*(-)\\) and \\(\\Omega^\*\_{U}\\) are alternative notations for \\(\\Omega^\*(-)\\) used in the literature._
