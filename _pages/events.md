---
layout: default
permalink: events
---

# UT & TAPS Fall 2021 Events

{% for event in site.data.events %}
  <div class="border container p-2 mb-3">
    <div class="row align-items-center">
      <div class="col-6 p-3">
        <h4 class="font-weight-bold mb-0 text-dark">{{event.title}}</h4>
        <p class="mb-1">{{event.description | markdownify | remove: '<p>' | remove: '</p>'}}</p>
      </div>
      <div class="col-3">
        <p class="mb-1"><i class="far fa-calendar"></i> {{event.time | remove: '<p>' | remove: '</p>'}}</p>
        <p class="mb-1"><i class="fas fa-map-marker-alt"></i> {{event.location | markdownify | remove: '<p>' | remove: '</p>'}}</p>
        {% if event.links != "" %}
          <p class="mb-1"><i class="fas fa-link"></i> {{event.links | markdownify | remove: '<p>' | remove: '</p>'}}</p>
        {% endif %}
      </div>
      <div class="col-3 justify-content-center img-responsive">
        <img src="{{event.image}}" width="100%">
      </div>
    </div>
  </div>
{% endfor %}

**We will continue planning events throughout the quarter!** The best way to stay up-to-date on events is to…..

* Join the [UT listhost](https://lists.uchicago.edu/web/info/utheater-general) and [sign up for our newsletter](https://uchicago.us2.list-manage.com/subscribe?u=898aa836fc636cd1b2571ad5b&id=ef0f5470fe)! 
* [Follow us on Facebook](https://facebook.com/universitytheater)!
* Join our Discord through the [UChicago student hub](https://discord.gg/KhEEuRweMd)! 

**Have an idea for an event?** Contact us at [ut-committee@uchicago.edu](mailto:ut-committee@uchicago.edu) or message us [on Facebook](https://facebook.com/universitytheater)! 


**A note on these events**: These convenings are open to all invitees who are compliant with UChicago vaccination requirements and, because of ongoing health risks, particularly to the unvaccinated, participants are expected to adopt the risk mitigation measures (masking and social distancing, etc.) appropriate to their vaccination status as advised by public health officials or to their individual vulnerabilities as advised by a medical professional. Public convenings may not be safe for all and carries a risk for contracting COVID-19, particularly for those unvaccinated. Participants will not know the vaccination status of others and should follow appropriate risk mitigation measures. Click [here](https://leadership.uchicago.edu/registered-student-organizations/winter-quarter-2022-updates/in-person-event-procedures/) for more information about university COVID safety protocols. 
