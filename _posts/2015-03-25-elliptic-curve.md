---
title: "What is an elliptic curve?"
date: "2015-03-25"
categories: 
  - "math"
---

![Screen Shot 2015-04-09 at 12.09.45 PM](/wp-content/uploads/2015/03/Screen-Shot-2015-04-09-at-12.09.45-PM.png)

_A family of elliptic curves doesn’t really look like that, but it’s an alright picture to have in mind._

An elliptic curve is a curve given by an equation of the form:

\(y^2\) = polynomial of degree \(3\) in \(x\) without a multiple root

_Sidenote: This is a bit misleading, for the elliptic curve is not actually the affine variety associated to \(y^2=x^3+ax+b\). An “elliptic curve” refers to the projective variety associated to the corresponding homogeneous polynomial \(y^2z=x^3+axz^2+bz^3\)._

Elliptic curves are really quite extraordinary. Allow me to boast a few beautiful facts about elliptic curves, before we whip out the language of schemes and make some structural statements.

1. The set of points defined over \(R\) of an elliptic curve over \(R\), together with a marked point \(O\), forms an abelian group. _If you haven’t encountered this fun fact, [this slidedeck by Silverman discusses it pretty nicely](http://www.math.brown.edu/~jhs/Presentations/WyomingEllipticCurve.pdf) so I’ll refer you there._
2. The set of rational points of an elliptic curve defined over \(\mathbb{Q}\) together with \(O\), forms a fintely generated abelian group.
3. In order to study rational points on an elliptic curve, it is important to use properties of the height of a rational point.
4. An elliptic curve (over the complex numbers) is a torus.

_The aim of this post is to dip the reader’s toes into some of the language people use to talk about elliptic curves. In future posts, we’ll talk about Mordell’s theorem, why the notion of height is vital, the genus of a curve, and why an elliptic curve is a torus. In the meantime, I highly recommend [Silverman and Tate](http://books.google.com/books?id=mAJei2-JcE4C&printsec=frontcover&source=gbs_ge_summary_r&cad=0#v=onepage&q&f=false)._

When we say that \(B\) is a ring over \(A\), we mean that we have a fixed ring homomorphism \(\phi: A \to B\).

When we say that \(E\) is a curve over \(R\), we really mean that we have a fixed scheme homomorphism \(p: E \to \text{Spec R}\).

I’ll repeat this, because it took a few tries to get through my head, and it’s crucial: If \(A\) is an algebra over a ring \(R\), that corresponds to a map \(R \to A\), and dually that’s a map, \(\text{Spec }A \to \text{Spec }R\). In this sense, ‘over R’ just means ‘with a map to Spec R’ on the scheme side of things. An elliptic curve has charts \(\text{Spec }R[X, Y]/(Y^2-X^3-aX-b)\), there’s a natural map to Spec R on each of these.

It might be refreshing to note that \(E \xrightarrow{p} S\) is a fibration!

_You might think to yourself, why isn’t the map in question \(E \to R\)? We must remember that \(E\) is a geometric object, so it’s a bit dirty to map a geometric object to a ring, when we have a perfectly good way to look at rings as geometric objects (i.e., [applying the Spec functor](/spectrum-of-ring/))!_

Let’s take a look at an example fiber (let’s say \(R\) is the reals) and we’ve chosen our marked pointed (in this case, the origin of our group) to be the point at infinity.

Sidenote: “point at infinity” is the intuition, but “homogenize and look at the projective variety” is how its formalized). Affine things are slightly awkward, and we can always homogenize equations by adding in another variable, so there’s a canonical way to compactify. Sadly, that’s often implicit in the literature.

[![unnamedq](/wp-content/uploads/2015/03/unnamedq.png)](/wp-content/uploads/2015/03/unnamedq.png)

The zero section “\(0\)” is the section of this family of elliptic curves which consists of the marked point of each fiber (that is, it selects the “origins” of each fiber).

![unnamed-2](/wp-content/uploads/2015/03/unnamed-2c.png)

When I say “elliptic curve with coefficients in R,” I mean a family of elliptic curves \(E\), where each elliptic curve corresponds to a selection of coefficients in \(R\).

Each fiber is a group, so we might think of the total space as a groupoid.

![Screen Shot 2015-03-22 at 2.14.42 PM](/wp-content/uploads/2015/03/Screen-Shot-2015-03-22-at-2.14.42-PM.png)

In the vein of abstraction, we can think of an elliptic curve as a special [group scheme](http://en.wikipedia.org/wiki/Group_scheme). In the same spirit of comparing smooth variety to a smooth manifold, a group scheme can be compared to a topological group.

Barry Mazur’s advice on thinking about a group scheme is far more helpful: consider a topological space and a group. For every point of the topological space, we will say that there must exist an open set containing that point, such that the restriction of the group scheme to that open set is _isomorphic to the Cartesian product of the topological space and the group_ (it is locally a product of the topological space and the group).

Now that we’ve peeked down the rabbit hole, let’s go a bit further.

In the language of algebraic geometry, an elliptic curve \(E\) (over a scheme \(S\)) is a smooth projective proper curve of genus 1 **with a marked section (i.e. “\(0\)” \(: S \to E\))**.

![Screen Shot 2015-03-21 at 2.13.04 PM](/wp-content/uploads/2015/03/Screen-Shot-2015-03-21-at-2.13.04-PM.png)

\(S\) := \(\text{Spec }R\).

_It was pointed out to me that this marked section is important! This means, for example, that the automorphism group of the elliptic curve is finite._

A proper scheme can be conceptually compared to a compact closed manifold.

I’ve been told that the “proper map” can be thought of as “If I can map a punctured disk into my space, and then map a point into my space (where the puncture in the disk is), and I now have a disc in my space, then this is a proper map” — but take this with a grain of salt and a copy of Hartshorne.

But what is the definition of a proper scheme? A proper scheme is a scheme such that the map to the terminal object is proper (depending on whether you’re talking just schemes or ‘schemes over \(K\)’, the terminal guy will be \(\text{Spec }\mathbb{Z}\) or \(\text{Spec }K\)).

It turns out that in algebraic geometry, a lot of properties of objects are special cases of properties of maps in this way.

#### A Closing Remark on Classifying Stuff

As we [desire to classify line bundles](/line-bundles/)...

![Screen Shot 2015-03-21 at 2.17.17 PM](/wp-content/uploads/2015/03/Screen-Shot-2015-03-21-at-2.17.17-PM.png)

... we desire to classify elliptic curves.

We have some collection of objects that we wish to parameterize, say, curves (i.e., 1-dimensional projective complex varieties) and so we define the corresponding representable functor (i.e., we define a “family of curves” and we want to find a space that represents it).

Turns out that to do this nicely, we need the theory of stacks, which account for the fact that some of these objects may have nontrivial automorphisms. The moduli stack of elliptic curves \(\mathcal{M}_{\ell}\) = upper half plane / modular group.

[![Screen Shot 2015-03-21 at 2.17.23 PM](/wp-content/uploads/2015/03/Screen-Shot-2015-03-21-at-2.17.23-PM.png)](/wp-content/uploads/2015/03/Screen-Shot-2015-03-21-at-2.17.23-PM.png)

I leave a question mark where the “universal elliptic curve” should be, for I have yet to really understand what it means to be [a universal elliptic curve](http://pub.math.leidenuniv.nl/~holmesdst/notes_from_talks/UniversalEllipticCurveTalk.pdf).

[![Screen Shot 2015-04-09 at 11.55.43 AM](/wp-content/uploads/2015/03/Screen-Shot-2015-04-09-at-11.55.43-AM.png)](/wp-content/uploads/2015/03/Screen-Shot-2015-04-09-at-11.55.43-AM.png)

_Thank you to Barry Mazur (for answering my question on the “0” section), Achim Krause (for patiently explaining precisely why elliptic curves are projective varieties), Alan Weinstein (for answering my conceptual questions on how to think about the map \(E \xrightarrow{p} S\)), Semon Rezchikov (for talking with me about properties of schemes), and David Yang (for pointing out the importance of the marked section)._
