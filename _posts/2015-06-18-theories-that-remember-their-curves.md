---
title: "A First Look at an Equivariant Elliptic Cohomology"
date: "2015-06-18"
categories: 
  - "math"
---

Usually, besides the information preserved by the formal group law of the elliptic curve, we can’t see any information about the elliptic curve when looking at the output of its associated cohomology theory. The formal group law only* remembers if the curve was singular/supersingular, and the characteristic of its field.

(*There’s also some crazy invocation of the Serre-Tate Theorem going on s.t. operations upstairs between elliptic curve formal group laws occur downstairs between elliptic cohomology theories but that’s for another post.)

A dream is to have a cohomology theory \(E^*(-)\) that encodes _all_ of the geometry of the elliptic curve \(C\) used to construct it. One way to phrase this more precisely is by asking for a cohomology theory with a property along the lines of \(\textbf{E}^*(pt) = C\).

This property is inspired by an analogue to K-theory, which satisfies something like \(\textbf{K}_G(pt) = \mathbb{G}_m\), where \(\textbf{K}_G(-) := \text{Spec }K_G(-)\).

Turns out that I’m not alone in this desire, such a cohomology theory has been constructed before!

Thanks to Eric Peterson for graciously answering all of my questions — all of them, and Minhyong Kim for carefully listening to me and clarifying my vague thoughts toward such an object. All errors in the following are mine and mine alone.

There are beasties called equivariant cohomology theories, for example, the singular beastie is defined like this: \(H_G(X) := H(X \times_G EG)\)

Where \\(X \times_G EG := X \times EG/(x \cdot g, e) \sim (x, g \cdot e)\\), this is the Borel construction (“colimit”).

Note, \(X \times_G EG\) is **NOT** the same shorthand for the below fiber product (“limit”):

![Bildschirmfoto 2015-06-16 um 12.11.56 nachm.](/wp-content/uploads/2015/06/Bildschirmfoto-2015-06-16-um-12.11.56-nachm..png)

_If you’ve never encountered equivariant stuff before and want to get a feel for it beyond a beginner ranting at you, here’s [an introductory lecture by Hopkins](https://www.youtube.com/watch?v=yVofKfkx8n4)._

To the exciting part: [Grojnowski constructed](http://hopf.math.purdue.edu/Grojnowski/deloc.abstract) an equivariant \(E^*(-)\) that trivially ensures that the elliptic curve is kept in the heart of the cohomology theory as its coefficient ring, \(E^*(pt) = C\).

My rough understanding of Grojnowksi’s construction is:

![11426604_10205787986011500_1249441325_o](/wp-content/uploads/2015/06/11426604_10205787986011500_1249441325_o.jpg)

- input:: \(X :=\) space with an \(S^1\)-action
- look at an elliptic curve \(C\)
- over each point of the elliptic curve we have the stalk \(H^*_{S^1}(X) \otimes g\), where \(g\) is an element of the Lie algebra of the curve \(C\)
- output:: \(E^*_{S^1}(X) := \) these stalks are (magically*) glued together according to the Lie algebra of the elliptic curve \(C\)

*Here’s how I think the Lie algebra gluing together works:

Note that \(T_e\mathcal{E} : T\mathcal{E} = Lie \mathcal{E} \times \mathcal{E}\) (tangent bundles of Lie groups are always trivial) MISSING IMAGE [![Bildschirmfoto 2015-06-19 um 2.48.12 nachm.](/wp-content/uploads/2015/06/Bildschirmfoto-2015-06-19-um-2.48.12-nachm..png)](/wp-content/uploads/2015/06/Bildschirmfoto-2015-06-19-um-2.48.12-nachm..png)

Let’s look at the map \(T_e\mathcal{E} \to \mathbb{A}^1_\mathbb{C}\):

For complex elliptic curve \(\mathcal{E} \simeq \mathbb{C}/L\) , the Lie algebra \(\mathfrak{e}\) is canonically \(\mathbb{C}\) and the exponential map \(\mathfrak{e} to \mathcal{E}\) is the reduction mod L. For a point \(e\) on the elliptic curve, we have a map to the tangent plane at that point:

\(\mathcal{E} \to T\mathcal{E}\) \(e \mapsto T_e\mathcal{E} \simeq \mathbb{A}^1_\mathcal{C}\)

We also have an inclusion \(e \hookrightarrow T_e\mathcal{E}\) and we can identify an (open?) neighborhood of \(e \in E\) with the open neighborhood of \(e \in T_e\mathcal{E}\). MISSING IMAGE

[![11638742_10205864344680419_1731265473_o](/wp-content/uploads/2015/06/11638742_10205864344680419_1731265473_o.jpg)](/wp-content/uploads/2015/06/11638742_10205864344680419_1731265473_o.jpg)

Same picture with more labels: MISSING IMAGE

[![11539816_10205864339960301_2081787557_o](/wp-content/uploads/2015/06/11539816_10205864339960301_2081787557_o.jpg)](/wp-content/uploads/2015/06/11539816_10205864339960301_2081787557_o.jpg)

So, we can take something stalkwise defined over \(e \in \mathcal{E}\) and glue it together based on transition maps between neighborhoods in the corresponding tangent spaces.

More specifically, we can take an object defined over \(e \in \mathcal{E}\) and an object defined over \(e_1 \in \mathcal{E}\), and if their neighborhoods (which we’ll call \(N_e\) and \(N_{e_1}\)) overlap, this allows us to define and test the sheaf gluing condition.

Since we identified the neighborhood of \(e\) in the tangent space with the neighborhood of \(e\) on the curve, this is all fine and good: MISSING IMAGE [![11650605_10205864346760471_629569038_n](https://web.archive.org/web/20150623230900im_/http://rin.io/wp-content/uploads/2015/06/11650605_10205864346760471_629569038_n.jpg)](/wp-content/uploads/2015/06/11650605_10205864346760471_629569038_n.jpg)

But how does this connect to the cohomology theory as a sheaf over the elliptic curve?

I’m pretty sure that we can think of the map \\(\text{Spec }H^*_{S^1}(pt) \to \mathbb{A}^1_\mathbb{C}\\) as mapping a copy of \(\text{Spec }H^*_{S^1}(pt)\) to each tangent plane of \(\mathcal{E}\).

Why? We’re assuming that:

1) If \(X\) is a \(G\)-space \(\leadsto\) \(H_G^*(X)\) is a sheaf on \(\text{Spec }H^*_G(pt)\)

2) \(\text{Spec }H^*_{S^1}(pt) \simeq \mathbb{A}^1_\mathbb{C}\)

Expand for more detail

When \(G := S^1\):

\(H_{S^1}^*(pt) \simeq (\text{Sym } \mathfrak{t}^*)^W \simeq \mathbb{C}[x]\) \(\Rightarrow \text{Spec } H_{S^1}^*(pt) \simeq \mathbb{A}^1_{\mathbb{C}}\)

For points \(q\) near the origin of \(\mathbb{A}^1_{\mathbb{C}}\), there is a neighborhood \(U \in \mathbb{A}^1_{\mathbb{C}}\) with \(\Gamma(U, H_{S^1}^*(X)) = H_{S^1}^*(X^{f(q)})\)

In this case, \(f\) is just \(\text{\exp}: \mathbb{A}^1_{\mathbb{C}} to S^1\) and the notation \(X^g\) is the set of points in \(X\) fixed by \(g\) endowed with the subspace topology.

This \(E_{S^1}\) beastie trivially satisfies the condition \(E_{S^1}^*(pt) = C\), it just degenerates to (a mild modification of) the elliptic curve \(C\) when X is a point.

We’re even supposed to expect that we have to mildly modify it!

It’s not possible for \(E_{S^1}^*(pt)\) to give us the elliptic curve in the usual way (as a ring of global functions). I’ve been told that this is because elliptic curves (as examples of projective varieties) don’t have interesting global functions, but I don’t know why this is yet (first I must understand why there aren’t non-constant functions without poles on the Riemann sphere…).

I should probably tell you that when I say “mild modification” of our elliptic curve \(C\), what I really mean is \(C \otimes Hom(S^1, T)\), where we are idenifying \(Hom(S^1, T)\) with the lattices of the Lie algebra of \(S^1\); \(S^1\) is the multiplicative circle group (i.e., chilling on the unit circle in \(\mathbb{C}\), adding 2 angles to get a third angle), and \(T\) is a compact torus.

Actually, the case where \(G = S^1\) collapses Grojnowski’s construction quite a bit. Here, \(G = T, \mathfrak{g} = \mathfrak{t}\), and \(Hom(T, S^1) = Hom(S^1, S^1) = \mathbb{Z}\). So here, \(E_T = \mathbb{Z} \otimes_{\mathbb{Z}} C\), and tensoring a ring with itself is a null operation, which gives us \(E_T = C\).

But this isn’t the end of the story! Of course it isn’t.

[Matt Ando (pg.29)](http://www.math.uiuc.edu/~mando/papers/POECLG/poeclg.pdf) hints at an extension of Grojnowski’s construction from complex elliptic curves to p-adic Tate curves!

That is, rather than looking at a complex elliptic curve \(C\), which is represented by a map \\(\text{Spec }\mathbb{C} \xrightarrow{C} M_{\ell}\\)

We’re looking at the particular inclusion so that any further composite:

\(\text{Spec }R \xrightarrow{f} \text{Spf }Z[[u]] \hookrightarrow M_{\ell}\) + a little compactification

selects the elliptic curve over \(R\) with \(q\)-invariant specified by \(f(u)\).

Something I really don’t get is if Grojnowski’s construction can be done in the non-cuspidal case, for some reason they say you can only do it in the cuspidal case but they don’t say WHY. Maybe it is too obvious to point out, but I know very little about curves so this continues to elude me.
