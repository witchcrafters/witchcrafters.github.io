---
layout: page
title: Guides
permalink: /guides/
---

<ul>
  {% for guide in site.guides %}
    <li>
      <a href="{{ guide.url }}">{{ guide.title }}</a>
    </li>
  {% endfor %}
</ul>
