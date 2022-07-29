---
title: "Group Law on the (Punctured) Affine Line"
date: "2015-03-18"
categories: 
  - "math"
---

_There are likely inaccuracies in this post, as I am just beginning to learn the basics of algebraic geometry. Constructive criticism is strongly encouraged._

#### There once was a line…

Let’s look at the affine line over \(\mathbb{C}\). This is just the complex line with no distinguished element (i.e., a plane which forgot it’s origin — it’s 2 real dimensions, or, equivalently, 1 complex dimension).

#### \(\mathbb{A}^1 \simeq \text{Spec }\mathbb{C}[x]\)

As we know, the affine line over the field \(\mathbb{K}\) is isomorphic to the spectrum of a ring of single variable polynomials (with coefficients in \(\mathbb{K}\)). If you aren’t familiar with this isomorphism, I recommend popping over to [Spectrum of a Ring](/spectrum-of-ring/). For simplicity, let’s work with the field \(\mathbb{C}\), although, I’m pretty sure the rest of this post still works for any \(\mathbb{K}\).

#### Is there a reasonable way to take in two points, and ask for a third?

This is generally a fun question to answer when you’re handed a space. So, how do we add two points of \(\mathbb{A}^1\) to get a third point in \(\mathbb{A}^1\)? The same way we usually add two complex numbers! But wait, we need an identity! Where does the identity come from? I think it comes from looking at the affine plane as \(\text{Spec }\mathbb{C}[x]\), the maximal ideal \(x\) is a distinguished point.

![Screen Shot 2015-03-17 at 4.34.22 PM](/wp-content/uploads/2015/03/Screen-Shot-2015-03-17-at-4.34.22-PM.png)

It’s worth considering why \(\text{Spec }\mathbb{C}[x] \times \text{Spec }\mathbb{C}[y] \simeq \text{Spec }\mathbb{C}[x,y]\). It seems that this is because \(\text{Spec}\) is functorial, that is:

\(\text{Spec }\mathbb{C}[x, y] = \text{Spec }(\mathbb{C}[x] \otimes {C}[y]) = \text{Spec }\mathbb{C}[x] \times \text{Spec }\mathbb{C}[y]\).

Another way to think about this is that the cartesian product \(\mathbb{A}^1 \times \mathbb{A}^1 = \mathbb{A}^2 = \text{Spec }\mathbb{C}[x,y]\).

#### \(\mathbb{A}^1 - {0} \simeq \text{Spec }\mathbb{C}[x, x^{-1}]\)

Can we analogously put a group structure on the punctured affine line? Hell yes we can, here’s one way to do so:

[![Screen Shot 2015-03-17 at 3.56.56 PM](/wp-content/uploads/2015/03/Screen-Shot-2015-03-17-at-3.56.56-PM.png)](/wp-content/uploads/2015/03/Screen-Shot-2015-03-17-at-3.56.56-PM.png)

Recall that \(\text{Spec }\mathbb{C}[x, x^{-1}] \times \text{Spec }\mathbb{C}[y, y^{-1} = \text{Spec }\mathbb{C}[x, y, x^{-1}, y^{-1}]\).

[![Screen Shot 2015-03-17 at 3.54.05 PM](/wp-content/uploads/2015/03/Screen-Shot-2015-03-17-at-3.54.05-PM.png)](/wp-content/uploads/2015/03/Screen-Shot-2015-03-17-at-3.54.05-PM.png)

\(\text{Spec }\) is a contravariant functor, so we get a corresponding diagram in \(\text{Ring}\):

[![Screen Shot 2015-03-17 at 3.53.58 PM](/wp-content/uploads/2015/03/Screen-Shot-2015-03-17-at-3.53.58-PM.png)](/wp-content/uploads/2015/03/Screen-Shot-2015-03-17-at-3.53.58-PM.png)

The explicit maps that define this diagram reveal the desired group law:

[![Screen Shot 2015-03-17 at 4.03.30 PM](/wp-content/uploads/2015/03/Screen-Shot-2015-03-17-at-4.03.30-PM.png)](/wp-content/uploads/2015/03/Screen-Shot-2015-03-17-at-4.03.30-PM.png)

That is, \(z \mapsto (x+1)(y+1) - 1 = xy + x + y\), which is a form of the multiplicative formal group law that we know and love. Intuitively, we can think of it as wanting to multiply \(a\) and \(b\), but first needing to shift to the multiplicative identity \(1\), and afterward translating back again.

#### \(\mathbb{A}^1 - {0} - {1} \simeq \text{Spec }\mathbb{C}[x, x^{-1}]\)

What I don’t yet see, dear reader, is how to put group structure on \(\text{Spec }\mathbb{C}[x, x^{-1}, (1-x)^{-1}]\) (which is isomorphic to the affine line minus two points). What are your thoughts?

_Thanks to Yifei Zhao for kindly helping me derive the multiplicative formal group law from the group law on the punctured affine line._
