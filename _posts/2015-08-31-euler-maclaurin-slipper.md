---
title: "On Detiling Polynomials: A Generalization of the Euler MacLaurin Formula"
date: "2015-08-31"
categories: 
  - "math"
---

Today, we’ll be talking about a relation between the discrete and continuous.

A friend of mine, Aaron Slipper, explained to me a simple and striking perspective of the Euler-MacLaurin formula — and his work extending it.

He came upon this through the proof of Jacobi, relayed to him by our beloved teacher Laurens Gunnarsen. The proof of Jacobi uses the lattice group \(\mathbb{Z} \subset \mathbb{R}\), so Aaron sought and found analogous relationships for other lattice groups.

## The translation group, 1-d case

One mental model for Aaron’s construction is as follows. We are given a discrete group (a pattern motif and a set of allowed transformations), and wish to examine how we can build a lattice with this group over time (each time evolution step is an application of one of the allowed translations. We might do so in the following fashion.

Each element in the discrete group can be written as a sequence of moves from the identity.

MISSING IMAGE [![Bildschirmfoto 2015-09-23 um 10.34.50 vorm.](/wp-content/uploads/2015/08/Bildschirmfoto-2015-09-23-um-10.34.50-vorm..png)](/wp-content/uploads/2015/08/Bildschirmfoto-2015-09-23-um-10.34.50-vorm..png)

Here we have

\(F(0) = f(0)\) \(F(1) = f(0) + f(1)\) \(F(n) = f(0) + f(1) + …. + f(n)\)

That is:

\\(F(x) = \sum_{x} f(x)\\)

We have a group action of time for any \(t \in \mathbb{R}\), a successor function, which maps \(F(X) \to F(X+t)\). That is,

\\(e^{tD}F(X) \mapsto F(X+t)\\)

where \(D = \frac{d}{dX}\).

> This is the operator version of Taylor’s theorem. This is saying that \(d/dx\) is an infinitesimal transformation, as the exponential “flows” \(d/dx\) along, it generates the real line.

* * *

**Sidenote (a physical incarnation):** The equation \\(e^{tD}F(x) = F(x+t)\\) reminds me of a theorem about a wave function for an electron in a crystal with no defects (such wavefunctions are of the form \(\phi(r) = e^{ik\cdot r}u(r)\), and are said to be “Bloch,” after the phyiscist).

The Bloch theorem states that a wave function in a crystal (with no defects) can change under translation only by a phase factor \\(e^{ik \cdot T} \phi(r) = \phi(r + T)\\) This formal resemblence isn’t so surprising: the defining property of a crystal is translational symmetry.

* * *

Usually \(t\) ranges over \(R\), but let’s restrict our exponential, \(e^{tD}\), by removing all \(t\) that aren’t supported by the type \(F\). For example, if \(F: \mathbb{Z} \to \mathbb{Z}^2\), then restrict to \(t \in \mathbb{Z}\).

Aaron explained a simple example of such a system. Start from the origin, \(0\), of \(R^1\):

\\(f(0) + f(1) + … + f(n) = F(n)\\)

\\(1 + 1 + … + 1 = n\\)

[![Bildschirmfoto 2015-09-05 um 12.12.21 nachm.](/wp-content/uploads/2015/08/Bildschirmfoto-2015-09-05-um-12.12.21-nachm..png)](/wp-content/uploads/2015/08/Bildschirmfoto-2015-09-05-um-12.12.21-nachm..png)

So then we can express f(n) in terms of the previous F(n).

\\(f(n) = F(n) - F(n-1)\\)

\\(1 = n - (n-1)\\)

Using the group action of time, \(e^{tD}F(x) = F(x+t)\), we rexpress:

\\(f(n) = e^{0 \cdot D} F(n) - e^{-1 \cdot D} F(n)\\)

\\(f = (1-e^{-D})F\\)

\\(frac{1}{(1-e^{-D})} f = F\\)

We call \(1-e^{-D}\), or, equally, \(\frac{1}{(1-e^{-D})}\) the “detiling polynomial.”

Note that the latter is the Bernoulli numbers, replacing \(D\) with a natural number \(n\).

## The translation group, n-d case

Another example, found by Aaron, is the square lattice (in the upper half complex plane), i.e., \(Z^2\) \in \(R^2 \simeq C\):

[![Bildschirmfoto 2015-09-05 um 12.12.43 nachm.](/wp-content/uploads/2015/08/Bildschirmfoto-2015-09-05-um-12.12.43-nachm..png)](/wp-content/uploads/2015/08/Bildschirmfoto-2015-09-05-um-12.12.43-nachm..png)

Recall the set theoretic fact: \(A \cup B – A – B + A \cap B = 0\)

![Bildschirmfoto 2015-09-05 um 12.05.58 nachm.](/wp-content/uploads/2015/08/Bildschirmfoto-2015-09-05-um-12.05.58-nachm..png)

\\(f(x) = F(x) - F(x-1) - F(x-i) + F(x-i-1)\\)

\\(f(n) = e^{0 \cdot D} F(n) - e^{-1 \cdot D} F(n) - e^{-i \cdot D} F(n) + e^{-1-i \cdot D} F(n)\\)

\\(f = (1-e^{-D})(1-e^{-iD})F\\)

**It’s important to note that the choices of i and 1 as generators of the square lattice are arbitrary,** we could have also chosen something like (i+1) and 1.

[![Bildschirmfoto 2015-09-05 um 12.18.16 nachm.](/wp-content/uploads/2015/08/Bildschirmfoto-2015-09-05-um-12.18.16-nachm..png)](/wp-content/uploads/2015/08/Bildschirmfoto-2015-09-05-um-12.18.16-nachm..png)

Also note that the detiling polynomial is not invariant under such a generator change.

**In summary,** we can express the “tiling” of lattices starting from a point as discrete dynamical systems, s.t. our successor function marches us across a configuration space (allowed states as you build the lattice) fibered over the discrete group \(G\) (aka, indexed by \(G\)).

If we think about this from the point of view of Stokes theorem, it is then natural to assign positive and negative weights to the lattice such that we build a connected structure by tesselating, all but the “corners” will cancel.

If we assign a positive and negative weight to each vertex, that is: - + + -

This is simple to see if you take the assignments of weights to be the incidence matrix of a graph, that is,

\[ \left[ {\begin{array}{cc} -1 & 1 \ 1 & -1 \end{array} } \right] \]

## Background on the Möbius tiling

Due to a misunderstanding, I thought Aaron had stopped at the 2-d square lattice, and this presentation of the concept is bursting with generalizations — so I went home and drew a lot of lattices, derived the detiling polynomial for n dimensional square lattice case, for the truncated icosahedron (C60), and for the n-dimensional hexagonal tiling (which reduces to the n-dimensional square case).

![Bildschirmfoto 2015-09-05 um 12.06.05 nachm.](/wp-content/uploads/2015/08/Bildschirmfoto-2015-09-05-um-12.06.05-nachm..png)

It turns out he’d already derived these cases, and he’d asked how to derive the hyperbolic detiling polynomial, but playing with them got me very interested. They’ve been on my mind during my whole cross country road trip.

I’ve been reading Poincare’s Analysis Situs, and became interested in Fuchsian (a German name, pronounced Fook-see-in) groups, as these motivated Poincare to define what we now call the fundamental group (or Poincare group) of a space.

Since I was reading about them, I realized a simple case of what Aaron was saying about non-Euclidean lattices is the case of a Fuchsian group, specifically, the PSL(2,C), otherwise known as the Mobius transformation group:

<iframe width="560" height="315" src="https://www.youtube.com/embed/JX3VmDgiFnY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

What is the detiling polynomial for the Mobius group?

That is, what are the generators that define a fundmental domain which we can translate to build the hyperbolic tiling of the complex plane, like the one we saw above?

Wait a moment, those are squares… but I’m asking about a translation group of hyperbolic triangles, how did we go from one to the other?

## Picturing SL(2,R) and \(\mathfrak{sl}(2, R)\)

Let’s ignore the projectivization for the moment, and just look at \(SL(2, Z)\). In fact, let’s look first at \(SL(2, R)\), to make things even simpler.

Now, SL(2, R) is a 3-dimensional Lie group. It’s basically that portion of R^4 consisting of 4-tuples (a, b, c, d) for which \(ad - bc = 1\).

So that’s one equation constraining four unknowns. So SL(2, R) is 3-dimensional.

By the way, \(ad - bc = 1\) iff \(4ad - 4bc = 4\) and this immediately translates into

\\((a + d)^2 - (a - d)^2 - (b + c)^2 + (b - c)^2 = 4\\)

so that, if we change variables in a rather simple way, we conclude that SL(2, R) is basically just the level set of the function

\\(u^2 + v^2 - x^2 - y^2\\)

In other words, \(SL(2, R)\) can be presented as the set of all \((u, v, x, y)\) for which that equation holds.

Now, let’s look at the Lie algebra of this Lie group. That is, let’s suppose that \(Id + tA\) has determinant \(1\), where Id is the identity matrix, and \(t\) is infinitesimal — in the sense that we can discard outright any term that includes \(t^2\) or any higher power.

We want to see what this means for the matrix \(A\).

What’s important to remember is that the determinant of a 2×2 matrix is, as we have just finished noticing, a quadratic function of its entries. But quadratic things in \(t\) are to be discarded — so the contribution of the off-diagonal terms in \(Id + tA\) can be ignored. Because \(Id\) is diagonal, it follows that the off-diagonal terms are each going to be proportional to \(t\). So their product, which is how they enter into the determinant, is going to be order \(t^2\), and therefore is set to \(0\).

\(Id + tA = \begin{pmatrix} 1 & 0 \\ 0 & 1 \end{pmatrix} + t \begin{pmatrix} a & b \\ c & d \end{pmatrix}\)

Due to this, only the diagonal elements of \(Id + tA\) contribute to its determinant, if we are only going to retain first-order terms in \(t\).

\(\text{det} \begin{pmatrix} 1 + ta & tb \\ tc & 1 + td \end{pmatrix}\)

And indeed, the determinant to first order in \(t\) is just \((1 + ta)(1 + td) = 1 + t(a + d)\), which is only equal to 1 (to first order in t) when \(a + d = 0\). That is, the Lie algebra of \(SL(2, R)\) is just the set of 2×2 matrices with trace (i.e., the sum of their diagonal elements) equal to zero.

The general element of this Lie algebra looks like this:

\(\begin{pmatrix} a & b + c \\ b - c & -a \end{pmatrix}\)

because we can always write the off-diagonal ones as the sum and the difference of two other numbers.

Look at what becomes of the determinant here.

For a matrix of this form, the determinant is \\(c^2 - a^2 - b^2\\) Keep that in mind, because it is the Casimir element of this Lie algebra.

Now, the group acts on its Lie algebra by conjugation, giving rise to what is called the adjoint representation. Given A in the Lie algebra, and U in the Lie group, we put \\([Ad_U](A) = UAU^{-1}\\)

The crucial thing to appreciate here is that the trace of \(A\) and the trace of \(UAU^{-1}\) are guaranteed to be the same, and the determinants are also going to match. That is, trace and determinants are both functions of the conjugacy class of A, rather than of A itself.

How does a non-Euclidean plane arise from SL(2, R)?

We first have to know where the plane is, before we can start to tile it!

The plane is actually in the Lie algebra, which is why we’ve been droning on and on about it.

In fact, the non-Euclidean plane we’ll be tiling is exactly the set of points \((a,b,c) \in \mathbb{R}^3\) corresponding to the trace-free matrices:

\(\begin{pmatrix} a & b + c \\ b - c & -a \end{pmatrix}\)

for which

\\(c^2 - a^2 = b^2 = 1\\)

This set is just a paraboloid of revolution in \(R^3\).

The point is that the natural (i.e., group-invariant) notion of distance between a pair of points in this paraboloid is not the obvious Euclidean distance in \(R^3\). Instead, we have the Hyperboloid model (thanks Minkowski):

Now, an action of a discrete subgroup of the non-Euclidean isometry group is a tiling. That is, it is characterized by a “fundamental domain.”

[![Source: Wikipedia](/wp-content/uploads/2015/08/220px-HyperboloidProjection.png)](/wp-content/uploads/2015/08/220px-HyperboloidProjection.png)

[Source: Wikipedia](https://upload.wikimedia.org/wikipedia/commons/thumb/1/1f/HyperboloidProjection.png/220px-HyperboloidProjection.png)

So there’s our translation group of hyperbolic triangles! It’s the plain old triangular tiling on the non-Euclidean plane.

## Perspectives on the detiling polynomial

After talking over each other for a bit, Aaron pointed out that I was speaking about the 1st perspective, and he was speaking about the second:

1. A sum over a discrete subgroup of a Lie Group, compared to an integral over a corresponding region. This is actually done ON the Lie Group itself.
2. Groups acting via automoprhisms on a corresponding space. The PSL(2,R) acts as a group of isometries, and the discrete group acts on a tiling. (That is, the discrete group is a Fuschian group.)

## Afternote: Unfinished speculation wrt the Lattice of Integers on a Hyperbolic Line

_From here on, the post is scraps and thoughts in progress, feel free to stop here._

So we can write down the detiling polynomial with the generators presented as matrices, and so if we wanted to, say, as what the integers of a hyperbolic line are, we just need to solve for d/dt=: D in our shift operator.

Then once we can write down a detiling polynomial for a line with a non Euclidean metric, that is, write down d/dt such that The operator d/dt generates the hyperbolic line by translation by the exponential (as a flow on the hyperbola), the issue that I have is figuring out if I want the integers of a hyperbolic to be

Of a hyperbola 1) projection Or 2) Arc length based Or 3) The subset of the hyperbola that consists of Points P such that |P-A| is an integer, and |P-B| is an integer

So then I guess really we want our integers to be a discrete subgroup of wrt this group operation.

I tried to derive the particular D we need to have e^{nD}F(t) = F(t+n) make sense by writing a hyperbola parametrically and trying to solve for dt in terms of dx and dy, but it felt more complicated than necessary.

Let’s reparameterize the hyperbola in terms of one variable, \(t\), to get a viable \(d/dt\) to stick into our shift operator \(e^n\frac{d}{dt}\). To get a hyperbolic shift operator, we look at the line \((a \sec t, b \tan t)\), for an arbitrary choice of \(a\) and \(b\).

We can define the distance between two points to be the infimum distance of all curves between them.

One way to make a hyperbola is to pick two points on your y-axis, let them be c units apart, and look at all points p such that \(|p-A| - |p-B| = c/2\). Let’s call this hyperbola \(R_h\).

What are the integers of a hyperbola? Maybe they are the subset of the points \(p\) with the property that \(|p-A|\) AND \(|p-B|\) are whole numbers, let’s call this subset \(Z_h\). Perhaps this is not quite what we want.

There’s something called operator calculus or umbral calculus, and it’s suited for our goal of writing down a detiling polynomial for a discrete subgroup of the hyperbola \(Z_h \subset R_h\).

[![Source: Rosen's Umbral Calculus](/wp-content/uploads/2015/08/Bildschirmfoto-2015-09-05-um-2.53.47-nachm..png)](/wp-content/uploads/2015/08/Bildschirmfoto-2015-09-05-um-2.53.47-nachm..png)

[Source: Rosen’s Umbral Calculus](http://www.romanpress.com/matharticles/umbral1.pdf)

I went from subset to subgroup with no justification, so let me give some. A hyperbola is a group, in fact, any conic section is a group.

For example, the group structure on a line is pretty simple. Take \(y = ax + c\) with origin \((0,c)\), then for \((x_1,y_1),(x_2,y_2)\) lying on the line, their sum is the point \((x_1 +x_2,y_1 +y_2 −c)\).

[![Source: Wikipedia](/wp-content/uploads/2015/08/Bildschirmfoto-2015-09-05-um-3.04.44-nachm..png)](/wp-content/uploads/2015/08/Bildschirmfoto-2015-09-05-um-3.04.44-nachm..png)

[Source: Wikipedia](https://en.wikipedia.org/wiki/File:Conic_Sections.svg)

In greater generality, given a conic section and a choice of origin, say \(O\). Then for points \(A, B\) lying on the conic, take the straight line joining them (or tangent if the points are the same) and draw the parallel line through \(O\). This intersects the conic at a third point, \(C\), and define the sum \(A + B\) to be \(C\).

You may object because I’m using the parellel postulate, but we’re looking at a hyperbola embedded in \(R^2\), with the usual Euclidean metric, for the moment.

## A bit of background on Fuschian functions

> “So three parameters specify a Fuchsian function; Three integers, the sum of whose reciprocals is less than 1. These then correspond to the angles of a hyperbolic triangle, And Poincaré showed how you can tesselate the Poincaré disk with them in such a way that a discrete group of isometries of the Poincaré disk (a discrete subgroup of PSL(2, R) ) acts transitively on them.” - Aaron

This section is incomplete, it’s a trainwreck from here on out.

We know it’s bigraded, like the torus group, but how do we count such a bigrading. Do we use a trigrading, that is, number of copies of J, K, and \((JK)^{-1}\)?

If we then take our generators \(i\) and \(1\) for the square lattice, which generate translation “up” and “over” respectively, these guys live on the complex plane with the usual metric. What if we say that they live on this new metric? What if we simply replace each generator with:

(abcd) (i1) = ai+b/ci+d

Here we see that there are actually 4 transformations being done in succession,

1. a translation
2. an inversion,
3. a homothety/rotation,
4. and another translation.

If, like me, you ask “how the hell did they come up with az+b/cz+d” I offer two pieces of thought \[ \left[ {\begin{array}{cc} a & b \end{array} } \right] \left[ {\begin{array}{c} z \ 1 \end{array} } \right] = \left[ {\begin{array}{c} az+b \ cz+d \end{array} } \right] \]

% farrey diagram, multipliying a/c*z/z is still az/cz

For the translations, we know that \(e^{tD} \cdot f(x) = f(x+t)\). What is the analogue of \(exp\) for inversions, that is, for what function f and predecessor \(?\) does the following hold?

\\(? \cdot f(x) = f(\frac{1}{x})\\)

An example of such an \(f\) and \(?\) is

\\(\frac{1}{\sqrt{x}} \cdot \Theta(x) = \Theta\big(\frac{1}{x}\big)\\)

(Also, yes, we could be boring and just use good old translation, \(e^{\frac{1-x}{x}D} f(x) = f(\frac{1}{x}\) This is actually pretty weird, as reflection and translation are not always so nice (1234 example).)

## Some thoughts on detiling polynomials wrt lie algebras of finite groups

(Finite Lie groups Lie algebras)

This week, I asked Alan Weinstein about the concept of a Lie algebra associated to a finite group. He explained that he’d thought about the dual Lie algebra of a discrete group, and felt that looking for the cotangent bundle, not the tangent bundle, was the most natural construction.

Since \(F(x) := \int_0^x f(t) dt\) is the configuration space of our lattice, then \(d/dx F(x) = f(x) = (1-e^{-D}) F(x)\)

These detiling polynomials, e.g., \((1-e^{-D})\), are taking us from our configuration space F to the real numbers - - so the detiling polynomials live in the cotangent bundle (aka Lie coalgebra) NOT the Lie algebra.

%….the hyperbolic lattice’s lie coalgebra using aaron’s thing, my thing with an altered filter….

An interesting thing that Ken Ribet mentioned offhandedly: forget the group structure, can you predict which point will be the next point added? He mentioned this while repeating back what I’d explained to see if he’d understood me correctly.
