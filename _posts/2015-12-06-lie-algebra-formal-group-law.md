---
title: "A quick comparison of Lie algebras and formal group laws"
date: "2015-12-06"
categories: 
  - "math"
---

_This post assumes that you are familiar with the definition of Lie group/algebra, and that you are comfortable with the Lazard ring. Note: This is less of an expository post and more of an unfinished question._

Why care about formal group laws? Well, we want to study smooth algebraic groups, but Lie algebras fail us in characteristic p (for example, \\(\frac{d}{dx}(x^p) = 0\\)), so, rather than a tangent bundle, we take something closer to a jet bundle.

> Lie algebras are to smooth groups over \\(\mathbb{R}\\) or \(\mathbb{C}\\) as formal group laws are to smooth algebraic groups over any ring \\(R\\).

I want to apply this analogy! I want this deeply. I’m trying to puzzle out how to see if this analogy is deep or superficial. How deep does the rabbit hole go? Let’s look at an example.

Given the universal enveloping algebra of a Lie algebra \\(\mathfrak{g}\\), we might think of this as a deformation of the Symmetric algebra:

\\(U_{\epsilon}(\mathfrak{g}) := T(\mathfrak{g})/(x \otimes y - y \otimes x - \epsilon[x, y])\\)

\\(\mathbb{C}[\mathfrak{g}^*] \simeq Symm[\mathfrak{g}] := T(\mathfrak{g})(x \otimes y - y \otimes x)\\)

Action on all of this is the adjoint action, that is, the action which takes an element \\(g\\) of a Lie group \\(G\\) sends \\(X \mapsto gXg^{-1}\\). Orbits of this action stratify the dual Lie algebra, and there is a symplectic form that lives on each orbit.

I want to think of the adjoint action as directly analogous to the compositional conjugation action on the spectrum of the Lazard ring (over a ring \\(R\\)).

This action takes an invertible power series \\(u\\) and applies it in the following manner to a formal group law \\(F\\) over \\(R\\).

\\(F(x, y) \mapsto u^{-1}(F(u(x), u(y)))\\)

This is an isomorphism on formal group laws of the same height (assuming that we are over a seperable field). Thus, the action of the invertible power series on the Lazard ring stratifies by height of the formal group law. But as far as I know, each of these geometric points carries no analogue of a symplectic form on each orbit. Do they? How would I find them? What could possibly impose a symplectic structure on the collection of of formal group laws of a given height?

What is our universal enveloping algebra? Perhaps, it is the contravariant bialgebra of the formal group law? Perhaps, this analogy is not as deep as I thought.
