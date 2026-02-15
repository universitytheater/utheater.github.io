---
layout: page
title: UT Committee 2026-27 Elections
permalink: /elections
---


Read the statements from the following 2026-2027 UT Committee candidates here! Elections will be held at 2:30pm on Friday, February 20th (Logan 603)

{% assign ref_file = site.data.candidate-statements.candidates_2026%}

<ul>
{% for candidate in ref_file%}
<li><a href="#{{candidate.name | slugify}}"> {{candidate.name}}</a></li>
{% endfor %}
</ul>

---

{% for candidate in ref_file%}
<a class="anchor" id="{{candidate.name | slugify}}"></a>
#### [{{ candidate.name }}](mailto:{{candidate.email}}) {% if candidate.pronouns %} ({{candidate.pronouns | downcase }}) {% endif %}
{{candidate.statement}}
{% endfor %}

---

Candidate statements from previous elections can be found [here](/archive/elections).