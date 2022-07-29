---
title: "A Quick Note on a Geometric Definition of (v_n)"
date: "2015-08-20"
categories: 
  - "cohomology"
  - "math"
  - "topology"
---

_This post assumes knowledge of the definition of the oriented cobordism ring, as well as the equivalence \(\pi_*MU \simeq MU^*(pt) =: MU^*\), and familiarity with the [Landweber exact-functor theorem](/landweber-exactness/)._

A quick post on a nice thing. I was reading Quillen and stumbled across what seems to be the first nod toward the importance of the coefficients \(p, v_1, v_2, … \in MU^*\).

I have complained about my confusion wrt these coefficients and the concept of complex orientation in a few past blog posts. I’ve read about it so many times in many different equivalent forms, but finally, this one stuck.

They are defined as normal bundles which correspond to a choice of weakly complex structure. Thanks to Tyler Lawson for confirming and clearing up my suspicions on this connection.

For those who haven’t encountered homotopy theory, I’d like to show you the following excerpt of Whitehead so you may realize that Quillen is observing a creature in its native habitat.

![Bildschirmfoto 2015-08-18 um 5.23.23 nachm.](/wp-content/uploads/2015/08/Bildschirmfoto-2015-08-18-um-5.23.23-nachm..png)

> “A complex orientation of a map of manifolds \(f: Z \to X\) is a generalization of a weakly complex structure on \(Z\) when \(X\) is a point. By a complex orientation of \(f\), we mean an equivalence class of factorizations of \(f\),
> 
> \\(Z \xrightarrow{i} E \xrightarrow{\pi} X\\)
> 
> where \(p: E \to X\) is a complex vector bundle and \(i\) is an embedding endowed with a complex structure on its normal bundle \(v_i\).”

Does the normal bundle \(v_i\) have to do with the \(v_i\) in the sequence \((p, v_1, v_2, …)\) in the coefficient ring of MU? Are these just the same letters being used?

Since an equivalence class of factorizations of \(f\) is an equivalence of choices of the embedding \(i\), then this is also an equivalence class of the complex structures of the normal bundles \(v_i\).

Next, if we take the equivalence class of factorizations Z -i-> E -p-> X to be up to cobordism, then each \(v_i\) is represented by an element of \(MU^*(X)\). We have to choose \(X\) to be \(pt\) for the \(v_i\) to be in the coefficient ring as we’d expect.

_Sidenote: Quillen also mentions that if the dimension of E is “sufficiently large” then one obtains each complex orientation of \(f\) from exactly one homotopy class of complex structures on \(v_i\). I am not sure why \(E\) must be large for this to be true, but I have been told it is for the following two reasons. One is that \(E\) has to be sufficiently large for \(Z\) to be able to embed. The second is that it also has to be large for some ambiguities in the process (the isomorphism class of the normal bundle, for example) to be eliminated._

_Another sidenote: here’s the excerpt from Whitehead which is not as directly relevant:_

* * *

[![Bildschirmfoto 2015-08-18 um 5.23.36 nachm.](/wp-content/uploads/2015/08/Bildschirmfoto-2015-08-18-um-5.23.36-nachm..png)](/wp-content/uploads/2015/08/Bildschirmfoto-2015-08-18-um-5.23.36-nachm..png)

* * *

It seems that Dan Quillen’s guiding conviction was to understand a mathematical phenomena by seeking out its very simplest concrete manifestation. Due to this, I doubly appreciated the following quote from this seminal paper of his that we’ve been talking about:

> I have been strongly influenced by Grothendieck’s theory of motives and like to think of a cobordism theory as a universal contravariant functor on the category of \(C^\infty\) manifolds endowed with Gysin homomorphism for a class of proper “oriented” maps, instead of as the generalized cohomology theory given by a specific Thom spectrum.
> 
> —-Dan Quillen, [Elementary Proofs of Results in Cobordism Theory]

He introduced formal groups as a tool in algebraic topology due to his interest to understand from first principles the result from cobordism theory that the coefficient ring of \(MU\) is a polynomial ring with an infinite number of even generators.

This caught on. If you’re curious wrt these \(v_n\), I wrote [this little Toda-Smith article on nlab](http://ncatlab.org/nlab/show/toda-smith+complex) which brushes by how they come up as periodic maps.

An awareness of the classification results on formal group laws gives us some computational tools to try and wrassle the impossible beast of the homotopy groups of spheres. We usually do this a prime at a time, that is, study the homotopy groups of the p-local sphere, because it is way easier. Still impossibly hard, but easier.

For example, his methods led to our finding that \(v_{n}^{-1} BP_*/(p^\infty, …, v_n^\infty\) is like \(H^*_{gp}(\mathbb{S}_n, E_*)\). People (who actually know how to ram their heads against these things!) compute some of the higher ones (?) by playing a super-hard game along these lines:

1. \(Ext_{BP_*BP}^{*,*}(v_{n}^{-1} BP_*/(p^\infty, …, v_n^\infty)\)
2. apply the chromatic spectral sequence to get \(Ext^{*,*}BP_*\) ,
3. then apply the Adams-Novikov to get \(\pi_*\mathbb{S}_{(p)}\)
