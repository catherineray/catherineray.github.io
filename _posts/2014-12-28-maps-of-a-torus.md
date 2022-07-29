---
title: "Maps of a Torus"
date: "2014-12-28"
categories: 
  - "math"
---

In Segal’s Bourbaki talk on [Elliptic cohomology](http://archive.numdam.org/ARCHIVE/SB/SB_1987-1988__30_/SB_1987-1988__30__187_0/SB_1987-1988__30__187_0.pdf), he mentions offhandedly that:

_The set of pairs of commuting elements of a group \(G\) are the set of homotopy classes of maps of a torus into \(BG\)._

[Semon Rezchikov](http://web.mit.edu/~semonr/www/) kindly explained this to me, and I found his explanation so simple and pleasing that I wish to share it.

Recall that \(BG=K(G,1)\) and that \(G = \pi_1(BG)\). A homotopy class of maps \(S^1 \to BG\) _is_ an element of \(G\) (i.e. \(BG\) is the delooping of \(G\)).

_[If this statement confuses you, dear reader, Ctrl+F for “Eilenberg-Mac Lane space” in [nCategories and Cohomology](http://math.ucr.edu/home/baez/cohomology.pdf). If you are uncomfortable with a group as a category, Ctrl+F for “ordinary particle is a point” in [From Loop Space Mechanics to Nonabelian Strings](https://arxiv.org/pdf/hep-th/0509163v1.pdf).]_

Let \((a,b)\) be a pair of commuting elements in \(G\).

In other words, let \((a,b)\) be a pair of paths in \(\pi_1(BG)\) that commute. _Note that \(a\) and \(b\) must be loops based at the same point to commute, and that the torus is \(S^1 \times S^1\)._

We map the first generator of the torus to \(a\) and the second generator to \(b\).

[![Source](/wp-content/uploads/2014/12/fundgrto.gif)](/wp-content/uploads/2014/12/fundgrto.gif)

[Source](http://mathworld.wolfram.com/images/gifs/fundgrto.gif)

The first frame of this gif is then \(ab\), and the last frame is \(ba\) (the middle frames are homotopies).

Any paths in \(\pi_1\) that commute (i.e. any pair \((a,b)\) of commuting elements in \(G\)) give a map of the torus into your space \(BG\).
