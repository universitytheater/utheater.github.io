---
layout: page
title: "Get Involved: Designers & Managers"
permalink: /get-involved/designers-managers
---

{% assign ref_page = site.data.show-refs.producing-list%}
{% assign shows = site.shows %}

Welcome to University Theater! We're delighted you're thinking of becoming a designer or manager for a UT production. 

Ongoing workshops may have lead design positions open and lead designers/managers on mainstages may be open to assistants, though positions often get filled as performances approach. Reach out to the directors and production managers below to get connected!

---

**To join a production, follow these steps:**

1. **Fill out the [UT Production Interest Form]({{ ref_page.interest_form }})** (Embedded below).
2. **Reach out** to the contacts listed below about any shows or positions you are interested in.

**Do you have any additional questions about design or management in UT?** Feel free to send them to UT Committee at [ut-committee@uchicago.edu](mailto:ut-committee@uchicago.edu)!

---

{% for quarter in ref_page.quarters %}

**UT will be producing at least the following shows in {{quarter.quarter | capitalize}} {{quarter.year}}**:

<table class="table table-striped table-bordered">
    <thead>
        <tr>
            <th> Show </th>
            <th> Week </th>
            <th> Location </th>
            <th> Production Contact </th>
        </tr>
    </thead>
    <tbody>
        {% for target_show in quarter.shows %} 
        {% for show in shows %} 
        {% if show.url == target_show.url -%}
            {% if show.workshops %}
                {% for workshop in show.workshops %}
                    <tr>
                        <td> <em> <strong> <a href="{{ show.url }}"> {{ workshop.title }} </a> </strong> </em> 
                        {% if workshop.author %} <br> by {{ workshop.author}} {% endif %} </td>
                        <td> {{ show.week }} </td>
                        <td> {% if show.location %}
                            {% if show.location_link %}
                                <a href="{{ show.location_link }}"> {{ show.location }} </a>
                            {% else %}
                                {{ show.location }} 
                            {% endif %} {% endif %} </td>
                        <td> {% for contact in workshop.production_contact %}
                        <a href="mailto:{{ contact.email }}"> {{ contact.name }} </a> ({{ contact.role }}) <br> {% endfor %} </td>
                    </tr>
                {% endfor %}
            {% else %}
                <tr>
                    <td> <em> <strong> <a href="{{ show.url }}"> {{ show.title }} </a> </strong> </em> 
                        {% if show.author %} <br> by {{ show.author}} {% endif %} </td>
                    <td> {{ show.week }} </td>
                    <td> {% if show.location %}
                        {% if show.location_link %}
                            <a href="{{ show.location_link }}"> {{ show.location }} </a>
                        {% else %}
                            {{ show.location }} 
                        {% endif %} {% endif %} </td>
                    <td> {% for contact in show.production_contact %}
                        <a href="mailto:{{ contact.email }}"> {{ contact.name }} </a> ({{ contact.role }}) <br> {% endfor %} </td>
                </tr>
            {% endif %}
            {% break %} 
        {% endif -%} 
        {% endfor %} 
        {% endfor %}
    </tbody>
</table>

{% endfor %}

---

### Current openings

<iframe src="{{ ref_page.current_openings }}headers=false&chrome=false" style="width:100%" height="700" frameborder="0" marginheight="0" marginwidth="0">Loading…></iframe>

---

### Design & Management Interest Form

Fill out the form below to get your name out to production teams and future proposers! 

<iframe src="{{ ref_page.interest_form }}" style="width:100%" height="800" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>

<a href="{{ ref_page.interest_form }}" target="_blank">Click here</a> to open in a new tab.

Proposers can reach out to committee or committee members if they would like see the list of interested designers and managers 