---
title: "The Bernoulli Numbers Come from a Shift Operator"
date: "2025-01-28"
categories: 
  - "math"
---


The Bernoulli numbers were defined by Faulhaber in terms of the following generating series.

$$ \frac{x}{e^x-1} = \sum_{k \geq 0} B_k \frac{x^k}{m!} $$

But why? Where did this come from? Well, the mathematicians of the time were contemplating the following sorts of patterns: 

\\( 1+2+\cdots+n = \frac{n(n+1)}{2} \\)

\\( 1^2+2^2+\cdots+n^2 = \frac{n(n+1)(2n+1)}{6} \\)

\\( 1^3+2^3+\cdots+n^3 = \frac{n^2(n+1)^2}{4} \\)

\\( 1^k + 2^k +  \cdots + n^k = ?? \\)

The general formula requires \\( B_k \\)! 

To give you an idea of how hard this is, I don't know of a proof of the \\( k= 3 \\) case that that doesn't involve guessing the formula then showing inductively (other than the Bernoulli version I'm about to show). 

Today I'm giving a modern explanation of Faulhaber's trick. This is based on [notes of John Baez](https://math.ucr.edu/home/baez/qg-winter2004/bernoulli.pdf).

Consider \\( \mc{E} \\) to be the space of entire functions on \\( \mathbb{C} \\). We can consider \\( \mc{E} \subset \mathbb{C}[[z]] \\)

Next, consider the finite difference operator

\\( \Delta(f(z)) = f(z+1) - f(z) \\)

Discrete Fundamental Theorem of Calculus: If \\( \Delta F = f \\), then $$ \sum_{i = 0}^{n-1} f(i) = F(n) - F(0) $$

For example: If \\( f(z) = z^s \\), then if \\( \exists F \\) such that \\( \Delta F = f \\), then 
$$ \Sigma^{n-1}_{i=0} i^s = F(n) - F(0).$$

Let's set some groundwork before proceeding, we consider an operator (called the ''annihilation operator" in conformal field theory):

$$\begin{aligned} a: \mathcal{E} & \to \mathcal{E} \\ f(z) &\mapsto \frac{d}{dz}f(z) \end{aligned}$$

Let us define \\( e^{ta}: \mathcal{E} \to \mathcal{E}) \\)  as \\( e^{ta} = \sum_{k \geq 0} \frac{(ta)^k }{k!} \\). We consider:

$$\begin{aligned} e^{ta}: \mathcal{E} & \to \mathcal{E} \\ f(z) &\mapsto e^{ta}f(z) \end{aligned}$$

Lemma: $$e^{ta}f(z) = f(z+t)$$

Proof: Take \\( f(z) := \sum_i c_iz^n) \\), then 

(insert picture here). 

Note, we may write \\( \Delta = e^{a} - 1 \\). 

So, given our big clue above, if we can find \\( \Delta^{-1} \\), we can solve our addition problem.


# Let's play...GUESS THAT INVERSE!!

If we consider \\( e^x - 1 \\) as a function, we want to find another function \\( f(x)g(x) = 1 \\), then: 

GUESS #1: \\( \frac{1}{e^x-1} \\) *beeping noise* nope this is not entire, has a pole when \\( x= 0 \\).

GUESS #2: \\( \frac{x}{e^x-1}) \\) we can plug that pole, and get an entire function!! But we are getting an extra \\( x \\) factor, since we want to compose to 1.

If we were working non-commutatively, then, we'd want to look at either 

NON-COMMUTATIVE GUESS #3 : \\( x^{-1} \frac{x}{e^x - 1} \\) or \\( \frac{x}{e^x - 1} x^{-1} \\)

Back to operators:

We define 

$$\begin{aligned} a^{-1}: \mathcal{E} & \to \mathcal{E} \\ f(z) &\mapsto \int_0^z f(u) du \end{aligned}$$

Note, \\( a a^{-1} f = f, but  the other order is not always true \\( a^{-1} a f \neq f \\)  (because of the icky \\( + c \\) ).

That means our noncommutative guess  \\( \frac{x}{e^x - 1} x^{-1} \\) is a good bet! In fact, we define the following operator: 

\\( \frac{a}{e^a-1} := \sigma_{k \geq 0} B_k \frac{a^k}{k!} \\) 

and finally, we claim $$\Delta^{-1} = \frac{a}{e^a-1}a^{-1}.$$

# Tying it all together to finish the job

We take: \\( f(z) = z^s \\),  we need to calculate \\( \Delta^{-1}f := \frac{a}{e^a-1}a^{-1} \\). 

$$\begin{aligned} \frac{a}{e^a-1}(a^{-1}z^s) &= \frac{a}{e^a-1}(\frac{z^{s+1}}{s+1}) \\ &= \sum_k B_k (\frac{d}{dz})^kt^k(\frac{z^{s+1}}{s+1}) \\ &= \sum_{k = 0}^{s+1} B_kt^k(s+1)(s)\cdots(s+1-k) \frac{z^{s+1}}{s+1})  \\ &= \sum_{k = 0}^{s+1} B_kt^k {s+1}{k}z^{s+1}  \end{aligned}$$

Using our discrete fundamental theorem of calculus, we see the following: 

Since \\( \Delta(\Delta^{-1}f) = f\\), let \\( f = z^s \\), then 

$$\begin{aligned} \sum_{i=0}^{n-1} i^s &= (\Delta^{-1}f)(n) -  (\Delta^{-1}f)(0)  \\  \end{aligned}$$

# Graph Laplacians in More Generality

As a suggestive aside, the definition of the graph Laplacian for a graph \\( G \\) is the following. Let $v \in V$ be the vertices in the graph, and let $N(v)$ be the set of vertices neighboring the vertex $v$.

$$ \nabla_G f(v) = \frac{1}{|N(v)|} \sum_{w \in N(v)} f(v) - f(w) $$

The directed graph Laplacian is 

$$ \nabla_G f(v) = \frac{1}{|N^+(v)|} \sum_{w \in N^+(v)} f(v) - f(w) $$

Notice that if we consider the lattice of \\( Z \\) in \\( R \\) to be directed (going toward positive numbers), we recover 

$$ \Nabla f(z) = f(z) - f(z+1) .$$
