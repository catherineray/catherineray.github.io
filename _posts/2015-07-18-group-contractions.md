---
title: "Group Contractions for Elliptic Curves"
date: "2015-07-18"
categories: 
  - "math"
---

When you construct a particular sheaf over an elliptic curve and then continuously vary the elliptic curve, what happens to the sheaf? I’m not sure, so I am first trying to understand what group contractions mean for elliptic curves.

It’s easiest to talk about group contractions at the level of Lie algebras. We can always pass from the Lie algebra to the Lie group by exponentiation, and then quotient out by a discrete subgroup as needed, so no loss there.

A group contraction (in Lie theory) happens when we modify commutators to make them depend on t. And here is the modification I have in mind: \([X, Y] = tZ\) \([Y, Z] = X\) \([Z, X] = Y\) for all \(t\) not less than 0.

When \(t = 1\), this is the Lie algebra of the rotation group, which may be identified with the rotations of the unit 2-sphere.

Now, as \(t \to 0\), the above Lie algebras are, for each t, the Lie algebras of geometric symmetries of the 2-sphere of radius 1/t.

There’s the usual moduli stack of elliptic curves, and then we have the “compactified” one, and where we add points that are not actually represented by elliptic curve but are “degenerate limit cases.”

Over C all of this is easy to see: elliptic curves are given by \(C/\Gamma\), where \(\Gamma\) is a lattice. The lattice is spanned by vectors v, w. Assume you make w longer and longer, the limit can be sensibly interpreted as \(C/v\) (which is an infinitely long cylinder: if you increase one of the two radii of a torus towards infinity, you get just an infinitely long tube).

But what is \(C/v\)? WLOG we can assume \(v=2\pi i\) (or any other value). Now \(\exp: C \to C\) sends \(z+v\) to the same thing as z and takes image in \(C\){0}, so it induces a map \(C/v \to C\){0}. That map is a bijection. The corresponding group structure on \(C\){0} is just multiplication. Similarly, we can send both v and w to infinity and get back the additive formal group.

In the characteristic p case, wikipedia tells me that over \(F_3\), an elliptic curve has height 2 iff its j-invariant = 0 in \(F_3\).

So an example of a height 2 curve in \(F_3\) is \(y^2 = x^3 + x\) whereas \(y^2 = x^3 + x^2 + x\) is height 1. This is a stupid example for putting a parameter t can be put on an elliptic curve so that it goes from a height 1 to height 2 case.

Here we could put t as the coefficient of \(x^2\), as in: \(y^2 = x^3 + tx^2 + x\)

A slightly more general form for such contractions, assuming that all elliptic curves have an affine model like \(y^2 = x(x-1)(x-\lambda)\) (I don’t understand how this works yet), we could take an elliptic curve and add \(x(x-1)t\), and for some value of t, it should be supersingular.

\(y^2 = x(x-1)(x-\lambda)\) \(= x^3 + (1-\lambda)x^3 + \lambda x\)

and so when we add \(x^2t + xt\) to one side then \(y^2=x^3 + (1-\lambda+t)x^2 + (\lambda-t)x\).

How do I do this more generally over any field that we might care to put an elliptic curve over? Does this give us the ability to define group contractions over the whole moduli stack?

_Thanks to Achim Krause for speaking with me about the complex case, Alex Mennen for suggesting that we add \(x(x-1)t\), Laurens Gunnarsen for explaining the concept of a group contraction, and Aaron Slipper for urging me to ask Laurens to explain the concept of a group contraction. All errors are mine alone._
