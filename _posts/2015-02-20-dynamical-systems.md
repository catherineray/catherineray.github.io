---
title: "Some Thoughts on Dynamical Systems"
date: "2015-02-20"
categories: 
  - "math"
---

I’ve resurrected this post from my draft graveyard after chatting with Chas Leichner about the lightly related notion of [domain theory](http://en.wikipedia.org/wiki/Domain_theory), and the interaction between computation and [topos theory](/swashbuckling-topoi/).

#### What is fiber bundle dynamics?

A fiber bundle expresses global phenomenon in terms of the output of local data. Analogously, a geometric multi-scale modeling technique, aptly named fiber bundle dynamics, expresses macroscale data in terms of the output of microscale models.

For example: if the microscale model is molecular dynamics and the macroscale model is continuum hydrodynamics, then this formula is the Irving-Kirkwood formula that expresses stress in terms of the atomistic data from molecular dynamics. If the microscale model is replaced by Brownian dynamics, then this link is replaced by Kramer’s expression, etc.​

> “…in concurrent coupling methods, one does not compute the constitutive relation within the full range of these variables - only the values that actually occur in the simulation are needed, and these might be a very small subset of the entire range.” — [Ren, Seamless Multiscale Modeling of Complex Fluids via Fiber Bundle Dynamics](/wp-content/uploads/2015/02/mm_cms.pdf)

It’s interesting to think of (1) dependent types as fibrations and (2) a multi-scale model as a generalized transition system.

Allow me to elaborate on (1) and (2):

#### (1) dependent types are fibrations

“A function whose codomain varies depending on its argument is a dependent function, and the type of this function is called a dependent type.”

\(B_x\) is a fiber over \(x: A\)

The domain bundle and range bundles above can then be written as:

\(\sum\limits_{x: A} B_x \to \sum\limits_{y: C} D_y\)

For more on dependent types as fibrations: [Type Theory and Homotopy](http://www.andrew.cmu.edu/user/awodey/preprints/TTH.pdf)

#### (2) a multi-scale model is a generalized transition system

A multi-physics simulation is characterized by having two or more time/length scales, where each scale is governed by different laws, which require careful coupling.

What we call coupling in multiphysics is the idea of concurrent processes (computational agents with coordinated activities overlapping in time), which can be generalized to “higher dimensional transition systems” (groups of computational agents exhibiting varying degrees of coordination).

There are two main notions of “transition systems” those in operational semantics (a set of states and transitions between states) and those used in automata-theory (there is a special “start” state).

> “We believe that these [Petri nets, etc.] are special cases of homotopy retracts when cast in the category of higher-dimensional transition systems. We hope to … use this to design new state-space reduction methods.” - [Formal Relationships Between Geometrical and Classical Models for Concurrency](http://www.lix.polytechnique.fr/~goubault/papers/mimram_cs_adj.pdf)

If this tickles your fancy, a more precise definition of higher dimensional transition systems is given in section 5, page 19 of [Simulations as Homotopies](http://www-home.math.uwo.ca/~kworytki/getco2.pdf). Additionally, the treatment multiscale models as transition systems is proposed, but not applied, in [Aspects of multiscale modelling in a process algebra for biological systems.](http://arxiv.org/pdf/1011.0491v1.pdf)

This way of (potentially) simplifying multiscale modeling fits into the [Rosetta Stone](https://math.ucr.edu/home/baez/rosetta.pdf)‘s notion of ‘a general science of systems and processes.’

I wonder if we can use that this system is equipped with both a conceptually clear (geometric) interpretation and a computationally straightforward (corresponding type theoretic) formalism — say, by formalizing the construction of fiber bundle dynamics in idris (essentially Haskell + dependent types).

#### The Questions that Drive the Study of Dynamical Systems

What are the long-term predictions of the model? Are predictions by the model “stable”? What can computer simulations tell us about the model?

#### Some Basics of Dynamical Systems:

Recall that a dynamical system is a pair \((S, F)\)

- a (metric) space \(S\) of all possible states of the system
- a map \(F\) which determines the time evolution of the states, \(F: S \times \Gamma \to S\)

where \(\Gamma\) denotes the set of all instants in time being considered, usually either \(\mathbb{N}\) for discrete or \(\mathbb{R}^+\) for continuous.

**Orbits and Rough Orbits**

Given \(s \in S\), the sequence of values \(f^n(s)\) is called the orbit of s.

If \(f^n(s) = f^{n + \phi}\) the orbit is a periodic orbit (the smallest value of \(phi\) is then the period, and s is a periodic point).

An \(\epsilon\)-chain (aka rough orbit) is a finite sequence \(s_0, s_1, …\) of length at least 2 s.t. \(d(s_{n+1}, f(s_n)) \leq \epsilon\)

**What is stability?**

For Y a nonempty closed subset of X , define the stable set of Y to be the set:

\(W^s(Y) = {x \in X : d(f^n(x), f^n(Y)) \to 0}\) as \(n \to \infty\)

In other words, \(f^n(Y)\) is a set that \(f^n(x)\) must approach as \(n \rightarrow \infty\).

Stability is the property of orbit convergence.

_Stable and unstable manifolds may be of interest since they are defined in terms that sound suspiciously like Gaussian curvature. Note that a central theorem of dynamics is that attracted and repelled stable and unstable manifolds are smooth curves._

Let \(S\) be a compact invariant set, then the following statements are equivalent:

1. \(S\) is an attracting set.
2. \(S\) is asymptotically stable.
3. This matters because the “chain stability” ensures that the attracting set is observable in a computer simulation of the dynamics (provided that round-off errors in the computation are sufficiently small).

One of the measures of the complexity of a map is the growth rate of the number of “different” orbit segments of length \(n\) as \(n\) increases (this is made precise by the notion of topological entropy, which I can elaborate on if you are interested).

**How do we locate the invariant sets of \(f\)? When does a particular subset \(Y\) of \(X\) contain an invariant set?**

We might find use from a compact set \(N\) with the following property:

Whenever three points \((x, f(x), f^2(x))\) are contained on an orbit are contained in \(N\), then the middle point \(f(x)\) is contained in the interior of \(N\).

This type of set is called an isolating block (could be useful for structure hunting).

We can investigate properties of the set of orbits trapped by an isolating block. Isolating blocks are stable wrt perturbations of the map and therefore properties of the dynamics which can be deduced from the blocks persist.

When studying the behavior of orbits in a compact set, it is useful to define functions which measure how long it takes for an orbit to leave the set (these are called exit time functions).

> “We can restrict the dynamics to a block by collapsing its exit set. The quotient space derived from the block is called the index space. A derived dynamical system called the index map is defined on this space has the collapsed exit as a fixed point. An induced map on the homology groups of the index space is the index homomorphism. If the index homomorphism is nontrivial, then so is the set of orbits trapped by the block.” — Chapter 5: Conley Index (Geometric Method of Dynamical Systems)

If you find this line of thought intriguing, the keywords to look into are constructing isolating blocks, shift automorphisms, filtering blocks, stacks of blocks, networks of blocks, and the Conley Index.

**Guidelines for Investigating Discrete Dynamical Systems**

1. Stable features of the orbit structure of \(f\) are shared by maps “close” to \(f\).
2. Partition state space by grouping together states whose orbits have similar long-term behavior (some “path” function space modded out by this equivalence relation on orbits).
3. To study the dynamics globally, find the directed graphs (V = \(\epsilon\)-chain equivalence classes, \(E = \epsilon\)-chains) These practices are the dynamical systems perspective on how to approach an overarching goal: Solve the inverse problem.

**Other perspectives:**

**In science:** Identify the relevant set of states and propose a law which governs their evolution, then compare its predictions with observations.

**In concurrent programming:** Use transition systems to diminish the complexity of model-checking.

**In scientific simulation:** Make simulation models that functionally scale (i.e. minimize the complexity of simulation models s.t. one can enhance the system by adding functionality at minimal effort).

Model simplicity is defined in terms of both “transparency” (related to understanding) and “constructive simplicity” (related to the model itself, e.g. how many parts and elements that it contains).

**Afternote:**

The Freidlin–Wentzell theorem is “a result in the large deviations theory of stochastic processes.”

Looking into Large Deviation Theory led me to: “…in gradient systems (i.e. systems navigating over an energy landscape), rare events are associated with barrier crossing events and follow the minimum energy path (MEP) connecting two minima of the energy potential.”

Numerical tools (string method, minimum action method - MAM, etc.) have been developed to identify the paths by which rare events are most likely to occur.)

If entropy matters, instead of using large deviation theory, one uses transition path theory (A least action principle on the space of curves).

I wonder how the notions of entropy, stability, and complexity formally relate. I suppose entropy is generally thought through the following viewpoints:

- phenomenolgical viewpoint: Gibbs free energy,
- statistical viewpoint: boltzmann’s entropy, Brillouin-Schrodinger entropy, shannon’s entropy
- dynamical viewpoint: the kolmogorov entropy, and Renyi entropy
