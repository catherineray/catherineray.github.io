---
title: "Matlab: Create Mesh or Surface From Line Plot"
date: "2013-04-30"
categories: 
  - "code"
  - "explanation"
  - "matlab"
---

This is a continuation of [Matlab: Lorentz Attractor](/matlab-lorenz-attractor/), however, these methods can be applied to any line plot or collection of points.

A slightly more aesthetically pleasing representation of the Lorentz Attractor can be achieved by adding `axis off`. And altering the view’s azimuth and elevation: `view(15, 48)`.

[![](/wp-content/uploads/2013/04/Screenshot-from-2013-04-30-14-26-07.png)](/wp-content/uploads/2013/04/Screenshot-from-2013-04-30-14-26-07.png)

Now we’re talking. Let’s say I want to make a surface or mesh from this dandy line plot. Using `surf` or `mesh` will throw an error, since x, y, and z are all 1D vectors! Whatever shall we do!

Never fear, mathematicians will save the day.

Delaunay created a sweet method of triangulating points. If we treat this line plot as a collection of points, we can triangulate to find an approximate surface.

```
tri = delaunay(x,y);
plot(x,y,'.')
%determine amount of triangles
[r,c] = size(tri);
disp(r)
%plot with trisurf
h = trimesh(tri, x, y, z, 'FaceAlpha', 0.6);
alpha = 0.4
view(15, 48)
axis vis3d
axis off
l = light('Position',[-50 -15 29])
lighting phong
shading interp
```

[![](/wp-content/uploads/2013/04/Screenshot-from-2013-04-30-14-25-09.png)](/wp-content/uploads/2013/04/Screenshot-from-2013-04-30-14-25-09.png)

What if we’d like a surface instead of the mesh? Then we’ll change `trimesh` to `trisurf` add transparency (`alpha = 0.7`) and find:

[![](/wp-content/uploads/2013/04/Screenshot-from-2013-04-30-14-33-45.png)](/wp-content/uploads/2013/04/Screenshot-from-2013-04-30-14-33-45.png)
