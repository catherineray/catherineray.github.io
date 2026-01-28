---
title: "Bordism with singularities construction of elliptic homology"
date: "2015-05-05"
categories: 
  - "math"
---

_This post assumes familiarity with the [Landweber exact functor theorem](/landweber-exactness/), elliptic genera, and bordism theories._

An ongoing desire of mine is to geometrically approach elliptic spectra.

Note that I’m _not_ talking about geometric cocycles for tmf. I’m talking about the vague goal of understanding elliptic spectra in their own right using “geometric” techniques (properties of the object that are invariant under a chosen collection of transformations of that object).

There is a presentation of an elliptic homology theory as a bordism theory with singularities outlined by Landweber in [Elliptic Cohomology and Modular Forms](http://www.math.sciences.univ-nantes.fr/~hossein/GdT-Elliptique/Ell-Mod-Form-Landweber.pdf) (based on [this paper](https://www.google.de/url?sa=t&rct=j&q=&esrc=s&source=web&cd=1&cad=rja&uact=8&sqi=2&ved=0CCYQFjAA&url=http%3A%2F%2Fwww.mscand.dk%2Farticle%2Fdownload%2F11491%2F9508&ei=cXNKVfPXFMuqswHi3IGwAw&usg=AFQjCNEeheGSekzsZA9GOe93zWTjXLjppQ&sig2=0CLHgmEREwIGQ0wWUzmp8Q&bvm=bv.92291466,d.bGg "this paper") which presents \\(H_*(-;\mathbb{Z})\\) as a bordism theory with singularities).

This seemed like the beginning of the answer to my desire, but I now think that this construction is basically a less intuitive version of \\(MSO_*(-) \otimes_{MSO_*} R\\), thinking about “tensoring out” classes in \\(MSO\\) as coning them off. I’ll explain what I mean by “coning them off” in a bit, first let me outline the construction:

#### Outline:

1. Start with an elliptic genus \\(\pi_*(MSO) \xrightarrow{\phi} R\\)
2. Mod out the ring spectrum \\(MSO\\) by \\(ker(\phi)\\) to get a spectrum “\\(MSO/ker(\phi)\\)” whose homotopy groups are \\(R\\) i.e., construct \\(F: \pi_*(MSO/ker(\phi)) \to R\\) s.t. \\(ker(F) = 0\\)
3. Check that the spectrum \\(MSO/ker(\phi)\\) is a ring spectrum

Let’s go through it!

_Before we begin, you might wonder why we’re working with \\(MSO\\). Landweber works with \\(MSO_*[\frac{1}{2}]\\) and not \\(MU\\); the map from \\(MU\\) to our elliptic spectrum \\(E\\) factors through \\(MSO\\) (we can forget structure on our bordisms)._

_Notational side, \\(MSO_* := \pi_*(MSO)\\), and \\(\mathbb{S}^n\\) means the the suspension spectrum with \\(S^n\\) as it’s 0th space, i.e. \\(\Sigma^\infty S^n_+\\)._

#### Reason to kill the generators

Start with an elliptic genus, a concrete ring homomorphism \\(MSO_* to R\\) that satisfies some properties. Let’s look at \\(R := \mathbb{Z}[\frac{1}{2}][\delta, \epsilon]\\).

What generators of \\(MSO_*\\) are killed by this elliptic genus?

In other words, what is \\(ker(MSO_* \xrightarrow{\phi} \mathbb{Z}[\frac{1}{2}][\delta, \epsilon])\\)? _Let’s say \\(\delta\\) has degree 2, and \\(\epsilon\\) has degree 4._

As we know (thanks Milnor), \\(MSO_*[\frac{1}{2}] \simeq \mathbb{Z}[x_2, x_4, x_6, x_8, …]\\) (\\(MSO_*\\) has some 2-torsion, adjoining 2 allows us to think of \\(x_i\\) as \\(CP^{i}\\)) so we can rewrite \\(\phi\\) as:

\\\(\mathbb{Z}[\frac{1}{2}][x_2, x_4, x_6, x_8, …] \xrightarrow{\phi} \mathbb{Z}[\frac{1}{2}][\delta, \epsilon]\\\)

\\(\mathbb{Z}[\frac{1}{2}][x_2, x_4, x_6, x_8, …]/(x_6, x_8, …) \simeq Z[\frac{1}{2}][x_2, x_4]\\)

We require that mult-by-\\(\alpha\\) acts injectively in \\(E\\) s.t. \\(C(\alpha)\\) is just the cokernel of \\(\times \alpha\\).

If mult-by-\\(\alpha\\) acts injectively, then \\(0 \to \pi_k(\Sigma^E) \xrightarrow{\times \alpha} \pi_k(E) \to \pi_k(C(\alpha)) \to 0\\) is an exact sequence for all \\(k\\), and \\(\pi_*(C(\alpha))\\) will give us the ring we’d expect, \\(\pi_*(E)/\alpha\\).

\\\(MSO_*/(x_6, x_8, …) \simeq R\\\)

But can we do this on the level of spectra? Can we construct \\(MSO/(x_6, x_8, …) \simeq E\\) s.t. \\(\pi_*(E) \simeq \mathbb{Z}[x_2, x_4]\\) by coning off unwanted generators?

Well, before we get caught up in fantasy, what does “\\(MSO/\alpha\\)” even mean?

#### Understanding the quotient

Let’s use our intuition for what \\(R/\alpha\\) should be when \\(R\\) is a ring, that is, the exact sequence \\(0 \to (a) \to R \to R/\alpha \to 0\\). I point this out to motivate that the quotient of a ring spectra by the ideal of a ring will be a cokernel (in nice cases).

Given an element \\(\alpha \in \pi_n(E)\\), we get a map \\(\Sigma^n M \xrightarrow{\times \alpha} M\\) where \\(M\\) is an \\(E\\)-module.

_How? We have an element \\(\alpha \in \pi_n(E)]\\), that is:_

_\\\(\mathbb{S}^n \xrightarrow{\alpha} E\\\), apply the functor \\(- \wedge M\\)_

_\\\(\mathbb{S}^n \wedge M \to E \wedge M\\\)_

_Note that a ring spectrum \\(M\\) is a monoid object in the category of spectra (which is a monoidal category), we have \\(M \wedge M \to M \leftarrow \mathbb{S}\\), with associativity and identity. Since \\(M\\) is an \\(E\\)-module, we have the monoid action \\(E \wedge M \to M\\), so we compose and get:_

\\\(S^n \wedge M \to E \wedge M \to M\\\)

We return our attention to the map: \\(\Sigma^n M \xrightarrow{\times \alpha} M\\)

Take the mapping cone of \\(\times \alpha\\):

\\\(\Sigma^nE \xrightarrow{\times \alpha} E \to C(\alpha)\\\)

Taking homotopy groups:

\\\(… \to \pi_k(\Sigma^nE) \to \pi_k(E) \to \pi_k(C(\alpha)) \to \pi_{k+1}(\Sigma^nE) \to …\\\)

We require that mult-by-\\(\alpha\\) acts injectively in \\(E\\) s.t. \\(C(\alpha)\\) is just the cokernel of \\(\times \alpha\\). If mult-by-\\(\alpha\\) acts injectively, then \\(0 \to \pi_k(\Sigma^E) \xrightarrow{\times \alpha} \pi_k(E) \to \pi_k(C(\alpha)) \to 0\\) is an exact sequence for all \\(k\\), and \\(\pi_*(C(\alpha))\\) will give us the ring we’d expect, \\(\pi_*(E)/\alpha\\)).

_Conceptually (and formally), we might think of the members of \\(ker(\phi)\\) as [stratifolds](http://en.wikipedia.org/wiki/Stratifold)._

#### Coning off the members of the kernel (i.e., killing the appropriate generators of \\(MSO\\))

So, back to the main story: killing the appropriate generators of \\(MSO_*[\frac{1}{2}] \simeq \mathbb{Z}[\frac{1}{2}][x_2, x_4, x_6, x_8, …]\\) until we get \\(\mathbb{Z}[\frac{1}{2}][x_4, x_6]\\) — but now we’re pulling this on the level of spectra. We now know that when we say “\\(MSO/x_6\\)” what we mean is:

We’re looking at \\(x_6 \in \pi_n(MSO)[\frac{1}{2}]\\), and we take the mapping cone: \\(\Sigma^nMSO \xrightarrow{\times x_6} MSO \to C(x_6) =: MSO/x_6\\)

We can keep going in this vein, next looking at the sequence \\(\Sigma^n C(x_6) \xrightarrow{\times x_8} C(x_6) \to C(x_6, x_8)\\), and iterate: say \\(x_i \in \pi_t(MSO)\\), we’ll eventually come to:

\\(\Sigma^t C(x_6, …, x_{i-2}) \xrightarrow{\times x_i} C(x_6, …, x_{i-2}) \to C(x_6, x_8, …, x_i)\\)

We’ve constructed the map \\(MSO \to C(x_6, …, x_i)\\) — _requiring that the ideal \\((x_6, …, x_i)\\) acts injectively (s.t. the mapping cone is just the cokernel of the map)_.

Taking the homotopy groups of \\(C(x_6, …, x_i)\\), we find \\(\pi_*(C(x_6, …, x_i)) = \mathbb{Z}[x_2, x_4]\\).

We know that \\(C(x_6, …, x_i)\\) is a spectrum, but is it still a ring spectrum? If the genus is Landweber-exact (i.e., tensoring out \\(x_6, …, x_i\\) gives us a multiplicative homology theory), the resulting spectrum \\(MSO/(x_6, …, x_i)\\) a ring spectrum.

This feels a bit hacky, but I’m not sure how else to prove that \\(C(x_6, …, x_i)\\) is a ring spectrum besides some messy obstruction theory which I know nothing about.

I mentioned at the beginning that this construction is less intuitive than tensoring the underlying coefficient ring as an \\(MSO_*-module\\), this is because we don’t have an obvious criterion for when the resultant spectrum is a ring spectrum!

#### Some remaining uncertainties

Let’s say we wanted to “geometrically” interpret inverting 2, even though this is a very algebraic thing, in the case of \\(MSO[\frac{1}{2}]\\)? I’m not quite sure how to do this precisely — the best I can currently do is outline a picture. Recall that \\(MU_n(X) := {M^n \to X/ \sim}\\), which is the bordism classes of maps to X from an n-dimensional stably almost-complex manifold, so the \\(\times 2\\) map is then the disjoint union of bordant classes of manifolds. Perhaps this gives us a way to invert \\(2\\) geometrically? I’m really not sure how to make this precise.

Assuming that all of this works, this bordism with singularities \\(C(x_6, …, x_i) \simeq E\\) is a presentation of the spectrum associated to our elliptic genus.

If we instead start with an elliptic genus \\(MU_* \to R\\), can we get the same result? How does the grading differ or is it the same because we are factoring through \\(MSO\\)?

As a last comment, I’ll address my vague desire for the geometry of elliptic curves to come into this story. Looking, say, at the 2-torsion points of our elliptic curves — if this construction is functorial — we might expect a 2-torsion action on the bordism with singularities presentation. This might be close to what “tmf with level-2 structure” means, but I’m really not sure.

_Thanks to Chris Sommer-Preis, Achim Krause, and Tomer Schlank for answering some of my questions on the topic._
