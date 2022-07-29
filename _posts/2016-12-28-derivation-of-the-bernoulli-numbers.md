---
title: "Umbral Calculus Derivation of the Bernoulli numbers"
date: "2016-12-28"
categories: 
  - "math"
---

\\(“(B-1)^n = B^n”\\)

\begin{align*} (B-1)^2 &= B^2\\ B^2 - 2B^1 + 1 &= B^2 \\ -2B^1+1 & = 0\\ B^1 &= \frac{1}{2} \\ B_1 &= \frac12 \end{align*}

\begin{align*} (B-1)^3 &= B^3\\ B^3 - 3B^2 + 3B^1 - 1 &= B^3 \\ B^3 - 3B^2 + 3B_1 - 1 &= B^3 \\ -3B^2 + 3(\frac{1}{2})-1& = 0\\ -3B_2 + \frac{1}{2} &= 0 \\ B_2 &= \frac{1}{6} \end{align*}

Thanks to Laurens Gunnarsen for showing me this strange trick.

I’ve finally understood the principle which allows us to lower the index. The step where we move \(B^i\) to be \(B_i\) is quite simple. As Rota and Roman say, one method of expressing an infinite sequence of numbers is by a transform method. That is, to define a linear transform \(B\) such that \\(B x^n = B_n\\)

So, the above “lowering of the index” is actually using the relation \((X-1)^n = X^n\), and applying \(B\) to both sides of it. To get \(B(X-1)^n = B(X^n)\). Let’s look for example at the “lowering step” of the first calculation: \begin{align*} X^1 &= \frac{1}{2} \\ B (X_1) &= B(\frac12) \\ B_1 &= \frac12 B(1) = \frac12 \end{align*}
