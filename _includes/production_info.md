{% assign page = site.data.show-refs.2025.spring.producing-list%}
{% assign shows = site.shows %}

{% for quarter in page.quarters %}

**UT will be producing the following shows in {{quarter.quarter | capitalize}} {{quarter.year}}**:

{% for target_show in quarter.shows -%}
{% for show in shows %} {% if show.url == target_show.url %}
  * *[{{show.title}}]({{ show.url }})* {% if show.author %} by {{show.author}} {% endif %}\| {{show.quarter | capitalize}}, Week {{show.week}} \| {{show.location}} {% break %} {% endif %} {% endfor %} {% endfor -%}

{% endfor %}

---

**Would you like to get involved as a manager or designer?** Feel free to contact the following:

{% for quarter in page.quarters -%}
{% for target_show in quarter.shows -%}
{% for show in shows -%}
{% if show.url == target_show.url %}
  * *{{show.title}}*: {% for contact in show.production_contact %}  [{{contact.name}}](mailto:{{contact.email}}) ({{contact.role}}){% unless forloop.last %},{% endunless %} {% endfor %} {% break %} {% endif %} {% endfor -%} {% endfor -%} {% endfor -%}