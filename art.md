---
layout: page
title: Art
permalink: /art/
full-width: true
art:
  - file: caterpillar
    title: Caterpillar Bikechain Mech Mural
    types: [spraypaint, acrylic, painting]
  - file: chaos-penrose
    title: Chaos god penrose tiling, collaboration with Chris Orta [@killabunzz](https://www.instagram.com/killabunzz/)
    types: [tattoo]
  - file: exhausted-silence
    title: Exhausted Silence
    types: [blood, painting]
---

Please enjoy this small collection of my art. :) I primarily work with pastels, acrylic, spray paint and polaroids. When I spray paint I make colorful street art murals of creatures.

{% assign types = page.art | map: "types" | join: "," | split: "," | uniq | sort %}

<p id="art-filters">
  <a href="#art-gallery" data-filter="all" aria-current="true">all</a>
  {% for type in types %}{% if type != "" %}<span>/</span><a href="#art-gallery" data-filter="{{ type }}">{{ type }}</a>{% endif %}{% endfor %}
</p>

<ul id="art-gallery">
{% for image in site.static_files %}
  {% if image.path contains '/gallery/' %}
    {% assign entry = page.art | where: "file", image.basename | first %}
    {% assign item_types = entry.types | join: " " %}
    {% if entry.title %}
      {% assign label = entry.title %}
    {% else %}
      {% assign label = image.basename | replace: '-', ' ' | replace: '_', ' ' %}
    {% endif %}
    <li data-type="{{ item_types }}"><a class="art-thumb" href="{{ image.path }}"><img src="{{ image.path }}" alt="{{ label }}" loading="lazy"><span class="art-label">{{ label }}</span></a></li>
  {% endif %}
{% endfor %}
</ul>

<style>
#art-filters span { opacity: .35; margin: 0 .35em; }
#art-filters a[aria-current="true"] { font-weight: bold; }

.art-thumb { position: relative; display: inline-block; }
.art-thumb img { display: block; }
.art-label {
  position: absolute; left: 0; right: 0; bottom: 0;
  padding: .5em .7em;
  background: rgba(0, 0, 0, .55);
  color: #fff;
  font-size: .8em;
  opacity: 0;
  transition: opacity .2s ease;
  pointer-events: none;
}
.art-thumb:hover .art-label,
.art-thumb:focus .art-label { opacity: 1; }
</style>

<script>
document.addEventListener('DOMContentLoaded', function () {
  var links = document.querySelectorAll('#art-filters a');
  var items = document.querySelectorAll('#art-gallery li');

  links.forEach(function (link) {
    link.addEventListener('click', function (e) {
      e.preventDefault();
      links.forEach(function (l) { l.removeAttribute('aria-current'); });
      link.setAttribute('aria-current', 'true');

      var filter = link.dataset.filter;
      items.forEach(function (item) {
        var itemTypes = item.dataset.type.split(' ');
        item.style.display = (filter === 'all' || itemTypes.indexOf(filter) !== -1) ? '' : 'none';
      });
    });
  });
});
</script>
