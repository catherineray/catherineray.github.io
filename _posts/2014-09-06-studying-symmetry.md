---
title: "Studying Symmetry"
date: "2014-09-06"
categories: 
  - "math"
---

Group([oid](http://www.ams.org/notices/199607/weinstein.pdf)) theory is the study of symmetry. When we are dealing with objects that appear symmetric, group theory assists with analysis of these objects. The label of “symmetric” is applied to anything which stays invariant under some transformations.

This can _apply to geometric figures_ (the unit circle, \(S^1\), is highly symmetric, for it is invariant under any rotation): [![220px-Circle_-_black_simple.svg](/wp-content/uploads/2014/08/220px-Circle_-_black_simple.svg_.png)](/wp-content/uploads/2014/08/220px-Circle_-_black_simple.svg_.png) This also applies to more _abstract objects such as functions_: [the trigonometric functions](http://www.businessinsider.com/7-gifs-trigonometry-sine-cosine-2013-5) \(sin(\theta)\) and \(cos(\theta)\) are invariant when we replace \(\theta\) with \(\theta+\tau\).

![uppkwr9 - imgur](/wp-content/uploads/2014/08/uppkwr9-imgur.gif)

[Source](http://www.businessinsider.com/7-gifs-trigonometry-sine-cosine-2013-5)

Both functions are _periodic_ with period \(\tau\). Periodicity is a type of symmetry. Important points for \(cos(\theta)\) and \(sin(\theta)\) in terms of their period \(\tau\):

[![sine-with-tau](/wp-content/uploads/2014/08/sine-with-tau.png)](/wp-content/uploads/2014/08/sine-with-tau.png)

[Source](http://www.tauday.com/tau-manifesto)

[![cosine-with-tau](/wp-content/uploads/2014/08/cosine-with-tau.png)](/wp-content/uploads/2014/08/cosine-with-tau.png)

[Source](http://www.tauday.com/tau-manifesto)

The subject of Fourier analysis is concerned with representing a wave-like (\(\tau\)-periodic) function as a combination of simple sine waves (simpler \(\tau\)-periodic functions). More formally, it decomposes any periodic function into the sum of a set of oscillating functions (sines and cosines, or [equivalently, complex exponentials](http://betterexplained.com/articles/intuitive-understanding-of-eulers-formula/)).

[![316px-Fourier_Series.svg](/wp-content/uploads/2014/08/316px-Fourier_Series.svg_-168x300-1.png)](/wp-content/uploads/2014/08/316px-Fourier_Series.svg_.png)

[Source](http://en.wikipedia.org/wiki/Fourier_series#mediaviewer/File:Fourier_Series.svg)

[![SquareWaveFourierArrows,rotated](/wp-content/uploads/2014/08/SquareWaveFourierArrowsrotated.gif)](/wp-content/uploads/2014/08/SquareWaveFourierArrowsrotated.gif)

[Source](http://en.wikipedia.org/wiki/Fourier_series)

**Fourier analysis** is central to spectroscopy, passive sonar, image processing, x-ray crystallography, and more. A large family of signal processing techniques consist of Fourier-transforming a signal, manipulating the Fourier-transformed data in a simple way, and reversing the transformation.

Fourier analysis is a fusion of analysis, linear algebra, and _group theory_. [[Source](http://www.math.uconn.edu/~kconrad/math216/whygroups.html)]

Furthermore, **group theory is the beating heart of physics.**

According to [Noether’s theorem](http://en.wikipedia.org/wiki/Noether%27s_theorem), every continuous symmetry of a physical system corresponds to a conservation law of the system. This ties into everything from the [conservation of electric charge](http://en.wikipedia.org/wiki/Charge_conservation) to the [first law of thermodynamics](http://en.wikipedia.org/wiki/Laws_of_thermodynamics).

We care a great deal about group representations, especially of [Lie groups](http://en.wikipedia.org/wiki/Lie_group), since these representations often point the way to the “possible” physical theories. Examples of the use of groups in physics include the Standard Model and gauge theory.

**Modern particle physics would not exist without group theory;** in fact, group theory predicted the existence of many elementary particles before they were found experimentally. [[Source](http://www.superstringtheory.com/math/math2.html)]

**Studying symmetry allows us to _discover the laws of the universe._**

#### What is a group?

![Capture](/wp-content/uploads/2014/08/Capture5.png) More formally, [![Capture](/wp-content/uploads/2014/08/Capture6.png)](/wp-content/uploads/2014/08/Capture6.png)

#### Homomorphisms Between Groups

A _group homomorphism_ is a structure preserving map \(\psi\) from a group \((G, \cdot)\) to a group \((H, *)\), satisfying:

[![Screenshot from 2014-08-07 17:47:43](/wp-content/uploads/2014/08/Screenshot-from-2014-08-07-174743.png)](/wp-content/uploads/2014/08/Screenshot-from-2014-08-07-174743.png)which means \(\psi(e_G) = e_H\) [![Screenshot from 2014-08-07 17:54:33](/wp-content/uploads/2014/08/Screenshot-from-2014-08-07-175433.png)](/wp-content/uploads/2014/08/Screenshot-from-2014-08-07-175433.png)which means \(\forall g_1, g_2 \in G\), \(\psi(g_1 \cdot g_2) = \psi(g_1) * \psi(g_2)\)

A great example of a group homomorphism is [logarithms and exponentials](http://www.millersville.edu/~bikenaga/abstract-algebra-1/group-maps/group-maps.html):

An exponential \(exp: (\mathbb{R}, +) \rightarrow (\mathbb{R}^+, *)\) is a morphism from the reals under addition to the positive reals under multiplication.

The operation on the domain \(\mathbb{R}\) is _addition_, while the operation on the range \(\mathbb{R}\) is _mulitplication._

Thus, to show \(exp\) is a homomorphism, I must show that \\(\forall x, y \in \mathbb{R}, exp(x+y) = exp(x)*exp(y)\\) Recall that \(exp(x+y) \equiv e^{x+y}\), and \(exp(x) * exp(y) = e^xe^y\), so the equation to be verified comes down to the familiar identity \(e^{x+y} = e^xe^y\), thus \(exp\) is a homomorphism!

Note that a group together with group homomorphisms [form a category](/categorical-language/).

#### Interested?

[Group Explorer](http://groupexplorer.sourceforge.net/ge2intro.html) (free) allows you to autogenerate visualizations of groups, homomorphisms, subgroup lattices, and more.

[Visual Group Theory](http://www.amazon.com/Visual-Classroom-Resource-Materials-Problem/dp/088385757X): Nathan Carter’s expository text is a beautifully illustrated, gentle introduction to groups, ending in quintics.

[Introduction to Tensors and Group Theory for Physicists](http://www.amazon.com/Introduction-Tensors-Group-Theory-Physicists/dp/0817647147): A unifying book, best suited to those familiar with linear algebra and basic physics.

#### Linear groups

A group in which the objects are matrices and the group operation is matrix multiplication is called a _linear group_ (or matrix group).

Since in a group every element must be invertible, the most general linear groups are the groups of all invertible matrices of a given size, called the general linear groups \(GL(n)\).

Any property of matrices that is preserved under matrix multiplication and inverses can be used to define further linear groups.

Elements of \(GL(n)\) with determinant 1 form a subgroup called the special linear group \(SL(n)\). Orthogonal matrices (\(M^{T}M = I\)) form the orthogonal group \(O(n)\). The elements of the special orthogonal group \(SO(n)\) are both orthogonal and have determinant 1.

[![Screenshot from 2014-09-05 12:38:22](/wp-content/uploads/2014/09/Screenshot-from-2014-09-05-123822.png)](/wp-content/uploads/2014/09/Screenshot-from-2014-09-05-123822.png)

Linear groups pop up in virtually any investigation of objects with symmetries, such as molecules in chemistry, particles in physics, and projective spaces in geometry.

- Geometry is the study of invariants of the action of a matrix group on a space.
- Particle physics, 4-dimensional topology, and Yang-Mills connections are inter-related theories based heavily on matrix groups, particularly on a certain double cover between two matrix groups (which I’ll cover in Clifford’s Road to Spinors).
- Quantum computing is based on the group of unitary matrices. “A quantum computation, according to one widely used model, is nothing but a sequence of simple unitary matrices. One starts with a small repertoire of some 2×2 and some 4×4, and combines them to generate, with arbitrarily high precision, an approximation to any desired unitary transformation on a huge vector space.” - William Wootters
- Riemannian geometry relies heavily on matrix groups, in part because the isometry group of any compact Riemmanian manifold is a matrix group.

#### Circle \(\cong\) SO(2)

We will begin with the simplest example of a smooth group: the group of proper rotations in 2 dimensions, isomorphic to SO(2).

The compositions of the rotations by two angles \(\theta_1\) and \(\theta_2\) corresponds to a rotation of the angle \(\theta_1 + \theta_2\).

\\(R(\theta_1)R(\theta_2) := R(\cdot(\theta_1, \theta_2)) = R(\theta_1 + \theta_2)\\)

**The map** \(\cdot(\theta_1, \theta_2) = \theta_1 + \theta_2\), takes two elements of the group as arguments and returns another element of the group (\(\cdot: G \times G \to G\)) **is smooth** (continuous and differentiable).

We have another important property: the proper rotations are periodic. Rotations by angles differing by multiples of \(\tau\) are periodic.

\\(R(\theta + \tau) = R(\theta)\\)

As a manifold, this group is the circle \(S^1\).

The continuity and differentiability of the product map has a very profound consequence: the elements of the group are determined by the elements close to the identity (the infinitesimal transformations).

Indeed, if we wish to determine how a rotation \(R(\theta)\) depends on \(\theta\), we look at how \(R\) changes with respect to infinitesimal change of \(\theta\).

For groups of linear transformation on a space, we can use the language of differential operators or that of matrix components, [according to our taste and convenience.](http://www.math.vt.edu/people/russell/m2k_fsp_diffop.pdf)

![Screenshot from 2014-09-05 08:27:32](/wp-content/uploads/2014/09/Screenshot-from-2014-09-05-082732.png)

The rotation \(R(\theta + d\theta)\) can also be described as the product \(R(d\theta)R(\theta)\) [[Source](http://personalpages.to.infn.it/~billo/didatt/gruppi/liegroups.pdf)]

This rotation group \(SO(2)\) can be regarded as a group of transformations acting on its group manifold \(S^1\).

Smooth groups are conventionally referred to as Lie groups, after Sophus Lie.

#### Why Study Smooth Groups?

Groups elegantly represent the symmetries of geometric objects. For example, the finitely many symmetries of polygons are captured by the Dihedral groups.

The infinitely many symmetries of circles require more sophistication. Observe that an axis of symmetry exists for every angle in \([0,\tau]\), so there should exist a continuous map from \([0,\tau]\) into any group representing the symmetries of a circle. The pristine algebraic nature of a group fails to capture this notion of continuity, so we much enrich it to obtain the smooth groups.

Motivated by geometry, smooth groups merge the perspectives of algebra and analysis, tying together these normally disparate fields with great efficacy.

Not convinced by their beauty and simplicity alone?

Smooth groups are _useful:_

- The study of irreducible representations of the smooth group \(SO(3)\) lead to an explanation of the Periodic Table.
- The study of irreducible representations of the smooth group \(SU(2)\) naturally leads to the Dirac equation describing the electron.
- The classification of the unitary representations of the Poincare group earned Wigner the 1963 Nobel prize in physics.
- The Standard Model, which unifies 3 of the the 4 fundamental forces in nature, is described by the smooth group \(SU(3) \times SU(2) \times U(1)\).

#### What is a Smooth Group?

A group object in the [category](/categorical-language/) of smooth manifolds is called a _smooth group_.

Equivalently, a group \(G\) is a _smooth group_ if it is a manifold, and the product and inverse operations \(\cdot: G \times G \rightarrow G\) and \(^{-1}:G \rightarrow G\) are smooth maps.

#### Representation: A Special Kind of Homomorphism

SO(3) describes the rotational symmetries of 3-dimensional Euclidean space. SO(3) acts on \(\mathbb{R}^3\) (any element of SO(3) defines a linear transformation of \(\mathbb{R}^2\).

We can generalize this to say a group \(G\) acts on a vector space \(V\) if there is a map \(\phi\) from \(G\) to linear transformations of \(V\) s.t. \(\forall v \in V; g,h \in G\)

\\(\phi(gh)v = \phi(g)\phi(h)v\\)

The map \(\phi\) is called a representation of \(G\) on \(V\); it’s really just a special kind of homomorphism.

Recall that the general linear group \(GL(V)\) is the group of all invertible linear transformations of \(V\). A representation of our smooth group \(G\) on \(V\) is merely a homomorphism

\\(\phi: G \rightarrow GL(V)\\)

We can think of a representation as a linear action of a group/algebra on a linear space (since to every \(g \in G\) there is an associated linear operator \(\phi(g)\) which acts on a linear space \(V\)).

Recall that a smooth group is a group object in the category of Diff. When \(G\) is a smooth group, we usually restrict our attention to representations of \(G\) in \(GL(V)\), where \(V\) is finite dimensional and \(\phi\) is a smooth map. Since we are operating on a smooth manifold, we can apply the tools of differential geometry.

#### Symmetries of Differential Equations

The group of symmetries of a differential equation \((x,y,…, u, )\) is the set of all transformations of the independent variables \((x,y, …)\) and of the dependent variables \((u, v, …)\) that transform solutions to solutions.

Lie proved that if the group of symmetries is solvable then the differential equation can be integrated by quadratures, and he found a method to compute the symmetries. _For more on this, the keyword is “heat equation.”_

#### A Note for the Adventurous

If we’re feeling algebraic, we can consider the set of invertible matrices over an arbitrary unital ring \(R\). Thus \(GL_n: R \rightarrow GL_n(R)\) becomes a [presheaf](http://ncatlab.org/nlab/show/presheaf) of groups on \(Aff = Ring^{op}\).

* * *

Postscript: Adding the unitary group to the visualization, while establishing completeness, disrupts the symmetric aesthetic.

[![Screenshot from 2014-09-05 21:07:43](/wp-content/uploads/2014/09/Screenshot-from-2014-09-05-210743-300x264.png)](/wp-content/uploads/2014/09/Screenshot-from-2014-09-05-210743.png)

#### Sources

[Lie Groups](http://www.physics.drexel.edu/~bob/LieGroups.html) [Why study matrix groups?](http://www.ams.org/bookstore/pspdf/stml-29-prev.pdf)
