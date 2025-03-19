---
layout: page
title: UT Committee Elections Archive
permalink: /archive/elections
---

{% for election_hash in site.data.candidate-statements reversed %}
  <hr>
  <h3>{{election_hash[0] | replace: "candidates_", ""}}</h3>
  {% assign election = election_hash[1] %}
  <div class="container candidates">
    {% for candidate in election %}
      <h5>{{ candidate.name }} {% if candidate.pronouns %} ({{candidate.pronouns | downcase }}) {% endif %}</h5>
      <p>{{candidate.statement}}</p>
    {% endfor %}
  </div>
{% endfor %}