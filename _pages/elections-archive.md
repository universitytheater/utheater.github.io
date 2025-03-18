---
layout: page
title: UT Committee Elections Archive
permalink: /elections-archive
---

{% for election_hash in site.data.candidate-statements reversed %}
  <hr>
  <h2>{{election_hash[0] | replace: "candidates_", ""}}</h2>
  {% assign election = election_hash[1] %}
  <div class="container candidates">
    {% for candidate in election %}
      <h4>{{ candidate.name }} {% if candidate.pronouns %} ({{candidate.pronouns | downcase }}) {% endif %}</h4>
      <p>{{candidate.statement}}</p>
    {% endfor %}
  </div>
{% endfor %}