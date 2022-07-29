---
title: "Matlab: Rotating Sphere Animation"
date: "2013-04-23"
categories: 
  - "code"
  - "explanation"
  - "matlab"
  - "video"
---

Let’s say you want to make a simple simulation of a sphere spinning in Matlab. First, you set the pop-up window to have the title ‘Spheres,’ the window to have black background, and specify said window’s position and size.

```
format compact
set(gcf,'Menubar','none','Name','Spheres', ...
 'NumberTitle','off','Position',[10,350,400,300], ...
 'Color',[0 0 0]);
```

``` ``Matlab has a nice built in “sphere” surface function that you can invoke after you specify where you want it’s axes. Note that if you don’t include the `h = axes('Position',[0 0 1 1]);` command, the program will run the same except your view of the sphere will be farther away (smaller).`` ```

```` ``   ``` %Zooms in on sphere h = axes('Position',[0 0 1 1]);  %Draws sphere [X Y Z]=sphere(20); C = Z^2 + Y^2; %creates color data to map onto sphere hs = surf(X, Y, Z, C); ```  The sphere function creates a “curved” surface using quadrilaterals. The boundaries of these quadrilaterals can be hidden `set(hs,'EdgeColor','None');` or shown `set(hs,'EdgeColor',[0.5 0.5 0.5]);`  ``` %Shows wires set(hs,'EdgeColor',[0.5 0.5 0.5]);  %Adjusts transparency alpha('color'); alphamap('rampdown');  %Adjusts lighting camlight right; lighting phong hidden off axis off axis equal ```  Stopping here, you have a static sphere.  [![](/wp-content/uploads/2013/04/Rin-2013-04-23-at-7.52.50-AM.png)](/wp-content/uploads/2013/04/Rin-2013-04-23-at-7.52.50-AM.png)  Depending on whether you wish to just play the animation or if you wish to also save it as an ‘.avi’ file, you approach the animation in different ways. Either way, the animation looks like this:  <iframe width="560" height="315" src="https://www.youtube.com/embed/HMtcI1Za0UA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>  To play the animation without saving it:  ``` oh=findobj(gca,'type','surface'); %Spins about z axis. for i = 1:36 axis off; rotate(oh,[0 0 1],10); M(i) = getframe(gca); end %Spins about y axis. for i = 1:36 axis off; rotate(oh,[0 1 0],10); M(i) = getframe(gca); end %Spins about x axis. for i = 1:36 axis off; rotate(oh,[1 0 0],10); M(i) = getframe(gca); end ```  To save the movie as an ‘.avi’ for future use, you can modify the above code section slightly. You create a writer object and write the video to it frame by frame (using writeVideo) as part of each forloop.  ``` %Create writerObj writerObj = VideoWriter('sphere.avi');   open(writerObj) %Animated movie of the rotation of the 3D globe oh=findobj(gca,'type','surface'); %Spins about z axis. for i = 1:36 axis off; rotate(oh,[0 0 1],10); M(i) = getframe(gca); frame = getframe; writeVideo(writerObj,frame); end %Spins about y axis. for i = 1:36 axis off; rotate(oh,[0 1 0],10); M(i) = getframe(gca); frame = getframe; writeVideo(writerObj,frame); end %Spins about x axis. for i = 1:36 axis off; rotate(oh,[1 0 0],10); M(i) = getframe(gca); frame = getframe; writeVideo(writerObj,frame); end close(writerObj); ```  Putting it all together:  ``` format compact set(gcf,'Menubar','none','Name','Spheres', ...  'NumberTitle','off','Position',[10,350,400,300], ...  'Color',[0 0 0]); h = axes('Position',[0 0 1 1]); %Draws sphere [X Y Z]=sphere(20); C = Z^2 + Y^2; hs = surf(X, Y, Z, C); %sets wireframe to visible set(hs,'EdgeColor',[0.5 0.5 0.5]); %Alters transparency of sphere alpha('color'); alphamap('rampdown'); %Sets lighting of sphere camlight right; lighting phong hidden off axis equal %Create writerObj writerObj = VideoWriter('sphere.avi');   open(writerObj) %Animated movie of the rotation of the 3D globe oh=findobj(gca,'type','surface'); %Spins about z axis. for i = 1:36 axis off; rotate(oh,[0 0 1],10); M(i) = getframe(gca); frame = getframe; writeVideo(writerObj,frame); end %Spins about y axis. for i = 1:36 axis off; rotate(oh,[0 1 0],10); M(i) = getframe(gca); frame = getframe; writeVideo(writerObj,frame); end %Spins about x axis. for i = 1:36 axis off; rotate(oh,[1 0 0],10); M(i) = getframe(gca); frame = getframe; writeVideo(writerObj,frame); end close(writerObj); ```   `` ````
