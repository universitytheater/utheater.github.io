---
layout: page
permalink: /fall-auditions-preview
shows:
  - title: The Intruder
    signup_link: https://docs.google.com/document/d/13YkasKCeouvZI_ZvY3THeOFCmTSlAiKdwDuyml3kwjU/edit?usp=sharing
    sides_link: https://drive.google.com/drive/folders/1oA36J7-IqKqSenL5MB2kmbTfs-Jau7Ns?usp=sharing
    audition_room: Cobb 409
    sm_name: Amelia Simonoff
    sm_email: mailto:asimonoff@uchicago.edu
    other_links:
      - Audition Info & Character Breakdown: https://docs.google.com/document/d/16WnOo4g3H-UtAovNUfJnukbieB0sVwFir7Yc4qaYzQs/edit?usp=sharing
  - title: Perfect Match
    signup_link: https://docs.google.com/document/d/1MWOVV0sVTSCRFFpy_Rr9UXaOKIl_I6tLFVJTQ7UZavQ/edit?usp=sharing
    sides_link: https://docs.google.com/document/d/1K06YvkO8JdLM1KtXIGiK_GIJ4ArLMBlgtlz5Gl8sktc/edit?usp=sharing
    audition_room: Cobb 430
    sm_name: Danielle Yablonovskiy
    sm_email: mailto:dyab2602@uchicago.edu
    other_links:
      - Character Breakdown: https://docs.google.com/document/d/1vhHPt1reldatN0LVWL7bBPtwWaXid-DguaqVTCqTlVI/edit?usp=sharing
      - Rehearsal Calendar: https://docs.google.com/document/d/1NkdYVRRqVWmGyRAHcuVgTSuENTxvXf5B4BGVDzTuYUw/edit?usp=sharing
  - title: Romeo & Juliet
    signup_link: https://docs.google.com/document/d/16WrV0bUFuXXwuhDCsPHr-0Y-DxIFg-iXtIWJAdBP6aM/edit?usp=sharing
    sides_link: https://drive.google.com/drive/folders/1PWVwn3-jcT34ym5UyB24lwMSiz2siE4X?usp=sharing
    audition_room: Cobb 402
    sm_name: Ryan Cairns & Nathalie Lam
    sm_email: mailto:clcairns@uchicago.edu,lamn@uchicago.edu
    other_links:
      - Audition Info: https://docs.google.com/document/d/1aYGTt0cg3pGD9IpY9ObYPbUqJgLaTq-YVpkd4e-0whA/edit?usp=sharing
      - Rehearsal Calendar: https://docs.google.com/document/d/128rhKNbxkTS7orAXKI2wlyNSBQnQXi9N2qSVVyolVB4/edit?usp=sharing
  - title: Marian, Or the True Tale of Robin Hood
    signup_link: https://docs.google.com/document/d/1w1f-pKEoFNS4qWu21yPo55lW6uvr4QbI8ni6j2tEMiE/edit?usp=sharing
    sides_link: https://drive.google.com/drive/folders/1-1sMKo2dmYOFfXy9RJ6LG7XDSEhA9-qD?usp=sharing
    audition_room: Cobb 403
    sm_name: Maya Doyle
    sm_email: mailto:mayacdoyle@uchicago.edu 
    other_links:
      - Audition Info: https://drive.google.com/file/d/1Oq-qSyCTDfCvAxPn6B3D_72hvHbyZpn9/view?usp=sharing
---

**UT will be having auditions for the following shows in Fall 2022**:

* A Weekend of Workshops: *The Intruder* by Maurice Maeterlinck & *Perfect Match*, an original musical by Allegra Hatem - 4th Week (10/21-10/22), FXK Theater
* *Romeo and Juliet* by William Shakespeare - 7th Week (11/10-11/12), FXK Theater
* *Marian, Or the True Tale of Robin Hood* by Adam Szymkowicz - 8th Week (11/17-11/19), Theater East

We'll also be hosting [**Theater[24]**](/theater24), a 24-hour play festival filled with new scripts written, acted, and directed by students Friday through Saturday evening of 1st Week (9/30-10/1) - no experience required!

**To audition for Fall 2022 shows, follow these steps!**

1. **Fill out the [general UT audition form](https://bit.ly/UTFall2022Auditions)**. Auditions will be held on Tuesday, September 27 and Wednesday, September 28 on the 4th floor of Cobb Hall at 7-10pm.
2. **Sign up for a time slot** for each show you'll be auditioning for below.
3. **Choose an [audition side](https://drive.google.com/drive/folders/1SdDHoFH_5koD6zKhc3LsPQg1Y6JEUZcT?usp=sharing)**, then enter the audition room in Cobb during your time slot. Please note that you are not expected to memorize your side.
4. **Callback auditions will be announced via email late Wednesday evening!** If you are called back, congrats! Please go to the callback room during your assigned time(s). Callbacks will take place Thursday, September 29 in Cobb at 7-10pm. Note that callbacks may not take place for workshops.
5. **Cast lists will be announced via email on Friday!** If you are given a casting offer, you have until the end of Friday, September 30 to accept or decline. Note that auditionees will be extended at most *one* casting offer for a UT mainstage or workshop each quarter.

**Do you have questions about auditioning for a particular show?** Feel free to contact their stage management team!

{:class="table table-striped table-bordered"}
| Show | Audition Signup | Audition Sides | Audition Room | Stage Management Contact | Other Info
|----|----|----|----|----|
{% for show in page.shows %}
| *{{show.title}}* | [Signup Link]({{show.signup_link}}) | [Sides Link]({{show.sides_link}}) | {{show.audition_room}} | [{{show.sm_name}}]({{show.sm_email}}) | {% for link in show.other_links %} [{{link[0]}}]({{link[1]}}) <br> {% endfor %}
{% endfor %}