---
title: "What does the sphere spectrum have to do with formal group laws?"
date: "2015-04-30"
categories: 
  - "math"
---

_This post assumes that you’re familiar with the definition of a prime ideal, a local ring, \\( R\_{(p)} \\), the sphere spectrum, \\(\mathbb{S}\\), and the Lazard ring, \\(L\\). During a talk [Jacob Lurie](http://www.math.harvard.edu/~lurie/) gave at Harvard this April, he labeled the moduli space of (1-d commutative) formal group laws as \\(\text{Spec }\mathbb{S}\\).

[Eric Peterson](https://math.berkeley.edu/~ericp/) kindly explained why \\(\text{Spec }\mathbb{S} \simeq \text{Spec }L\\) and I found his answer so lovely that I wish to share (all mistakes are due to me).

## Why is \\(\text{Spec }L\\) iso to \\(\text{Spec }\mathbb{S}\\)?

This is part of the story of geometers working with higher algebra asking “what is an ideal of a ring spectrum?”

**A ring \\(R\\) ——————-> category** \\(Mod_R \supseteq \mathrm{Perf}_R\\) (finitely presented)

Note that \\(\mathrm{Perf}_R\\) is the category of [Perfect complexes](http://www.math.unl.edu/~siyengar2/Papers/OW0206.pdf) of \\(R\\)-modules. A Perfect complex of \\(R\\)-modules is a chain complex of finitely generated projective \\(R\\)-modules \\(P_i\\), and is thus of the form \\\(0 \to P_s \to … \to P_i \to 0\\\)_

**The ring spectrum \\(\mathbb{S}\\) ——————-> category** \\(Mod_{\mathbb{S}} \supseteq \mathrm{Perf}_{\mathbb{S}}\\)

Note that \\(Mod_\mathbb{S} \simeq\\) Spectra, and \\(\mathrm{Perf}_\mathbb{S} \simeq\\) Finite Spectra

_A finite spectrum is a spectrum which is the de-suspension of \\(\Sigma^\infty F\\), where \\(F\\) is a finite CW-complex._

There’s [a theorem by Balmer](/images/wp-content/uploads/2015/04/spectrum.pdf) answering “what is an ideal in this context”, which points out this analogue:

\\(\text{Spec }R\\) as a space; \\(p\\) as a point (an element of \\(\text{Spec }R\\))

\\(\mathrm{Perf}_R\\) as a space; \\(\mathcal{P}\\) as a point (a subcategory of \\(\mathrm{Perf}_R\\))

satisfying that \\(\mathcal{P}\\) is:

1. \\(\otimes\\)-closed against R-modules \\\(a \in \mathrm{Perf}_R; b \in \mathcal{P} \Rightarrow a \otimes b \in \mathcal{P}\\\)
2. a thick subcategory of \\(\mathrm{Perf}_R\\) (i.e., it’s closed under cofiber sequences and retracts i.e., closed under extension)

A “prime ideal” of \\(\mathrm{Perf}_R\\) is a “proper thick tensor-ideal” \\(P\\) (\\(\subsetneq \mathrm{Perf}_R\\)) s.t.

\\\(a \otimes b \in \mathcal{P} \Rightarrow a \in \mathcal{P} \text{ or } b \in \mathcal{P}\\\)

So, if \\( K\_*(-) \\) is a homology theory with Künneth isomorphisms $$(K\_*(X \wedge Y) \simeq K\_*(X) \otimes\_{K\_*} K\_*(Y))$$

$$\Rightarrow \mathcal{P} = {X | K\_*(X) = 0} \text{ must be a “prime ideal”.}$$ 

Sanity check of its "ideal-ness":

$$K_*(X \wedge Y) \simeq K_* X \otimes K_*Y \simeq 0 \otimes K_*Y \simeq 0$$

Here’s the surprising theorem that ties this prime ideal excursion into our original question (**Periodicity Theorem: Hopkins and Smith**):

1. Any \\(C \subset \mathrm{Perf}_{\mathbb{S}}\\) arises in this way
2. All homology theories with Künneth isomorphisms are [Morava K-theories](http://ncatlab.org/nlab/show/Morava+K-theory#axiomatic_characterization) including \\(Hk\\) where \\(k\\) is a field, which is just the infinite Morava K theory \\(K(\infty)\_{(p)}\\).

The proof of this is currently beyond my grasp, so I’m afraid I can’t talk you through it.

Taking this theorem’s proof as a black box, we’ve scraped together enough context to parse the answer of why \\(\text{Spec }L \simeq \text{Spec }\mathbb{S}\\).

Let’s look at \\(\text{Spec }Z\\):

[![Screen Shot 2015-05-01 at 1.33.04 AM](/images/wp-content/uploads/2015/04/Screen-Shot-2015-05-01-at-1.33.04-AM.png)](/images/wp-content/uploads/2015/04/Screen-Shot-2015-05-01-at-1.33.04-AM.png)

let’s look at the residue classes of \\(Z\\):

[![Screen Shot 2015-05-01 at 1.33.00 AM](/images/wp-content/uploads/2015/04/Screen-Shot-2015-05-01-at-1.33.00-AM.png)](/images/wp-content/uploads/2015/04/Screen-Shot-2015-05-01-at-1.33.00-AM.png)

and at \\(\text{Spec }HZ \simeq \text{Spec }Z\\), where the ring spectra \\(HR\\) represent \\(H^*(-;R)\\);

[![Screen Shot 2015-05-01 at 1.32.56 AM](/images/wp-content/uploads/2015/04/Screen-Shot-2015-05-01-at-1.32.56-AM.png)](/images/wp-content/uploads/2015/04/Screen-Shot-2015-05-01-at-1.32.56-AM.png)

By the nilpotence theorem, the ideals of \\(\mathbb{S}\\) are the Morava K’s (one for each height and each prime)…

[![2015-04-30 18.57.27](/images/wp-content/uploads/2015/04/2015-04-30-18.57.27-768x529.jpg)](/images/wp-content/uploads/2015/04/2015-04-30-18.57.27-scaled.jpg)

…so, \\(\text{Spec }\mathbb{S}\\) looks like \\( \text{Spec }L\\) (by a theorem of Lazard, 1-d formal group laws over separably closed fields of char p are classified up to iso by their height).

To be absolutely clear: for \\(K(n)_{(p)}\\); \\((p)\\) corresponds to the characteristic of the field (over which the formal group law is defined), while \\(n\\) corresponds to the height of the formal group law.

#### Afternote:

A comment of Lennert Meier’s on MO caught my interest. He mentioned that as the spectrum \\(\ell\\) (associated to a supersingular elliptic curve) is Bousfield equivalent to \\(K(0) \vee K(1) \vee K(2)\\) (with an implicit localization at a prime), we have \\(\ell_*(K(A,n)) = 0\\) for \\(A\\) finite abelian and \\(n \geq 3\\).

Note that \\(F\\) and \\(E\\) are Bousfield equivalent if for every spectrum \\(X: F_*(X)\\) vanish iff \\(E_*(X)\\). This is an equivalence relation on spectra.

Any elliptic cohomology is Bousfield equivalent to a wedge of Morava K-theories. Before we discard looking at individual elliptic cohomology theories, in favor of their “universal” counterpart with nice automorphisms, let’s look at the difference between \\(K(0) \vee K(1)\\) and complex K-theory, and try to lift these differences to those of \\(K(0) \vee K(1) \vee K(2)\\) and supersingular \\(\ell\\). It was pointed out to me that this is like comparing a local ring to its residue field.

To compute the Atiyah Hirzebruch spectral sequence of \\(E^*(X)\\), we need to know both the attaching maps in the space \\(X\\), and the attaching maps in the spectrum \\(E\\) (which I believe are called its Postnikov tower), both are _hard_ (in most cases).

We currently only know how to compute the AHSS of \\(\ell^*(X)\\) when we have some map from \\(CP^\infty \to X\\) (since we define \\(\ell\\) using \\(CP^\infty\\)), for this map induces a map between spectral sequences.
