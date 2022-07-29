---
title: "Spectrum of a Ring"
date: "2015-01-21"
categories: 
  - "math"
---

We have a functor Spec from Ring to Schemes:

\(\text{Ring} \xrightarrow{\text{Spec}} \text{Schemes}\)

Schemes look like Fun(Ring, Set). So Spec sends a ring to a functor from Ring to Set.

\(\text{Ring} \xrightarrow{\text{Spec}} (\text{Ring} \to \text{Set})\)

Honestly, whenever I see “scheme” I replace it mentally with “algebraic curve,” but this is just because I don’t really _get_ what a scheme is yet.

\(R \xrightarrow{\text{Spec} (-)} \text{Spec(R)}\)

\(R \xrightarrow{\text{Spec} (-)} (S \mapsto \text{hom}(R,S))\)

\(\text{Spec}\) \(R\) \(S\) = \(\text{Hom}_{\text{Ring}}(R, S)\)

Let say we have:

1. a ring \(\mathbb{Z}[t]\) (this is just the ring of polynomials with \(t\) as a variable and coefficients in \(\mathbb{Z}\))
2. an arbitrary ring \(S\).

What is \(\text{hom}(\mathbb{Z}[t], S)\)?

Notice that we’re in Ring, so the members of \(\text{hom}(\mathbb{Z}[t], S)\) must be Ring homomorphisms. Let’s say we’re looking at a ring homomorphism \(\phi: \mathbb{Z}[t] \to S\).

I learned from [Cris Moore](http://tuvalu.santafe.edu/~moore/) that demanding examples is a useful practice, so: What is \(\phi(7t^2-4t+3)\) in simpler terms?

\(\phi\) is a ring homomorphism, so we know that \(\phi(1) = 1_s\). This implies that \(\phi(n) = n_s\).

\(\phi(7t^2-4t+3) = \phi(7t^2) – \phi(4t) + \phi(3)\) \(= \phi(t)(\phi(7t) – \phi(4)) + \phi(3)\) \(= \phi(t) (\phi(t) 7_s – 4_s) + 3_s\)

\(\phi(t)\) is not determined! We can pick it to be any element of S!

\(\text{hom}(\mathbb{Z}[t], S) \simeq {\phi(t) \in S} = S\)

In other words, \(\text{Spec}(\mathbb{Z}[t])\) is a forgetful functor from \(S\) as an object in \(\text{Ring}\) to its underlying set.

Exercise: show that \(\mathbb{Z}[t]\) is an initial object in an appropriate category, and that the trivial ring is the terminal object in the appropriate category.

#### But what is Spec?

It’s the spectrum of a ring! Intuitively, \(\text{Spec} R\) is the geometric object canonically associated to \(R\).

For example:

- \(\text{Spec}(\mathbb{Z})\) is “The Point”
- \(\text{Spec}(\mathbb{Z}[x,y]/ (x^2 + y^2 – 1))\) is “The Circle”
- \(\text{Spec}(\mathbb{Z}[x,x^{-1}]\) is “Pairs of Invertible Elements” (e.g. a field with the origin removed)

Let’s look at \(\text{Spec}(\mathbb{Z}[x,y]/ (x^2 + y^2 – 1))(S)\) when \(S\) is \(\mathbb{R}\), it’s obviously the circle BUT IT WORKS FOR (almost) ANY S. The concept of there being a canonical geometry associated to every ring is very exciting!

Sidenote:

When people say “elliptic curve” they might mean “a family of elliptic curves”, this is commonly written \(C to \text{Spec} R\) where \(R\) is the underlying coefficient ring.

For example, \(y^2=4x^3+ax+b \mapsto a, b in R\) is the family of elliptic curves of the form \(y^2=4x^3+ax+b\) over the coefficient ring \(R\).

I’m trying to figure out what happens when \(S\) is not something nice like \(\mathbb{R}\) or \(\mathbb{C}\). What is a circle in the coefficient ring of an elliptic curve?

_Thanks to [Aaron Mazel-Gee](https://math.berkeley.edu/~aaron/) for walking me through the concept of \(\text{Spec}\) (all errors in this post are mine and not his)._
