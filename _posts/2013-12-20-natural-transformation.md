---
title: "Natural Transformation"
date: "2013-12-20"
categories: 
  - "explanation"
  - "math"
---

This quick post assumes a basic knowledge of categories and functors, which can be gained from a previous [video post](/the-monads-trilogy-categories-functors/).

A natural transformation is defined for two functors \(F,G: X\rightarrow Y\) when for each object \(x \in X\) there is an arrow \(\psi(x): F(x) \rightarrow G(x)\) in \(Y\), AND we have the property that \(\forall f: a \rightarrow b\) the equality is true: \(\psi(a) \circ G(f) = F(f) \circ \psi(b)\).

I assume the name “natural” refers to the consistency found in these functor interactions (actions on arrows). Dat consistency!
