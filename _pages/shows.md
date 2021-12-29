---
layout: page
title: UT & TAPS Shows
permalink: /shows
---

{% assign seasons = site.shows | group_by: "season" | sort: "name"  | reverse %}
{% for season in seasons %}
<h4 class="text-center mb-0 mt-2">{{ season.name }}</h4>
<div class="container row show-group">
      {% assign shows = season.items | sort: "date" | reverse %}
      {% for show in shows %}
        <div class="col-6 col-sm-6 col-md-4 col-lg-3 show-container">
          <div class="card text-white bg-dark m-3 border-0 h-100">
            <h6 class="m-2 text-center"><strong>{{ show.quarter | capitalize }} {{ show.year }}</strong></h6>
            <a href="{{ show.url }}"><img src="/assets/images/{{show.year}}/{{show.slug}}/thumbnail.jpg" class="show-thumb"/></a>
            <div class="card-body d-flex p-0 align-items-center justify-content-center">
              <a href="{{ show.url }}" class="font-weight-bold card-text m-2 text-center text-white">{{ show.title }}</a>
            </div>
          </div>
        </div>
      {% endfor %}
</div>
{% endfor %}

To see more UT shows from the past, refer to [this list]({{ "shows/archive" | relative_url }}).
