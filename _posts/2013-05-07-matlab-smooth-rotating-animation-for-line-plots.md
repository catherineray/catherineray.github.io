---
title: "Matlab: Smooth Rotating Animation for Line Plots"
date: "2013-05-07"
categories: 
  - "code"
  - "explanation"
  - "matlab"
  - "video"
---

I recently became stuck trying to create an animation which consists of a smooth rotation of a viewpoint around the Lorenz attractor. Methods I use for changing viewpoints with respect to surface objects were creating jerky, lagging animations when applied to my line plot.

This will work for any 3D line plot:

```
plot3(x,y,z);
axis vis3d
fps = 60; sec = 10;
vidObj = VideoWriter('plotrotation.avi');
vidObj.Quality = 100;
vidObj.FrameRate = fps;
open(vidObj);
for i=1:fps*sec
    camorbit(0.9,-0.1);
    writeVideo(vidObj,getframe(gcf));
end
close(vidObj);
```

This results in the following smooth animation: 

<iframe width="560" height="315" src="https://www.youtube.com/embed/7dRru3vDqiA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
