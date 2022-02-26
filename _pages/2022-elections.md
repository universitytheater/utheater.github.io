---
layout: page
title: UT Committee 2022-23 Elections
permalink: /elections/2022
---

Read the statements from the following 2022-2023 UT Committee candidates here! Elections will be held 5pm on Monday, February 28 in Logan 028.

<ul>
{% for candidate in site.data.2022_candidates%}
<li><a href="#{{candidate.name | slugify}}"> {{candidate.name}}</a></li>
{% endfor %}
</ul>

{% for candidate in site.data.2022_candidates%}
<a name="{{candidate.name | slugify}}"></a>
#### [{{ candidate.name }}](mailto:{{candidate.email}}) {% if candidate.pronouns %} ({{candidate.pronouns | downcase }}) {% endif %}
{{candidate.statement}}
{% endfor %}
