---
title: "A Swashbuckling Tour of Elliptic Cohomology"
date: "2015-01-07"
categories: 
  - "math"
---

In singular cohomology, the first chern class of two tensored line bundles \(c_1( A \otimes B) = c_1(A) + c_1(B)\) is the additive formal group law, \(F(x,y) = x + y\).

Quillen was messing with K-theory (another cohomology theory with a notion of chern classes) trying to take the first chern class of two tensored line bundles \(c_1(A \otimes B)\), and realized that that it wasn’t \(c_1(A) + c_1(B)\). There was a more complicated formal group law there!

What do I mean by “more complicated formal group law”?

Milnor had been studying the structure of the coefficient ring of MU and showed that it was isomorphic to a polynomial ring. Quillen recalled this, and realized that complex cobordism was the ‘most general’ way to express the first chern class of the tensor product of two line bundles.

![Screenshot from 2015-01-19 02:12:31](/wp-content/uploads/2015/01/Screenshot-from-2015-01-19-021231.png)

Note that the only connected algebraic groups of dimension equal to 1 over an algebraically closed field \(\mathbb{K}\) are:

1. The additive group over \(\mathbb{K}\)
2. The multiplicative group over \(\mathbb{K}\) (as a set, comprises all the non-identity elements of the field).
3. An elliptic curve group over \(\mathbb{K}\) (the abelian variety case)

#### What is an elliptic curve group?

You know, I’d really like to be able to “add” two points to get a third.

[![image002](/wp-content/uploads/2015/01/image002.jpg)](/wp-content/uploads/2015/01/image002.jpg)

[Source](http://www.eng.newcastle.edu.au/eecs/fyweb/Archives/2005/c2104330/ECC.htm)

This is a nice thing, equipping our curve with an addition law gives us identity, its got inverses, and, yes, it’s associative.

[![EllipticGroup (1)](/wp-content/uploads/2015/01/EllipticGroup-1.gif)](/wp-content/uploads/2015/01/EllipticGroup-1.gif)

Associativity of the addition law is equivalent to the fact that the curve passes through the central point in the grid. From this fact, the equality of −(a + (b + c)) and −((a + b) + c) follows. [Source](http://en.wikipedia.org/wiki/Elliptic_curve)

How do we get a (1-dimensional) formal group law out of, say, \(y^2 = 4x^3 + ax + b\)? (for the curious, pg. 40-41 of [this lecture](http://homepages.warwick.ac.uk/~masiao/maths/lecturenotes/ellipticnotes.pdf))

First let’s homogenize \(y^2z = 4x^3 + axz^2 + bz^3\), and check that the point at infinity is smooth (i.e., its Jacobian \(\frac{\partial F_i}{\partial x_i}\) is full rank).

How do we get the elliptic formal group law’s coefficients to be in one dimension? We take **a Taylor series expansion of our elliptic curve about the origin**. This is commonly denoted \(\hat{C}\).

#### A Pedagogical Crime

Here’s an intuitive way to define K-theory: [![10913079_10204687182092090_357999007_n](/wp-content/uploads/2015/01/10913079_10204687182092090_357999007_n.jpg)](/wp-content/uploads/2015/01/10913079_10204687182092090_357999007_n.jpg)

We can think of \(K^0(X)\) as a generalization of the dimension of vector spaces. The key property of dimension is additivity for short exact sequences, so consequently one forms the universal group with that property.

Another way to define K-theory is the following:

1. A generalized multiplicative cohomology theory \(h^*(-)\) which is complex orientable. That is, there is an \(h\)-theoretic notion of chern class. \(h^*(-)\) is _even_ (\(h^n(*) = 0\) for all odd \(n\)), and _weakly periodic_ (\(h^n(*) \otimes_{h^*(pt)} h^2(*) \simeq h^{n+2}(*)\) for all \(n\)).
2. MISSING IMAGE ![11004031_10204996874994219_337898729_n](/wp-content/uploads/2015/01/11004031_10204996874994219_337898729_n.jpg) Our cohomology theory \(h^*(-)\) should behave according to the multiplicative formal group law. Let \(\hat{\mathbb{G}}_m\) be the formal completion of the multiplicative formal group law over a coefficient ring \(R\). We require that the coefficient ring of our formal group law and the coefficient ring of our cohomology theory be isomorphic, \(R \simeq h^*(*)\), and the formal group laws over these coefficient rings must also be isomorphic, \(\hat{\mathbb{G}}_m \cong \text{Spf}\) \(h^*(*)[[x]]\), (where \(x\) is the first chern class of a universal line bundle).

What’s this Spf thing? How is \(h^*(pt)[[x]]\) a formal group law? Well, the formal spectrum of a ring R[c] is something that *looks* like localization.

\(Spf R[c]\) := ![ql_2d7c0f2ddf375dbc8a6087da67bdc34c_l3](/wp-content/uploads/2015/01/ql_2d7c0f2ddf375dbc8a6087da67bdc34c_l3.png)

In other words, condition 2 that defines K-theory is of the form: MISSING IMAGE ![11002951_10204996877314277_1112261396_o](/wp-content/uploads/2015/01/11002951_10204996877314277_1112261396_o.jpg)

With this definition, the intimate relationship between K-theory and vector bundles is not immediately apparent. Unfortunately, this is the manner in which we currently define elliptic cohomology…

#### What is elliptic cohomology?

We’re using the data of an elliptic curve to construct a new way to associate a sequence of abelian groups to spaces, and this new way should behave according to the formal group law of an elliptic curve.

This is how we currently define elliptic spectra:

1. A family of elliptic curves \(C\) over a coefficient ring \(R\)
2. A generalized, complex orientable cohomology theory \(h^*(-)\).
3. Our cohomology theory \(h^*(-)\) should behave according to the elliptic formal group law.[![10965392_10204954345731014_512078120_n](/wp-content/uploads/2015/01/10965392_10204954345731014_512078120_n.jpg)](/wp-content/uploads/2015/01/10965392_10204954345731014_512078120_n.jpg)Let \(\hat{C}\) be the formal completion of the elliptic formal group law (over a coefficient ring \(R\)). We require that the coefficient ring of our formal group law and the coefficient ring of our cohomology theory be isomorphic, \(R \simeq h^*(*)\), and the formal group laws over these coefficient rings must also be isomorphic, \(\hat{C} \cong \text{Spf}\) \(h^*(*)[[x]]\), (where \(x\) is the first chern class of a universal line bundle).

Why do we define it this way? We don’t know any other way! Well, that’s not quite true...

#### 2 Main Camps of Potential Constructions

[Construction 1: [Segal; Stolz-Teichner]](http://www.math.sciences.univ-nantes.fr/~hossein/GdT-Elliptique/Elliptic-Obj-Segal.pdf)

K-theory is to 1-dimensional field theory _(i.e., to each point \(x in X\), associate a vector space \(E_x\), and to each path in \(X\) the connection on \(E\) associates a linear map between these vector spaces)_ like elliptic cohomology is to 2-dimensional conformal field theory (associating Hilbert spaces to loops in \(X\) and some operators to conformal surfaces with boundary in \(X\)).

(There is a theorem that 1|1 Euclidean field theories are isomorphic to K-theory spectra. )

Relating equivariant versions of elliptic cohomology to loop groups, tmf is proposed to be closely related to supersymmetric conformal field theories.

[Construction 2: [Baas-Dundas-Rognes]](http://arxiv-web3.library.cornell.edu/pdf/0706.0531v1.pdf)

Elliptic cohomology is a “categorification of K-theory.”

If we think the natural analogy of vector bundles for K-theory is 2-vector bundles for elliptic cohomology, there is the \(K(ku)\) interpretation. This is “like” an elliptic cohomology theory in the sense of detecting \(v_2\)-periodic phenomena, but is not complex orientable (then again, tmf isn’t complex orientable either!).

#### Some sources/references for the adventurous:

I recommend starting with [Landweber’s introduction](http://link.springer.com/chapter/10.1007%2FBFb0078036?LI=true), which describes how elliptic genera led to elliptic cohomology, then reading [Ravenel’s introduction](http://www.math.rochester.edu/people/faculty/doug/mypapers/quillen-printer-version.pdf), which leads to chromatic homotopy theory.

Once you’ve been primed by these introductions and desire a more precise picture, I recommend treating yourself to [Elliptic Cohomology: A historical overview](/wp-content/uploads/2015/01/reddenv2.pdf).

Other references:

The key things in the quest for geometric realization, are [Segal’s Bourbaki talk](http://archive.numdam.org/ARCHIVE/SB/SB_1987-1988__30_/SB_1987-1988__30__187_0/SB_1987-1988__30__187_0.pdf), [Segal’s followup](http://www.math.sciences.univ-nantes.fr/~hossein/GdT-Elliptique/Elliptic-Obj-Segal.pdf), and the [Segal-Stolz-Teichner overview](/wp-content/uploads/2015/01/elliptic_object.pdf).

Before reading Segal’s talk, I found having [this short “guiding light”](/wp-content/uploads/2015/01/lehigh.pdf) useful, and [this short historical briefing](http://www.math.rochester.edu/people/faculty/doug/mypapers/quillen-beamer-version.pdf) useful.

Another perspective on a geometric construction is [exposited by Baez](http://math.ucr.edu/home/baez/twf_ascii/week197), which [evolved into this construction](http://math.ucr.edu/home/baez/abel/abel.pdf). These are the product of taking seriously: _‘the key to elliptic cohomology is to study things like vector 2-bundles where the fiber lives in the 2-category not of 2-vector spaces but of bimodules, because the string 2-group has a natural representation in there (Urs Schreiber)’_.

If you’re wondering where the idea of interpreting cohomology in the language of \(n\)-stacks came from, I suggest reading the preface of [Lurie’s Higher Topos Theory](http://www.math.harvard.edu/~lurie/papers/highertopoi.pdf). [Lurie’s A Survey](http://www.math.harvard.edu/~lurie/papers/survey.pdf) is best read alongside [Mazel-Gee’s A Survey of a Survey](https://etale.site/writing/surveyofsurvey.pdf).

For those interested in the field theoretic developments, here are [more recent notes](http://www.cpp.edu/~jacaine/pdf/Lectures_complete.pdf) on the work of Stolz-Teichner.

If you’re interesting in the physics-y pieces of this, the paper that [introduces the Witten genus](http://projecteuclid.org/euclid.cmp/1104117076) (which has values in the ring of modular forms over manifolds with rational string structure). A very different physics-y perspective on the categorical side is [Loop Space Mechanics and Nonabelian Strings](https://arxiv.org/pdf/hep-th/0509163v1.pdf), which contrary to the title is quite beginner friendly.

If you’re into concrete 19th century mathematics, don’t mind reading in French, and REALLY want to get how formal group laws are useful for classification, I recommend reading Lazard’s work on formal group laws [Groupes de Lie formels à un paramètre](http://archive.numdam.org/ARCHIVE/SD/SD_1954-1955__8_/SD_1954-1955__8__A3_0/SD_1954-1955__8__A3_0.pdf), and his concept of “analyseurs” (the beginning of [operads](http://www.ams.org/notices/200406/what-is.pdf)) [Groupes analytiques en caractéristique 0](http://archive.numdam.org/ARCHIVE/SB/SB_1951-1954__2_/SB_1951-1954__2__255_0/SB_1951-1954__2__255_0.pdf).

If you’d like to understand the algebraic construction, the seminal paper was [Periodic Cohomology Theories Defined By Elliptic Curves](http://web.math.rochester.edu/people/faculty/doug/mypapers/lrs.pdf), which is explained step by step in [Elliptic cohomology theories](http://dare.uva.nl/cgi/arno/show.cgi?fid=460154).

_My deepest thanks to Gunnar Carlsson for answering my topology questions._
