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
{% capture fall_2021 %}{% include winter-2022.md %}{% endcapture %}
{{ fall_2021 | markdownify }}
</div>

# Welcome to UT!

{% include about-ut.md %}