---
layout: page
title: UT Committee 2025-26 Elections
permalink: /elections/2025
---


Read the statements from the following 2025-2026 UT Committee candidates here! Elections will be held at 4:30pm on Friday, February 21 (Logan 603)


<ul>
{% for candidate in site.data.2025_candidates%}
<li><a href="#{{candidate.name | slugify}}"> {{candidate.name}}</a></li>
{% endfor %}
</ul>


{% for candidate in site.data.2025_candidates%}
<a name="{{candidate.name | slugify}}"></a>
#### [{{ candidate.name }}](mailto:{{candidate.email}}) {% if candidate.pronouns %} ({{candidate.pronouns | downcase }}) {% endif %}
{{candidate.statement}}
{% endfor %}

