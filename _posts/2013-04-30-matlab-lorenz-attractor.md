---
title: "Matlab: Lorenz Attractor"
date: "2013-04-30"
categories: 
  - "code"
  - "explanation"
  - "math"
  - "matlab"
---

I’m a big fan of the Lorenz Attractor, which, when plotted, resembles the half open wings of a butterfly. This attractor was derived from a simplified model of convection in the earth’s atmosphere. One simple version of the Lorenz attractor is pictured below:

[![](/wp-content/uploads/2013/04/Screenshot-from-2013-04-30-14-17-42.png)](/wp-content/uploads/2013/04/Screenshot-from-2013-04-30-14-17-42.png)

The Lorentz system is a set of ordinary differential equations notable for its chaotic solutions (see below). Here \(x\), \(y\) and \(z\) make up the system state, \(t\) is time, and \(\rho, \sigma, \beta\) are the system parameters.

[![](/wp-content/uploads/2013/04/Screenshot-from-2013-04-30-14-15-19.png)](/wp-content/uploads/2013/04/Screenshot-from-2013-04-30-14-15-19.png)

The Lorentz attractor is a chaotic solution to this system found when \(\rho = 28, \sigma = 10, \beta = 8/3\).

The series does not form limit cycles nor does it ever reach a steady state.

We can calculate and render the aforementioned chaotic solution to this ODE as follows:

```
function loren3
clear;clf
global A B R 
A = 10; 
B = 8/3; 
R = 28; 
u0 = 100*(rand(3,1) - 0.5); 
[t,u] = ode45(@lor2,[0,100],u0); 
N = find(t>10); v = u(N,:);
x = v(:,1);
y = v(:,2);
z = v(:,3);
plot3(x,y,z);
view(158, 14)
function uprime = lor2(t,u) 
global A B R 
uprime = zeros(3,1); 
uprime(1) = -A*u(1) + A*u(2); 
uprime(2) = R*u(1) - u(2) - u(1)*u(3); 
uprime(3) = -B*u(3) + u(1)*u(2);
```

This results in the figure:

[![](/wp-content/uploads/2013/04/Screenshot-from-2013-04-30-14-23-25.png)](/wp-content/uploads/2013/04/Screenshot-from-2013-04-30-14-23-25.png)

[To create a surface/mesh from this line plot, we proceed…](/matlab-create-mesh-or-surface-from-line-plot/)
