{% assign page = site.data.show-refs.2025.spring.auditions-list%}
{% assign shows = site.shows %}

**UT will be having auditions for the following shows in {{page.quarter}} {{page.year}}**:
  
{% for target_show in page.shows %} {% for show in shows %}{% if show.url == target_show.url %}
  * *{% if show.url %}[{{show.title}}]({{ show.url }}){% else %}{{show.title}}{% endif %}* {% if show.author %} by {{show.author}} {% endif %}\| {{show.quarter | capitalize}}, Week {{show.week}} \| {{show.location}} {% break %} {% endif %} {% endfor %} {% endfor %}

---

**To audition for these shows, follow these steps!**

1. **Fill out the general UT [audition form]({{page.form_link}})**. Auditions will be held on Tuesday ({{page.date | date: "%b %d"}}) & Wednesday of first week from 7-10pm on the fourth floor of Cobb Hall.
2. **Sign up for a time slot** to audition. If you are unable to make it to a live audition (e.g. due to travel), please contact the stage management for each show (listed below) for alternate audition options.
3. **Choose an audition side**, then enter the audition room during your time slot. Please note that you are not expected to memorize your side.
4. **Callback auditions will be announced via email late after the last audition slot has taken place** If you are called back, congrats! Please go to the callback room during your assigned time(s). Callbacks will take place on Thursday from 7-10pm. Note that worksops do not hold callback auditions.

**Do you have questions about auditioning for a particular show?** Feel free to contact their stage management team!



{:class="table table-striped table-bordered"}
| Show | Audition Signup | Audition Sides | Stage Management Contact | Other Info |
|----|----|----|----|----|
{% for target_show in page.shows %} {% for show in shows %}{% if show.url == target_show.url -%}
| *{{show.title}}* | [Signup Link]({{show.signup_link}}) | [Sides Link]({{show.sides_link}}) | {% for contact in show.audition_contact %} [{{contact.name}}](mailto:{{contact.email}}) ({{contact.role}}) <br> {% endfor %} | {% for link in show.other_links %} [{{link[0]}}]({{link[1]}}) <br> {% endfor %} | 
{% break %} {% endif -%} {% endfor %} {% endfor %}