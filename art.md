---
layout: page
title: Art
permalink: /art/
full-width: true
---

Please enjoy this small collection of my art. :) I primarily work with pastels, acrylic, spray paint and polaroids. When I spray paint I make colorful street art murals of creatures. The chaos god penrose tiling tattoo design is a collaboration with Chris Orta [@killabunzz](https://www.instagram.com/killabunzz/).

{% assign types = "pastel,acrylic,spraypaint,polaroid,tattoo" | split: "," %}

<div class="gallery-controls">
  <input type="search" id="gallery-search" placeholder="Search the gallery…">
  <div id="gallery-filters">
    <button class="gallery-filter is-active" data-filter="all">All</button>
    {% for type in types %}
    <button class="gallery-filter" data-filter="{{ type }}">{{ type | capitalize }}</button>
    {% endfor %}
  </div>
</div>

<div id="gallery-grid">
{% for image in site.static_files %}
  {% if image.path contains '/gallery/' %}
    {% assign parts = image.path | split: '/' %}
    {% assign folder = parts[2] %}
    {% assign type = "uncategorized" %}
    {% for t in types %}{% if folder == t %}{% assign type = t %}{% endif %}{% endfor %}
    {% assign label = image.basename | replace: '-', ' ' | replace: '_', ' ' %}
    <figure class="gallery-item" data-type="{{ type }}" data-label="{{ label | downcase }}">
      <a href="{{ image.path }}">
        <img src="{{ image.path }}" alt="{{ label }}" loading="lazy">
      </a>
      <figcaption>{{ label }}<span class="gallery-tag">{{ type }}</span></figcaption>
    </figure>
  {% endif %}
{% endfor %}
</div>

<p id="gallery-empty" hidden>Nothing matches that.</p>

<style>
.gallery-controls { margin: 1.5em 0; }
#gallery-search { width: 100%; max-width: 320px; padding: .5em .7em; margin-bottom: .8em; }
.gallery-filter { background: #eee; border: 0; padding: .5em 1em; margin: 0 .4em .4em 0; cursor: pointer; }
.gallery-filter.is-active { background: #333; color: #fff; }
#gallery-grid { display: flex; flex-wrap: wrap; gap: 1em; }
.gallery-item { flex: 0 1 240px; margin: 0; }
.gallery-item img { width: 100%; height: auto; display: block; }
.gallery-item figcaption { font-size: .8em; color: #666; margin-top: .3em; }
.gallery-tag { display: inline-block; margin-left: .5em; padding: 0 .4em; background: #eee; border-radius: 3px; }
</style>

<script>
document.addEventListener('DOMContentLoaded', function () {
  var buttons = document.querySelectorAll('.gallery-filter');
  var items   = document.querySelectorAll('.gallery-item');
  var search  = document.getElementById('gallery-search');
  var empty   = document.getElementById('gallery-empty');
  var current = 'all';

  function apply() {
    var q = search.value.trim().toLowerCase();
    var shown = 0;
    items.forEach(function (item) {
      var okType = current === 'all' || item.dataset.type === current;
      var okText = q === '' ||
                   item.dataset.label.indexOf(q) !== -1 ||
                   item.dataset.type.indexOf(q) !== -1;
      var show = okType && okText;
      item.style.display = show ? '' : 'none';
      if (show) shown++;
    });
    empty.hidden = shown > 0;
  }

  buttons.forEach(function (button) {
    button.addEventListener('click', function () {
      buttons.forEach(function (b) { b.classList.remove('is-active'); });
      button.classList.add('is-active');
      current = button.dataset.filter;
      apply();
    });
  });

  search.addEventListener('input', apply);
});
</script>
