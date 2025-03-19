---
layout: page
title: UT Committee Members Archive
permalink: /archive/committee-members
---

{% for year_hash in site.data.committee-bios reversed %}
  <hr>
  <h3>{{year_hash[0] | replace: "bios_", ""}}</h3>
  {% assign year = year_hash[1] %}
  <div class="container candidates">
    {% for member in year %}
      <h5>{{ member.name }}
      {% if member.position != "" %} ({{ member.position }}) {% endif %} </h5>
      <p>{% if member.bio != ""%} {{ member.bio }} {% else %} is a student in the College. {% endif %}</p>
    {% endfor %}
  </div>
{% endfor %}