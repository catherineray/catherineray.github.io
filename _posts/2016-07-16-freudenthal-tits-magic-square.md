---
title: "How do I construct the Tits-Freudenthal magic square?"
date: "2016-07-16"
categories: 
  - "math"
---

_Thanks to Mia Hughes and John Huerta for the helpful discussions on this topic._

I am here taking another quick jab at trying to understand the construction of the Tits-Freudenthal Magic square. Let’s see if we can get into Vinberg’s mindset when he wrote down Vinberg’s construction.

Let’s say we knew the following theorem: \\\(\text{ the derivations of } \mathcal{J}_3(\mathbb{O}) = f_4\\\) We want to write down derivations of other algebras, \\(\mathbb{O} \otimes_{\mathbb{R}} \mathbb{D}\\), where \\(\mathbb{D}\\) is a division algebra.

Let’s see how we might derive the fact that \\\(\text{der}(\mathcal{J}_3(\mathbb{A})) \simeq a_3(\mathbb{A}) \oplus \text{der}(\mathbb{A})\\\)

where \\(a_3\\) denotes the 3×3 trace-free antisymmetric matrices, and \\\(\text{der}(A) = \text{Lie}(\text{Aut}(A))\\\)

* * *

Look upon the set of 3×3 Hermitian (aka self-adjoint) matrices over an associative division algebra \\(\mathcal{A}\\).

Equip this set with a Hermitian product, \\(\frac{XY+YX}{2}\\). Note that this multiplication is commutative but not associative, more importantly, it preserves self-adjointness. We call this algebra \\(\mathcal{J}_3(\mathbb{A})\\).

The automorphisms of this algebra are that of conjugation by unitary matrices.

\\\(X \mapsto UXU^{-1}\\\)

this preserves the product. Note that we may write any unitary element \\(U\\) as the exponent of a hermitian matrix, that is,

\\\(U = e^{T}\\\)

for some \\(T\\). So, when \\(T\\) has components really close to \\(0\\),

\\\(U = e^T = Id + T\\\)

\\\(U^{-1} = e^{-T} = Id - T\\\)

So, when \\(T\\) is very small, that is, \\(T^2 = 0\\), we see that:

\\\(UXU^{-1} = (Id + T) X (Id - T) = X + TX - XT- TXT = X + [T, X]\\\)

In other words, when \\(T\\) is very small our automorphism \\\(X \mapsto UXU^{-1}\\\)

becomes: \\\(X \mapsto X + [T,X]\\\)

We may break \\(T\\) up into its trace-free (0 on the diagonal), and trace parts: say \\(T = T_0 + T_1\\).

\\\(X \mapsto X + [T_0, X] + [T_1, X] \\\)

We look first at \\([T_0, X]\\): We see that \\(T_0\\) is the algebra of trace free antisymmetric matrices, \\(a_3(\mathbb{A})\\), acting by commutator on \\(X\\): \\([T_0, X]\\).

Now, we look at \\([T_1, X]\\): When \\(\mathbb{A} = \mathbb{R}\\), the trace part is 0. But, otherwise, the trace is purely imaginary.

So, \\([T_1, X] = [Id \text{Tr }T , X] = [i, X] = iX - Xi\\), where, \\(iX - Xi \simeq \frac{d}{dX}(e^{\epsilon i} X e^{-\epsilon i} - X)\\). That is \\([T_1, X]\\) is the derivative of an automorphism of \\(X\\), which means that it is a derivation! So, it is believable that \\(T_1\\) (acting by commutator) is the algebra of derivations of \\(\mathbb{A}\\).

\\(\implies\\) We have shown (intuitively, at least), by examining our automorphisms when \\(T\\) is taken to be very small, \\(X \mapsto X + [T_0, X] + [T_1, X] \\), that:

\\\(\text{Lie}(\text{Aut}(\mathcal{J}_3(\mathcal{A})))\simeq a_3(\mathbb{A}) \oplus \text{der}(\mathbb{A})\\\)

where \\(a_3\\) denotes to 3×3 trace-free antisymmetric matrices, and \\\(\text{der}(A) = \text{Lie}(\text{Aut}(A))\\\)

* * *

It is reasonable then to plug in other algebras \\(\mathbb{K}\\) in place of \\(\mathbb{A}\\), \\\(a_3(\mathbb{K}) \oplus \text{der}(\mathbb{K})\\\)

Indeed, we may look at the case \\(\mathbb{K} = \mathbb{O} \otimes_{\mathbb{R}} \mathbb{D}\\) where \\(\mathbb{D}\\) is a division algebra.

\\\(a_3(\mathbb{O} \otimes_{\mathbb{R}} \mathbb{D}) \oplus \text{der}(\mathbb{O} \otimes_{\mathbb{R}} \mathbb{D})\\\)

the typical Vinberg construction looks like

\\\(a_3(\mathbb{O} \otimes_{\mathbb{R}} \mathbb{D}) \oplus \text{der}(\mathbb{O}) \oplus \text{der}(\mathbb{D})\\\)

I am not sure if \\(\text{der}(\mathbb{O}) \oplus \text{der}(\mathbb{D}) \simeq \text{der}(\mathbb{O} \otimes_{\mathbb{R}} \mathbb{D})\\), but it is believable. At least one includes the other.

As to why this gives us the exceptional Lie algebras, we still do not know, but at least we see how Vinberg’s construction may have come about!
