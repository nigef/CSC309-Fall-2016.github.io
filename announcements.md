---
layout: default
title: Announcements
permalink: /announcements/
---

<ul class="posts">
  {% for post in site.posts %}
  <li class="post">
    <header class="post__header">
      <h2><a href="{{ post.url }}">{{ post.title }}</a></h2>
      <p class="post__header__meta">
        {{ post.date | date: '%b %-d, %Y' }}
        {% if post.author %} • {{ post.author }}{% endif %}{% if post.meta %} • {{ post.meta }}{% endif %}
      </p>
    </header>

    {{post.content}}
  </li>
  {% endfor %}
</ul>
