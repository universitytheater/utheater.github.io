---
layout: page
title: UT Shows
permalink: /shows
---

{% assign seasons = site.shows | group_by: "season" | sort: "name"  | reverse %}
{% for season in seasons %}
<h4 class="text-center mb-0 mt-2">{{ season.name }}</h4>
<div class="container row show-group">
  {% assign shows = season.items | sort: "date" | reverse %}
  {% for show in shows %}
    {% if show.hidden != true %}
      {% capture thumb_pattern %}assets/images/{{show.year}}/{{show.slug}}/thumb{% endcapture %}
      {% assign thumb_path = "" %}
      {% for image in site.static_files %}
        {% if image.path contains thumb_pattern %}
          {% assign thumb_path = image.path %}
          {% break %}
        {% endif %}
        {% if image.path contains "ut-logo-thumbnail"%}
          {% assign thumb_path = image.path%}
        {% endif %}
      {% endfor %}
      
      <div class="col-6 col-sm-6 col-md-4 col-lg-3 show-container">
        <div class="card text-white bg-dark m-3 border-0 h-100">
          <h6 class="m-2 text-center"><strong>{{ show.quarter | capitalize }} {{ show.year }}</strong></h6>
          <a href="{{ show.url }}"><img src="{{thumb_path}}" class="show-thumb"/></a>
          <div class="card-body d-flex p-0 align-items-center justify-content-center">
            <a href="{{ show.url }}" class="no-line font-weight-bold card-text m-2 text-center text-white">{{ show.title }}</a>
          </div>
        </div>
      </div>
    {% endif %}
  {% endfor %}
</div>
{% endfor %}

To see more UT shows from the past, refer to [the archive](/archive/shows).