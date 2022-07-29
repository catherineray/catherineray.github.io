---
title: "A Precursor to Characteristic Classes"
date: "2015-02-19"
categories: 
  - "math"
---

_I’ll assume that you know [what a line bundle is](/intro-to-bundles/) and are comfortable with the following equivalences; if you aren’t familiar with the notation in these equivalences, [John Baez](http://math.ucr.edu/home/baez/calgary/BG.html) might help. Note that integral cohomology := cohomology with coefficients in \(\mathbb{Z}\)._

\(U(1) \simeq S^1 \simeq K(\mathbb{Z}, 1)\)

\(BU(1) \simeq CP^\infty \simeq K(\mathbb{Z}, 2)\)

The aim of this post is to give you a taste of the beautiful world of characteristic classes and their intimate relationship to line bundles via the concrete example of how the second integral cohomology group of a space is actually the isomorphism classes of line bundles over that space.

That’s right! \(H^2(X; Z) \simeq\) **the isomorphism classes of (complex) line bundles over X**. It is in fact, a group homomorphism — the group operations being tensor product of line bundles and the usual addition on cohomology. This isn’t something that I understood at first glance. I mean, hot damn, it’s unexpectedly rich.

#### Let’s talk about line bundles.

- \(RP^1\) consists of all lines that intersect the origin of \(R^2\).
- \(CP^1\) consists of all complex lines that intersect the origin of \(C^2\).

Let’s look at \(C^2\): Draw a line \(r\) parallel to one of the axes, each line \(L\) through the origin will intersect this line at a unique point \(x\). This point characterizes \(L\).

[![image-5](/wp-content/uploads/2015/02/image-5.png)](/wp-content/uploads/2015/02/image-5.png)

Only one line, the line parallel to our line \(r\) will not intersect \(r\) — we can say that this line is characterized by the point at \(\infty\).

[![image-4](/wp-content/uploads/2015/02/image-4.png)](/wp-content/uploads/2015/02/image-4.png)

\(CP^1\), the collection of all complex lines through the origin of \(C^2\), is then isomorphic to all of the points \(x\) (including the point at infinity). In other words, \(CP^1 \simeq S^2\).

Recall that the complex line has 2 real dimensions — this powerful isomorphism is simply due to the one-point compactification of \(\mathbb{R}^2\) that we know and love. _Note that we can also get from \(CP^1\) to \(S^2\) via stereographic projection._

[![image-7](/wp-content/uploads/2015/02/image-7.png)](/wp-content/uploads/2015/02/image-7.png)

#### “Canonical” line bundles

The elements of \(CP^1\) are the points \(x\), thus we can describe a line bundle over \(CP^1\) as follows: its points are the pairs \((a,x)\), where \(a\) is a point on the line \(L\) (characterized by x) \(\in \mathbb{C}^2\). The base space is \(C^1\) + \(pt\) at infinity, and each fiber is \(L\).

This line bundle is called the **canonical line bundle** of \(CP^1\).

This story holds for all \(n\). In general, each point \(x\) in \(\mathbb{CP}^n\) is line \(L\) through the origin in \(\mathbb{C}^{n+1}\). Let \(\ell^n\) := the canonical line bundle of \(CP^n\).

I hope we can agree that we can describe a line bundle over \(X\) as follows: to each element of \(X\) (a point), we associate an element of \(\mathbb{CP}^\infty\) (a line).

Saying that the line bundle over \(X\) we know and love is a way to associate a line to every point in \(X\) seems obvious and trivial — but asking “where do lines live?” has some beautiful consequences. I want you to feel this in your bones, so I’ll spell it out a bit more explicitly.

What are line bundles over a topological space \(X\)?

A line bundle \(f\) is:

- a map **from each point** in \(X\)
- **to a line** (i.e. an element of \(\mathbb{CP}^\infty\)).

**I’ll repeat this again: a line bundle \(f\) is a map of type \(X \to \mathbb{CP}^\infty\).**

*todo: add a bit about \(\ell^\infty\) here*

In other words, any complex line bundle \(L\) over \(X\) is a pullback of \(\ell^\infty\) by the map \(f\).

![image](/wp-content/uploads/2015/02/image.png)

#### Cohomology is a Representable Functor

The homotopy classes of maps from a space \(X\) to the nth Eilenberg-MacLane space \(B^n(G)\) of a group \(G\) **is isomorphic to** the \(n\)th cohomology group of a space \(X\), with coefficients in the group \(G\). In other words:

\([X, B^n(Z)] \simeq H^n(X; Z)\)

This is a special case of a theorem, the Brown Representability Theorem, which states that all cohomology theories are represented by spectra, and vice versa. But that’s [a whole ‘nother story!](/oriented-cobordism-cohomology/) Let’s see how this connects to line bundles:

- \([X, B^n(Z)] \simeq H^n(X; Z)\)
- \([X, B^2(Z)] \simeq H^2(X; Z)\)

As you’ll recall from the equivalences listed at the beginning of this post, \(B^2(Z)\),the 2nd Eilenberg-MacLane space of the integers as a group, is isomorphic to \(CP^\infty\), thus:

- \([X, CP^\infty] \simeq H^2(X; Z)\)

![image-2](/wp-content/uploads/2015/02/image-2.png)

_**Warning**: \(B^2(\mathbb{Z})\) is non-standard notation, and is usually written as \(K(\mathbb{Z},2)\) [here’s a paper](/wp-content/uploads/2014/07/at.pdf) that explains how to compute Eilenberg-MacLane spaces._

#### Hey, you said that there would be characteristic classes! Where do those come in?

I did say that this post was a _precursor_ to characteristic classes, but let’s look at a piece of the map. (\(\to\) := correspond to)

- complex line bundles \(\to\) elements of \(H^2\) over \(Z\) (“Chern classes”)
- real line bundles \(\to\) elements of \(H^2\) over \(Z/2\) (“Stiefel-whitney classes”)
- quarternionic line bundles \(\to\) elements of \(H^4\) over \(Z\) (“Pontryagin classes”)

#### This works for BU(n) when n=1. What about other n?

This section is also a teaser. I’d like to suggest that the story generalizes from complex line bundles to complex vector bundles. I don’t quite understand the details of this generalization, but I wish to share with you what I do understand.

Note that a complex n-dimensional vector bundle + a choice of hermitian metric = a \(U(n)\)-[principle bundle](/intro-to-bundles/).

So, it makes sense that classifying complex n-dimensional vector bundles (which I’ll denote \(E \to X\)) is closely related to the story of classifying their associated principle \(U(n)\)-bundles (which I’ll write as \(\hat{E} \to X\)). This motivates us considering that our previous picture...

[![image](/wp-content/uploads/2015/02/image.png)](/wp-content/uploads/2015/02/image.png)

... might just be a special case of a more general phenomena! But how?

Well we have a complex vector bundle — so what is [our associated frame bundle](/intro-to-bundles/)?

[![unnamed](/wp-content/uploads/2015/02/unnamed.png)](/wp-content/uploads/2015/02/unnamed.png)

Let the classifying map of \(\hat{E} \to X\) be \(f: X \to BU(n)\).

[![image-3](/wp-content/uploads/2015/02/image-3.png)](/wp-content/uploads/2015/02/image-3.png)

_Note that \(BU := \text{colim}_n BU(n)\)._

If you’d like to learn more about characteristic classes, I’ve found [Milnor and Stasheff](http://citeseerx.ist.psu.edu/viewdoc/download?doi=10.1.1.374.52&rep=rep1&type=pdf) to be of great help.

_Thank you to Peter Teichner for patiently explaining why \(\mathbb{CP}^1 \simeq S^2\) and consequently the cell decomposition of \(\mathbb{CP}^n\)._
