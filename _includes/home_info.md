{% assign page = site.data.auditions.spring-2025%}

##### **Tickets can be purchased [here](https://uchicago-student-orgs.myshopify.com/collections/university-theatre-ut)!**

##### **Upcoming events can be found [here](/events)!**

UT is producing {% for show in page.shows %} {% unless forloop.last %} ***[{{show.title}}]({{show.show_page_link}})***, {% else %} and ***[{{show.title}}]({{show.show_page_link}})*** {% endunless %} {% endfor %} in {{page.quarter}} {{page.year}}.

**Interested in auditioning for a show?** Click **[here](/get-involved/actors)** for more information about opportunities for actors!

**Interested in joining a show as a designer or manager?** Click **[here](get-involved/designers-managers)** for more info about how to get your name out to show staff and join a team!

**Only interested in receiving information about our show dates, times, and ticketing? Click [here](https://lists.uchicago.edu/web/info/ut-audiences)** to subscribe to our audiences listhost!

