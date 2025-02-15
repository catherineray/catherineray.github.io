---
title: "Models of Formal Group Laws of Every Height"
date: "2017-07-08"
categories: 
  - "math"
  - "papers"
---

These notes began as my way of attempting to understand examples of abelian varieties (over finite fields) whose formal group laws posess higher height. Indeed, the notion that _the height of a formal group law encodes the symmetry of the underlying abelian variety_ is a notion that I found irresistibly attractive to attempt to make precise and explore with examples.	

I wish to mention that this set of examples is different than those of Gorbunov-Mahowald, as they define varieties with formal group laws of height \\(p-1\\) for every prime \\(p\\) . 
	
To create formal group laws of higher heights \\(h \geq 3\\), we will need to look at varieties of dimension higher than one by Cartier duality. (For an introduction to the slope notation I use here, check out [Overview of Classical Theory of p-Divisible Groups](https://rin.io/overview-of-the-classic-theory-of-p-divisible-groups/). If we request a p-divisible group with a piece of dimension 1 height 3, we wish for \\(G_{1/3}\\) but since abelian varieties admit polarizations, the p-divisible group must be its own Cartier dual, it must be of the form: $$G_{1/3} \times G_{2/3}$$ so it's total dimension is 1 + 2 = 3.

Sidenote: We represent p-divisible groups as a finite product of \\(G_{r/s}\\) where \\(r\\) is their dimension and \\(s\\) is their height, and the Cartier dual of a p-divisible group takes \\(G_{r/s} \mapsto G_{s-r/s}\\). Thanks to Andrew Salch for this explanation.

To find formal group laws of dimension 1, we will split these formal group laws into a formal summand, and prove that there exists a height \\(h\\) component of dimension 1.

This paper will construct examples of abelian varieties whose formal group laws are of higher height, prove they are Lubin-Tate. This is motivated by a computation in algebraic topology, but is of independent interest.


I wish to argue for a indirect construction of the variety which gives us formal group laws of higher height. We use the philosophy that if one is unable to directly construct local things, one can instead construct a global thing and completing/specializing to get the desired local thing. 

There are _many_ global things that specialize to the same local thing. We choose the variety \\(\mathbb{C}^m/\mathbb{Z}[\zeta_N]\\) as our global model because its endomorphism ring is very simple (*) -- it is (and at the very least contains) \\(\mathbb{Z}[\zeta_N]\\), and its automorphism group is \\(\mathbb{Z}[\zeta_N]^\times\\). For \\(N\\) prime, by Dirichlet's unit theorem, \\(\mathbb{Z}[\zeta_N]^\times \simeq \mathbb{Z}/NZ^\times \times \mathbb{Z}^{(N-3)/2}\\).

(*)Unless it is what Taniyama-Shimura call degenerate, then the endomorphism ring is a little more complicated.

[If the pdf viewer doesn’t work, here’s the link to the paper.](/images/wp-content/uploads/2017/08/lubintatemodels-2.pdf)
