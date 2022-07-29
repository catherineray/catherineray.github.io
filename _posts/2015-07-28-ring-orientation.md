---
title: "What is the orientation of a ring?"
date: "2015-07-28"
categories: 
  - "math"
---

My dear friend Alex Mennen and I had some fun this morning defining the orientation of a ring.

The motivating example is:

\(Z[x] \to Z\) \(x \mapsto 1\) or \(x \mapsto -1\)

In the case of free abelian groups and null generated rings (i.e., there is no quotient ring that is a proper subring), asking for an orientation of the basis makes sense. It’s just a choice of generator.

What about non-free groups like \(\mathbb{Z}/p\)?

Well, any element of \(Z/p\), except \(0\), generates the ring, (e.g., the underlying elements of \(Z/3\) are of course \(0, 1, 2\); 1 = 1, 1+1 = 2, 1+1+1=0; 2 = 2, 2+2 = 1, 2+2+2 = 0). This is only true when \(p\) is prime (in the general case, where \(p\) is not prime, relatively prime elements can’t generate each other).

Take \(Z/p\), endow it with the discrete topology,

1. remove the additive identity \((Z/p)\) {0}
2. We now have \((p-1)\)-connected components. These are the possible choices of orientation.
3. Pick an element of the ring {0}. This will be an element in a connected component, truly, it is a representative of a homotopy class of maps. (If we think of orientation simply as “which way is minus and which is plus,” in the case of \(Z[x] to Z\), \(x \mapsto -1\) might as well be \(x \mapsto -5\).)

What about things that are totally disconnected, like the p-adics?

As an example, let’s look at Z_3, with the following topology: start with a point, and draw three paths from the point, labeled “0,” “1,” “2,” at the end of each path, draw 3 paths, label those “0,” “1” and “2”, ad infinitum. A p-adic number is then on the fringe of this tree, and can be thought of as a string that describes the sequence of choices made from the point that we started with

path down the tree <=> p-adic number

following our recipe, we remove the origin, that is, all paths coming from the origin (which is on the fringe of this tree) …000000 (i.e., eliminate all paths that start with a 0). We now have 2 disconnected branches, that is, the branches 1 and 2. We choose either 1 or 2 as the orientation.

Perhaps this indicates, to deal with totally disconnected rings, we mod out by a maximal ideal and then we have a finite number of contractible components. But, I don’t know if this is true in general.

## There is no consistent notion of orientation.

The natural path to look for is a humble addition law that expresses \(o(R_1 \otimes R_2)\) in terms of \(o(R_1)\) and \(o(R_2)\).

Alex pointed out that it cannot be done for rings, at least, not with our naive definition.

Z/4 and Z/6 both have 2-element orientation groups, but Z/4 tensor Z/4 is again Z/4, so it has a 2-element orientation group, and Z/4 tensor Z/6 is Z/2, which has a 1-element orientation group. Thus the orientation group of the tensor product of two rings is not determined by the orientation group of each ring.

We can see that orientation is not consistent even more clearly with this example and definition given by Alan Weinstein:

1. On a finite set, define an “orientation” as an equivalence class of linear orderings, modulo even permutations. Is there a functorial way to associate to oddities on A and B oddities on their disjoint union (which I will denote simply by \(\cup\)) and their cartesian product which is consistent with the natural bijections \((A \cup B) \times C \rightarrow A \times C \cup B \times C\) and \(A \times (B \cup C) \rightarrow A \times B \cup A \times C\).
2. As above, but replace finite sets by finite dimensional vector spaces, oddity by orientation, disjoint union by direct sum, and cartesian product by tensor product.

Let A have elements a and a’, B and C have one element each, b and c. Then the orders on \((A \cup B) \times C\) and \(A \times C \cup B \times C\) are related by one transposition.

Oh well, no consistent orientation after all :(.

**Edit:** Aaron Slipper commented that there is a very natural notion of the orientation of an ideal with an integral basis over a PID. Namely, every ideal is a sub module of full rank (as it contains a principal ideal of full rank). So the basis elements have a natural notion of orientation, in the same way that a basis of a vector space does.

Edit: Something that has continued to confuse me is the notion of having an \(h\)-orientation, where \(h\) is a cohomology theory. The name “orientation” comes from choosing an orientation on \(S^2\), and looking at how a (multplicative complex-orientable) cohomology theory encodes this in the target category. For example, Thom’s interpretation of orientation (via the Thom isomorphism) in \(\text{AbGrp}\) seems to be: a choice of which element in \(h^2(S^2)\) corresponds to the generator of the coefficient ring \(h^*\) — since that \(S^2\) is a Moore space and iso to \(CP^1\).

Edit: My previous confusion wrt complex orientation has been resolved [here.](/the-structure-of-the-ring-mu/)
