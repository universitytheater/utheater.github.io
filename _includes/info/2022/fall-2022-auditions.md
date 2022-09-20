**UT will be having auditions for the following shows in Fall 2022**:

* A Weekend of Workshops: *The Intruder* by Maurice Maeterlinck & *Perfect Match*, an original musical by Allegra Hatem - 4th Week (10/21-10/22), FXK Theater
* *Romeo and Juliet* by William Shakespeare - 7th Week (11/10-11/12), FXK Theater
* *Marian, or The True Tale of Robin Hood* by Adam Szymkowicz - 8th Week (11/17-11/19), Theater East

We'll also have auditions to join [Off-Off Campus](https://offoffcampus.org), our improv comedy group, at the same time!

For more opportunities to act, sign up for [**Theater[24]**](/theater24), a 24-hour play festival filled with new scripts written, acted, and directed by students taking place the weekend of 1st Week (9/30-10/1) - no experience required!

**To audition for Fall 2022 shows, follow these steps!**

1. **Fill out the [general UT audition form](https://bit.ly/UTFall2022Auditions)**. Auditions will be held on Tuesday, September 27 and Wednesday, September 28 on the 4th floor of Cobb Hall at 7-10pm.
2. **Sign up for a time slot** for each show you'll be auditioning for below.
3. **Choose an [audition side](https://drive.google.com/drive/folders/1SdDHoFH_5koD6zKhc3LsPQg1Y6JEUZcT?usp=sharing)**, then enter the audition room in Cobb during your time slot. Please note that you are not expected to memorize your side.
4. **Callback auditions will be announced via email late Wednesday evening!** If you are called back, congrats! Please go to the callback room during your assigned time(s). Callbacks will take place Thursday, September 29 in Cobb at 7-10pm. Note that callbacks may not take place for workshops.
5. **Cast lists will be announced via email on Friday!** If you are given a casting offer, you have until the end of Friday, September 30 to accept or decline. Note that auditionees will be given at most *one* casting offer across all UT mainstages and workshops each quarter.

**Do you have questions about auditioning for a particular show?** Feel free to contact their stage management team!

{:class="table table-striped table-bordered"}
| Show | Audition Signup | Audition Sides | Audition Room | Stage Management | Other Info |
|----|----|----|----|----|----|
{% for show in site.data.auditions.fall-2022.shows -%}
| *{{show.title}}* | [Signup Link]({{show.signup_link}}) | [Sides Link]({{show.sides_link}}) | {{show.audition_room}} | [{{show.sm_name}}]({{show.sm_email}}) | {% for link in show.other_links %} [{{link[0]}}]({{link[1]}}) <br> {% endfor %} |
{% endfor -%}