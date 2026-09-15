---
permalink: /competitions/
title: "Zhaoyang Liang"
author_profile: true
lang: zh
lang_switch: /en/competitions/
---

## 代表性竞赛

{% assign featured_competitions = site.data.competitions | where: "display", "featured" %}
<div class="competition-list">
{% for competition in featured_competitions %}
  {% include showcase-entry.html entry=competition %}
{% endfor %}
</div>

## 其余获奖

{% assign other_competitions = site.data.competitions | where: "display", "other" %}
{% include other-awards.html entries=other_competitions %}

{% comment %}
竞赛文字和图片路径统一维护在 _data/competitions.yml。
将图片放入 images/competitions/ 后，在相应条目的 image 字段中填写站点路径。
{% endcomment %}
