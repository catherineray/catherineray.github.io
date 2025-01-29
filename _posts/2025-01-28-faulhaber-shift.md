---
title: "The Bernoulli Numbers Come from a Shift Operator"
date: "2025-01-28"
categories: 
  - "math"
---

![](/images/german-tales.jpg)

The Bernoulli numbers were defined by Faulhaber in terms of the following generating series.

$$ \frac{x}{e^x-1} = \sum_{k \geq 0} B_k \frac{x^k}{m!} $$

But why? Where did this come from? Well, the mathematicians of the time were contemplating the following sorts of patterns: 

$$\begin{aligned}  1+2+\cdots+n &= \frac{n(n+1)}{2}  \\ 1^2+2^2+\cdots+n^2 & = \frac{n(n+1)(2n+1)}{6}  \\ 1^3+2^3+\cdots+n^3 & = \frac{n^2(n+1)^2}{4}  \\  1^s + 2^s +  \cdots + n^s & = \text{ }?? \end{aligned}$$

The general formula requires \\( B_k \\) :)

To give you an idea of how hard this is, I don't even know of a proof of the \\( s = 2 \\) case that that doesn't involve guessing the formula then showing inductively (other than the Bernoulli version I'm about to show). 

Today I'm giving a modern explanation of Faulhaber's trick. This is based on [notes of John Baez](https://math.ucr.edu/home/baez/qg-winter2004/bernoulli.pdf).

Consider \\( \mathcal{E} \\) to be the space of entire functions on \\( \mathbb{C} \\). We can consider \\( \mathcal{E} \subset \mathbb{C}[[z]] \\)

Next, consider the finite difference operator

$$ \Delta(f(z)) = f(z+1) - f(z) .$$

Discrete Fundamental Theorem of Calculus: If \\( \Delta F = f \\), then $$ \sum_{i = 0}^{n-1} f(i) = F(n) - F(0) $$

For example, here's a _big clue_: If \\( f(z) = z^s \\), then if \\( \exists F \\) such that \\( \Delta F = f \\), then 
$$ \sum^{n-1}_{i=0} i^s = F(n) - F(0).$$

Let's set some groundwork before proceeding, we consider an operator (called the ''annihilation operator" in conformal field theory):

$$\begin{aligned} a: \mathcal{E} & \to \mathcal{E} \\ f(z) &\mapsto \frac{d}{dz}f(z) \end{aligned}$$

Let us further define our friend the exponential

$$\begin{aligned} e^{ta}: \mathcal{E} & \to \mathcal{E} \\ f(z) &\mapsto e^{ta}f(z) := \sum_{k \geq 0} \frac{(ta)^k }{k!}(f(z)) \end{aligned}$$

Lemma: $$e^{ta}f(z) = f(z+t)$$

Proof: I can't help myself, I just love power series. We prove this by expanding both sides and observing that they are the same. Take \\( f(z) := \sum_i c_iz^n) \\), then

$$\begin{aligned} e^{ta}f(z) &= f(z) \\& + (t\frac{d}{dz})f(z) \\ & +  (t\frac{d}{dz})^nf(z)  \\ & + \cdots \end{aligned}$$
i.e., 
$$\begin{aligned} e^{ta}f(z) &= c_0 + c_1z + c_2z^2 + \cdots + c_nz^n + \cdots \\& + c_1t + 2c_2tz + \cdots + tnc_nz^{n-1} + \cdots \\ &  + n!\frac{c_nt^n}{n!} + (n+1)!\frac{c_{n+1}t^nz}{n!} + \cdots  \\ & + \cdots \end{aligned}$$

Let's expand the other guy, 
$$\begin{aligned} f(z+t) &= c_0 + c_1(z+t) + c_2(z+t)^2 + \cdots + c_n(z+t)^n + \cdots,  \\ &= (c_0 + c_1t+ c_nt^n +  \cdots) + (c_1t + 2c_2t + \cdots + nc_nt^{n-1} + \cdots)z + \cdots \end{aligned}.$$

It's the same yay. That means we can write $$\Delta = e^{a} - 1.$$

So, given our big clue above, if we can find \\( \Delta^{-1} \\), we can solve our addition problem.


# Let's play...GUESS THAT INVERSE!!

If we consider \\( e^x - 1 \\) as a function, we want to find another function \\( f(x)g(x) = 1 \\), then: 

GUESS #1: \\( \frac{1}{e^x-1} \\) *beeping noise* nope this is not entire, has a pole when \\( x= 0 \\).

GUESS #2: \\( \frac{x}{e^x-1}) \\) we can plug that pole, and get an entire function!! However, we have this extra \\( x \\) factor floating around (since we want to compose to 1, i.e., the identity operator).

If we were working non-commutatively, then, we'd want to look at either 

NON-COMMUTATIVE GUESS #3 : \\( x^{-1} \frac{x}{e^x - 1} \\) or \\( \frac{x}{e^x - 1} x^{-1} \\)

Alright, we have some candidates. Let's get back to operators to make this into real math. We define 

$$\begin{aligned} a^{-1}: \mathcal{E} & \to \mathcal{E} \\ f(z) &\mapsto \int_0^z f(u) du \end{aligned}$$

Note, \\( a a^{-1} f = f \\), but  the other order is not always true \\( a^{-1} a f \neq f \\)  (because of the icky \\( + c \\) ).

That means our noncommutative guess  \\( \frac{x}{e^x - 1} x^{-1} \\) is a good bet! In fact, we define the following operator: 

$$\begin{aligned}  \frac{a}{e^a-1} \colon \mathcal{E} &\to \mathcal{E} \\ f(z) &\mapsto \sum_{k \geq 0} B_k \frac{a^k}{k!}f(z)\end{aligned} $$

and finally, we claim $$\Delta^{-1} = \frac{a}{e^a-1}a^{-1}.$$

# Tying it all together to finish the job

We take: \\( f(z) = z^s \\),  we need to calculate \\( \Delta^{-1}f := \frac{a}{e^a-1}a^{-1} \\). 

$$\begin{aligned} \Delta^{-1}f(z) &= \frac{a}{e^a-1}(a^{-1}z^s) \\ &= \frac{a}{e^a-1}(\frac{z^{s+1}}{s+1}) \\ &= \sum_k B_k (\frac{d}{dz})^kt^k(\frac{z^{s+1}}{s+1}) \\ &= \sum_{k = 0}^{s+1} B_kt^k(s+1)(s)\cdots(s+1-k) \frac{z^{s+1-k}}{s+1}  \\ &= \frac{1}{s+1}\sum_{k = 0}^{s+1} B_kt^k { s+1 \choose k} z^{s+1-k}  \end{aligned}$$

Note in particular that \\( \Delta^{-1}f(0) = 0 \\). Using our discrete fundamental theorem of calculus, we see the following: 

Since \\( \Delta(\Delta^{-1}f) = f\\), let \\( f = z^s \\), then 

$$\begin{aligned} \sum_{i=0}^{n-1} i^s &= (\Delta^{-1}f)(n) -  (\Delta^{-1}f)(0)  \\  &= \frac{1}{s+1}\sum_{k = 0}^{s+1} B_kt^k { s+1 \choose k} n^{s+1-k} \end{aligned}$$

Tada! We did it!

There is also the following fabulous quick derivation trick of the Bernoulli numbers, which we discussed several years ago in [Umbral Calculus Derivation of the Bernoulli Numbers](https://rin.io/derivation-of-the-bernoulli-numbers/).

A quick way to remember the sum formula is to set \\( B^i \\) equal to the Bernoulli number \\( B_i \\). This can be earnestly done if one uses umbral methods.

$$1^s + \cdots + n^s = \frac{(B + n + 1)^{s+1}-B^{s+1}}{s+1}$$

# Graph Laplacians in More Generality

The definition of the graph Laplacian for a graph \\( G \\) is the following. Let \\( v \in V \\) be the vertices in the graph, and let \\( N(v) \\) be the set of vertices neighboring the vertex \\( v \\).

$$ \nabla_G f(v) = \frac{1}{|N(v)|} \sum_{w \in N(v)} f(v) - f(w) $$

The directed graph Laplacian rather looks at \\( N^+(v) \\), the set of vertices the vertex \\( v \\) maps to with edge length 1:

$$ \nabla_G f(v) = \frac{1}{|N^+(v)|} \sum_{w \in N^+(v)} f(v) - f(w) $$

We can define the graph Laplacian to act on entire functions on \\( \mathbb{C} \\): 

$$ \nabla_{G, v} f(z) = \frac{1}{|N(v)|} \sum_{w \in N(v)} f(z+v) - f(z+w) $$

Notice that if we consider the lattice of \\( \mathbb{Z} \\) in \\( \mathbb{R} \\) to be directed (going toward positive numbers), we must make a slight type change.   

$$ \nabla_{\mathbb{Z}, 0} f(z) = f(z) - f(z+1) .$$

This is quite interesting because the _left inverse_ of a graph Laplacian is the Green's function associated to the uniform random walk on the graph where you hop to each of your neighbors of distance one away with probability one. The Bernoulli numbers are derived from the _right inverse_ of \\( \Delta = -\nabla_{\mathbb{Z}, 0} \\). That's a big difference in description of the inverses on both sides! 

Let's use this language to boogie. Take the lattice \\( \Lambda := \mathbb{Z} + \tau\mathbb{Z} \subset \mathbb{C} \\) ,  with the directions pointing toward the positive imaginary and positive real directions. The neighbors of the vertex 

$$\begin{aligned} \nabla_{\lambda, (0, 0)} f(z) & = \frac12 (f(z) - f(z+1)) + \frac{1}{2}(f(z) - f(z+\tau))  \\ &= f(z) - \frac12(f(z+1) + f(z+\tau)) \\ & = \big( \mathrm{id} - \frac{\mathrm{id}}{2}(e^a + e^{\tau a})\big) f(z) \end{aligned}$$

If we allow ourselves full license to fuck around, let's set \\( \tau = i \\) and play GUESS THAT INVERSE. We consider the function 
$$1-\frac{1}{2}(e^x + e^{\tau x})$$
And look at it's inverse: 
$$\begin{aligned} \frac{1}{1-\frac{1}{2}(e^x + e^{\tau x})} &= \frac{2}{e^x + e^{\tau x}-2} \\ &= \frac{2}{\sum_n \frac{(1+\tau^n)x^n}{n!}-2}\end{aligned}$$

This function has a pole of order 3 at 0, and for the simplest case \\( \tau = i \\), the remaining poles are of order one at roots of \\( i \\). We can plug those poles, no problem: 

$$\frac{2a^3(a+1)(a-1)(a+i)(a-i)}{e^a + e^{ia} - 2}$$

I'm not sure where to go from here, I'd love for this to in some way compare to the Kronecker-Eisenstein series 
(which tantalizingly involves the character \\( \phi(z) = e^{\frac{z-\overline{z}}{A}} \\)). Here, \\( A = \frac{\text{im } \tau}{\pi} \\) is the area of the fundamental domain of the lattice \\( \Lambda \\) divided by \\( pi \\). The Kronecker-Eisenstein series is defined as follows, (typically the role of the letter \\( b \\) is played by \\( a \\), but we are already using \\( a \\) to stand for annihilation operator).

$$\kappa_{b}(z, w, s, \tau) = \sum_{\lambda \in \Lambda}^*\frac{(\overline{z}+\overline{\lambda})^b}{|z+\lambda|^s}\phi(z \overline{w}),$$

where the \\( * \\) means that the summation excludes \\( \lambda = -z \\) if \\( z \in \Lambda \\).

A good reference on these is [Elliptic Functions according to Eisenstein and
Kronecker : An Update](https://webusers.imj-prg.fr/~pierre.charollois/Charollois-Sczech_5.pdf). See in particular the elliptic analogs of Bernoulli numbers discussed on page 8.

This is a nostalgic topic for me which feels like home to step back to. I previously contemplated the analogs of such shifts in 2015 while I was still a robotics inventor sitting in the back of lectures at Berkeley [On Detiling Polynomials: A Generalization of the Euler MacLaurin Formula](https://rin.io/euler-maclaurin-slipper/). 
