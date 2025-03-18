{% for person in site.data.committee-bios.bios_2025 %}
  - **[{{ person.Name }}](mailto:{{ person.Email }})** {% if person.Position != "" %}
  ({{ person.Position }})
  {% endif %} {% if person.Bio != ""%}{{ person.Bio }}{% else %}is a student in the College.{% endif %}
{% endfor %}
