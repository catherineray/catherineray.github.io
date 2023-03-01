---
title: "Haunted by 1/2: Harish Chandra"
date: "2023-02-28"
categories: 
  - "math"
---
(In Progress) Recently, I have been haunted by the number 1/2. It shows up in the Weil conjectures via the Riemann Hypothesis. It shows up in HKR-isomorphism when multiplying by the square root of the Todd class to amend the multiplicative structure. It shows up in the way we measure distance betwen vectors (\\(L^2\\) distance, anyway).  

Through a suggestion of Ezra Getzler, it seems one place begin to understand the nature of the 1/2 is to understand the Harish-Chandra isomorphism. The statement is as follows. 

Given a semisimple Lie algebra \\(\mathfrak{g}\\), let \\(\mathfrak{h}\\) be a Cartan subalgebra. Then, the following map is an isomorphism

\\( Z(U(\mathfrak{g})) \to \text{Sym}(\mathfrak{h})^{(W, \cdot)}. \\)

Context Clue: This can be seen as a special case of the HKR theorem, if you consider the input to be the Poisson manifold associated to the dual of a Lie algebra. If you didn't understand that, don't worry, we will just talk about semisimple Lie algebras in this post.

The Harish-Chandra isomorphism is a "quantized" version of the Chevalley isomorphism, 
\\( \text{Sym}(\mathfrak{g})^{\mathfrak{g}} \to \text{Sym}(\mathfrak{h})^{W}. \\) 
It's called quantized because we are taking taking the universal enveloping algebra, which is adding a parameter deforming the bracket of our Lie algebra (literally a deformation parameter). Then, we get back down to the classical case by taking the associated graded. 

Just as a sanity check on the statement of the Harish-Chandra theorem, let's consider the abelian Lie algebra case. In this case, \\(\mathfrak{g}\\) is isomorphic to its associated graded and everything commutes with everything. 

We discuss briefly examples of sl_n, which is the collection of trace 0 matrices. Here, b = strictly upper triangular, n = strictly upper triangular, and h = diagonal. 


(zig zag map)

M_{univ} \iso U(n^-) \otimes U(h), since Z(U(g)) has nonnegative weight, its image must lie in U(h). since the adjoint action on the center is trivial, it must have zero weight. 



(Periods and motives)


Thanks to Alex Karapetyan for helping me to understand this and working through it with me. 

