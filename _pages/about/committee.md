---
layout: page
title: About UT Committee
permalink: /about/committee
---

UT Committee is the governing body and public face of University Theater. As elected representatives, Committee is responsible for fostering, approving, scheduling and supporting student productions. They relate the needs and concerns of the UT community to TAPS Pro Staff and the Center for Leadership and Involvement, ensuring the stability and continuity of theater and performance on campus. Committee members write and propose new bylaws, striving to accurately reflect the current needs of the community as well as their vision for how UT might change and grow. Often, this work is done in subcommittees dedicated to specific initiatives. Reach out to Committee to learn more about subcommittees and join one if you have a strong interest in working with Committee on an initiative!

Committee is made up of ten elected members, as well as one representative from Off-Off Campus, Tech Staff, Student Staff, and the Dean's Men. They meet every Monday in Logan 802 at 5pm! Each meeting begins with a Public Portion, where members of the community are encouraged to participate, say hi, and share their thoughts. Make sure to stop by! 

**Want to run for Committee?** Elections are every year, 6th week of Winter Quarter!

**How do you contact Committee?** Reach all of us at [ut-committee@uchicago.edu](mailto:ut-committee@uchicago.edu), or click on the names below to email members individually. 

---

{% for person in site.data.committee-bios.bios_2025 %}
  - **[{{ person.name }}](mailto:{{ person.email }})** {% if person.position != "" %}
  ({{ person.position }})
  {% endif %} {% if person.bio != ""%}{{ person.bio }}{% else %}is a student in the College.{% endif %}
{% endfor %}

---

The committee members archive can be found [here](/archive/committee-members).