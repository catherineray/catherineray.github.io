---
title: "Basic Topology"
date: "2014-07-15"
categories: 
  - "analysis"
  - "math"
  - "topology"
---

#### Topological Maps in Robotic Navigation

The goal for an autonomous robot is to be able to construct (or use) a map or floor plan and to localize itself in it. The discipline of [robotic mapping](http://en.wikipedia.org/wiki/Robotic_mapping) is concerned with map _representation_.

The internal representation of a map can be “metric” or “topological”:

- A **metric framework** (the most common for humans) considers a two-dimensional space in which it places the objects. The objects are placed with precise coordinates. This representation is very useful but is sensitive to noise and it is difficult to calculate the distances precisely.
- A **[topological framework](/wp-content/uploads/2014/07/fraundorfer_iros2007.pdf)** only considers places and relations between them.
    - This [topological map](http://www.academia.edu/2742263/Probabilistic_topological_maps) is a _graph-based representation of the environment_ where certain easily distinguishable places in the environment, labeled as landmarks, are designed as _nodes_.
    - The _edges_ are deemed to represent navigable connections. In addition, the edges of the topological graph may be annotated with information relating to navigating the corresponding regions in the environment. This framework is more resistant to noise and generally easier to store internally.

![example-15](/wp-content/uploads/2014/08/example-15.png)

**The robot needs to know what room it’s in and what doors it needs to pass through to get to the required location.** _This does not require the dimensions and shape of the rooms._

This post highlights how the axioms governing the metric space naturally lead into its abstraction: the topological space.

#### The Metric Space

A metric space is:

- a set of \(X\)
- a distance function \(d(x,y)\) which defines the distances between all members of the set.

For example, the distance function on the real line \(\mathbb{R}^1\) is \(d(x,y) = |x-y|\).

This distance function takes a pair of 2 ordered numbers \((x,y)\) and gives us another real number (the distance between \(x\) and \(y\)). We can easily generalize this distance function from the real line \(\mathbb{R}\) to any n-dimensional space \(\mathbb{R}^n\):

\(d: \mathbb{R}^n \times \mathbb{R}^n \rightarrow \mathbb{R}^n\)

We can have two different distance functions on the same space \(\mathbb{R}^2\)

For each pair of points \((x_0, y_0)\) and \((x_1, y_1)\) \(\mathbb{R}^2\),

the normal distance function is derived from the Pythagorean therorem:

- \(d ((x_0, y_0), (x_1, y_1)) = \sqrt{(x_0 - x_1)^2 + (y_0-y_1)^2}\)

With this distance function, \(d(x, a) \leq 1\) for a fixed point \(a \in \mathbb{R}^2\).

- \(d'((x_0, y_0), (x_1, y_1)) =\) maximum \({|x_0-x_1|, |y_0 - y_1|}\).

The distance function of a Hilbert space is

- \(d(u,v) = [\sum\limits_{i=1}^{\infty} (u_i - v_i)]^{1/2}\)

#### Neighboorhoods

The concept of a neighborhood is powerful, for it formalizes the concept at the heart of analysis: continuity.

An open neighborhood of a point \(p\) in a metric space \((X, d)\) is the set \(N_\epsilon = {x \in X | d(x, p) < \epsilon}\).

Example:

- If \(p \in \mathbb{R}\) then the open-interval of \(p\) is \((p - \epsilon, p + \epsilon)\) of radius \(\epsilon\) centered at \(a\).
- The open disc and open ball, which are the 2D and 3D analogues of the open interval. (I haven’t explained these yet, I’ll formally cover this example of a neighborhood later)

A function \(f\) is continuous over a space \(X\) iff \(\forall x, p \in X\) the following condition is satisfied:

\(\forall \epsilon \exists \delta\) \(|\) \(x \in N_\epsilon(p) \rightarrow f(x) \in N_\delta(f(p))\)

This formal understanding of continuity leads directly to the unifying concept of this lecture, the study of “closeness”: the open set.

A subset \(S\) of a metric space \(X\) is an open set iff every point of \(S\) has an open neighbourhood \(N_\epsilon\) that lies completely in \(S\). In precise terms:

\(S\) is open \(\Leftrightarrow \forall a \in S \exists \epsilon > 0 | N_\epsilon(a) \subseteq S\).

#### Properties of Open Sets

1. The union (of an arbitrary number) of open sets is open.

**Proof**

Let \(x \in \bigcup\limits_{i \in I} A_i = A\). Then \(x \in A_i\) for some \(i\). Since \(A_i\) is open, by the definition of an open set: \(x\) has an open neighbourhood lying completely inside \(A_i\) which is also inside \(A\). \(_{QED}\)

**Proof**

To check that finite intersections of open sets are again open, it suffices to check this for the intersection of two open sets. Suppose \(x \in A \cap B\).

Then \(x \in A\) and also has a neighbourhood, \(N_{\epsilon_A}\) lying in \(A\). Similarly, \(x\) has a neighbourhood \(N_{\epsilon_B}\) lying in \(B\). If \(\epsilon =\) min \({\epsilon_A, \epsilon_B}\), the neighbourhood \(N_\epsilon\) also lies in both \(A\) and \(B\) and hence in \(A \cap B\). \(_{QED}\)

#### Continuous Functon

In analysis, we examine the convergence of sequences, the continuity of functions, and the compactness of sets. Some types of convergence, such as the pointwise convergence of real-valued functions defined on an interval, cannot by expressed in terms of a metric on a function space.

Topological spaces provide a general framework for the study of convergence, continuity, and compactness. The fundamental structure on a topological space is not a distance function, but a collection of open sets.

A continuous function can be defined in terms of open sets.

If \(f: X \rightarrow Y\) is a continuous function between metric spaces and \(B \subset Y\) is open, then \(f^{-1}(B)\) is an open subset of \(X\).

**Proof**

Let \(x \in f^{-1}(B)\). Then \(f(x) = y in B\).

Since \(B\) is open, the point \(y\) has a neighbourhood \(N_\epsilon \subset B\).

By the definition of continuity, \(N_\epsilon\) contains the image of some neighbourhood \(N_\delta\) \(V\) of \(x\). Since \(f(V) \subset B\), we have \(V \subset f^{-1}(B)\) and so \(x\) has this nieghbourhood \(N_\delta \subset f^{-1}(B)\).

Hence, the definition of an open set, \(f^{-1}(B)\) is open in \(X\).

The converse also holds: If \(f: X \rightarrow Y\) is a function for which \(f^{-1}(B)\) is open for every open set \(B\) in \(Y\). Proving this here would only take the joy of proving this away from the reader: it’s a short proof, you can do it!

#### The Open Ball: Interior and Boundary Points

As we mentioned earlier: in \(\mathbb{R}^1\), the open neighbourhood is the open interval. In \(\mathbb{R}^2\) it is the open disc. In \(\mathbb{R}^3\) it is the open ball.

An \(n\)-dimensional open ball of radius \(r\) is the collection of points of a distance less than \(r\) from a fixed point in Euclidean \(n\)-space. Explicitly, the open ball with center \(p\) and radius \(r\) is defined by:

\(B_r (p)= {x \in \mathbb{R}^n | d(p,x) < r}\)

if \(X\) is a metric space with metric \(d\), then \(x\) is an interior point of \(S\) if there exists \(r > 0\), such that \(y\) is in \(S\) whenever the distance \(d(x,y) < r\).

Equivalently, if \(S\) is a subset of a metric space, then \(x\) is an interior point of \(S\) iff (there exists an open ball with a radius larger than 0 centered at \(x\) which is contained in \(S\)):

\(\exists r\) \(|\) \(x \subseteq B_r (x)\)

A friend of the interior point is the definition we’ve been dancing around: a boundary point.

Intuitively, a point is an interior point of it is not “right on the edge” of a set, and a boundary point if it is “right on the edge” of a set.

Formally, a point \(p\) is a boundary point of \(S\) iff for every \(\epsilon > 0\), the open neighbourhood of \(p\) intersects both \(S\) and the complement of \(S\): \(\bar{S}\). That is: \(x\) is a boundary point of \(S\) iff:

\(N_\epsilon(p) \cap S \neq \emptyset\) and \(N_\epsilon(p) \cap \bar{S} \neq \emptyset\)

Sidenote: The complement \(\bar{S}\) of \(S\) is \(U\) \(S\), the set of all things outside of \(S\). This can be rephrased as all things (in the universal set \(U\)) that are not in \(S\).

#### Topological Balls

We may talk about balls in any space \(X\), not necessarily induced by a metric.

An (open or closed) \(n\)-dimensional topological ball of \(X\) is any subset of \(X\) which is homeomorphic to an (open or closed) Euclidean \(n\)-ball. Topological \(n\)-balls are important in combinatorial topology, as the building blocks of cell complexes.

#### Toplogical Spaces

Recall that a metric space is just a set \(S\) with a metric defined on it.

A topological space is a set \(S\) with a geometric structure defined on it.

Abstractions of the properties of open sets are the axioms that define a topology \(T\). Moreover, we call an element of \(T\) is an open set.

![top](/wp-content/uploads/2014/08/top2.png)

1. The union (of an arbitrary number) of open sets is open. => The union of any set of members of \(T\) is in \(T\).

2. The intersection of finitely many sets is open. => The intersection of finitely many members of \(T\) is in \(T\).

For completeness, the whole set \(S\) and \(\emptyset\) are also in \(T\).

Notational aside: We call the pair \((S, T)\) a topological space; if \(T\) is clear from the context, then we often refer to \(S\) as a topological space.

3. If \(f: X \rightarrow Y\) is a continuous map between topological spaces and \(B \subset Y\) is open, then \(f^{-1}(B)\) is an open subset of \(X\).

[![Screenshot from 2014-09-29 15:55:36](/wp-content/uploads/2014/09/Screenshot-from-2014-09-29-155536.png)](/wp-content/uploads/2014/09/Screenshot-from-2014-09-29-155536.png)

#### Basis of a Topology

Let’s construct a topology of the reals.

We want to know the minimum data you need to specify a structure defined on a set. In many cases, this minimum data is called a basis and we say that the basis generates the structure.

The collection of open intervals of the form \((p - \epsilon, p + \epsilon)\) on \(\mathbb{R}\) is not a topology. The collection of such intervals doesn’t include the empty set, the whole line, or the union \((1,2) \cup (3,4)\).

The usual topology is not defined as the collection of such intervals. Instead, the topology is defined as the collection of all possible unions of such intervals. In other words, the intervals of the form \((p - \epsilon, p + \epsilon)\) are a basis for the topology. It’s important to not confuse the basis with the whole topology.

The metric topology is the topology on a set \(X\) generated by the basis \({B_\epsilon(x) | \epsilon > 0, x \in X}\).

#### In many areas of mathematics we would like to endow our sets with additional structures, such as a metric, a topology, a group structure, and so forth.

It is here that I will stop, this post, but I will give you some keywords to look up:

Linear Functionals and Bilinear Forms, Riesz Representation Theorem, Linear, Bounded, Continuous, comparing topologies: \((S, T’)\) has more open subset to separate 2 points in \(S\) than \((S, T)\).

[Topology of Robot Motion Planning](http://math.uchicago.edu/~shmuel/AAT-readings/Robotics/Farber%20robotics%20survey.pdf) [Topological Robotics: Motion Planning in Projective Spaces](http://arxiv.org/pdf/math/0210018v1.pdf) [http://www.math.ucla.edu/~tao/preprints/compactness.pdf](http://www.math.ucla.edu/~tao/preprints/compactness.pdf) [Basic Facts About Hilbert Space](http://www.math.colostate.edu/~pauld/M645/BasicHS.pdf) [Consistent Observation Grouping for Generating Metric-Topological Maps that Improves Robot Localization](http://www.isa.uma.es/C14/Mobile%20Robotics/Document%20Library/Files/paper_MR_top_SLAM_01.pdf) [Mobile Robots Navigation, Mapping, & Localization: Part II](http://www.inf.ethz.ch/personal/glee/papers/mobile_robots2_09.pdf) [Alegbraic Topology for Computer Vision](http://www.hpl.hp.com/techreports/2009/HPL-2009-375.pdf)
