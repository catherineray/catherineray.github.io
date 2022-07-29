---
title: "Thoughts on Fractional Cohomology"
date: "2015-06-25"
categories: 
  - "math"
---

Before I get into this post, allow me to give a bit of back story.

A close friend of mine, Aaron Slipper, mentioned the notion of a set \(S\) with \(i\) elements, that is, \(S \times S \cup {*} = \emptyset\), (\(\sqrt{-1} \times \sqrt{-1} + 1 = 0\)). _The cardinality of the automorphism group of a set with n elements is n!, but n doesn’t have to be a natural number, we can also evaluate the factorial when n is a complex number, such as \(i!\), using the Gamma function._

I responded that we could similarly construct a “manifold” M which squared to the n-sphere (and call it a radical manifold).

We then extended the category of manifolds by appending radical manifolds, then asking for “Grothendieck completion wrt cartesian product and disjoint union,” in this case, formally constructing the -n-dimensional manifold, \(M^{-n}\).

- \(M \coprod -M = \emptyset\) (gives us a group, with disjoint union as the operation, \(-M\) is the same dimension as M)
- \(M^n \times M^{-n} = *\) (gives us negative dimensional spaces)
- take the algebraic closure, the \(n\)th root of an m-dimensional manifold should be \(m/n\) dimensional (gives us a field)

Then, looking at polynomials with coefficients in this strange field.

There are a few immediate and natural questions:

- What are ideals of this ring?
- What is the cell decomposition of a “manifold” with a \(\sqrt{2}\) dimensional cell? How do we compute the \(\sqrt{2}\) cohomology group?

The following thoughts resulted from a dinner-time discussion (between Aaron Slipper, Alex Mennen and I) on potentially computing homology in fractional dimensions.

* * *

Sometimes we have a graded module \(H^*\) indexed by the natural numbers, equipped with a filtration:

\\(F^0H^* \supset F^1H^* \supset … \supset F^nH^* \supset F^{n+1}H^* \supset … {0}\\)

such that \(F^kH^* \supset F^{k + 1}H^* \supset … \supset {0} = \bigoplus_{k \geq n} H^n\)

Why restrict ourselves to indexing by the naturals? What if we index by the reals? What is the continuous version of a direct sum, a “direct integral”?

We’ll get back to that, first, recall that a formal power series can be thought of as an indexed collection of coefficients, for example, \({4, 0, 5, 6, 0, 0, …}\) corresponds to \(4 + 5x^2 + 6x^3\)

What about an indexed collection of abelian groups? For example \({Z/2, Z/2, 0, Z, 0, 0, 0, Z, …}\)?

Well, this certainly looks like a collection of coefficients to me, albeit strange ones.

It corresponds to \(Z/2 + Z/2 x + Z x^3 + Zx^8 …\), this is perfectly reasonable to evaluate when \(x\) is a group, multiplication is tensor product and sum is direct sum.

Analogous to a polynomial, taking us from \(Z \to Z\), we’re going from \(Z\)-mod \(\to Z\)-mod.

We’re familiar with the Poincare polynomial, the polynomial which keeps track of the rank of homology groups, for example, the sphere, which has one 0-dimensional contractible component and one 2-dimensional contractible component, and nothing more, is \(f(x) = 1 + x^2\).

But sometimes we care about more than Betti numbers, and Euler characteristics — that just captures the rank of these finitely generated abelian groups. Sometimes we care about keeping track of their _torsion_, not just their rank.

So what about the following, where each \(H^i\) is an abelian group indexed by \(i\).

\(f(x) = H^0 + H^1x +H^2x^2 + H^3x^3 + …. + H^nx^n + …\)

Why limit ourselves to the natural numbers as our indexing set. What happens if we index over the reals? What is the 1/2th cohomology group?

## What happens when we take the fractional derivative of our (integer indexed) group-valued polynomial?

There’s a notion of taking the \(1/2\)-derivative of any function \(f(x)\):

\\(D^\alpha f(x) = 1/\Gamma(1-\alpha) \frac{\partial}{\partial x} \int \frac{f(x)}{(x-t)^{\alpha}}dt\\)

Let’s test that this makes sense, using \(e^x\), a nice measuring stick for your sanity in the land of integration. The Gamma function, \(\Gamma(1-\alpha)\), when \(\alpha = 1/2\) is \(\sqrt{\pi}\).

\\(D^{1/2} e^x = 1/\sqrt{\pi} \frac{\partial}{\partial x} \int \frac{f(x)}{(x-t)^{\alpha}}dt\\)

Hark! It is so! \(D^{1/2} e^x = e^x\)

[![Bildschirmfoto 2015-06-24 um 8.22.56 nachm.](/wp-content/uploads/2015/06/Bildschirmfoto-2015-06-24-um-8.22.56-nachm..png)](/wp-content/uploads/2015/06/Bildschirmfoto-2015-06-24-um-8.22.56-nachm..png)

Does this give us a reasonable notion of the “1/2th cohomology group”?

Let’s try out something silly to dip our toe in: \(f(x) = H^4x^4 + H^3x^3 + H^2x^2\), already we start to get strange things:

First, the integral \(\int f(t)/(x-t)^{1/2} dt\)

![Bildschirmfoto 2015-06-24 um 8.57.44 nachm.](/wp-content/uploads/2015/06/Bildschirmfoto-2015-06-24-um-8.57.44-nachm..png)

(“\(c, b, a\)” as placeholders for “\(h^4, h^3, h^2\)”)

Now let’s take the derivative wrt x:

[![Bildschirmfoto 2015-06-24 um 8.57.56 nachm.](/wp-content/uploads/2015/06/Bildschirmfoto-2015-06-24-um-8.57.56-nachm..png)](/wp-content/uploads/2015/06/Bildschirmfoto-2015-06-24-um-8.57.56-nachm..png)

[![Bildschirmfoto 2015-06-24 um 8.58.11 nachm.](/wp-content/uploads/2015/06/Bildschirmfoto-2015-06-24-um-8.58.11-nachm..png)](/wp-content/uploads/2015/06/Bildschirmfoto-2015-06-24-um-8.58.11-nachm..png)

Unfortunately, I find this whole approach to reindexing via derivatives unsatisfying, it’s not a very meaningful notion of interpolation. It seems most natural to first understand how to build a fractional dimensional space on the level of a CW-complex.

## What is a CW-complex with fractional-dimensional cells?

An admittedly ill-developed example, is a “fuzzy torus”: MISSING IMAGE [![unnamed (1)](/wp-content/uploads/2015/06/unnamed-1.png)](/wp-content/uploads/2015/06/unnamed-1.png)

Edit: I’ve since learned that there’s something called Shape Theory.

> “The intuitive idea of shape theory is to define invariants of quite general topological spaces by approximating them with ‘good’ spaces, either by embedding them into good spaces, and looking at open or polyhedral neighborhoods of them, or by considering abstract inverse systems of good spaces. The two approaches are closely related.” [- nLab](http://ncatlab.org/nlab/show/shape+theory)

I wonder if the fuzzy torus could be made equivalent to the cartesian product of two Warsaw circles! The Warsaw circle is the made from the curve \({(x, \sin(\frac{1}{x})) | x \in (0, 1)} \cup {(0,0)}\) closed by a line: MISSING IMAGE

[![Source: Wikipedia](/wp-content/uploads/2015/06/Warsaw_Circle.png)](/wp-content/uploads/2015/06/Warsaw_Circle.png)

[Source: Wikipedia](https://en.wikipedia.org/wiki/Shape_theory_(mathematics))

## What is a direct integral of groups?

Recap: We’ve been toying with the notion of re-indexing our cohomology theories, rather than using for, using or to get “fractional cohomology theories” and work with “fractional CW-complexes” and more generally “fractifolds”. I’m very curious wrt how von Neumann’s direct integral of operators (defined below) could be redefined to take in groups. MISSING IMAGE

[![Screen Shot 2015-07-06 at 5.42.57 PM](/wp-content/uploads/2015/06/Screen-Shot-2015-07-06-at-5.42.57-PM.png)](/wp-content/uploads/2015/06/Screen-Shot-2015-07-06-at-5.42.57-PM.png) MISSING IMAGE

[Source](http://projecteuclid.org/download/pdf_1/euclid.mmj/1029002011)

Does this help us understand, say, given a fractal rather than a space, how to compute a meaningful long exact sequence of groups?

Alternative interpretation of “integrating over groups to get a group”: Since finitely generated abelian groups are classified by rank and torsion. Maybe we can have a notion of expected value of a group assigning a probability that at a real number, the group will be (rank, torsion) for some choice of (rank, torsion).

Over each point, we have a group that can be expressed uniquely as. Now pick a particular p (including 0), and look at the value of over each point. This gives us a function from \(R\) to \(Z\), and we can take the expected value of that function. Again, this doesn’t quite make sense as a notion of interpolation. I’m not sure that it’s meaningful, but it’s kind of neat.

## Where does this fractional line of thought fit into the mathematical narrative?

Aaron mentioned that this might be connected to Zagier’s result on the “orbifold Euler characteristic” (on I assume of some complex of modules?) of a “mapping class group.” His description of the mapping class group sounded to me like homotopy classes of self-maps of CW-complexes.

All I really know about orbifolds is that an orbifold point gives us a notion of a \(1/n\)-dimensional point, which is delightful; looking at the fundamental group of such a point: if we loop around it \(n\) times, our loop contracts to a point.

**Afternote on stacks:** Nlab tells me that orbifolds are the stack object in the category Diff. A stack is a groupoid _minus_ an atlas, just as a manifold is a collection of open subsets of Euclidean space along with the data of how they glue together but then you have to be willing to forget the original atlas (e.g., in case the local computation you’re trying to do moves outside of any single coordinate chart). In this analogy, the collection of opens is the groupoid, the atlas is the atlas, and the underlying manifold is the stack.

If that didn’t parse for you, keeping the following phrases in mind as you go through life may be of use: “sheaf valued in \(\text{Grpd}\)” and (wrt moduli stacks) “moduli space (parameterizing family of objects) + keeping track of automorphisms of objects.”
