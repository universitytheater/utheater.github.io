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
      url: 'shows'

    - text: 'Events'
      url: 'events'

    - text: 'Get Involved'
      url: 'get-involved'

    - text: 'Learn More'
      url: 'about/ut'

    - text: 'Mailing Lists'
      url: 'listhosts'

    - text: 'Locations & Access'
      url: 'locations'

    - text: 'Theater<wbr>[24]'
      url: 'theater24'

    - text: "The Dean's Men"
      url: 'https://www.facebook.com/thedeansmen/'

    - text: 'Off-Off Campus'
      url: 'https://offoffcampus.org'

---
<!-- If you want to edit the content of the home page, there area a couple of sections that are edited in different ways: -->

<!-- The grid of links can be edited by changing the list above. The grid should automatically format to a reasonable shape in response. -->

<!-- The list of shows that UT is presenting can be changed by modifying _data/show-refs/presenting-list.yml. This list contains links to show pages for the shows that you want to have appear on the front page. For Short Play Showcases, simply add the show page for the whole showcase and all relevant shows will be added. -->

<!-- The alert message, where timely information such as elections, show cancellations, etc. are displayed can be edited at _includes/alert-msg.md (if that file is missing, adding it back should do the trick). It is a regular markdown file, and its contents will be diplayed in a box below the link grid. Please try to keep it short as you can, the text is big lol. -->


<!-- YOU SHOULDN'T HAVE TO EDIT ANYTHING DOWN HERE, THOUGH YOU CAN IF YOU WANT TO -->
<!-- Just make sure that you are very careful about whitespace -->

<!-- This div sits in the background, using a bootstrap carousel to cycle through background images -->
<div id="show-gallery" class="carousel slide carousel-fade bg-body" data-ride="carousel" data-interval="10000" style="position:fixed; background-color: #000" >
	<div class="carousel-inner">
		{% if page.image_file != nil and page.image_file != "" %}
			{% assign image_list = site.data[page.image_file] %}
		{% elsif page.image_list != nil and page.image_list != "" %}
			{% assign image_list = page.image_list %}
		{% else %}
			{% assign image_list = site.data.home_gallery %}
		{% endif %}
		{% for image in image_list %}
			<div class="carousel-item {% if forloop.first %} active {% endif %} text-center">
        <img src ="{{ image.source | relative_url }}" class="custom-carousel-item" loading="eager">
        </img>
			</div>
		{% endfor %}
	</div>
</div>


<!-- This div fills at least the remaining space of the screen & contains the page content -->
<!-- The height is the space between the header and footer (assuming no text wrap on either of them) minus the margins -->
<div class="container bright-text" style="z-index:1; margin-top:1em; min-height: calc(100vh - 2rem - calc(23px*1.5) - 1rem - 0.625rem - calc(1.5*1.5*1rem) - 1rem)"> 

  <!-- This div produces a grid of links to important pages -->
  <div>
    {% for group in page.icon_list %}
      {% if group.subtitle != nil and group.subtitle != "" %}
        <h1 style="text-align: center; color: #fff"> {{group.subtitle}}</h1>
      {% endif %}
      <div class ="icon-grid">
        {% for icon in group.icon_list %}
          <a role="button" class="no-line grid-icon" href="{{icon.url}}">
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
    {% endif %}
    {%- if alert != "" -%}
    <div class="alert alert-info alert-custom" style="margin-bottom:2rem">
      <p markdown=1 style="margin-bottom:0.75rem; font-size:1.25rem; ">{{ alert | markdownify | remove: '<p>' | remove: '</p>'}}</p>
    </div>
    {%- endif -%} 


    <!-- This displays the list of shows that UT is presenting, as taken from the _data/show-refs/presenting_list.yml -->
    <p markdown=1 class="bright-text" style="margin-bottom:2rem; font-size:1.25rem; ">   
      {%- assign ref_page = site.data.show-refs.presenting-list -%}
      {%- assign shows = site.shows -%}

      {%- for quarter in ref_page.quarters -%}
        {%- if forloop.first -%} UT is presenting
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
                ***[{{workshop.title}}]({{workshop.url}})***{% endfor -%}
            {% else -%}
              ***[{{show.title}}]({{show.url}})***{% endif -%} 
          {% break %} {% endif -%} {% endfor -%}
        {%- if forloop.last %}&nbsp;{% endif -%}
        {% endfor -%} 

        in **{{quarter.quarter | capitalize}} {{quarter.year}}**
        {%- if forloop.last -%}.
        {%- else -%} &nbsp;
        {%- endif -%}
      {% endfor -%}
    </p>
  </div>
</div>