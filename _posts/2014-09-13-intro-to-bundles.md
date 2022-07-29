---
title: "Introduction to Bundles"
date: "2014-09-13"
categories: 
  - "math"
---

_Treating spaces as fiber bundles allows us to tame twisted beasts. Most of spin geometry is phrased in the language of fiber bundles, and this post will begin to introduce that language — extremely powerful in its simplicity._

#### Introduction to Fiber Bundles

If we glue lines onto every point \(b\) in a circle (or a circle to every point of a line), we get a cylinder. In other words, a cylinder is the product space \(S^1 \times [0,1]\).

[![Screenshot from 2014-09-06 16:33:15](/wp-content/uploads/2014/09/Screenshot-from-2014-09-06-163315.png)](/wp-content/uploads/2014/09/Screenshot-from-2014-09-06-163315.png)

If we glue lines onto every point of a circle, progressively twisting each individual line, we get a Mobius strip.

[![Screenshot from 2014-09-10 01:43:18](/wp-content/uploads/2014/09/Screenshot-from-2014-09-10-014318-300x228-1.png)](/wp-content/uploads/2014/09/Screenshot-from-2014-09-10-014318-300x228-1.png)

A fiber bundle with fiber \(F\) consists of: 2 topological spaces, and a projection map which projects the total space onto its base space.

[![Screenshot from 2014-09-06 16:54:52](/wp-content/uploads/2014/09/Screenshot-from-2014-09-06-165452.png)](/wp-content/uploads/2014/09/Screenshot-from-2014-09-06-165452.png) In our example, \(E\):= Mobius strip, \(B\):= base circle, where the fiber \(F\):= \([0,1]\).

If you flip the arrow around, \(\pi^{-1}\), the inverse image of the projection map, maps every \(b\) in the basespace to its corresponding fiber \(\pi^{-1}(b)\) in the total space. [![Screenshot from 2014-09-10 10:17:30](/wp-content/uploads/2014/09/Screenshot-from-2014-09-10-101730.png)](/wp-content/uploads/2014/09/Screenshot-from-2014-09-10-101730.png)

Similarly, the \(\pi^{-1}(N)\) maps every point in the neighborhood \(N\) of \(b\) to their corresponding fibers \(\pi^{-1}(N)\) in the total space.

[![Screenshot from 2014-09-10 10:18:01](/wp-content/uploads/2014/09/Screenshot-from-2014-09-10-101801.png)](/wp-content/uploads/2014/09/Screenshot-from-2014-09-10-101801.png)

We can locally treat the Mobius strip as a plane, in the same way that we can locally treat a cylinder as a plane.

This property allows us to vastly simplify calculations; it allows us to locally treat twisted spaces like their non-twisted counterparts. We can generalize this property as follows:

For every \(b \in B\) there is a neighborhood \(N\) of \(b\) s.t. the following diagram commutes.

![](/wp-content/uploads/2014/09/hackpad.com_vhXUfcM1d0c_p.230853_1410251804257_undefined.png)![Screenshot from 2014-09-04 21:05:40](/wp-content/uploads/2014/09/Screenshot-from-2014-09-04-210540.png)

Formally:

A fiber bundle (with structure group \(G\) and fiber \(F\)) over \(B\) is a smooth surjection \(\pi: E \to B\) together with a local triviality condition: every \(b \in B\) has a neighborhood \(N\) and a diffeomorphism \(\phi: \pi^{-1}(N) \to N \times F\) s.t. the following commutes:

[![Screenshot from 2014-10-04 19:32:42](/wp-content/uploads/2014/09/Screenshot-from-2014-10-04-193242.png)](/wp-content/uploads/2014/09/Screenshot-from-2014-10-04-193242.png)

* * *

Another notation commonly used to represent the fiber in E over \(b\) is \(E_b\)

\(E_b \equiv \pi^{-1}(b)\)

\(E = \coprod\limits_{b in B} E_b = \coprod\limits_{b in B} \pi^{-1}(b)\)

* * *

As an aside: How can we formally construct a twisted space?

A Mobius strip := \([0,1] \times [0,1] \sim\), where the equivalence relation is \((0,t) \sim (1, 1-t)\).

Basically, this equivalence relation gives us gluing instructions.

We must twist the plane an odd number of times s.t. \((0,t)\) are the same as \((1, 1-t)\).

[![Screenshot from 2014-09-10 11:47:47](/wp-content/uploads/2014/09/Screenshot-from-2014-09-10-114747.png)](/wp-content/uploads/2014/09/Screenshot-from-2014-09-10-114747.png)

#### Get Your Group On: Actions and Torsors

_If you are unfamiliar with smooth groups and representations, I recommend reading [Studying Symmetry](/studying-symmetry/) for context before venturing onward._

What does it mean for \(G \curvearrowright X\) (a group \(G\) to “act” on \(X\))?

Suppose we write the group operation as multiplication and the identity element as \(1\).

A \(G\)-action on \(X\) takes any \(g \in G\) and any \(x \in X\), and returns \(gx \in X\). In other words:

[![Screenshot from 2014-10-07 16:17:26](/wp-content/uploads/2014/09/Screenshot-from-2014-10-07-161726.png)](/wp-content/uploads/2014/09/Screenshot-from-2014-10-07-161726.png)[![Screenshot from 2014-10-07 16:15:35](/wp-content/uploads/2014/09/Screenshot-from-2014-10-07-161535.png)](/wp-content/uploads/2014/09/Screenshot-from-2014-10-07-161535.png)

For it to be a \(G\)-action, we demand that it obeys:

[![Screenshot from 2014-10-07 16:17:55](/wp-content/uploads/2014/09/Screenshot-from-2014-10-07-161755.png)](/wp-content/uploads/2014/09/Screenshot-from-2014-10-07-161755.png) [![Screenshot from 2014-10-07 16:16:07](/wp-content/uploads/2014/09/Screenshot-from-2014-10-07-161607.png)](/wp-content/uploads/2014/09/Screenshot-from-2014-10-07-161607.png) and [![Screenshot from 2014-10-07 16:17:33](/wp-content/uploads/2014/09/Screenshot-from-2014-10-07-161733.png)](/wp-content/uploads/2014/09/Screenshot-from-2014-10-07-161733.png) [![Screenshot from 2014-10-07 16:16:32](/wp-content/uploads/2014/09/Screenshot-from-2014-10-07-161632.png)](/wp-content/uploads/2014/09/Screenshot-from-2014-10-07-161632.png)

These properties may look familiar to the [categorically inclined](/categorical-language/). Every group \(G\) is a category with a single object whose morphisms are the elements of \(G\).

An “action” of \(G\) on an object in the category \(C\) is simply a functor \(G \to C\).

- If \(C\) is a group, this action is a group homomorphism.
- If \(C\) is \(\text{Vect}\), this action is a linear representation of \(G\).

A \(G\)-torsor is a special type of \(G\)-action which satisfies the following: for any 2 elements \(x_1,x_2\) in our \(G\)-torsor, \(\exists g \in G\) that satisfies \(gx_1 = x_2\).

This means that for any two elements of our torsor, we can talk about their “ratio” \(x_2/x_1\), which defines the unique element \(g\) which satisfies the above equation.

#### Principal-Bundles

_A principal-bundle is a bundle whose fibers are torsors._

A principal \(G\)-bundle over a base space \(B\) is essentially a bundle of “affine \(G\)-spaces” over \(B\).

To be more precise, it is a fiber bundle \(E \xrightarrow{\pi} B\) together with a continuous right action of \(G\) on \(E \xrightarrow{\pi} B\) which preserves the fibers and acts freely and transitively on them. In other words, our fibers are the orbits of \(G\).

Let \(G\) be a Lie group, and \(F\) be our typical fiber. We have a faithful smooth group action: \(\rho: G \times F \to F\), which we can curry into \(\rho: G \to (F \to F)\) and rewrite as \(\rho: G \to \text{Aut}(F)\)

In the most general case, \(\text{Aut}(F) = \text{Diff}(F)\) (the group of diffeomorphisms), but we will shortly be working with vector bundles, for which \(F\) is a vector space and \(\text{Auto}(F) = GL(F)\).

![Screenshot from 2014-10-07 14:20:57](/wp-content/uploads/2014/09/Screenshot-from-2014-10-07-142057.png)

Let \((GL(E))_b\) be the set of orthonormal frames of the vector space \(E_b\). Note that the set of all orthonormal frames is a right \(\text{O}(n)\)-torsor.

Given a vector bundle \(E \xrightarrow{\pi} B\) with a vector space \(F\) as the fiber, we can construct its principal bundle \(GL(E) \xrightarrow{\Pi}B\) by mapping each fiber \(E_b\) to the bundle of orthonormal frames over that fiber \(GL(E_b)\).

#### A Taste of What’s to Come

Fiber bundles are themselves merely the culmination of the centuries-long struggle to come fully and properly to grips with the idea of a multiple-valued function.

One of the purposes of cohomology is to specify how the typical fibers and the base may be combined to make a variety of fiber bundles (a way to classify and distinguish the different possibilities) — these are the so-called characteristic classes (such as Chern classes).

#### Sources

[Spin Manifolds](http://empg.maths.ed.ac.uk/Activities/Spin/Lecture4.pdf) [Torsors Made Easy](http://math.ucr.edu/home/baez/torsors.html) [Spin Geometry, Appendix A](http://www.indiana.edu/~jfdavis/teaching/m721/resources/spingeometry.pdf)
