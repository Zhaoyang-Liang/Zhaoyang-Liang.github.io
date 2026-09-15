---
permalink: /engineering/
title: "Zhaoyang Liang"
author_profile: true
lang: zh
lang_switch: /en/engineering/
---

## 实习经历

{% assign internships = site.data.engineering | where: "type", "internship" %}
<div class="competition-list engineering-list">
{% for experience in internships %}
  {% include showcase-entry.html entry=experience %}
{% endfor %}
</div>

## 工程经验

{% assign projects = site.data.engineering | where: "type", "project" %}
<div class="competition-list engineering-list">
{% for experience in projects %}
  {% include showcase-entry.html entry=experience %}
{% endfor %}
</div>

{% comment %}
工程与实习文字和图片路径统一维护在 _data/engineering.yml。
将图片放入 images/engineering/ 后，在相应条目的 image 字段中填写站点路径。
{% endcomment %}
