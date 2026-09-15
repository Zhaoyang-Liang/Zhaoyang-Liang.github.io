---
permalink: /en/competitions/
title: "Zhaoyang Liang"
author_profile: true
description: "Selected competitions and awards of Zhaoyang Liang"
lang: en
lang_switch: /competitions/
---

## Selected Competitions

{% assign featured_competitions = site.data.competitions | where: "display", "featured" %}
<div class="competition-list">
{% for competition in featured_competitions %}
  {% include showcase-entry.html entry=competition %}
{% endfor %}
</div>

## Other Awards

{% assign other_competitions = site.data.competitions | where: "display", "other" %}
{% include other-awards.html entries=other_competitions %}
