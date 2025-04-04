{% assign page = site.data.show-refs.2025.spring.presenting-list %}
{% assign shows = site.shows %}

##### **Tickets can be purchased [here](https://uchicago-student-orgs.myshopify.com/collections/university-theatre-ut)!**

##### **Upcoming events can be found [here](/events)!**

{% for quarter in page.quarters -%}

  {% if forloop.first -%} UT is producing
  {% elsif forloop.last -%} 
    {% if forloop.length == 2 %}&nbsp;and {% else %}, and {% endif %}
  {% else -%}, 
  {% endif -%}

  {% for target_show in quarter.shows -%}
    {% if forloop.first -%}
    {% elsif forloop.last -%}
      {% if forloop.length == 2 -%} &nbsp;and
      {% else -%}, and 
      {% endif -%}
    {% else -%}, 
    {% endif -%}
    
    {% for show in shows -%}{% if show.url == target_show.url -%}
    ***[{{show.title}}]({{show.url}})***{% break %} {% endif -%} {% endfor -%}
  
  {% endfor -%} 
  &nbsp;in **{{quarter.quarter | capitalize}} {{quarter.year}}**{% continue %} <!-- continue for whitespace/clarity -->
  
{% endfor -%}.


**Interested in auditioning for a show?** Click **[here](/get-involved/actors)** for more information about opportunities for actors!

**Interested in joining a show as a designer or manager?** Click **[here](get-involved/designers-managers)** for more info about how to get your name out to show staff and join a team!

**Only interested in receiving information about our show dates, times, and ticketing? Click [here](https://lists.uchicago.edu/web/info/ut-audiences)** to subscribe to our audiences listhost!

