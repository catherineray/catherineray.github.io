---
title: "Stop Staring and Compute! Automorphism Groups of Rational Curves"
date: "2022-02-23"
categories: 
  - "code"
  - "math"
---

Let’s compute the automorphism groups of some curves. There are many ways to do this! We will be using 3 different algorithms for this. If you do not have sage math working, you can use [the sagecell emulator](https://sagecell.sagemath.org/).

## Directly into your terminal using SageMath

Let’s start with the most straightforward one. Run sage and type this into your terminal, hitting enter after each line.

```
A.<x,y>=AffineSpace(QQ,2)
C=Curve(y^8-x*(x-1)^4)
S=C.riemann_surface(prec=100)
G=S.symplectic_automorphism_group()
print(G.gens()[0:15])
print(G.order())
```

Technical P.S.: For sufficiently high degree curves, this will throw a segmentation fault. One must then narrow down where it is coming from. There are three hidden steps before the endomorphism basis calculation, so look for which it is throwing an error:

```
S=C2.riemann_surface()
_ = S.homology_basis() # [1]
_ = S.cohomology_basis() # [2]
_ = S.period_matrix() # [3]
```

## Sage Function for Rational Curves

Let’s start with the most straightforward one. Save this file, and start sage in the same folder. Then, load(“file.sage”) will run the program. This is just a rephrasing of the previous method.

```
from sage.schemes.riemann_surfaces.riemann_surface import RiemannSurface, RiemannSurfaceSum
R.<x,y> = QQ[]
def aut(f):
        print(f)
        S = RiemannSurface(f, prec = 100)
        try:
            	G = S.symplectic_automorphism_group()
                print("OH LAWD ITS COMING")
                print(G.gens()[0:15])
                print(G.order())
                #check_order(G.gens())
        except:
               	print(str(IOError))
                pass
#any plane curve goes here
f = y^8 - x*(x-1)^4
aut(f)
```

## Alternative code

We can also do:

```
f2 = any plane curve
f1 = hyperelliptic curve of same genus
S1 = RiemannSurface(f1, prec = 100)
T = RiemannSurfaceSum([ S1 ])
T.tau = S2.riemann_matrix()
```

## Finding Group Structure of Output Set

We get the following matrix output. Then, we clean the matrix output, and declare it to be a group in GAP (gap-core as a linux package). GAP then returns a structure description.

```
([ 0 0 1 -1]
[ 0 0 -1 0]
[ 0 1 1 0]
[ 1 1 0 1], [ 1 0 -1 1]
[ 0 1 1 0]
[ 0 -1 0 0]
[-1 -1 0 0], [ 1 1 0 1]
[-1 0 1 -1]
[ 0 -1 -1 1]
[-1 -1 -1 0], [ 0 -1 -1 1]
[ 1 1 1 0]
[-1 -1 0 -1]
[-1 0 1 -1], [ 0 0 0 -1]
[ 0 0 -1 1]
[ 1 1 1 0]
[ 1 0 0 1], [ 1 0 0 1]
[ 0 1 1 -1]
[-1 -1 0 0]
[-1 0 0 0], [ 0 0 -1 1]
[ 0 0 0 -1]
[ 1 0 0 1]
[ 1 1 1 0], [ 0 0 -1 0]
[ 0 0 1 -1]
[ 1 1 0 1]
[ 0 1 1 0], [ 1 1 1 0]
[ 0 -1 -1 1]
[-1 0 1 -1]
[-1 -1 0 -1], [ 1 0 -1 1]
[-1 -1 0 -1]
[ 1 1 1 0]
[ 0 1 1 -1], [ 0 -1 -1 1]
[-1 0 0 -1]
[ 1 0 0 0]
[ 1 1 0 0], [ 0 1 1 0]
[ 1 0 -1 1]
[-1 -1 0 0]
[ 0 -1 0 0], [0 1 0 0]
[1 0 0 0]
[0 0 0 1]
[0 0 1 0], [-1 0 0 0]
[ 1 1 0 0]
[ 0 -1 -1 1]
[ 1 0 0 1], [ 1 0 0 1]
[-1 -1 -1 0]
[ 0 0 1 -1]
[ 0 0 0 -1])
```

We clean this output with regex, or manually as follows:

1. find ], [ replace ]],[[
2. find /n, replace ,
3. find doublespace, replace space
4. find [space, replace [
5. find space replace ,
6. find ,, replace ,
7. find [, replace [
8. change ([ and )] to ([[ and ]]) resp.
9. Open gap and plug in:

```
G := Group([[0,0,1,-1],[0,0,-1,0],[0,1,1,0],[1,1,0,1]],[[1,0,-1,1],[0,1,1,0],[0,-1,0,0],[-1,-1,0,0]],[[1,1,0,1],[-1,0,1,-1],[0,-1,-1,1],[-1,-1,-1,0]],[[0,-1,-1,1],[1,1,1,0],[-1,-1,0,-1],[-1,0,1,-1]],[[0,0,0,-1],[0,0,-1,1],[1,1,1,0],[1,0,0,1]],[[1,0,0,1],[0,1,1,-1],[-1,-1,0,0],[-1,0,0,0]],[[0,0,-1,1],[0,0,0,-1],[1,0,0,1],[1,1,1,0]],[[0,0,-1,0],[0,0,1,-1],[1,1,0,1],[0,1,1,0]],[[1,1,1,0],[0,-1,-1,1],[-1,0,1,-1],[-1,-1,0,-1]],[[1,0,-1,1],[-1,-1,0,-1],[1,1,1,0],[0,1,1,-1]],[[0,-1,-1,1],[-1,0,0,-1],[1,0,0,0],[1,1,0,0]],[[0,1,1,0],[1,0,-1,1],[-1,-1,0,0],[0,-1,0,0]],[[0,1,0,0],[1,0,0,0],[0,0,0,1],[0,0,1,0]],[[-1,0,0,0],[1,1,0,0],[0,-1,-1,1],[1,0,0,1]],[[1,0,0,1],[-1,-1,-1,0],[0,0,1,-1],[0,0,0,-1]]); StructureDescription(G);
```

Check that this structure description matches the order claimed by this sage program. For context on how this works, see section 5.1 of this paper [https://arxiv.org/pdf/1811.07007v2.pdf](https://arxiv.org/pdf/1811.07007v2.pdf). The reason numerical approximation is sound is listed in 5.3.

If you’d like to go even further, and compute the period matrix as well, the code for that is here., and section 5.2 of this paper [https://arxiv.org/pdf/1811.07007v2.pdf](https://arxiv.org/pdf/1811.07007v2.pdf).

## Sage Program for Superelliptic (only?) Curves

This is much faster than the previous code, was [implemented by Bruin-Sijsling-Zotine](https://doc.sagemath.org/html/en/reference/curves/sage/schemes/riemann_surfaces/riemann_surface.html), and is based on this algorithm from Molin-Neuhror [https://arxiv.org/abs/1707.07249](https://arxiv.org/abs/1707.07249) . Unfortunately, I also find it quite finnicky sometimes, which is why I list it second.

## Magma Program for Superelliptic Curves

Magma doesn’t throw segmentation faults as often. So, to use this, one must have magma on your machine (not just the magma calculation) as it is necessary to concurrently use must download this package of Edgar Costa. [https://github.com/edgarcosta/endomorphisms](https://github.com/edgarcosta/endomorphisms)

```
SetVerbose("EndoFind", 0);
SetVerbose("CurveRec", 0);
prec := 300;
F := RationalsExtra(prec);
CC := F`CC;
R<x> := PolynomialRing(F);
p := x^4 - x;
e := 3;
// Construct superelliptic curve y^3 = x^4 - x
S := RiemannSurface(p, e : Precision := Precision(CC));
P := BigPeriodMatrix(S);
P := ChangeRing(P, CC);
GeoEndoRepCC := GeometricEndomorphismRepresentationCC(P);
GeoEndoRep := GeometricEndomorphismRepresentation(P, F);
print GeoEndoRep;
```
