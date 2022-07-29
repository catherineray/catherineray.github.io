---
title: "A question on primes"
date: "2015-11-13"
categories: 
  - "math"
---

I recently encountered a result which seems to be analogous to the following result of Dirichlet, which I wrote in a few common forms to be more suggestive.

**Theorem (Dirichlet on Arithmetic Progressions).** Let a​ and b​ be relatively prime positive integers, then there are infinitely many primes p \(\equiv\) a mod b​ (i.e., the progression \(a + b \mathbb{N}\)​ contains infinitely many primes).

**Corollary 1.** There are infinitely many primes such that a​ is not a square and quadratic residue (mod p) and infinitely many primes such that a​ is a quadratic non-residue (mod p). In nicer terms, given n, there are infinitely many primes such that the Legendre symbol \((\frac{-n}{p})\) takes on each value for infinitely many p (for p ≠ 2​).

**Corollary 2.** Something like: Given a prime \(p\)​, there’s a fifty-fifty chance that the image of the prime splits (through an order two extension) [remains inert/ramify when passed to the extension]. This is saying half are quadratic non-residues and half are quadratic residues, respectively, that is, half are squares mod p, and the other half aren’t. For example, \(2 \mod 5\) is not a square, but \(1 \mod 5\) and \(3 mod 5\) are squares.

A result that tastes like Corollary 2 is the existence of infinitely many super singular primes for every elliptic curve over \(\mathbb{Q}\):

**Theorem. (Elkies)** Given an elliptic curve E/\(\mathbb{Q}\), there are infinitely many primes p​ such that E/Fp​ is supersingular and infinitely many primes q​ such that E/Fq​ is ordinary.

[Here is the next step.](https://mathoverflow.net/questions/234306/elkies-supersingularity-theorem-in-higher-dimension-in-terms-of-the-associated)

**Questions:**

- Dirichlet’s theorem on primes in progressions is apparently a very special case of [Chebotarev’s density theorem](https://en.wikipedia.org/wiki/Chebotarev%27s_density_theorem). Is Elkies result also a special case of Chebortarev density?
- Given a hyper elliptic curve H over \(\mathbb{Q}\)​, are there infinitely many primes such that passing to H/Fp​ is a supersingular elliptic curve, an ordinary elliptic curve, or still a hyperelliptic curve? Is there a similar density result for this case?
- Viewing Dirichlet’s result as a statement about primes as 0-dimensional varieties, and Elkies’s result as a statement about 1-dimension varieties, is there an analogous statement for 2-dimensional varieties?

_Thanks to Dr. Ngo for discussing this with me._

Edit: Jonah Sinick sent me [this rather nice article](https://books.google.com/books?hl=en&lr&id=V32Qe4K4fh8C&oi=fnd&pg=PA81&ots=Z9fqrGNRPb&sig=LiURKE-zwymcwi3cKKGQ-sYoN3E#v=onepage&q&f=false) which gives the result of Elkies a bit more context.
