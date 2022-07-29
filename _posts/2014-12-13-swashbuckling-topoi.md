---
title: "Swashbuckling Notes on Topos Theory"
date: "2014-12-13"
categories: 
  - "math"
---

_This collection of notes resulted from my desire for an intuitive grasp of basic concepts in topos theory, and is meant to [complement](http://arxiv.org/pdf/1012.5647.pdf) to a [standard introduction to topoi](http://www.fuw.edu.pl/~kostecki/ittt.pdf) (i.e., this is pedagogically unsound)._

The mechanical definition of a topos (a category with finite limits and power objects) doesn’t tell us anything interesting about topos theory. The longer definition boils down to this: An (elementary) topos is the category of types in some [world of intuitionistic logic](http://www.andrew.cmu.edu/user/awodey/preprints/TTH.pdf).

My desire to understand topoi is mainly due to this: casting any object into it’s appropriate topos allows one to use topological intuition to reason about it.

Since Tarski, 1938 it has been known that topologies — specifically the lattices of open sets for topological spaces — can provide models for intuitionistic propositional logic. [[Source](http://www.cs.bham.ac.uk/~sjv/LocTopSpaces.pdf)]

For situations where a topological intuition is very effective but an honest topological space is lacking, it is sometimes possible to find a topos formalizing the intuition.

Why? The idea is this:

1. Constructive reasoning allows maps to be treated as generalized points.
2. Locales give a better constructive topology (better results hold) than ordinary spaces.
3. The constructive reasoning makes it possible to deal with locales as though they were spaces of points.

space ∼ logical theory point ∼ model of the theory open set ∼ propositional formula sheaf ∼ predicate formula continuous map ∼ transformation of models that is definable within geometric logic

#### [Opens are Propositions](http://www.cs.bham.ac.uk/~sjv/LocTopSpaces.pdf)

A topology (on \(U\), say) has enough lattice structure to model intuitionistic logic: \(\cap\) and \(\cup\), which both preserve openness, model the connectives \(\land\) and \(\lor\).

- If a proposition \(P\) ∼ open set \(\mathcal{P}\),
    - then \(\lnot P\) ∼ the interior of \(U - \mathcal{P}\)
- If a proposition \(Q\) ∼ open set \(\mathcal{Q}\),
    - then \(P \to Q\) ∼ the interior of \((U - \mathcal{P}) \cup \mathcal{Q}\)

When I say that a topos is a “generalized space,” it is a space in which the opens are insufficient to define the topological structure, and sheaves have to be used instead.

The poset of open subsets of topological spaces (a.k.a. internal logic of a sheaf topos), is a lot like sets. This is usually what people mean when they say that a topos “captures the essence” of set theory.

Note that there are two things people mean when they say “topos”: an elementary topos (a category with finite limits and power objects), a topos is Grothendieck if it is equivalent to a subtopos of some presheaf topos.

[An example of a sheaf:](http://arxiv.org/pdf/1012.5647.pdf) Take any continuous map \(Y \xrightarrow{\pi} X\) of topological spaces (which can be thought of as a kind of bundle over \(X\)). Then there arises a sheaf \(F\) on \(X\), in which \(F(U)\) is the set of continuous maps \(s: U \to Y\) (such that the triangle on the right commutes).

Such an \(s\) is precisely a right inverse, or section, of the map \(\pi^{-1} U \to U\) induced by \(\pi\).

[![Screenshot from 2014-12-12 17:23:50](/wp-content/uploads/2014/12/Screenshot-from-2014-12-12-172350.png)](/wp-content/uploads/2014/12/Screenshot-from-2014-12-12-172350.png)

Below is a silly physics example I use to make that example of sheaves more palatable.

#### [Sheaves are Predicates](http://www.cs.bham.ac.uk/~sjv/LocTopSpaces.pdf)

There is a split personality of topoi – spatial (generalized locales) or logical (generalized universes of sets).

In propositional logic each proposition \(\phi\) corresponds to a map \(\vert\phi\}\) from models to truth values. In the geometric context, this corresponds to a map from the locale to its site, and in ordinary topology this is an open.

In predicate logic, each formula corresponds to a function from models to sets. In a geometric context this is a map from the classifying topos to the object classifier \([\mathbb{O}]\), and in ordinary topology it is sheaves that provide the corresponding “continuous set-valued map”.

#### Topoi in Physics

The general claim of [A Topos Foundation for Theories of Physics](http://math.ucr.edu/home/baez/topos_physics/) is that **constructing a theory of physics is equivalent to finding a representation of that language in an appropriate topos**.

In physics, our logic differs from the classical one in the following respects:

- \(\lnot\lnot a\) does not necessarily imply \(a\)
- The law of excluded middle “either \(a\) or \(\lnot a\)” need not hold (for example: a superposition of both 0 and 1).

classical logic: \(a \Leftrightarrow \lnot\lnot a\) intuitionistic logic: \(a \Rightarrow \lnot\lnot a\)

It is the mutability of mathematically precise structures (by morphisms) which is the essential content of category theory. If the structures are themselves categories, this mutability is expressed by functors, while if the structures are functors, the mutability is expressed by natural transformations.

If \(M\) is a monoid, then the functors \(M \to X\) are important objects often known as actions of \(M\) on \(X\) (or representations of \(M\) by \(X\)-endomorphisms, or …) and the natural transformations between actions are known as \(M\)-equivariant maps, intertwining operators, homogenous functions, etc, depending on the traditions of various contexts. [Source: [Taking Categories Seriously](http://www.emis.de/journals/TAC/reprints/articles/8/tr8.pdf)]

I hope we can agree that an object of interest is: **the collection of morphisms from an object \(X\) to an object \(Y\)** (internal to a category \(C\)).

We usually denote this by either \([X,Y]\) or \(Y^X\), and call it a _map-object*_.

Notational aside: The morphisms from an object \(X\) to “some other object” is analogously denoted \([X, -]\) or \((-)^X\).

*Note that a “map-object” is [more commonly called](http://math.stackexchange.com/questions/287357/can-exponentials-be-distinct-from-hom-functors-in-enriched-categories) an “internal-hom” or an “exponential object,” and is simply a categorical rephrasing of a _function space_ (the set of functions of a given kind from a set \(X\) to a set \(Y\)).

#### [Synthetic Differential Geometry](http://home.sandiego.edu/~shulman/papers/sdg-pizza-seminar.pdf)

Assume that we’re working in a smooth topos for simplicity.

An infinitesimal space \(D\) is an object in a topos \(\tau\) such that \([D,-] : \tau \to \tau\) (map-object functor) has a right adjoint. (Crudely, an adjoint is the best substitute for an inverse that exists in a lot of cases that we care about.)

Our language is now equipped to construct a few concepts from differential geometry:

**A tangent vector in this context is literally an infinitesimal path** in \(X\). Let \(D\) be an infinitesimal space. The unique inclusion \(* \to D\) induces a canonical projection \(TX \to X\).

A differential equation is an extension problem along a morphism that includes an infinitesimal object \(D\) into another object.

A differential 1-form is a morphism \(\omega: TX \to R\) that is “fiberwise linear”. [[Source](http://ncatlab.org:8080/nlab/show/synthetic+differential+geometry)]

Since our topos \(\tau\) is smooth, it’ll be equipped with a line object \(R\) that plays the role of the real line \(R\). Why? A sensible notion of infinitesimal quantities in \(R\) is obtained when all morphisms \(D \to R\) from infinitesimal spaces \(D\) are necessarily _linear maps_.

For justification of formalizing physics in (higher) topos theory, I recommend reading the “Application: Cohesion and Superstring anomaly cancellation” section of [Higher Toposes of Laws of Motion](http://ncatlab.org:8080/nlab/show/Higher+toposes+of+laws+of+motion).
