---
title: "What is the difference between homotopy and coherent homotopy?"
date: "2015-07-04"
categories: 
  - "math"
---

This question had been bugging me for a while, and I have been unable to find a source that is suited to the beginning topologist. Eric Peterson kindly answered this for me, and I found his explanation so astoundingly beautiful that I wish to share on the off chance that you, dear reader, will similarly appreciate this visually rich narrative. All errors are mine and not his.

Coherence is essentially about the existence of diagram categories. For instance, suppose you have some homotopy class \(A \wedge A \to A\), which I’d like you to think of as a multiplication map on \(A\). You can think of this as a homotopy class

\\(S^0 \to F(A \wedge A, A)\\)

in the appropriate function spectrum. Then, given any map of this signature, you can build two maps \(A \wedge A \wedge A \to A\) out of it:

\(A \wedge A \wedge A = A \wedge (A \wedge A) \to A \wedge (A) = A \wedge A \to A\), and \(A \wedge A \wedge A = (A \wedge A) \wedge A \to (A) \wedge A = A \wedge A \to A\),

corresponding on the level of function spectra to a map

\\(F(A \wedge A, A) \to F(A \wedge A \wedge A, A)^{\partial \Delta^0}\\)

where the right-hand object has the distinguished property

\(S^0 \to F(A \wedge A \wedge A, A)^{\partial \Delta^1} = (\partial \Delta^1_+ \wedge S^0) \to F(A \wedge A \wedge A, A)\) \(= (\partial \Delta^1_+) \to F(A \wedge A \wedge A, A) = (S^0 \vee S^0) \to F(A \wedge A \wedge A, A)\)

i.e., it selects two homotopy classes.

The assertion that the multiplication is associative is the same as saying that these two homotopy classes lie in the same path component of the function space, and a witness to this fact is a map \(h\) in

\\(S^0 \xrightarrow{h} F(A \wedge A \wedge A, A)^{\Delta^1} to F(A \wedge A \wedge A, A)^{\partial \Delta^1}\\)

which upon restriction to the endpoints of the 1-simplex recovers the two-different-associations map specified above. Then, given such an \(h\), you can follow a similar procedure with \(F(A \wedge A \wedge A \wedge A, A)\) to build an element of

\\(S^1_+ \to F(A \wedge A \wedge A \wedge A, A)\\)

that, naively, could be nonzero. This is distinctly different from the algebraic case, where there are still function objects, but they’re all _sets_, and hence they will never have any \(\pi_1\), and so this map is _always_ fillable. With spaces or spectra (or anything else homotopical), this is no longer guaranteed, and so you have to assure yourself that you can perform this filling. And then, once you’ve chosen such a filling, you can use it to build an element of \(\pi_2\) of the next thing…

There are different ways to bundle this formalism, but all of them rely essentially on the existence of these “diagram categories”

\\(C^X\\)

where \(C\) is some suitable category (like: a category enriched in spaces or an (\(\infty\), 1)-category, as is the case for Spectra) and \(X\) is some indexing object (like: a simplicial set, as is the case for \(\Delta\)). The two big names are “quasicategories” (which give you a little more than this but are generally useful) and “derivators” (which give you _exactly_ this and are considerably less popular for general use). Continuing the example above, an associative algebra object is then a map

\\(\Delta \to C\\)

(or a point in \(C^\Delta\)) which restricts on objects to the tensor powers of some fixed object in \(C\) (cf. 4.1.2.14-15 of Higher Algebra for a taste).

In any case, “coherent” is meant to express that the process is self-referential: each choice of previous homotopy influences choice of the next homotopy (and, indeed, even the ability to choose one at all). Note also that the process is complicated dramatically when considering commutative algebra objects, since then you have all these shuffle maps to keep track of.

This summary is sort of separate, though, from what coherence is useful for. The low-level summary is that ring spectra in the homotopy category have homotopy classes of maps between them (which homotopy-commute with the ring structure maps), but structured ring spectra have _function spaces_ (or spectra) between them (which describe how to slide a maps between these \(\Delta\)-indexed objects around).

So, if you want to do homotopy theory with ring objects, you don’t have access to that until you start saying structured things.

The high-level summary of the Elmendorf-Kriz-Mandell-May book is that coherent ring spectra are the spectra for which you can build a theory of algebra. Coherent ring spectra have categories of modules (with function spaces between them, so this is a statement about homotopies), those categories have suitably monoidal tensor products (where e.g. the associativity of the tensor product is also controlled by homotopies), and the tensor products are controlled by spectral sequences grounded in homological algebra (i.e., there are machines interchanging doing homotopy with algebraic objects for doing algebra with homotopical objects). So, if you have some algebraic question (about formal group laws) and some homotopical objects (like \(MU\) and \(BP\)), then this is the sort of framework you’d want to design in an effort to repeat algebraic proofs, applied to these fancier objects.
