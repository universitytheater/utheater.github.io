{% assign page = site.data.auditions.spring-2025%}

**UT will be producing the following shows in Spring 2025**:

{% for show in page.shows %}
  * *[{{show.title}}]({{show.show_page_link}})* {% if show.author %} by {{show.author}} {% endif %}\| {{show.quarter}}, Week {{show.week}} \| {{show.location}} {% endfor %}

---

**Would you like to get involved as a manager or designer?** Feel free to contact the following:

{% for show in page.shows -%}
* *{{show.title}}*: {% for contact in show.production_contact %}  [{{contact.name}}](mailto:{{contact.email}}) ({{contact.role}}){% unless forloop.last %},{% endunless %} {% endfor %}
{% endfor -%}