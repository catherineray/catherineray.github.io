---
title: "Half Haunted: Relating the 1/2's in Duflo and Harish-Chandra"
date: "2023-09-16"
categories: 
  - "math"
---
This post is written together with Josh Mundinger. 

We seek to understand the relations between \\(1/2\\)'s that appear across mathematics. From the Riemann Hypothesis to the L2 norm, we aim to see the myriad and enticing ways this unfurls; each instance of \\(1/2\\) connected in an anarchic network of equals. In this blog post, we examine a specific example arising in representation theory: the center of the universal enveloping algebra \\(U\mathfrak g\\) of a Lie algebra  \\(\mathfrak g\\).

The PBW theorem implies there is an isomorphism of vector spaces 
\\( sym: \text{Sym}(\mathfrak g)^\mathfrak g \cong Z(U\mathfrak g),\\)
which on \\(\text{Sym}^i\\) is given by the symmetrization map 
\\( sym: x_1x_2\cdots x_i \mapsto \frac{1}{i!} \sum_{\sigma \in S_i} x_{\sigma 1}x_{\sigma 2}\cdots x_{\sigma i}.\\)

The symmetrization map is not a ring homomorphism. Duflo showed, however, that by *twisting* the symmetrization map, one obtains a ring homomorphism. 
The Chevalley restriction theorem then identifies  \\(\text{Sym}(\mathfrak g)^\mathfrak g\\) with \\(\text{Sym}\mathfrak h^W\\), where \\(\mathfrak h\\) is a Cartan subalgebra and \\(W\\) is the Weyl group.

On the other hand, when  \\(\mathfrak g\\) is semisimple, there is another way to understand  \\(Z(U\mathfrak g)\\). 
The Harish-Chandra isomorphism is a "quantized" version of the Chevalley isomorphism, 
\\( \text{Sym}(\mathfrak{g})^{\mathfrak{g}} \to \text{Sym}(\mathfrak{h})^{W}. \\) 
It's called quantized because we are taking taking the universal enveloping algebra, which is adding a parameter deforming the bracket of our Lie algebra (literally a deformation parameter). Then, we get back down to the classical case by taking the associated graded. 
Harish-Chandra proved that there is an isomorphism  \\(Z(U\mathfrak g) \cong (U\mathfrak h)^{(W,\cdot)}\\).
Here  \\(W\\) acts on  \\(\mathfrak h\\) via the \emph{dot action} instead of the usual action: the origin is shifted by \\(\rho\\), \\(1/2\\) of the sum of the positive roots of  \\(\mathfrak g\\).

Our quest now leads us to the natural question: are the 1/2 in  \\(\rho\\) and the 1/2 in Duflo's differential operator the same 1/2?

In the case of  \\(\mathfrak{sl}_2\\), we show via explicit computation that the answer is yes! Further, we can see why both arise via a lovely geometric flip and adjustment. The geometric adjustment is by another  \\(1/2\\): a square root of the canonical bundle on a variety.

And with that intro, we will leave you hanging in suspense! This post is in progress, and shall be continued next week. If you are interested in seeing the details earlier, please email me :).  
