---
layout: default
title: University Theater
permalink: /
no_container: True
image_file: 'home_gallery'


icon_list:
  - group_1:
    subtitle: 'Welcome to UT!'
    icon_list:

    - text: 'Shows & Tickets'
      url: 'shows/'

    - text: 'Events'
      url: 'events/'

    - text: 'Get Involved'
      url: 'get-involved/'

    - text: 'Learn More'
      url: 'about/ut/'

    - text: 'Mailing Lists'
      url: 'listhost/'

    - text: 'Locations & Access'
      url: 'locations/'

    - text: 'Theater<wbr>[24]'
      url: 'theater24/'

    - text: "The Dean's Men"
      url: 'https://www.facebook.com/thedeansmen/'

    - text: 'Off-Off Campus'
      url: 'https://offoffcampus.org'

---
<!-- YOU SHOULDN'T HAVE TO EDIT ANYTHING DOWN HERE, THOUGH YOU CAN IF YOU WANT TO -->

<!-- This div sits in the background, using a bootstrap carousel to cycle through background images -->
<div id="show-gallery" class="carousel slide carousel-fade" data-ride="carousel" style="position:fixed; z-index: -1; background-color: #000">
	<div class="carousel-inner">
		{% if page.image_file != nil and page.image_file != "" %}
			{% assign image_list = site.data[page.image_file] %}
		{% elsif page.image_list != nil and page.image_list != "" %}
			{% assign image_list = page.image_list %}
		{% else %}
			{% assign image_list = site.data.home_gallery %}
		{% endif %}
		{% for image in image_list %}
			<div class="bg-carousel-item carousel-item {% if forloop.first %} active {% endif %} text-center"
			style="background-image:url('{{ image.source | relative_url }}');" data-interval="7000">
			</div>
		{% endfor %}
	</div>
</div>


<!-- This div fills at least the remaining space of the screen & contains the page content -->
<!-- The height is the space between the header and footer (assuming no text wrap on either of them) minus the margins -->
<div class="container bright-text" style="margin-top:1em; min-height: calc(100vh - 2rem - calc(23px*1.5) - 1rem - 0.625rem - calc(1.5*1.5*1rem) - 1rem)"> 

  <!-- This div produces a grid of links to important pages -->
  <div>
    {% for group in page.icon_list %}
      {% if group.subtitle != nil and group.subtitle != "" %}
        <h1 style="text-align: center; color: #fff"> {{group.subtitle}}</h1>
      {% endif %}
      <div class ="icon-grid">
        {% for icon in group.icon_list %}
          <a role="button" class="grid-icon" href="{{icon.url}}">
            <p class="grid-text">{{icon.text}}</p>
          </a>
        {% endfor %}
      </div>
    {% endfor %}
  </div>
  

  <div>
    <!-- This diplays alerts, as taken from _includes/alert-msg.md. This is intended to be used for things like show cancellations, but use it however seems fitting. -->
    {%- capture alert -%} {%- include alert-msg.md -%} {%- endcapture -%}
    {% if alert != "" or ref_page.quarters or ref_page.quarters != nil %}
    <hr color="#fff" size="2px">
    {% endif %}
    {%- if alert != "" -%}
    <div class="alert alert-info alert-custom">
      <p markdown=1 style="margin-bottom:0.75rem; font-size:1.25rem; ">{{ alert | markdownify | remove: '<p>' | remove: '</p>'}}</p>
    </div>
    {%- endif -%} 
    <!-- This displays the list of shows that UT is presenting, as taken from the _data/show-refs/presenting_list.yml -->
    <p markdown=1 class="bright-text" style="margin-bottom:0; font-size:1.25rem; ">   
      {%- assign ref_page = site.data.show-refs.presenting-list -%}
      {%- assign shows = site.shows -%}

      {%- for quarter in ref_page.quarters -%}
        {%- if forloop.first -%} UT is producing
        {% elsif forloop.last -%} 
          {% if forloop.length == 2 -%} and 
          {% else %}, and
          {% endif -%}
        {% else -%}, 
        {% endif -%}
        
        {% for target_show in quarter.shows -%}
          {% if forloop.first -%}
          {% elsif forloop.last -%}
            {% if forloop.length == 2 -%} and
            {% else -%}, and 
            {% endif -%}
          {% else -%}, 
          {% endif -%}

          {%- for show in shows -%}
          {% if show.url == target_show.url -%}
            {% if show.workshops -%}
              {% for workshop in show.workshops -%}
                ***[{{workshop.title}}]({{workshop.url}})***
              {% endfor -%}
            {% else -%}
              ***[{{show.title}}]({{show.url}})***
            {% endif -%} 
          {% break %} {% endif -%} {% endfor -%}
        {% endfor -%} 

        in **{{quarter.quarter | capitalize}} {{quarter.year}}**
        {%- if forloop.last -%}.
        {%- else -%} &nbsp;
        {%- endif -%}
      {% endfor -%}
    </p>
  </div>

</div>