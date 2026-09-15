---
permalink: /en/engineering/
title: "Zhaoyang Liang"
author_profile: true
description: "Internship and engineering experience of Zhaoyang Liang"
lang: en
lang_switch: /engineering/
---

## Internship Experience

{% assign internships = site.data.engineering | where: "type", "internship" %}
<div class="competition-list engineering-list">
{% for experience in internships %}
  {% include showcase-entry.html entry=experience %}
{% endfor %}
</div>

## Engineering Experience

{% assign projects = site.data.engineering | where: "type", "project" %}
<div class="competition-list engineering-list">
{% for experience in projects %}
  {% include showcase-entry.html entry=experience %}
{% endfor %}
</div>
