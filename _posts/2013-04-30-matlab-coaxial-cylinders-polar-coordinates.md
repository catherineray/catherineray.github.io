---
title: "Matlab: Coaxial Cylinders (Polar Coordinates)"
date: "2013-04-30"
categories: 
  - "code"
  - "explanation"
  - "math"
  - "matlab"
---

Let’s say we want to create an aesthetically pleasing visualization of 2 coaxial cylinders.

[![](/wp-content/uploads/2013/04/screenshot-from-2013-04-30-15-08-52.png)](/wp-content/uploads/2013/04/screenshot-from-2013-04-30-15-08-52.png)

To do this, we’ll be adjusting the lighting, proportions, and transparency of the figure.

The code to create this figure utilizes the coordinate transformation from Cartesian to 3D-Polar coordinates. Recall that the transformation between coordinate systems is as follows.

[![](/wp-content/uploads/2013/04/Screenshot-from-2013-04-30-15-16-29.png)](/wp-content/uploads/2013/04/Screenshot-from-2013-04-30-15-16-29.png)

Instead of using Matlab’s built in `cart2pol` method, we will manually convert each Cartesian (x, y, z) coordinate to it’s equivalent polar coordinate (r, phi, z) .

_Side note: I used phi above in the transformation equations and theta below in the code to make a point. The angular coordinate in the cylindrical (a.k.a polar) coordinate system is generally represented as either phi or theta. These are equivalent, and the variable chosen is purely a matter of notation._

```
Y=-5:5;
theta=linspace(0,2*pi,40);
[Y,theta]=meshgrid(Y,theta);
r = 1.5
% calculate x and z
X=r*cos(theta);
Z=r*sin(theta);
hs = surf(X,Y,Z)
set(hs,'EdgeColor','None', ...
        'FaceColor', [0.5 0.5 0.5], 'FaceLighting', 'phong');
alpha(0.7);
hold on
camlight right;
r = 0.5
% recalculate x and z
X=r*cos(theta);
Z=r*sin(theta);
hs = surf(X,Y,Z)
axis equal
set(hs,'EdgeColor','None', ...
        'FaceColor', [0.5 0.5 0.5], 'FaceLighting', 'phong');
alpha(0.7);
axis off
camlight right;
lighting gouraud
view(140, 24)
% white background
set(gcf,'color','white')
```
