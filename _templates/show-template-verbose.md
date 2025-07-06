---
# This file is a verbose template for show info pages. Everything in all caps should be replaced with the relevant info about your show. To avoid confusion, please also delete this set of comments when making your page. For specific examples, the show pages for Fall 2025 and Winter 2-26 should follows this format (ish).

# Happy Editing! - Will

# PLEASE DO NOT DELETE THIS FILE
# PLEASE CAREFULLY CONSIDER ANY MODIFICATIONS TO THIS FILE 


layout: show-info
slug: SHORTENED VERSION OF SHOW NAME # (e.g. much-ado, midsummer, etc.) - must be one word (or hyphenated) and lowercase - required
hidden: false # Change this to true to hide this show from the shows list page. The show will still have 


title: SHOW TITLE # required
subheader: SHOW SUBTITLE # optional
author: SHOW AUTHOR # recommended
description: 
  - DESCRIPTION PARAGRAPH 1 # optional
  - DESCRIPTION PARAGRAPH 2+ # optional


year: SHOW YEAR # required
quarter: SHOW QUARTER # required
week: SHOW WEEK # optional
location: THEATER NAME # optional
location_link: LINK TO INFO ABOUT THEATER # e.g. /locations/east - optional
season: SEASON # e.g. 2024-2025 Shows - follow formatting closely - required
date: DATE OF SHOW # e.g. 2025-05-08 - follow formatting closely - required


tickets_link: TICKET LINK # recommended
vimeo_link: VIMEO LINK # optional
is_taps: False # Change this to true if you are adding a TAPS show (BA theses or Pro-Show)


# Notes on roles & bios:
# There are two methods for storing role & bio information. One (my preferred method) is to store them in CSV format. The other is to store them in YAML format. There are things to note for both, so I have included both in this template. If both are given, the csv format will be used. 
# Credits are split into groups, and stored in those groups. These groups may include Cast, Production Staff, Band, etc. Each of these groups gets either its own CSV file or its own section of YAML info. 

# Method 1: CSV
# This is the format that Google Forms & Google Sheets allow you to export as, making life much easier. 
# Make sure that your csv file is in a folder located at _data/show-bios/{{year}}/{{slug}}/   where {{year}} and {{slug}} are the values on this page.
# Make sure that you csv has headers "name", "role", and "bio".
# Put credits in the order that you want them to appear on the site.
roles:
  Cast:
    bio_file: THE FILE NAME FOR CAST INFO # recommended
  Production Staff:
    bio_file: THE FILE NAME FOR CREW INFO # recommended

# Method 2: YAML
# This method requires you to reformat everything into YAML. This can be done with a bunch of carefully planned find and replace commands, but is a pain.
# The benefit is that it allows you to keep everything in one file, tho it tends to take up the majority of the file.
# Make sure that the fields are "role", "name", and "bio".
# Put credits in the order that you want them to appear on the site.
roles:
  Cast:
    - role: ROLE # recommended
      name: NAME # recommended
      bio: BIO # recommended
  Production Staff:
    - role: ROLE # recommended
      name: NAME # recommended
      bio: BIO # recommended


# Since workshops have multiple shows on one page, they need their own information sections. 
# For workshops, everything outside of this section should relate to the entire weekend (this should include credits for liaisons and any other weekend-wide roles)
# All information within workshops section follows the same format as the information outside of it
# Repeat the indented section for each workshop
workshops:
- title: TITLE # strongly recommended
  subheader: SUBTITLE # optional
  author: AUTHOR # recommended
  description: DESCRIPTION # optional
  vimeo_link: VIMEO LINK # optional

  roles: # Choose one of the options and follow the format from above. If using CSV, still use the page slug as the folder location
    Cast: 
      bio_file: BIO FILE # recommended
    Production Staff:
      bio_file: BIO FILE # recommended
  
  audition_contact: 
    - name: NAME # recommended
      email: EMAIL # recommended
      role: ROLE # recommended
  production_contact: 
    - name: NAME # recommended
      email: EMAIL # recommended
      role: ROLE # recommended


signup_link: AUDITION SIGN-UP FORM LINK # recommended
sides_link: AUDITION SIDES LINK # recommended
other_links:
  Audition Info: AUDITION INFO LINK # recommended
  # OTHER: OTHER AUDITION LINK # optional


audition_contact: # This is where you put the person (or people) who should be contacted for audition-related questions (usually SM)
  - name: NAME  # recommended
    email: EMAIL # recommended
    role: ROLE # recommended
production_contact: # This is where you put the person (or people) who should be contacted for production-related questions (usually PM)
  - name: NAME # recommended
    email: EMAIL # recommended
    role: ROLE # recommended


signup_link: AUDITION SIGN-UP FORM LINK # recommended
sides_link: AUDITION SIDES LINK # recommended
other_links:
  Audition Info: AUDITION INFO LINK # recommended
  # OTHER: OTHER AUDITION LINKS # optional
---