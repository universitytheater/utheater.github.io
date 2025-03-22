---
layout: default
title: University Theater
permalink: /
---

<div markdown=1 class="alert alert-info">
{% include home_info.md %}
</div>

<div id="show-gallery" class="carousel slide" data-ride="carousel" style="height: 50%; padding-bottom: 1em;">
	<div class="carousel-inner" style="min-width: 100%; width: 100%; height: 100%">
	  {% assign first_image = true %}
	  {% for image in site.data.home_gallery %}
	    <div class="carousel-item 
	    {% if first_image %}
	    	active
	    	{% assign first_image = false %}
	    {% endif %} text-center" style="width: 100%">
	      {% if image.url %}<a href="{{image.url}}">{% endif %}
	      <img src="{{image.source}}" class="center-block" style="max-width: 90%; max-height: 30rem;" alt="...">
	      {% if image.url %}</a>{% endif %}
	    </div>
	  {% endfor %}
	</div>
	<a class="carousel-control-prev" href="#show-gallery" role="button" data-slide="prev">
	  <span class="carousel-control-prev-icon" aria-hidden="true"></span>
	  <span class="sr-only">Previous</span>
	</a>
	<a class="carousel-control-next" href="#show-gallery" role="button" data-slide="next">
	  <span class="carousel-control-next-icon" aria-hidden="true"></span>
	  <span class="sr-only">Next</span>
	</a>
</div>

# Welcome to UT!

{% include about-ut.md %}
