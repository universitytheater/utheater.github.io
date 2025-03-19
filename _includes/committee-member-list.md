{% for person in site.data.committee-bios.bios_2025 %}
  - **[{{ person.name }}](mailto:{{ person.email }})** {% if person.position != "" %}
  ({{ person.position }})
  {% endif %} {% if person.bio != ""%}{{ person.bio }}{% else %}is a student in the College.{% endif %}
{% endfor %}
