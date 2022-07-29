---
title: "What Does This Wobbly &#8220;d&#8221; Do?"
date: "2013-10-16"
categories: 
  - "code"
  - "explanation"
  - "latex"
  - "math"
---

What is the difference between \(\frac{d}{dx}\) and \(\frac{\partial}{\partial x}\)?

…is a question I get surprisingly often when tutoring friends.

**Short version:** The difference is all about dependency!

The “regular d” in \(\frac{d}{d x}\) denotes ordinary differentiation: assumes all variables are dependent on \(x\) (\(\rightarrow\) envoke chain/product rule to treat the other variables as functions of \(x\)).

The “wobbly d” in \(\frac{\partial}{\partial x}\) denotes partial differentiation and assumes that all variables are independent of \(x\).

You can make a straight d from a wobbly d by using a beautiful thing:

\(\frac{df}{dx} = \frac{\partial f}{\partial x} + \frac{\partial f}{\partial y}\frac{dy}{dx} + \frac{\partial f}{\partial z}\frac{dz}{dx}\)

You can remember it this way: the partial derivative is partially a “d”, or the the “wobbly d” is partial to nemself and bends nir neck down to look at nirs reflection \(\partial\).

_Sidenote: Ne/nem/nir/nirs/nemself is a pretty swell gender neutral pronoun set!_

**Longer version:** Before we start - what is a derivative, anyway?

The derivative of a function at a chosen point describes the linear approximation of the function near that input value. Recall the trusty formula: \(\Delta y = m\Delta x\), where m is the slope and \(\Delta\) represents the change in the variable? For a (real-valued) function of a (real) single variable, the derivative at that point is = tangent line to the graph at that point.

The beauty of math is: \(m = \frac{\Delta y}{\Delta x} \equiv\) “How much one quantity (the function) is changing in response to changes in another quantity (\(x\)) at that point (it’s input, assuming \(y(x)\)).”

So, it makes sense that derivative of any constant is 0, since a constant (by definition) is constant \(\rightarrow\) unchanging!

\(\frac{d(c)}{dx}=0\), where \(c\) is any constant.

What about everything that isn’t a constant?

That means, \(\frac{d(x^2)}{dx} = 2x\), since \(x^2\) is dependent on \(x\). \(\frac{d}{dx}\) denotes ordinary differentiation, i.e. all variables are **dependent** on the given variable (in this case, \(x\)).

But what about \(\frac{d(y)}{dx}\)? Looking at this equation, we immediately assume \(y\) is a function of \(x\). Otherwise, it makes no sense. \(\frac{d(y)}{dx} \equiv \frac{d(y(x))}{dx}\)

On the other hand, \(\frac{\partial (y)}{\partial x}\) denotes partial differentiation. In this case, all variables are assumed to be **independent**.

\(\frac{\partial (y)}{\partial x} = 0\)

Let’s compare them with an example. \(f(x,y) = ln(x)sec(y) + y\)

\(\frac{\partial f}{\partial x} = \frac{sec(y)}{x}\)

\(\frac{df}{dx}\) implies that \(y\) is dependent(a function of) \(x\), i.e. \(f = (ln(x)sec(y(x)) + y(x))\)

\(\frac{df}{dx} = \frac{dy}{dx}(ln(x)tan(y(x))sec(y(x)) + 1) + \frac{sec(y(x))}{x}\)

As you can see, \(\frac{\partial f}{\partial x} \neq \frac{df}{dx}\).

By the way, to use LaTex in Blogger include the following before `</head>` in your Template ([source](http://codextechnicanum.blogspot.com/2013/07/how-to-show-latex-in-blogger.html)):

```
<script type="text/x-mathjax-config"> MathJax.Hub.Config({tex2jax: {inlineMath: [['$','$'], ['(',')']]}}); </script> 
<script src="http://cdn.mathjax.org/mathjax/latest/MathJax.js?config=TeX-AMS-MML_HTMLorMML" type="text/javascript"> </script>
```
