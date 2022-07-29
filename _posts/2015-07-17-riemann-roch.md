---
title: "Complex Analysis: Poles, Residues, and Child’s Drawings"
date: "2015-07-17"
categories: 
  - "math"
---

_Thanks to Laurens Gunnarsen for his superb pedagogy and for this amazing explanation on the incredible depth of connections springing from the Sperner lemma. All errors are mine not his. This started with a chain of events, sitting in on number theory seminars and encountering Abel’s differentials of the first and second kind, interest in the dessin, and led up to asking Laurens:_

## How do I understand poles and residues?

By understanding Riemann-Roch. But, first of all, you should know the zeroes and the poles of an analytic function, together with the residues of the function at each, pretty much tell you all you need to know about the function.

This is a little bit like saying that if you know the zeroes of a rational function — which is to say, the zeros of the polynomial that is its numerator — and the poles of a rational function — which is to say, the zeroes of the polynomial that is its denominator — then you basically know the rational function.

The roots of a polynomial determine it up to an overall multiple. That’s about all this idea involves, at the level of rational functions.

And meromorphic functions are only very slightly more complex things than rational functions, as it turns out.

A polynomial is determined by its roots (up to a scalar). When you add in multiplicity data, it’s completely determined. This multiplicity data is what the residues give you.

If two polynomials have the same roots with the same multiplicities, then they are indeed proportional.

Sidenote: This follows from the fundamental theorem of polynomial arithmetic.

Every polynomial (in one variable?) factors uniquely into \((x - a)^n\) factors, with the a and n varying from factor to factor. Well, so you know how uniqueness works, right? You have to exclude 1 and -1 from the primes, if you want uniqueness.

So, meromorphic functions don’t have to be rational functions, but they very nearly are.

What is the condition defining meromorphicity? It’s really just that the function be a conformal map wherever it is defined, which is a local differential condition. Essentially just the Cauchy-Riemann equations. Just a constraint on the first partial derivatives at a point, really.

So you impose that constraint at all points where it’s possible to do so, and the resulting functions are called meromorphic.

They’re like analytic functions, except that they may have singularities at finite points. As opposed to analytic functions, which only have singularities at infinity.

Look at it this way: \(\sin(x)\) is analytic, but it isn’t a polynomial. \(\tan(x)\) is meromorphic, but it isn’t rational.

Analytic functions are like generalized polynomials. \(\sin(x)\) is like a polynomial, in that it has isolated roots, and is (almost) uniquely determined by those roots.

We have, in fact, Euler’s product formula, \\(\sin(x) = x[(1 - (x/\pi)^2][(1 - (x/2\pi)^2][(1 - (x/3\pi)^2]… \\), which is like the expression

\\(a + bx + cx^2 + … + mx^n = a(1 - x/r)(1 - x/s) … (1 - x/t)\\) where \(r, s, …, t\) are the \(n\) roots of the polynomial of degree \(n\) on the left-hand side.

Of course I do not mean to constrain these roots by insisting that no two of them may coincide. I want, on the contrary, to allow coincidences of that sort.

Sidenote: A general degree-n polynomial factors, at least over the complex numbers, at least over the complex numbers it does. In complete generality, you have all kinds of annoyances. But in special situations you can get around them. I believe there is indeed a p-adic version of Riemann-Roch, but I don’t know exactly what it is. I mean p-adic analysis is pretty cool though. Probably the best example is really the first one, namely, Dirichlet’s theorem. Dirichlet proved that if a, b are relatively prime, then the sequence a + bn, as n ranges over the natural numbers, contains infinitely many primes. And indeed that the density of primes in this sequence is just 1/b times the density of primes in the integers. Here’s an example of a nice theorem in p-adic analysis: if {a_n} is a sequence which is such that \(a_n \to 0\) as \(n \to \infty\), then Sum(a_n) exists. (p-adically, that is.)

Riemann-Roch asserts a sort of mismatch between poles and zeroes for meromorphic functions on a Riemann surface, with this mismatch due to the Euler characteristic.

Riemann-Roch basically tells you that the genus of a Riemann surface is detectable by examining the meromorphic functions defined on it. This is possible for essentially for the same reason that the average Gaussian curvature of a surface is determined by and determines the genus.

That is, the same mechanism is at work in Riemann-Roch as is at work in Gauss-Bonnet.

We might say that instead of total positive and negative curvature we have number of poles.

Poles, on the one hand, and zeroes, on the other. Poles are zeroes of the reciprocal of the function.

In some sense, it boils down to Poincare-Hopf, which in turn may be thought of as a sort of elaborate consequence of Sperner’s lemma.

The Sperner lemma is the combinatorial root of almost all the theorems of (classical real and complex) analysis with a topological flavor. It really ought to be required reading for everybody interested in any topological applications in analysis! [Here](/wp-content/uploads/2015/07/sperner.pdf)‘s an elegant and well-illustrated paper on it.

As the paper above shows, you take an arbitrary compact surface (e.g, the surface of the earth) and you remove points and make branch cuts until you have the surface decomposed into a (typically small) number of components to which Sperner’s lemma applies.

That is, it’s decomposed into topological discs with boundaries on which the behavior of something or other of interest (e.g., a vector field) may be regarded as giving a “Sperner coloring” there, and in the interior.

## It looks like the Cauchy residue theorem follows from the Sperner Lemma.

Yes, that’s right: the Cauchy theorem is pretty much just an artful elaboration of the Sperner lemma. Of course there is a little bit more to it. One needs to say, as in the paper I just shared with you, how the analytic structure on the surface gives rise to a Sperner coloring on some simplicial approximation to the surface.

## This looks similar to a dessin d’enfant. Given a dessin, can I tell with certainly which polynomial it represents? How?

Yes. This, in fact, is what Grothendieck found so impressive about dessins. Well, Grothendiek and, of course, Belyi. They determine a Riemann surface pretty much completely.

The crucial thing to appreciate is that a dessin is essentially a recipe for making a Riemann surface.

And it is possible to make a Riemann surface with only combinatorial information of the sort provided by a dessin because all Riemann surfaces with genus at least 2 may be given a geometry of constant negative curvature, which is what people call the Uniformization Theorem.

Once you have a geometry of constant negative curvature on your Riemann surface, you can triangulate it, and each triangle will resemble a triangle in the upper half plane.

Globally the triangles need not be connected as would be a triangulation of the upper half plane, of course. But each individual triangle is just an ordinary hyperbolic triangle.

So then all you need is incidence data. Which triangles are connected how to which others?

This sort of thing is precisely what you get from a so-called Belyi function. Which, in turn, is specified by a dessin.

A Belyi function basically assigns the value 0 to each vertex of the simplicial complex determining the Riemann surface, the value 1 to the midpoint of each edge, and the value infinity to each face center.

So you can tell how many vertices the simplicial complex has just by looking at the inverse image of 0. You can also tell how these vertices are connected, and which sets of edges bound faces.

And so forth, and so on.

Essentially, a Belyi function keeps track of the vertices, edges, and faces of a triangulation by hyperbolic triangles of a compact Riemann surface of sufficiently large genus (g is 2 or more). These things are also specified by a dessin. From the dessin you can write down the Belyi function, and conversely.

Klein does all this very explicitly in several very illustrative cases. He noticed, but did not assert as a theorem, the remarkable theorem of Belyi.

It is an extraordinary theorem, that any Riemann surface that may be mapped meromorphically and surjectively to the Riemann sphere in such a way that the mapping is branched only over 0, 1 and infinity must in fact be an algebraic surface.

That is, a Riemann surface with this property is the zero set of a polynomial WITH ALGEBRAIC COEFFICIENTS.

Amazing, really, that you can conclude that essentially number-theoretical fact from these complex analytic and geometric data.

Grothendieck called Belyi’s theorem miraculous. He was stunned by it. Amazed. He maintained that he had never been so impressed by any mathematical result, before or since. It essentially gives a combinatorial means of investigating the absolute Galois group!
