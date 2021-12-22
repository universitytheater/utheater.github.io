---
layout: page
title: UT & TAPS Shows
permalink: /shows
---


{% for show_year in site.data.shows %}
  <h4 class="text-center mb-0 mt-2">{{ show_year[0] }}</h4>
  <div class="container row show-group">
        {% for show in show_year[1] %}
          <div class="col-6 col-sm-6 col-md-4 col-lg-3 show-container">
            <div class="card text-white bg-dark m-3 border h-100">
              <h6 class="m-2 text-center"><strong>{{ show.quarter }}</strong></h6>
              <a href="{{ page.url }}/{{ show.slug }}"><img src="/assets/show-thumbnails/{{ show.slug }}.jpg" class="show-thumb"/></a>
              <div class="card-body d-flex p-0 align-items-center justify-content-center">
                <a href="shows/{{ show.slug }}" class="font-weight-bold card-text m-2 text-center text-white">{{ show.title }}</a>
              </div>
            </div>
          </div>
        {% endfor %}
  </div>
{% endfor %}