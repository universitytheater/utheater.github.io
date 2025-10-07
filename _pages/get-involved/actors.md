---
layout: page
title: "Get Involved: Actors"
permalink: /get-involved/actors
---

{% assign ref_page = site.data.show-refs.auditions-list%}
{% assign shows = site.shows %}

Welcome to University Theater! We're delighted you're thinking of auditioning for a UT production. Here's some info on auditions and what to expect from them!

Our auditions are not meant to be stressful or intimidating, and all casting teams are rooting for you to do your best. The most important thing is to have fun!

---

{% if ref_page.manual_date_msg %}
{{ ref_page.manual_date_msg }}
{% else %}
    {% assign day_1 = ref_page.date %}
    {% assign day_2 = ref_page.date | date: "%s" | plus: 86400 %}
    {% assign day_callbacks = ref_page.date | date: "%s" | plus: 172800 %}

    {% capture date_range %} 
        {% assign month_1 = day_1 | date: "%m" %}
        {% assign month_2 = day_2 | date: "%m" %}
        {% if month_1 == month_2 %}
            {{ day_1 | date: "%b %-d" }}-{{ day_2 | date: "%-d" }}
        {% else %}
            {{ day_1 | date: "%b %-d" }}-{{ day_2 | date: "%b %-d" }}
        {% endif %}
    {% endcapture %} 

Auditions will be held on {{ day_1 | date: "%A" }} & {{ day_2 | date: "%A" }} of first week ({{ date_range | normalize_whitespace }}) from 7-10pm on the fourth floor of Cobb Hall. <br> 
Callbacks will take place on {{ day_callbacks | date: "%A" }} ({{day_callbacks | date: "%b %-d"}}) from 7-10pm.

{% endif %}


**To audition, follow these steps!**

1. **Fill out the general UT [audition form]({{ref_page.form_link}}).**
2. **Sign up for a time slot** to audition. If you are unable to make it to a live audition (e.g. due to travel), please contact the stage management for each show (listed below) for alternate audition options.
3. **Choose an audition side.** Please note that you are not expected to memorize your side.
4. **Come to your audition!** Please try to arrive a few minutes early so we can make sure you're all set up.
5. **Callback auditions will be announced via email late after the last audition slot has taken place.** If you are called back, congrats! Please go to the callback room during your assigned time(s). Note that Short Plays do not hold callback auditions.

---

**UT will be holding auditions for the following shows in {{ref_page.quarter}} {{ref_page.year}}:**

<div style="overflow-x:auto;">
<table class="table table-striped table-bordered">
    <thead>
        <tr>
        <th> Show </th>
        <th> Week </th>
        <th> Audition Signup </th>
        <th> Audition Sides </th>
        <th> Audition Contact </th>
        <th> Other Info </th>
        </tr>
    </thead>
    <tbody>
        {% for target_show in ref_page.shows %} 
        {% for show in shows %} 
        {% if show.url == target_show.url -%}
        {% if show.workshops %}
            {% for workshop in show.workshops %}
                <tr>
                    <td> <em> <strong> <a href="{{ show.url }}"> {{ workshop.title }} </a> </strong> </em> 
                        {% if workshop.author %} <br> by {{ workshop.author}} {% endif %} </td>
                    <td> {{ show.week }} ({{ show.quarter | capitalize }}) </td>
                    <td> {% if workshop.signup_link and workshop.signup_link != nil %} <a href="{{ workshop.signup_link }}"> Signup Link </a> {% endif %} </td>
                    <td> {% if workshop.sides_link and workshop.sides_link != nil %} <a href="{{ workshop.sides_link }}"> Sides Link </a> {% endif %} </td>
                    <td> {% for contact in workshop.audition_contact %}
                        <a href="mailto:{{ contact.email }}"> {{ contact.name }} </a> 
                        {% if contact.role and contact.role != nil %} ({{ contact.role }}) {% endif %}
                        <br> {% endfor %} </td>
                    <td> {% for link in workshop.other_links %}
                        <a href="{{ link[1] }}"> {{ link[0] }} </a> <br> {% endfor %} </td>
                </tr>
            {% endfor %}
        {% else %}
            <tr>
                <td> <em> <strong> <a href="{{ show.url }}"> {{ show.title }} </a> </strong> </em> 
                    {% if show.author %} <br> by {{ show.author}} {% endif %} </td>
                <td> {{ show.week }} ({{ show.quarter | capitalize }}) </td>
                <td> <a href="{{ show.signup_link }}"> Signup Link </a> </td>
                <td> <a href="{{ show.sides_link }}"> Sides Link </a> </td>
                <td> {% for contact in show.audition_contact %}
                    <a href="mailto:{{ contact.email }}"> {{ contact.name }} </a> 
                    {% if contact.role and contact.role != nil %} ({{ contact.role }}) {% endif %}
                    <br> {% endfor %} </td>
                <td> {% for link in show.other_links %}
                    <a href="{{ link[1] }}"> {{ link[0] }} </a> <br> {% endfor %} </td>
            </tr>
        {% endif %}
        {% break %} 
        {% endif -%} 
        {% endfor %} 
        {% endfor %}
    </tbody>
</table>
</div>

**Do you have questions about auditioning for a particular show?** Feel free to contact their stage management team!

---

**Do you have any additional questions about acting in UT?** Feel free to send them to UT Committee at [ut-committee@lists.uchicago.edu](mailto:ut-committee@lists.uchicago.edu)!


## FAQ


#### When and where are auditions?

General auditions happen Tuesday and Wednesday evening, 7-10pm, of 1st Week of Fall, Winter, and Spring Quarters in Cobb Hall.


#### What should I do to prepare?

See the steps above!

Otherwise, **you can come as you are**! If you would like to prepare more thoroughly, you can find the audition materials for each show posted on the UT website. However, you are **never** expected to memorize any material before an audition with UT. 


#### What should I do when I get to auditions?

If you haven't filled out your audition form ahead of time, you should do that before signing up to audition, either on your own device or one that UT Committee provides. 

Then, each show auditioning will have a separate table when you can go to sign up for a 5-10 minute audition slot. Audition materials you can take will be available at these tables.

When it's your time to audition, you'll be called by the management teams at each table who will let you into the audition room.  


#### Who can I ask for help at auditions?

UT Committee will have a table set up near the front of the hallway where we are happy to answer all your questions! The management teams at each show's table will also be happy to help.


#### What will I be asked to do in the audition room?

This will vary a little from show to show, but usually you will be asked to read a short monologue excerpt from the script. There will be sides posted ahead of the audition on the site, and you simply pick one to read! Note it **does not** have to be memorized.  

If you're auditioning for a musical, you'll probably be asked to sing from a posted side or a song of your choosing, and there may be an exercise to test your vocal range as well.

You will often be given a "redirect" after your initial reading, where the casting team will ask you to read again following a small piece of direction, or you may be asked to read a different side, which you'll be provided. 


#### Are there callbacks? How do I know if I got one?

If you are called back, it means the directing team wants to see more of you! Callbacks are Thursday night in Cobb Hall after general auditions.

Actors who auditioned will get an email with materials and a callback schedule, usually in late Wednesday evening or early Thursday morning after general auditions.

Casting teams may not always send emails to those who did not get a callback, but not getting a callback doesn't mean you aren't being cast! Everyone should check the final cast list, which will be emailed to them on Friday.


#### What can I expect at callbacks?
Callbacks often varies based on the directing team. You could read scenes with other people, do acting/movement exercises, sing or play music, etc. You will be told in your scheduling email what you'll be expected to read and do.


#### How will I know if I'm cast?

Casting decisions will be emailed to auditionees on Friday of 1st Week. Auditionees are expected to check their email and confirm their role with stage management by the end of Friday, so be on the lookout then!

#### Can I be cast in more than one show?

No. All directors of UT Mainstages and Short Plays arbitrate casting in a closed meeting with the Director of Performance Programs to make sure actors only get cast in one show per quarter. Declining a casting offer from a UT Mainstage or Short Play comes with the understanding that an actor will not receive another casting offer for a UT Mainstage or Short Plays that season. For more information, see our [bylaws regarding casting]({{ "/bylaws#VI-c-casting-arbitration" | absolute_url }})