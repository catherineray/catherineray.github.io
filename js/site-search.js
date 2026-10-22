// Full-text search over /search.json (posts and the main pages).
// Used by the sidebar search box (default layout) and the All posts filter (blog.html).
(function () {
  var index = null, loading = null;
  var decoder = document.createElement('textarea');

  function decode(s) { decoder.innerHTML = s || ''; return decoder.value; }
  function escapeHtml(s) { return s.replace(/[&<>"]/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]; }); }
  function words(q) { return q.toLowerCase().split(/\s+/).filter(Boolean); }

  function load(url) {
    if (index) return Promise.resolve(index);
    if (!loading) loading = fetch(url).then(function (r) { return r.json(); }).then(function (rows) {
      index = rows.filter(Boolean).map(function (r) {
        r.title = decode(r.title); r.text = decode(r.text);
        r.lowTitle = r.title.toLowerCase();
        r.lowMeta = [r.genre, r.tags, r.topics].join(' ').toLowerCase();
        r.lowText = r.text.toLowerCase();
        return r;
      });
      return index;
    });
    return loading;
  }

  // every word must appear somewhere; title hits rank above tag hits, which rank above text hits
  function score(r, ws) {
    var s = 0;
    for (var i = 0; i < ws.length; i++) {
      var w = ws[i];
      if (r.lowTitle.indexOf(w) !== -1) s += 100;
      else if (r.lowMeta.indexOf(w) !== -1) s += 20;
      else if (r.lowText.indexOf(w) !== -1) s += 1;
      else return 0;
    }
    return s;
  }

  function search(q, limit) {
    var ws = words(q); if (!ws.length || !index) return [];
    var out = [];
    index.forEach(function (r, i) { var s = score(r, ws); if (s) out.push({ r: r, s: s, i: i }); });
    out.sort(function (a, b) { return b.s - a.s || a.i - b.i; });
    return out.slice(0, limit || out.length).map(function (o) { return o.r; });
  }

  // a short piece of text around the first matching word, with the matches marked
  function snippet(r, q, before, after) {
    var ws = words(q); before = before || 50; after = after || 110;
    var at = -1;
    for (var i = 0; i < ws.length && at === -1; i++) at = r.lowText.indexOf(ws[i]);
    if (at === -1) return '';
    var start = Math.max(0, at - before), end = Math.min(r.text.length, at + after);
    if (start > 0) { var sp = r.text.indexOf(' ', start); if (sp !== -1 && sp < at) start = sp + 1; }
    if (end < r.text.length) { var sp2 = r.text.lastIndexOf(' ', end); if (sp2 > at) end = sp2; }
    var re = new RegExp('(' + ws.map(function (w) { return w.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'); }).join('|') + ')', 'gi');
    var html = r.text.slice(start, end).split(re).map(function (part, k) {
      return k % 2 ? '<mark>' + escapeHtml(part) + '</mark>' : escapeHtml(part);
    }).join('');
    return (start > 0 ? '…' : '') + html + (end < r.text.length ? '…' : '');
  }

  // link that scrolls to the first match on the page, in browsers that support text fragments
  function link(r, q) {
    var w = words(q)[0], at = w ? r.lowText.indexOf(w) : -1;
    if (at === -1) return r.url;
    return r.url + '#:~:text=' + encodeURIComponent(r.text.substr(at, w.length));
  }

  window.SiteSearch = { load: load, search: search, snippet: snippet, link: link, escapeHtml: escapeHtml, byUrl: function (u) {
    if (!index) return null;
    for (var i = 0; i < index.length; i++) if (index[i].url === u) return index[i];
    return null;
  } };

  // the sidebar box (pages without the All posts filters)
  var input = document.getElementById('rail-search-input'), list = document.getElementById('rail-search-results');
  if (!input || !list) return;
  var json = input.getAttribute('data-json');
  function render() {
    var q = input.value.trim();
    if (!q) { list.innerHTML = ''; return; }
    load(json).then(function () {
      if (input.value.trim() !== q) return;
      var rs = search(q, 12);
      if (!rs.length) { list.innerHTML = '<li class="rail-search-empty">Nothing found</li>'; return; }
      list.innerHTML = rs.map(function (r) {
        var meta = r.genre === 'page' ? 'page' : [r.genre, r.date.slice(0, 4)].filter(Boolean).join(' · ');
        var snip = snippet(r, q, 30, 80);
        return '<li><a href="' + escapeHtml(link(r, q)) + '">' + escapeHtml(r.title) + '</a><span>' + escapeHtml(meta) + '</span>' +
          (snip ? '<span class="rail-snip">' + snip + '</span>' : '') + '</li>';
      }).join('');
    });
  }
  var t; input.addEventListener('input', function () { clearTimeout(t); t = setTimeout(render, 120); });
  input.addEventListener('focus', function () { load(json); }, { once: true });
})();
