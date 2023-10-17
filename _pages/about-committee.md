---
layout: page
title: About UT Committee
permalink: /about/committee
committee_members:
  - name: Danielle Yablonovskiy
    email: dyab2602@uchicago.edu
    position: Chair
    bio: "is a fourth-year majoring in Economics and Psychology. Her previous UT credits include *Welcome Back to My Channel* (Assistant Stage Manager) and *Ah Wing and the Automaton Eagle* (Stage Manager). She is very excited to spend this year working with all the wonderful people in UT to put on some great productions!"
  - name: Coco Liu
    email: cocoliu@uchicago.edu
    position: Treasurer
    bio: "is a third-year Chemistry and Linguistics major whose previous UT credits include *Macbeth in Space* (Production Manager), *Romeo and Juliet* (Production Manager), and *The Light* (Stage Manager). She delights in spreading chaos and lovingly bullying her friends, one of whom is writing this bio for her, as she is lazy."
  - name: Kelly Mao
    email: kellymao@uchicago.edu
    position: Secretary
    bio: "is a third-year Computer Science and Math major whose UT credits include *Macbeth in Space* (Sound Designer), *King Lear* (Co-Stage Manager), and *The Heirs* (Production Manager). She enjoys deep conversations and long walks on the beach at sunset."
  - name: Natalie Floreancig
    email: nfloreancig23@uchicago.edu
    position: Social Chair
  - name: Eleni Lefakis
    email: elenilefakis@uchicago.edu
    position: Outreach Chair
    bio: "is a third-year TAPS and Data Science double-major in her second term on Committee. Her UT MainStage credits are *The Heirs* (Stage Manager),*The Trail to Oregon!* (Assistant Director/Dramaturg), *Romeo & Juliet* (Co-Production Manager), *Marian, or the True Tale of Robin Hood* (Assistant Director/Dramaturg), *MacBeth in Space* (Dramaturg), *The Laramie Project* (SM Collective™), *Be More Chil* (Co-Director), and *Twelfth Night* (Pre-Production Manager). Her upcoming UT projects are *The Taming of the Shrew* (Stage Manager), *Falsettos* (Dramaturg), and *Strings Attached* (Co-Director/Choreographer). She wishes all her fellow committee members a very lovely term!"
  - name: Nathalie Lam
    email: lamn@uchicago.edu
    position: Dean's Men Representative
  - name: Ryan Cairns
    email: clcairns@uchicago.edu
    position: Student Staff Representative
    bio: "is a third-year prospective Public Policy and TAPS double major. Her only UT credit thus far is as Assistant Director for *Love's Labour’s Lost*, but she is hoping to be further involved in the future. She is very excited to be working with Committee this year."
  - name: Lena Maghraoui
    email:  lmaghraoui@uchicago.edu
    position: Tech Staff Representative
  - name: London Mahaley
    email: lmahaley@uchicago.edu
    position: Off-Off Representative
  - name: Maya Carlos Doyle
    email: mayacdoyle@uchicago.edu
    bio: "is a third-year English and Linguistics major. Her UT credits include *Twelfth Night* (SM), *Macbeth in Space* (APM), *Marian, or the True Tale of Robin Hood* (SM), and she served as the curator for T[24]’s 2022–2023 season. When not looking at spreadsheets and schedules, she can be found peacefully napping or procrastinating on tomorrow’s assigned reading by doing last week’s optional reading."
  - name: Emma Linderman
    email: linderman@uchicago.edu
  - name: Abby Kanes
    email: akanes@uchicago.edu
    bio: "is a third-year TAPS and Business Economics major. In UT she performed in a workshop of _The Heirs_ (Aveline) and the TAPS show _Amazons and Their Men_ (The Frau). Spring 2022 she played bass in the pit orchestra for _The Trail to Oregon!_ and designed props for _Scientific Method_. She is excited for her year in UT Committee!"
  - name: Rory McGann
    email: rmcgann@uchicago.edu
    bio: "is a third-year Molecular Engineering major and English & Creative Writing minor. His UT credits to date include *King Lear* (Understudy), *Romeo and Juliet* (Juliet), and *Be More Chill* (Rich Goranski, Fight Captain). He enjoys the idea of free time. He is very excited to serve on UT Committee this year!"
  - name: Belle Nahoom
    email: bellegn@uchicago.edu


---

UT Committee is the governing body and public face of University Theater. As elected representatives, Committee is responsible for fostering, approving, scheduling and supporting student productions. They relate the needs and concerns of the UT community to TAPS Pro Staff and the Center for Leadership and Involvement, ensuring the stability and continuity of theater and performance on campus. Committee members write and propose new bylaws, striving to accurately reflect the current needs of the community as well as their vision for how UT might change and grow. Often, this work is done in subcommittees dedicated to specific initiatives. Join the UT Discord to learn more about subcommittees and join one if you have a strong interest in working with Committee on an initiative!

Committee is made up of ten elected members, as well as one representative from Off-Off Campus, Tech Staff, Student Staff, and the Dean's Men. They meet every Monday in Logan 603 at 5pm! Each meeting begins with a Public Portion, where members of the community are encouraged to participate, say hi, and share their thoughts. Make sure to stop by! 

**Want to run for Committee?** Elections are every year, 6th week of Winter Quarter!

**How do you contact Committee?** Reach all of us at [ut-committee@uchicago.edu](mailto:ut-committee@uchicago.edu), or click on the names below to email members individually. Committee also hosts casual office hours during the school year so we can be in touch with the community!

{% for person in page.committee_members %}
  - **[{{ person.name }}](mailto:{{ person.email }})** {% if person.position != nil or person.position != '' %}
  ({{ person.position }})
  {% endif %} {% if person.bio %}{{ person.bio }}{% else %}is a student in the College.{% endif %}
{% endfor %}

