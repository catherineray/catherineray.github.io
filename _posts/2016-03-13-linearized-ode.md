---
title: "How do I explicitly write an ODE as a linear ODE + a nonlinear ODE?"
date: "2016-03-13"
categories: 
  - "math"
---

I was learning about linearized stability and was confused by where the magical linearized version of the equation was coming from. I finally understand it, and so stupidly simple so I want to tell you about it. First, I’ll motivate the question. If you don’t care about the motivation, just scroll ahead a bit.

How does a small perturbation of the initial input of my ODE \\(y’ = \phi(y)\\) affect the long-term behavior?

Let’s say there’s a weight at the end of a stiff thin rod. If we stand this pendulum straight up and manage to have it stay put, this is an equilibrium point. However, if we knock it ever so slightly, it will swing and settle back down at the bottom — so this is unstable. If we flick the pendulum when it is settled at the bottom, it will oscillate and eventually resettle at the bottom.

Let’s be a bit more explicit about this. Let’s start with an equilibrium point, that is, a solution \\(y\\) such that \\(y(t) = q\\) for all \\(t\\). If we instead set \\(y(0) = q + \epsilon_0\\), where \\(\epsilon_0\\) is a pretty small perturbation, will \\(y(t) = y + \epsilon(t)\\) spiral away or stay within some small delta neighborhood of \\(q\\)?

This question is too hard for a general ODE, but we sure do know the stability of systems of the form \\(y’ = Ay\\) by just looking at the eigenvalues of \\(A\\). But, what good does that do? Will the stability of the solutions of \\(y’= Ay\\) tell me anything about the stability of the solutions of \\(y’ = \phi(y)\\)? And, really, in the first place, how can I explicitly re-write my nonlinear ODE as a linear ODE + a nonlinear part? That is, how do I find the form: \\\(y’ = \phi(y) = Ay + g(y)\\\) where \\(g\\) is some smooth function, and \\(A\\) is a matrix.

**Here’s how we find the matrix \\(A\\):**

If we have an ODE of the form \\(y’ = \phi(y)\\), we can take the Taylor series of \\(\phi(y)\\) with respect to a point \\(y_c\\). So, locally around \\(y_c\\): \\\(\phi(y) = \phi(y_c) + \frac{\partial \phi}{\partial y}(y_c) \cdot (y_c - y) + \frac{\partial^2 \phi}{\partial y^2}(y_c) \cdot (y_c - y)^2 + \dots\\\)

If we want to get rid of the pesky first term, we can we pick \\(y_c\\) to be an equilibrium point (a solution \\(q\\) where \\(q(t)= c\\) for some fixed \\(c\\), for all time, so \\(q’ = 0\\)), that is, a point \\(q\\) such that \\(\phi(q) = 0\\). So, locally around \\(q\\):

\\\(\phi(y) = \frac{\partial \phi}{\partial y}(q) \cdot (q - y) + \frac{\partial^2 \phi}{\partial y^2}(q) \cdot (q - y)^2 + \dots\\\)

If \\(y\\) is an initial value close to \\(q\\), that is, \\(\|\|y - q\|\| = \epsilon_0\\) is small, then \\(\|\|y - q\|\|^2\\) and all higher powers are going to be _hella_ small, so we can sometimes ignore them. Locally around \\(q\\):

\\\(\phi(y) = D\phi(q) \cdot (y-q) + \text{ small nonlinear stuff }\\\)

Where \\(D\phi(q)\\) is the Jacobian of \\(\phi\\), evaluated at the point \\(q\\). We call the approximation \\(y’ = D\phi(q)\cdot(y-q)\\) the “linearized” version of our original equation, \\(\phi(y) = y’\\).

And, \\(g(y)\\), the nonlinear stuff, is then the difference of our original equation and the linear portion: \\(g(y) = \phi(y) - D\phi(q)\cdot(y-q)\\).

**Afternote:** If this was an equation with terms explicitly dependent on \(t\), we could take the two dimensional Taylor series. That is, if \\(y’ = \phi(t, y)\\), then, locally around \\((y_c, t_c)\\):

\\(\phi(y,t) = \phi(y_c, t_c)\\)

\\(+ \frac{\partial \phi}{\partial y}(y_c, t_c) \cdot (y_c - y) + \frac{\partial \phi}{\partial t}(y_c, t_c) \cdot (t_c - t) \\)

\\(+ \frac{\partial^2 \phi}{\partial y^2}(y_c,t_c) \cdot (y_c - y)^2 + \frac{\partial^2 \phi}{\partial t^2}(y_c, t_c) \cdot (t_c - t)^2 + \dots \\)
