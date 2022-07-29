---
title: "A Unifying Language"
date: "2014-08-19"
categories: 
  - "math"
---

Mathematics is a _huge_ subject.

Category theory is one area of mathematics dedicated to exploring the commonality of structure between different branches of mathematics.

Categorical language allows us to ascend a layer of abstraction and recognize the obvious underlying principles that guide seemingly unrelated concepts. Generality facilitates connections.

#### What is a category?

A category \(C\) consists of:

1. a class of objects \(Ob(C)\)
2. For every ordered pair of objects \(X\) and \(Y\), a set \(C(X,Y)\) of morphisms with _domain_ \(X\) and _range_ \(Y\) [\(C(X,Y)\) is possibly empty] Note: \(f \in C(X,Y) \equiv f : X \rightarrow Y \equiv X \overset{f}{\rightarrow} Y\).
3. For every object an identity morphism \(Id_x \in C(X,X)\).
4. A composition law \\(C(X,Y) \times C(Y,Z) \rightarrow C(X,Z)\\) \\((g,f) \rightarrow f\cdot g\\)

The concept of _composition_ follows naturally from the definition of path equivalence in graph theory: _Two paths with the same source as destination are equal._ [![Screenshot from 2014-08-11 00:10:36](/wp-content/uploads/2014/08/Screenshot-from-2014-08-11-001036.png)](/wp-content/uploads/2014/08/Screenshot-from-2014-08-11-001036.png) Additionally, categories must satisfy the laws of _associativity_ and _identity_.

#### Category Laws

[Categories](http://yogsototh.github.io/Category-Theory-Presentation/#slide-39) must obey 2 laws:

1. Composition must be associative: [![Screenshot from 2014-08-11 00:09:55](/wp-content/uploads/2014/08/Screenshot-from-2014-08-11-000955.png)](/wp-content/uploads/2014/08/Screenshot-from-2014-08-11-000955.png)
2. Every object \(a\) in \(C\) has a morphism \(id_a\) which is equivalent to a loop in graph theory. [![431px-Self-loop](/wp-content/uploads/2014/08/431px-Self-loop-215x300-1.png)](/wp-content/uploads/2014/08/431px-Self-loop-215x300-1.png)The identity morphism \(id_a\) connects the object \(a\) to itself, \\(id_a: a \rightarrow a\\).

[![Screenshot from 2014-08-11 00:10:15](/wp-content/uploads/2014/08/Screenshot-from-2014-08-11-001015.png)](/wp-content/uploads/2014/08/Screenshot-from-2014-08-11-001015.png)

_Two paths are equal if the source and destination of the paths are equal._ With this in mind, we can represent the category laws of identity and associativity with diagrams.

Follow the arrows, recall that we write function composition backward! If we traverse \(f\) then \(g\), it is the convention to write \(g \circ f\)

[![Screenshot from 2014-08-11 10:06:43](/wp-content/uploads/2014/08/Screenshot-from-2014-08-11-100643.png)](/wp-content/uploads/2014/08/Screenshot-from-2014-08-11-100643.png) ![Screenshot from 2014-08-11 10:06:54](/wp-content/uploads/2014/08/Screenshot-from-2014-08-11-100654.png)

Examples:

Groups, together with group homomorphisms, form a category (we will discuss these next lecture for those who have not danced with abstract algebra).

Each of the natural numbers is a category: [![Screenshot from 2014-08-18 16:34:05](/wp-content/uploads/2014/08/Screenshot-from-2014-08-18-163405.png)](/wp-content/uploads/2014/08/Screenshot-from-2014-08-18-163405.png)

#### Categories have some nice properties

Any property which can be expressed in terms of (category, objects, morphism, and composition):

- **Dual:** \(D\) is \(C\) with reversed morphisms
- **Initial:** \(Z in obj(C)\) s.t. \(\forall Y \in obj(C)\), #\(hom(Z,Y) =1\). In other words: an object is initial if there exists a unique morphism from that object to any other object in \(C\).
- **Terminal:** \(T \in obj(C)\) s.t. \(T\) is initial in the dual of \(C\)
- **Functor:** Structure preserving mapping between categories

#### Homomorphims Between Categories: What the func is a functor?

![Screenshot from 2014-08-11 00:24:22](/wp-content/uploads/2014/08/Screenshot-from-2014-08-11-002422.png)

An example of associating morphisms from \(C\) to \(D\) with the functor \(F(C)\).

![Screenshot from 2014-08-11 00:24:59](/wp-content/uploads/2014/08/Screenshot-from-2014-08-11-002459.png)

#### A Reflection on the Unfication of Familiar Concepts

A few categories you have likely encountered before without recognizing it:

- Set (sets and functions)
- Vec (vectorial spaces and linear transformations)
- **Top (topological spaces and continuous maps)**
- Grp (groups and homomorphisms) — we will be discussing these next lecture for those who have not danced with abstract algebra.
- Ab (abelian groups and homomorphisms)
- Hask (Haskell types and functions)
- Cat (categories and functors)

A categorical key to highlight some of the relationships between structure preserving maps:

[![Untitled picture](/wp-content/uploads/2014/06/Untitled-picture11.png)](/wp-content/uploads/2014/06/Untitled-picture11.png)

Here are some more advanced examples for those who feel groovy and algebraic:

- \(R\)-Mod (R-modules and homomorphisms)
- \(Gr_R\) (\(\mathbb{Z}\)[-graded \(R\)-modules](https://en.wikipedia.org/wiki/Graded_ring#Invariants_of_graded_modules) and graded \(R\)-module homomorphisms)

#### [![arrows](/wp-content/uploads/2014/08/arrows1.png)](/wp-content/uploads/2014/08/arrows1.png)

#### Sources

[Introduction to Haskell](https://web.archive.org/web/20141227004600/http://shuklan.com/haskell/lec12.html)
