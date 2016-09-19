---
layout: default
title: Welcome to CSC309 Fall 2016
---

## Course Description

This course provides an introduction to the technologies used for developing Web applications. We discuss technologies for static and dynamic content generation, including N-tier, MVC architectures, and mobile supported web development. We also cover general web design principles, security, and web performance.

Please read and make sure that you understand the [course syllabus](/syllabus).


## Schedule

| Section | Lectures | Room | Tutorial time | Room |
| ------- | -------- | ---- | ------------- | ---- |
| L0101 | R 1-3 | MP 202 | T 1 | BA 3175/3185/3195 |
| L0201 | WF 3 | SS 2135 | M 3 | BA 3175/3185/3195 |


## Contact information

### Instructor

<div class="contact">
  <img src="/static/img/people/karen.jpg" width="200">
  <dl>
    <dt>Instructor:</dt>
    <dd>Karen Reid</dd>
    <dt>Email:</dt>
    <dd>reid -at- cdf.toronto.edu </dd>
    <dt>Office:</dt>
    <dd>BA 4240</dd>
    <dt>Office hours:</dt>
    <dd>Tues 2-3, Thur 11-12, Fri 1-2</dd>
  </dl>
</div>

### Teaching Assistants

<section class="assistants">
  {% for person in site.data.people.tas %}
    {% if person.link %}
    <a href="{{ person.link }}">
    {% endif %}

    <figure>
      {% if person.photo %}
        <img src="{{ person.photo }}" alt="Photo of {{ person.name }}">
      {% else %}
        <img src="data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs" alt="">
      {% endif %}
      <figcaption>{{ person.name }}</figcaption>
    </figure>

    {% if person.link %}
    </a>
    {% endif %}
  {% endfor %}
</section>
