{% for person in site.data.committee_members %}
  - **[{{ person[0] }}](mailto:{{ person[1].email }})** {% if person[1].position != nil %}
  ({{ person[1].position }})
  {% endif %} {% if person[1].bio %}{{ person[1].bio }}{% else %}is a student in the College.{% endif %}
{% endfor %}
