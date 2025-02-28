---
layout: page
title: UT Committee 2023-24 Elections
permalink: /elections/2023
---

Read the statements from the following 2023-2024 UT Committee candidates here! Elections will be held at 4:15pm on Monday, February 13 (location TBD)

<ul>
{% for candidate in site.data.candidates_2023%}
<li><a href="#{{candidate.name | slugify}}"> {{candidate.name}}</a></li>
{% endfor %}
</ul>

{% for candidate in site.data.candidates_2023%}
<a name="{{candidate.name | slugify}}"></a>
#### [{{ candidate.name }}](mailto:{{candidate.email}}) {% if candidate.pronouns %} ({{candidate.pronouns | downcase }}) {% endif %}
{{candidate.statement}}
{% endfor %}
