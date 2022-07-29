---
title: "Elliptic Curve Formal Group Laws: Philosophy and Derivation"
date: "2015-05-01"
categories: 
  - "math"
---

_Eine deutsche Übersetzung des folgenden Abschnitts befindet sich [hier](/elliptischen-kurve-fgg/)._

#### Philosophical Motivation

In the study of groups with topological structure, we commonly replace the global object (the group) with a local object (the infinitesimal group). We play the following game.

1. Start with a space.
2. Define a method of adding two points to get a third point of this space (which is associative, unital, commutative, and has inverses).
3. Derive an infinitesimal group.

Examples:

- Lie group (group internal to the category of smooth manifolds) \(\to\) Lie algebra (group internal to the category of infinitesimal spaces).
- elliptic curve formal group \(\to\) elliptic curve formal group law.

1. Start with an elliptic curve over a scheme \(\text{Spec }R\).
2. An elliptic curve is a group scheme (over \(\text{Spec }R\)) whose underlying object is 1-dimensional, proper, and smooth. _In less abstract terms, it comes with an addition law and a marked point for free._
3. Formally complete the elliptic curve along the origin _In less abstract terms, take the Taylor series expansion of the addition law._

The phrase “formal completion of E along 0″ looks like the Taylor series expansion of an elliptic curve about the origin. In some sense, ‘completion at a point’ does give you the Taylor series of a map in the algebraic-geometric setting, but it’s more general than this. That is, a Taylor series is usually of the form \(f(x+y) = f(x) + yP_1(x) + y^2P_2(X) + …\), where \(P_i(x) = \frac{f^{(i)}(x)}{i!}\).

_For more on this, Aaron Mazel-Gee wrote a great paper on [Dieudonne modules](https://etale.site/xkcd/dieudonne-modules.pdf)._

We can view formal completions as key to our search for an algebraic version of a Lie Algebra. In differentiable Lie theory, the Baker-Campbell-Hausdorff theorem describes the group-law in a small neighborhood of the identity. However, this uses the exponential, which fails to make sense, even as a formal power series, in characteristic \(p\).

This justifies our quest: describe the group law in a small neighborhood of the identity of the curve without using the exponential map. First, we must go on an excursion to understand completion.

#### You Complete Me

Recall the method of obtaining \(\mathbb{Z}_p\), the p-adic completion of the integers. \begin{align*} & \mathbb{Z}/p \hookleftarrow \mathbb{Z}/{p^2} \hookleftarrow \mathbb{Z}/p^3 … \\ \mathbb{Z}_p & = \text{lim } \mathbb{Z}/p^n \end{align*}

Let \(R\) be a ring. We have a polynomial ring, \(R[t]\). How do we make a ring of formal power series from this? Well, note that \(R[t]/t = R\), so we get: \begin{align*} & R \hookleftarrow R[t]/t^2 \hookleftarrow R[t]/t^3 \hookleftarrow … \\ R[[t]] & = \text{lim } R[t]/t^n \end{align*}

Similarly, \begin{align*} & \text{Spec }A \hookrightarrow \text{Spec }A[t]/{t^2} \hookrightarrow \text{Spec }A[t]/t^3 \hookrightarrow … \\ \text{Spf }A[[t]] & = \text{colim }\text{Spec }A[t]/t^n \end{align*}

Completion is the process of picking a ring \(R\) together with a maximal ideal \(m\) and forming the limit of \(R/m^n\).

As an example, we consider the group scheme \(E\) (for example, an elliptic curve) over \(\text{Spec }A\).

\(\text{Spec }A[t]/t^2\) is the infinitesimal neighborhood of the first derivative/first infinitesimal neighborhood of \(\text{Spec }A\). This is like truncating the Taylor series after the information given by the first derivative, e.g. Lie algebra. Similarly, \(\text{Spec }A[t]/t^3\) tells us about 2nd derivative, and we need a larger infinitesimal neighborhood for the second derivative. In the case of a formal group law, we want to write down all of the infinitesimals, so we take the colimit of \(\text{Spec }A[t]/t^n\) and get a formal scheme.

Zariski locally on \(S\), the formal completion \(\hat{E}\) of \(E\) along the zero section is of the form:

\\(\hat{E} \simeq \text{Spf }(A[[t]])\\) where \(\text{Spf }A[[t]] := \text{colim }\text{Spec }A[t]/t^n\)

For example, Zariski-locally over \(Spec(A)\), we can put an elliptic curve in Weierstraß normal form \(y^2 + a_1 xy = x^3 + a_2 x^2 + a_4 x + a_6\) (I think outside of characteristic 2 and 3, we may take \(a_1 = 0\)).

In this form, the variable \(z = x/y\) is a uniformizer at the identity (\(y\) has a pole of order 3 at the identity, \(x\) has one of order 2, so \(x/y\) has zero of order 1). It’s reasonable to expect \(Spf(A[[z]])\) to be the formal completion.

_Note that we are choosing an isomorphism \(G \simeq \text{Spf }R[[t]]\) here, that is, choosing where to send \(t\) in \(G\) (sidenote: if \(G\) is associated to a cohomology theory, our choice of where to send \(t\) corresponds to a choice of complex orientation for the cohomology theory)._

It is worth noting the difference between \(\varinjlim \text{Spec }A[t]/t^n\) and \(\text{Spec}\varinjlim A[t]/t^n\). \\(\varinjlim \text{Spec }A[t]/t^n =: \text{Spf }A[[t]]\\) \\(\text{Spec} \varinjlim A[t]/t^n =: \text{Spec }A[[t]]\\) Formal schemes live in a category of limits of schemes (affine formal schemes live in a category of rings with the \(I\)-adic topology for some ideal \(I\)). So Spec(\(A[[t]]\)), considered as a formal scheme, would just be the trivial limit of Spec of the non-topologized ring.

Think about it: with Zariski topology, Spec(\(k[[t]]\)) is dense in Spec(\(k[t]\)), while Spec(\(k[t]/(t^n)\)) is not, for any \(n > 0\).

#### Our elliptic curve is a projective beast: reviewing the necessary coordinate changes.

Projective polynomials are defined by the following property: \(P(\lambda x, \lambda y, \lambda z) = \lambda^k P(x,y,z)\)

We can make any polynomial into a polynomial with this property by homogenizing (e.g. \(y^2z = x^3 + axz^2 + bz^3\)).

We ask for the completion of the elliptic curve at the identity wrt the group structure. That is, at the “point at infinity” if we write it in Weierstraß form. “Point at infinity” is the intuition, but “homogenize and look at the projective variety” is how its formalized. (Affine things are slightly awkward, and we can always homogenize equations by adding in another variable, so there’s a canonical way to compactify. Sadly, that’s often implicit in the literature.)

1. Input elliptic curve in homogeneous coordinates (\(y^2z = …\))
2. Coordinate transform (1) s.t. our elliptic curve contains the origin. (\(f(t) = t…\))
3. We want an equation for \(S\) in terms of \(T\), so we find the fixed point \(T = \phi(T)\) of (2) by repeatedly substituting \(t…\) for \(f(t)\). This gives us a power series of in terms of \(T\).

Let’s talk about step 2: we can’t talk about the point at infinity in our staring chart of the elliptic curve since it doesn’t include it , that is, \((0,0)\) doesn’t even generally lie on \(y^2 = x^3+ax+b\) so we must coordinate change to an affine coordinate CONTAINING that point.

![Screen Shot 2015-03-22 at 2.14.29 PM](/wp-content/uploads/2015/03/Screen-Shot-2015-03-22-at-2.14.29-PM.png)

There’s three maps from projective coordinates back to affine coordinates. All are defined on a certain open subset of \(\mathbb{P}^2\) (namely the one where a certain coordinate doesn’t vanish), and the corresponding map gives a coordinate chart for that open subset).

For an elliptic curve in Weierstraß form, the \(z \neq 0\) chart doesn’t contain the identity of the elliptic curve, but the \(y \neq 0\) has the identity at \((0,0)\). We’re basically changing coordinates from the classical affine equation \((y^2=..)\), which lives on the \(z \neq 0 thing\), to the other one living on the \(y \neq 0\) thing.

Think about it as follows: the elliptic curve lives in \(\mathbb{P}^2\), but we can describe its intersection with each of the coordinate charts. That’ll of course be different equations. The \(z \neq 0\) and \(x \neq 0\) are not suitable to talk about the neighbourhood of the identity, because they simply don’t CONTAIN the identity.

#### Derivation (for simplified Weierstrass):

The explicit derivation of elliptic curve formal group law from an elliptic curve is performed with a series of coordinate changes:

By plugging the expression for \(f(T)\) into itself repeatedly, \(f(T)\) stabilizes to a power series with \(T\) as the only variable.

It is sometimes tiresome (and sometimes meditative) to go through the coordinate changes and explicit solving for \(f(T)\) in terms of \(T\) on paper. sage (available free online) automates this process:

```
sage: E = EllipticCurve([2,3]).formal_group(); E}
Formal Group associated to the Elliptic Curve defined by y^2 = x^3 + 2*x + 3 over Rational Field
sage: F = E.differential(15); F
1 + 4*t^4 + 9*t^6 + 24*t^8 + 120*t^{10} + 295*t^{12} + 1260*t^{14} + O(t^{15})
```

#### An afternote on Cartier’s curves

I’ll wrap this up by mentioning Cartier’s curves. Cartier’s method relies very heavily on the fact that **a formal group law is the formal spectrum of a power series ring**. The previous method relied heavily on the fact that a formal group law \(G\) is the inductive limit of the finite subgroup schemes \(ker(p^n)\), where \(p^n\) is the \(n\)th Frobenius morphism: \(G \to G\), \(x \mapsto x^{p^n}\). This relies on all modules being ind-finite, which [Lubin mentions](https://projecteuclid.org/download/pdf/_1/euclid.bams/1183538117) to be hopeless in the case of Dieudonne modules.

Let \(B\) be any commutative \(A\)-algebra which is separated and complete over the topology defined by \(I^n\) where \(I\) are ideals of \(B\) (i.e., let \(B\) be a formal \(A\)-scheme).

For example, take \(B = A[[t]]\), the formal power series ring in one variable. The ideal \(I = tA[[t]]\), the set of \(n\)-tuples of elements (type: power series) in \(I\) may be equipped with a composition law \(\textbf{F}(a, b) = a*b\) (this composition will be finite, as we are working with nilpotent elements). Cartier calls such maps \(\text{Spf }A[[t]] \xrightarrow{F} \text{Spf }A[[t]]\) “curves in \textbf{F}.”

This name choice makes sense. Recall that we can define a polynomial over \(\mathbb{C}\) as \(\mathbb{C}[t] \to \mathbb{C}[t]\), similarly, we can define a curve over over \(\text{Spec }A\) as \(\text{Spf }A[[t]] \to \text{Spf }A[[t]]\).

_Thank you to Akhil Mathew (for explaining the definition of formal schemes), Jesse Silliman (for answering my various questions on completion and formal schemes), and Achim Krause (for walking me through the derivation of the group law)._
