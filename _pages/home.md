---
layout: default
title: University Theater
permalink: /
---

<div class="alert alert-primary">
{% capture covid_msg %}{% include covid-msg.md %}{% endcapture %}
{{ covid_msg | markdownify }}
</div>

<div class="alert alert-info">
{% capture fall_2021 %}{% include fall-2021.md %}{% endcapture %}
{{ fall_2021 | markdownify }}
UT Committee will be producing *Circle Mirror Transformation
</div>

# Welcome to UT!

{% include about-ut.md %}