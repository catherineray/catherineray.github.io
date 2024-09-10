---
layout: page
title: Art
permalink: /art/
---

Please enjoy this small collection of my art. :) I primarily work with pastels, acrylic, spray paint and polaroids. 

The chaos-god-penrose tattoo design is a collaboration with Chris Orta [@killabunzz](https://www.instagram.com/killabunzz/). 

<ul class="image-gallery">
  {% for image in site.static_files %}
      {% if image.path contains 'gallery' %}
          <li class="image-gallery-card">
            <img class="image-gallery-image" src="{{ site.baseurl }}{{ image.path }}" alt="image" />
          </li>
      {% endif %}
  {% endfor %}
</ul>
