---
layout: page
title: UT Committee Members
permalink: /committee/members
---

{% for person in site.data.committee_members %}
  - **[{{ person[0] }}](mailto:{{ person[1].email }})** {% if person[1].position != nil %}_({{ person[1].position }})_{% endif %} {% if person[1].bio %}{{ person[1].bio }}{% else %}is a student in the college.{% endif %}
{% endfor %}
