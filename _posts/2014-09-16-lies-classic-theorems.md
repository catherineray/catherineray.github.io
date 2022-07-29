---
title: "An Informal Categorical Introduction to Lie’s Theorems"
date: "2014-09-16"
categories: 
  - "math"
---

_This quick post assumes basic knowledge of Lie algebras and category equivalence. I am new to category theory, and appreciative of constructive feedback._

We commonly study smooth manifolds, e.g. [Lie groups](/studying-symmetry/), by studying their tangent spaces. Since the product map induces a map from one tangent space to another, we can oftentimes just consider the tangent space to a Lie group at the identity. This tangent space can be equipped with a structure induced by the group structure, called a Lie algebra structure.

#### The Theorems of Lie

The assignment Lie : \(G \to \)Lie\((G)\) is [functorial](/categorical-language/). The theorems of Lie in their modern incarnation emerge out of the attempt to see how close this functor is to being an equivalence of categories. Note that we are working in [Diff](http://ncatlab.org/nlab/show/Diff).

Lie proved that the category of local real Lie groups is equivalent to the category of finite-dimensional real Lie algebras.

[![Screenshot from 2014-09-15 20:46:36](/wp-content/uploads/2014/09/Screenshot-from-2014-09-15-204636.png)](/wp-content/uploads/2014/09/Screenshot-from-2014-09-15-204636.png)

This equivalence was extended to global cases by Cartan: the category of real Lie algebras is equivalent to the category of simply-connected Lie Groups.

[![Screenshot from 2014-09-15 20:45:39](/wp-content/uploads/2014/09/Screenshot-from-2014-09-15-204539.png)](/wp-content/uploads/2014/09/Screenshot-from-2014-09-15-204539.png)

Note: We cannot drop the condition of being simply connected for \(G\), as, for example, \(G = S^1\) and \(G = \mathbb{R}\) have the same Lie algebras but are not isomorphic.

#### Lie I: Groups \(\to\) Algebras

The assignment \(G \mapsto\) Lie\((G)\) induces a functor Lie: LieGrp \(\to\) LieAlg and for each morphism \(g:G \to H\) of Lie groups the following diagram commutes:

[![Screenshot from 2014-09-15 23:22:51](/wp-content/uploads/2014/09/Screenshot-from-2014-09-15-232251.png)](/wp-content/uploads/2014/09/Screenshot-from-2014-09-15-232251.png)

The Lie algebra homomorphism Lie\((g)\) is equivalent to the first order infinitesimal of the group homomorphism.

#### Lie II: Do You Even Lift, Lie? Alegbras \(\to\) Groups

Let \(G\) and \(H\) be Lie groups with Lie algebras Lie\((G)\) and Lie\((H)\), with a Lie algebra homomorphism \(f:\)Lie\((G) \to\)Lie\((H)\).

[![Screenshot from 2014-09-15 17:30:07](/wp-content/uploads/2014/09/Screenshot-from-2014-09-15-173007.png)](/wp-content/uploads/2014/09/Screenshot-from-2014-09-15-173007.png)

For notational convenience, we denote Lie\((G)\) as the lowercase gothic letter \(\mathfrak{g}\).

[![Screenshot from 2014-09-16 17:29:57](/wp-content/uploads/2014/09/Screenshot-from-2014-09-16-172957.png)](/wp-content/uploads/2014/09/Screenshot-from-2014-09-16-172957.png)

_Lie II_ states that there exists a unique morphism \(F\) lifting \(f\) [![Screenshot from 2014-09-15 17:41:44](/wp-content/uploads/2014/09/Screenshot-from-2014-09-15-174144.png)](/wp-content/uploads/2014/09/Screenshot-from-2014-09-15-174144.png) such that \(f=\)Lie\((F)\).

[![Screenshot from 2014-09-15 17:39:32](/wp-content/uploads/2014/09/Screenshot-from-2014-09-15-173932.png)](/wp-content/uploads/2014/09/Screenshot-from-2014-09-15-174144.png)

#### Lie-Cartan III: Groups \(\leftrightarrow\) Algebras

The functor Lie cannot be inverted because locally isomorphic Lie groups have isomorphic Lie algebras. However, we _can_ invert Lie on the _subcategory of simply connected Lie groups_. The essential surjectivity of this functor is the third theorem.

For every finite-dimensional real Lie algebra \(\mathfrak{g}\) there exists a Lie group \(G\) with Lie algebra \(\mathfrak{g}\).

[![Screenshot from 2014-09-15 20:02:05](/wp-content/uploads/2014/09/Screenshot-from-2014-09-15-200205.png)](/wp-content/uploads/2014/09/Screenshot-from-2014-09-15-200205.png) Note that \(G\) is not necessarily unique.

#### Sources

[Lie’s Three Theorems](http://ncatlab.org/nlab/show/Lie%27s+three+theorems) [The Lie group-Lie algebra correspondence](http://www.math.ucla.edu/~vsv/liegroups2007/9.pdf) [Sophus Lie’s Fundamental Theorem - Categorical Aspects](http://www.heldermann.de/R&E/RAE18/ctw22.pdf) [Lie’s Third Theorem](http://www.math.illinois.edu/~ruiloja/Meus-papers/HTML/SlidesCRM.pdf) [Lie Theory of Differential Equations and Computer Algebra](http://www.heldermann-verlag.de/jlt/jlt01/CZICHPL.PDF) [What is a Dynkin Diagram, and how does it work?](http://www.quora.com/Group-Theory-mathematics/What-is-a-Dynkin-diagram-and-how-does-it-work)
