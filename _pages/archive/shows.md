---
layout: page
title: UT Show Archive
permalink: /archive/shows
---

{% assign seasons = site.shows | group_by: "season" | sort: "name"  | reverse %}
{% for season in seasons %}
{% if season.name != "2012-2013 Shows"%}
  <h4 class="text-center mb-0 mt-2">{{ season.name }}</h4>
  <div class="container row show-group">
    {% assign shows = season.items | sort: "date" | reverse %}
    {% for show in shows %}
      {% if show.hidden != true%}
        <div class="container show">
          <h6><a href="{{ show.url }}">{{ show.title }}</a> | {{ show.quarter | capitalize }} {{ show.year }}</h6>
        </div>
      {% endif %}
    {% endfor %}
  </div>
{% endif %}
{% endfor %}

<h4 class="text-center mb-2 mt-2">2012–2013 Shows</h4>


**Fall 2012**

* Proof by David Auburn, directed by Audrey Francis
* Theater [24]
* A Weekend of Workshops:
  * The University of Laughs by Koki Mitani, translated and directed by Myra Su
  * Scene from Richard III by William Shakespeare, directed by Anna Meredith
  * The Doctor and Ariel in The Tempest by William Shakespeare, directed by Alessio Franko
  * Philip Glass Buys a Loaf of Bread by David Ives, directed by Shuwen Qian

* This is Our Youth by Kenneth Lonergan, directed by Fred Schmidt-Arenales
* The Real Thing by Tom Stoppard, directed by Shelley Horwitz
* Two Gentlemen of Verona by William Shakespeare, directed by Colin Bresnahan
* The Glass Menagerie by Tennessee Williams, directed by Eamon Boylan

**Winter 2013**

* Theater[24]
* A Weekend of Workshops:
  * The Twelve Dancing Princesses, directed by Margeaux Perkins
  * ALICES: Adventures in Wonderland, adapted and directed by James Fleming
  * Lysistrata by Aristophanes, directed by Marisa Chilberg

* [Hotel Nepenthe](/shows/2013/hotel-nepenthe) by John Kuntz, directed by Scarlett Kim
* The Creadeaux Canvas by Keith Bunin, directed by Jesse Roth
* A Weekend of Workshops
  * Scene from Boston Marriage by David Mamet, directed by Julia Santha
  * Monologue from Taming of the Shrew by William Shakespeare, directed by Eamon Boylan
  * Scene from Top Girls by Caryl Churchill, directed by Gabrielle Costa

* Henry VI by William Shakespeare, directed by Graham Albachten
* Principia Circusatica: Scientific Principles Through the World of Circus, written and directed by Will Craft (in collaboration with Le Vorris and Vox circus)

**Spring 2013**

* Theater[24]
* New Work Week(ends)
* reWILDing Genius by Andrew Hobgood and Megan Johns, directed by Evan Linder (in collaboration with <a href="http://thenewcolony.org" target="_blank">The New Colony</a>)
* A Weekend of Workshops:
  * Hello Out There by William Saroyan, directed by Kathleen Cawley
  * First Love by Chuck Mee, directd by Eleanor Clifford

* The Merchant of Venice by William Shakespeare, directed by Anna Meredith
* The Drowsy Chaperone by Lisa Lambert, Greg Morrison, Bob Martin, and Don McKellar; directed by Ava Woychuk-Mlinac


<h4 class="text-center mb-2 mt-2">2011–2012 Shows</h4>


**Fall 2011**

* Sexual Perversity in Chicago, by David Mamet, directed by Audrey Francis
* Theater [24]
* A Weekend of Workshops:
  * Scenes From Twelfth Night, by William Shakespeare, directed by Annie Considine
  * <span>Picnic on a Battlefield, by Fernando Arrabal, </span>directed<span> by Jamie Mermelstein</span>
  * What I Meant Was, by Craig Lucas, directed by Ava Woychuk-Mlinac
  * The Tragic Tale of Melissa McNormous McHiney McWhale, by Walter Wykes, directed by Emmett Rensin

* The Homecoming, by Harold Pinter, directed by William Bishop
* The Violet Hour, by Richard Greenberg, directed by Jesse Roth
* Henry IV, by William Shakespeare, directed by Tom Murphy

**Winter 2012**

* Theater [24]
* A Weekend of Workshops: Premieres
  * The Gribsby Scene from <em>The Importance of Being Earnest</em> by Oscar Wilde, directed by John Lisovsky
  * This is Our [Chicago] Youth, devised piece, directed by Fred Schmidt-Arenales
  * Graceland, devised piece, directed by Zev Hurwich
  * Midnight Snack, written and directed by Myra Su

* A Weekend of Workshops: Chekhov
  * The Bear by Anton Chekhov, directed by Colin Bresnahan
  * The Festivities by Anton Chekhov, directed by Sasha Ayvazov
  * The Proposal by Anton Chekhov, directed by Shelley Horwitz

* True West by Sam Shepard, directed by Amanda Fink
* Twelfth Night by William Shakespeare, directed by Annie Considine
* Reefer Madness by Dan Studney and Kevin Murphy, directed by Claire Stone

**Spring 2012**

* Theater[24]
* New Work Weekend(s)
* An Actor Prepares, adapted by Mickle Maher, directed by Devon de Mayo
* A Weekend of Workshops
  * An Adaptation of Sppon River Anthology by Edgar Lee Master, directed by Michael Reinhard
  * This Property is Condemned by Tennessee Williams, directed by Eamon Boylan
  * 4.48 Psychosis by Sarah Kane, directed by Scarlett Kim
  * The Chinese Restaurant Installation, directed by Nicholas Shatan
  * The Last Five Years by Jason Robert Brown, directed by Ava Woychuk-Mlinac

* Cymbeline by William Shakespeare, directed by Jesse Roth
* The Lion in Winter by James Goldman, directed by Tom Murphy


<h4 class="text-center mb-2 mt-2">2010–2011 Shows</h4>


**Fall 2010**

* Theater [24] - Cloud with Trousers
* <span>A Weekend Of Workshops:</span>
  * <span>​The September Cycle, written and directed by Nora Sorena Casey</span>
  * <span>Victoria Station, by Harold Pinter, directed by Myra Su</span>
  * <span>Listening, by Edward Albee, directed by William Bishop</span>

* <span>Life Is a Dream, by Pedro Calderon de la Barca, translated and adapted by Nilo Cruz, directed by Evan Garrett </span>
* <span>The Rose Tattoo, by Tennessee Williams, directed by KImberly Senior</span>
* <span>Henry V, by William Shakespeare, directed by Amanda Fink</span>

**Winter 2011**

* Theater [24]
* <span>A Weekend Of Workshops:</span>
  * <span>​Adaptation: The Musical, written by Eric Shoemaker, directed by Steffi Carter</span>
  * <span>Paper Plates, devised and directed by Katie Goldberg</span>
  * <span>A Separate Peace, written by Tom Stoppard, directed by John King</span>
  * <span>The Rise and Fall of The Roman Empire, written by Stephen Bittrich, directed by Megan St. John</span>

* <span>​Crime and Punishment written by Fyodor Dostoyevsky, adapted by Marilyn Campbell and Curt Colombus, directed by Jesse Roth</span>
* <span>Red Light Winter written by Adam Rapp, directed by William Bishop</span>
* <span>Hamlet by William Shakespeare, directed by Ellenor Riley-Condit</span>
* <span>Into The Woods by Stephen Sondheim and James Lapine, directed by William Glick</span>

**Spring 2011**

* Theater [24]
* <span>New Work Weekends 2011:</span>
  * <span>​</span>Requiem <span>by Briana Finegan, </span>directed by<span> John King</span>
  * A Sea of Them <span>by Jesse Roth, </span>directed by<span> Andrew Cutler</span>
  * 41 Somethings About a Man <span>by Matt Hartman, </span>directed by<span> Nick Currie</span>
  * a solo clown piece <span>by Fred Schmidt-Arenales, </span>directed by<span> Ethan Dubin</span>
  * Serenity <span>by Philip McGrath</span>
  * Fifteen Children Will Want Postcards <span>by Julia Dratel, </span>directed by<span> Katelyn Muenck</span>
  * Hepcat Hype <span>by Katelyn Muenck, </span>directed by<span> Julia Dratel</span>
  * The Winter Farm <span>by William Glick, </span>directed by<span> Sasha Geffen</span>
  * Innov <span>by Katie Hunter, </span>directed by<span> Jesse Roth</span>
  * Architecture Daily <span>by Hannah Cook, </span>directed by<span> Vaidehi Joshi</span>
  * The Visiting Hours <span>by Briana Estevez, </span>directed by<span> Katelyn Muenck</span>
  * Journal of a Residence on a Georgian Plantation <span>by Nick Currie, </span>directed by<span> MaThew Hartman</span>
  * Defect <span>by Melanie Kassel, </span>directed by<span> Molly Miller</span>
  * Uncommon Chickens <span>by Myra Su, </span>directed by<span> Autumn McConnico</span>
  * Straight to The Moon <span>by Autumn McConnico, </span>directed by<span> Myra Su</span>
  * The Failures <span>by Emmett Rensin, </span>directed by<span> Gabe Benghiat</span>
  * Rapid Cycling <span>by Alicia Graf</span>
  * Devil's Pie <span>by Ethan Dubin, </span>directed by<span> Will Bishop</span>
  * A Counterfitter and an Offensive Flatterer <span>written and performed by James LaRocque</span>
  * a B.A. solo performance<span> written and performed by Ellenor Riley-Condit</span>
  * Class of 76<span> by Graham Rosby, </span>directed by<span> Andrew Cutler</span>

* <span>These Shining Lives by Melanie Marnich, directed by David New</span>
* <span>Break based on a novel by Hannah Moskowitz, adapted and directed by Adam Rosenthal</span>
* <span>Oedipus based on a play by Sophocles, adapted and directed by William Bishop (a TAPS/FOTA submission)</span>
* <span>A Weekend Of Workshops:</span>
  * <span>​Arabian Night, written by David Ives, directed by Autumn McConnico</span>
  * <span>The Misunderstanding, written by Alfred Camus, directed by Julia Dratel</span>
  * <span>This Side of Paradise, written by F. Scott Fitzgerald, directed by Tom Murphy</span>
  * <span>Much Ado About Nothing, by William Shakespeare, directed by Claire Stone</span>
  * <span>Ubu Roi by Alfred Jarry, directed by Ethan Dubin</span>



<h4 class="text-center mb-2 mt-2">2009–2010 Shows</h4>


**Fall 2009**

* Power! Identity! Resistence! :A Weekend Of Workshops
  * <span>Lithuania, by Rubert Brooke, directed by Evan Garrett</span>
  * <span>The Stronger, by August Strindberg, directed by Megan Geigner</span>
  * <span>The Borges Project, based on short stories by J.L. Borges, directed by Ofer Ravid </span>
  * <span>Sez She, by Jane Martin, directed by Beth Walker</span>

* <span>​The Shape of Things, by Neil LaBute, directed by Toby Teiger</span>
* <span>Fefu and Her Friends, by Maria Irene Fornes, directed by William Glick</span>
* <span>The Car Cemetery, by Fernando Arrabal, directed by Anastasia Barron </span>

**Winter 2010**

* Self, Torture, &amp; Anxiety: A Weekend Of Workshops
  * <span>Variations on The Death of Trotsky, by David Ives, directed by John King</span>
  * <span>The Informer, by Bertolt Brecht, directed by Katie Goldberg</span>
  * <span>Kissing Christine, by John Patrick Shanley, directed by Molly FitzMaurice</span>
  * <span>Chushingura, translated by Donald Keene, directed by Ethan Dubin</span>

* <span>​Waiting for Godot by Samuel Beckett, directed by Aileen McGroddy</span>
* <span>Big Love by Charles Mee, directed by Sean Graney</span>

**Spring 2010**

* New Work Week 2010
  * Oedipus <span>by Pierre Corneille, Translator: David Wray, directed by Drew Dir</span>
  * The Tragedy of Ismene... <span>by Zachary Moull, directed by William Glick</span>
  * Things go White When Nighttime Ends <span>by William Glick, directed by Sasha Geffen</span>
  * March Rose <span>by Nick Currie, directed by Toby Tieger</span>
  * Whim <span>by Toby Tieger, directed by Leah Rand</span>
  * Limbs and Lungs <span>by Tamara Silverleaf, directed by Ethan Dubin</span>
  * You are Gorgeous and I’m Coming <span>by Kelsey Glass Johnston, Performer: Kelsey Glass Johnston</span>
  * Great Pants <span>by Megan St. John, directed by Luca Winer</span>
  * Banishment <span>by Yi Chen, directed by Haley Doner</span>
  * What I Learned about Nathan’s Hot Dog Eating Contest... <span>by Jack Mayer, directed by Aaron Horton</span>
  * The Dove Girl <span>by Hannah Cook, directed by Megan St.John</span>
  * Bar Story <span>by Michael Lipkowitz, directed by Hilary Leithauser</span>
  * The Birthday Song <span>by Frank White, directed by Ellenor Riley-Condit</span>
  * Reflections on a Day Spent in Marin County <span>by Will Bishop, directed by Jess Kadish</span>
  * Goulash <span>by Aaron Horton, directed by Will Bishop</span>
  * Elysium is as Far as The Nearest Room <span>by Autumn McConnico, directed by Molly FitzMaurice</span>
  * Evolution <span>by Jesse Roth, directed by Susan Augenbraun</span>
  * How to Build a Bomb <span>by Jacqueline McLaren, directed by Evan Garrett</span>
  * Lounge <span>by Joshua Katz, directed by Aileen McGroddy</span>

* <span>​Sandboxes of Sexual Consequences: A Weekend Of Workshops</span>
  * <span>We Had a Very Good Time, by David Auburn, directed by Susan Augenbraun </span>
  * <span>Lunch, by Steven Berkoff, directed by Jesse Roth </span>
  * <span>Controlling,  by Wayne S. Rawley, directed by North de Pencier </span>
  * <span>Crimson Hotel, by Michael Frayn, directed by Sarah Pickering </span>

* <span>​The Dining Room by A.R. Gurney, directed by Christopher Shea </span>
* <span>The Flu Season by Will Eno, directed by Tamara Silverleaf </span>
* <span>Triolus+Cressida by William Shakespeare, directed by Will Bishop </span>
* <span>Nowhere Town by Hal Duncan, directed by Beth Walker </span>
* <span>Die Hard translated by Jack Mayer, directed by Jack Mayer </span>


<h4 class="text-center mb-2 mt-2">2008–2009 Shows</h4>


**Fall 2008**

* Workshop Week:
  * <span>Liars Club by Neil LaBute, directed by Toby Tieger</span>
  * <span>Aoi No Uye, directed by Graham Fetterman</span>
  * <span>Scenes from Through The Looking Glass adapted and directed by David Jarvis</span>
  * <span>The Lesson by Eugene Ionesco, directed by Tamara Silverleaf</span>

* <span>Sketch Show directed by David Brent</span>
* <span>How I Learned to Drive by Paula Vogel, directed by Kat Lieder</span>
* <span>Prozak and the Platypus by Jill Sobule and Elise Thoron, directed by Evelyn DeHais</span>
* <span>Off-Off Campus Presents: Recess[ion]!</span>

**Winter 2009**

* <span>5th Week Workshops</span>
  * <span>​The Music Cure by George Bernard Shaw</span>, directed<span> by Harrison Adams</span>
  * <span>Reverse Transcription by Tony Kushner</span>, directed<span> by William Glick</span>
  * <span>Christmas at The Ivanov's by Anton Chekov</span>, directed<span> by Anastasia Baron</span>

* <span>​6th Week Workshops</span>
  * <span>​Everyman directed by Evan Garrett</span>
  * <span>The Doctor in Spite of Himself by Moliere, directed by Riley Kreger</span>
  * <span><span id="cke_bm_461S"> </span>Ashes to Ashes by Harold Pinter, directed by Sasha Geffen</span>


* Tartuffe, ​directed by Morgan Warfield-Reich
* Urinetown, by Greg Kotis and Mark Hollman, directed by Jonathan Berry
* Off-Off Campus Presents: Let Freedom Vibrate

**Spring 2009**

* New Work Week
  * In Line at La Club Dance written by Evan Cudworth. directed by Toby Tieger
  * Saving The Queen written by Helen Gregg. directed by Morgan Warfield-Reich
  * Wiki Love, written by Sarah Rosenshine. directed by Otillia Steadman
  * SOLO Performances: Griffin Sharps, Lila Newman, Kit Novotny
  * Saints written by Mitch Salm. directed by Brian LaDuca
  * Eight Close written by Evan Garrett. directed by Ethan Dubin
  * Girl Talk written by North de Pencier. directed by Luca Winer
  * The Virgin, The Sailor, and The Student written and directed by William Bishop.
  * Untitled Dance Piece, choreographed by Yael Vidan
  * A Girl Named Clyde written by Jack Mayer. directed by Morgan Maher
  * Tru West written by Morgan Maher. directed by Jack Mayer
  * Stone Baby: A Musical written by Augie Praley and Tim Splain.
  * Hitwoman written by Bryan Duff and Lila Newman. directed by Augie Praley
  * Overtime written by Sasha Geffen. directed by KaTherine Greenleaf
  * Bernard's Birthday Party, written by Evelyn DeHais. directed by Tamara Silverleaf

* Workshop Week
  * Act Without Words by Samuel Beckett, directed by Tamara Silverleaf
  * Universal Language by David Ives, directed by Nora Casey
  * The Stonewater Rapture By Doug Wright. directed by Nick Currie
  * Finger Food By Nina Shengold. directed by Gabe Benghiat

* Sidecar directed by Sara Smithback and Ilana Tabby
* Eurydice by Sarah Ruhl, directed by Evelyn DeHais
* The Last Ninety Minutes In The Life of Nikola Tesla by Lee August Praley, directed by Pheobe Holtzman


<h4 class="text-center mb-2 mt-2">2007–2008 Shows</h4>


**Fall 2007**
* Picasso at the Lapin Agile by Steve Martin, directed by Paul Bruton
* Workshop Week:
  * The World According to Charles Barley by Augie Praley, directed by Phoebe Holtzman
  * Red Horse Animation by Lee Bruer, directed by MaThew Landback

* Look Back In Anger by John Osborne, directed by Ethan Stanislawski
* Top Girls by Caryl Churchill, directed by Sean Graney
* Off-Off Campus Presents: The 21st Generation's Fall Revue

**Winter 2008**
* Dead City directed by Ben Shepard
* Workshop Week:
  * "Tonight's Specials": Selections from All In The Timing by David Ives, directed by Aileen McGroddy
  * A Percussive Tap Workshop, directed by Kate Welham

* Frozen by Bryony Lavery, directed by Raf Kuhn
* Loot by Joe Orton, directed by Stephen Balady
* Francis X. Kinahan Theater
* Is There Life After High School? by Craig Carnelia and Jeffrey Kindley, directed by Lee August Praley

**Spring 2008**
* New Work Week
  * The Labyrinth of Crete, translated and adapted by Margot Spellman. Dir. Marie Sennyey
  * Hideous Progeny by Emily Deniger. Dir. Evelyn DeHais
  * Lily of The Valley written and directed by William Glick
  * Fish Naming by Jacqueline McLean. Dir. Marie Sennyey
  * The Hours, adapted by Daniel Sefik. Dir. Morgan Warfield-Reich
  * The Art in The Museum, by Christopher Shea. Dir. David Brent
  * Stuck: Growing up by The Wayside, by Toby Tieger. Dir Daniel Sefik
  * Solo Show, written and performed by Victoria Bartley
  * Also-Ran, by David Brent. Dir. Phoebe Holtzman
  * Solo Performances by Augie Praley. Dir by NWW ensemble
  * Metal Mouths, by Tracy Mumford. Dir Toby Tieger
  * The Cowboy, by Liz Platt. Dir Morgan Warfield-Reich
  * After, by Rachel Landau. Dir Toby Tieger
  * Augie Praley Masturbates, by Augie Praley. Dir David Brent
  * Tommy Gun by Nora Sorena Casy. Dir David Jarvis
  * Henry and The Water Demon by Jessica Wright. Dir by Aileen McGroddy

* Workshop Week
  * Drum-N-Gon, conceived and directed by Mathias Jamison-Koenig
  * Phaedra, adapted and directed by Alli Urbanik
  * Pillars of Salt written and directed by Helen Gregg

* Richard adapted and directed by Griffin Sharps
* Workshop Week
  * David Mamet Scenes compiled and directed by Evelyn DeHais
  * The Spotted Man by Walter Wykes, directed by Anastasia Barron
  * The Great Nebula in Orion by Lanford Wilson, directed by Kat Lieder
  * Polaroid Stories by Naomi Iizukia, directed by Liz Platt

* Bat Boy: The Musical, story and book by KeyThe Farley and Brian Flemming, music and lyrics by Laurence O'Keefe, directed by Augie Praley


<h4 class="text-center mb-2 mt-2">2006–2007 Shows</h4>


**Fall 2006**
* Workshop Week:
  * DROP by Brian K. Vaughan
  * The Wonderful Death of Dudley Stone by Ray Bradbury, adapted by Drew Dir*
  * Strindberg: One on One (Pariah and The Stronger), by August Strindberg
  * The Zoo Story by Edward Albee

* Wander Standing by Martyna Majok
* Broken Bride, by Ludo
* Ghostlight, by David Alford
* Venus, by Suzan-Lori Parks
* Woyzeck, by Georg Buchner
* Off-Off Campus Presents: The 20th Generation's Fall Revue

**Winter 2007**
* Agon by Angeline Gragasin
* Workshop Week: YOU'RE GONNA LOVE VERY SMALL IMPORTANT PEOPLE
  * Very Important People, by Christopher Shea
  * It's a Small World, by Roy London
  * Old Friends: The Songs of Stephen Sondheim

* The Lonely, choreographed and conceived by Kate Blomquist
* Workshop Week: LOST AND FOUND
  * The No Way Home, adapted by Griffin Sharps from The songs of Tom Waits
  * A One-Hour Cutting of Antigone, by Jean Anouilh

* but i can only whisper, by Kristiana Colon
* Cathaginians, by Frank McGuinness
* Off-Off Campus Presents: In Case of Emergency Breakdance

**Spring 2007**
* New Work Week
  * Jolie Comme Une Rose, by Anastasia Barron
  * 3 Untitled Songs, by Daniel Sefik
  * Did You Hear? by Brian Karfunkel
  * Allen Silvy, by Jack Mayer
  * Repairmen, by Max Falkowitz
  * Bluenosed, by Jessica Wright
  * Psst ... I Have Something to Tell You, Mi Amor, by Ana Castillo
  * A Hero of Our Time, by Daniel Stearns
  * Academia, by Manoah Finston
  * Untitled BA Project, by Margaret Lebron
  * Winchester House, by Drew Dir
  * 300 Million, by Laura Meisel
  * Roundabout, by Catharine Kollros
  * 365 Plays, by Susan Lori-Parks

* Private Lives, by Noel Coward
* Heads You Lose by Drew Dir, Tera Ellefson, Sarah Fornace, Hannah Kushnick, Jane Lopes and Daniel Roberts
* Workshop WeekWorkshop Week
  * ‘Dentity Crisis, by Christopher Durang
  * The Festivities, by Anton Chekov
  * The Shared Patio, based on The story by Miranda July, adapted by Frank Lin

* Measure for Measure, by William Shakespeare
* Off-Off Campus Presents: The 21ST GENERATION'S DEBUT REVUE


<h4 class="text-center mb-2 mt-2">2005–2006 Shows</h4>


**Fall 2005**

* Workshop Week:
  * The Brute, by Anton Chekhov
  * The Public Eye, by Peter Schaffer
  * True West, by Sam Shephard

* The Matchstick Theory, by Ian Romain*
* Valse, by Ernst Toch, adapted by Angeline Gragasin*
* Stop Kiss, by Diana Son
* The Unseen Day, by Rob Goodwin and Catharine Kollros*
* Off-Off Campus Presents: Welcome to the Pleasuredome

**Winter 2006**

* Sweet Time, by Jessica Wright*
* Poodle with Guitar and Dark Glasses, by Liz Duffy Adams
* Rosencrantz and Guildenstern are Dead, by Tom Stoppard
* Ivona, Princess of Burgundia, by Witold Gombrowicz
* Off-Off Campus Presents: Where The Wild Things At

**Spring 2006**

* City of Angels, book by Larry Gelbart, music by Cy Coleman, lyrics by Dave Zippel
* New Work Week, a festival of student written plays*
* FOTA Collaboration/Workshop Week
* No Exit, by Jean-Paul Sartre
* Valparaiso, by Don DeLillo
* Off-Off Campus Presents: The Giving Up Tree


<h4 class="text-center mb-2 mt-2">2004–2005 Shows</h4>


**Fall 2004**

* Workshop Week
* Danny and The Deep Blue Sea, by John Patrick Shanley
* The Importance of Being Earnest, by Oscar Wilde
* Off-Off Campus Presents: The House That Crack Built

**Winter 2005**

* Workshop Week:
  * A Smokey Morning*
  * Hamletmachine
  * Love Love Love

* Mild Mild West, an Improv show by Off-Off Campus
* Poe, based on works by Edgar Allan Poe, adapted by Caitlin Doughty*
* The Crucible, by Arthur Miller
* Off-Off Campus Presents: The Bipolar Express

**Spring 2005**

* A Doll House (Staged Reading), by Henrik Ibsen, translated by D. Nicholas Rudall
* New Work Week, a festival of student written plays*
* for colored girls who have considered suicide/when The rainbow is enuf, by ntozake shange
* Art, by Yazmina Reza
* FOTA Collaboration/Workshop Week
* Far Away, by Caryl Churchill
* Electra, by Sophocles, translated by D. Nicholas Rudall
* Off-Off Campus Presents: The Umbrella for Beginners


<h4 class="text-center mb-2 mt-2">2003–2004 Shows</h4>


**Fall 2003**

* Fun, by James Bosley
* The Night Thoreau Spent in Jail, by Jerome Lawrence and Robert E Lee
* Henry V, by William Shakespeare
* Cabaret, by John Kander, Fred Ebb, and Joe Masteroff
* Off-Off Campus Presents: Gorilla Warfare

**Winter 2004**

* I Hate Hamlet, by Paul Rudick
* David and Lisa, by James Reach
* Copenhagen, by Michael Frayn
* Suburbia, by Eric Bogosian
* Under Milk Wood, by Dylan Thomas
* Little Shop of Horrors, by Alan Menken and Howard Ashman
* Wintertime, by Charles Mee
* Off-Off Campus Presents: Cirque D'Off-Off

**Spring 2004**

* Mentorship Show: The Meaning of It All
* The 24-Hour Play Project
* Accidental Death of an Anarchist, by Dario Fo, translated by Gillian Hanna, adapted by Gavin Richards
* Crave, By Sarah Kane
* The Man Who Turned into a Stick, by Kobo Abe, translated by Donald Keene
* Gorey Stories, by Stephen Currens, Edward Gorey, and David Aldrich
* The Medium, by Gian Carlo Menotti
* The Rover, By Aphra Behn
* A Collaboration on Two Stages
* Off-Off Campus Presents: Pants, Pants, Revolution!


<h4 class="text-center mb-2 mt-2">2002–2003 Shows</h4>


**Fall 2002**

* Picnic on The Battlefield, by Fernando Arrabal
* The Festivities, by Anton Chekhov
* Tales of The Lost Formicans, by Constance Congdon
* Leocadia, by Jean Anouilh
* Company!, by Stephen Sondheim and George Furth
* Off-Off Campus Presents: A River Ran Through Id
* UT Day

**Winter 2003**

* The Gift, by Tom Lister
* Mark The Date Stand Up Comedy, by Ben Golde
* This is Our Youth, by Kenneth Lonergan
* Jesus Awakens The Little Girl, by Emmett Loverde
* The Lover, by Harold Pinter
* Clunk! Clown Theatre Presents: Incidences, by Danil Kharms
* The Misanthrope, by Moliere, translated by Richard Wilbur
* Movements of The Mind, original dance pieces by UC Dancers
* Side Man, by Warren Leight
* Off-Off Campus Presents: Pastor of Muppets and The New Black
* UT Day

**Spring 2003**

* Mentorship Show: Scene Change: Different Voices, Same Stage
* Dance Studio
* The Philadelphia, by David Ives
* Aria Da Capo, by Edna St. Vincent Millay
* Chopped Pork Shoulder Meat, written and directed by Ziba Scott
* Oedi, by Rich Orloff
* Leaving Phoebe, by Elizabeth Levy
* If You Only Had a Little Discipline, You'd be Fine, by Kay Perdue
* Ghosts, by Henrik Ibsen
* Running in The Family, adapted by Anna Brenner
* The House of Yes, by Wendy MacLeod
* Pippin, by Stephen Schwartz and Rodger Hirson
* Off-Off Campus Presents: Pillow Fight Club
* UT Day


<h4 class="text-center mb-2 mt-2">2001–2002 Shows</h4>


**Fall 2001**

* Smile Laugh Happy Good, original improv comedy
* The Bald Soprano, by Eugene Ionesco
* Miss Julie, by August Strindberg
* Edmond, by David Mammet
* Rover, by Alex Horwitz
* Off-Off Campus Presents: If These Balls Could Talk

**Winter 2002**

* GillKillPruDale, original improv comedy
* Hardy Boys and Woman Stand-Up, by Christopher Durang
* Mature Audiences Only, original performance art
* The Bacchae by Euripides, translated by Frank Blessington
* Off-Off Campus Presents: Five Guys, a Girl, and a Cookie

**Spring 2002**

* Mentorship Show
* Dance Studio 2002
* Purgastories, by Jim Poyser
* General of Hot Desire, by John Guare
* WASP, by Steve Martin
* The Egg, by Bulbul Tiwari
* The Skin of our Teeth, by Thorton Wilder
* Off-Off Campus Presents: Off-Off Campus and The Riddle of The Sphinx


<h4 class="text-center mb-2 mt-2">2000–2001 Shows</h4>


**Fall 2000**


* Rumors, by Neil Simon
* Picasso at The Lapin Agile, by Steve Martin
* The Night of The Iguana, by Tennessee Williams
* Off-Off Campus Presents: Yes and OTher Answers
* Antigone, by Jean Anouileh, translated/adapted by Hannah Kaye *

**Winter 2001**

* Mature Audiences Only, a revue of experimental movement pieces
* The Caucasian Chalk Circle, by Bertolt Brecht
* Off-Off Campus Presents: Destiny Jerk Reaction
* Spiral Bound Theater, an improvised show about Hyde Park
* Play, by Samuel Beckett
* Words Words Words, by David Ives
* Skylight, by David Hare
* Titanic &amp; ‘Dentity Crisis, by Christopher Durang

**Spring 2001**


* Artist Descending a Staircase, by Tom Stoppard
* A Funny Thing Happened on The Way to The Forum, by Stephen Sondheim and Hugh Wheeler
* Off-Off Campus Presents: "Plays of Future Past: Or How I Learned to Stop Worrying and Love The ChronoThespitron"
* Romance of The Rose, music/lyrics/book by Joshua Tyra, adapted from The 15th C French poem
* The Epic of Gilgamesh, adapted by Caitlin Hammel *
* White Wines, by Gertrude Stein
* The Compleat Works of Wllm Shkspr (abridged), by The Reduced Shakespeare Co.
* Dance Studio 2001
* Smile Laugh Happy Good/Foot in Mouth Disease, an improvised show


<h4 class="text-center mb-2 mt-2">1999–2000 Shows</h4>


**Fall 1999**

* Orestes, by Charles Mee
* Endgame, by Samuel Beckett
* Off-Off Campus Presents: Last Things First
* OTher People's Money, by Jerry Sterner
* The Side of Paradise, by F. Scott Fitzgerald, adapted by Nelly Lewis *
* Les Liaisons Dangereuses, by Christopher Hampton

**Winter 2000**

* Hedda Gabler, by Henrik Ibsen
* Love! Valour! Compassion!, by Terrence MacNally
* Off-Off Campus Presents: The Amazing Lipnicki Revolution
* Self Torture and Strenuous Exercise, by Harry Kondoleon
* The Bear, by Anon Chekov
* 12 Angry Men, by Some Guy
* The Cenci, by Antonin Artaud

**Spring 2000**

* Into The Woods, by Stephen Soundheim
* Troilus and Cressida, by William Shakespeare
* Arabian Nights, by Saket Soni *
* Off-Off Campus Presents: Truth Decay
* Yerma, by Federico Garcia Lorca
* The Zoo Story, by Edward Albee
* Betrayal, by Harold Pinter

**Summer 2000**

* As You Like It, by William Shakespeare
* The Pinter Project, several one-acts by Pinter


<h4 class="text-center mb-2 mt-2">1998–1999 Shows</h4>


**Fall 1998**


* Kind Ness, by Ping Chong
* Nine, by Maury Yeston &amp; Arthur Kopit
* Off-Off Campus Presents: Big Bang, Big Crunch, Big Deal
* 7 Blowjobs, by Mac Wellman
* The Long Goodbye and Auto-da-fe, by Tennessee Williams
* Desdemona: a Play about a Handkerchief, by Paula Vogel
* The Private Life of The Master Race, by Bertolt Brecht

**Winter 1999**


* Salome, by Oscar Wilde
* The Glass Menagerie, by Tennessee Williams
* Weddings of Blood, by Federico Garcia Lorca, translated by Amanda Delheimer (premiere)
* Off-Off Campus Presents: You're a Dead Man, Charlie Brown!
* Ghost in The Machine, by David Gilman
* The Noble Lord, by Percival Wilde
* The American Dream, by Edward Albee
* The Wild Party, by Joseph Moncure March

**Spring 1999**


* Travesties, by Tom Stoppard
* Bright Room Called Day, by Tony Kushner
* Off-Off Campus Presents: The Afterlife for Dummies
* The Dumb Waiter, by Harold Pinter
* Oleanna, by Harold Pinter
* The Cave of Montesinos, composed by Alison Reid *
* Exegesis, choreographed by Shelly Ulrich and Linara Washington

**Summer 1999**


* Hyde Park Fine Arts Festival: Macbeth, by William Shakespeare


<h4 class="text-center mb-2 mt-2">1997–1998 Shows</h4>


**Fall 1997**


* The Revenge of The Space Pandas, by David Mamet
* The Seagull, by Anton Chekhov
* Off-Off Campus Presents: Slim's Table
* Eukiah, by Lanford Wilson
* IIkke, Ikke, Nye, Nye, Nye, by Lanford Wilson
* Three More Sleepless Nights, by Caryl Churchill
* Cliff!, by Chris Conry (premiere)
* Don Juan in Hell, by George Bernard Shaw
* Murder in The CaThedral, by T.S. Eliot

**Winter 1998**


* Blackfriars: The Fantasticks, by Harvey Schmidt and Tom Jones
* Off-Off Campus Presents: Glacier!
* Phillip Glass Buys a Loaf of Bread, by David Ives
* Lot 13: The Bone Violin, by Doug Wright
* The Universal Wolf, by Joan Schenker
* To CloThe The Naked, by Luigi Pirandello

**Spring 1998**


* Electra, by Euripedes
* Italian Straw Hat, by Eugene Labiche, translated by Danielle Levin (premiere)
* Off-Off Campus Presents: Spaghetti Western Canon
* Dance Studio ‘98
* Power Play at Priscilla's Pepperoni Pizza Palace, by Connor Coyne
* Jadoo An Evening of Magic with Shreeyash Palshikar (premiere)
* Happily Ever After, by Leigh Keiser (premiere)
* The Problem, by A.R. Gurney
* Reverse Psychology, by Charles Ludlam
* Fortinbras, by Lee Blessing

**Summer 1998**


* Summer Shakespeare in The Court: Love's Labor's Lost


<h4 class="text-center mb-2 mt-2">1996–1997 Shows</h4>


**Fall 1996**

* The Odd Couple, by Neil Simon
* Measure for Measure, by William Shakespeare
* The Philanderer, by George Bernard Shaw
* Off-Off Campus Presents: Charlotte's Website
* AnoTher Moon Called Earth, by Tom Stoppard
* Riders to The Sea, by J. M. Synge
* The Game, by John Stiening (premiere)

**Winter 1997**

* What The Butler Saw, by Joe Orton
* The Cherry Orchard, by Anton Chekhov
* The Mystery of Irma Vep, by Charles Ludlam
* Off-Off Campus Presents: The Dukes of Biohazard
* Commedia Del ‘High School, created by Dan Goldstein and John Bourdeaux (premiere)
* The Caretaker, by Harold Pinter
* Prelude and Liebestod, by Terrence McNally

**Spring 1997**

* The Cabinet Shop, by Michael Epperson (premiere)
* Blackfriars: Jesus Christ Superstar, by Andrew Lloyd Weber, lyrics by Tim Rice
* The BathHouse, by Vladimir Mayakovsky
* Off-Off Campus Presents: Underdogma
* Dance Studio ‘98
* Home, by Samm Art Williams
* F.O.B., by David Henry Hwang

**Summer 1997**

* Summer Shakespeare in The Court: The Comedy of Errors


<h4 class="text-center mb-2 mt-2">1995–1996 Shows</h4>


**Fall 1995**


* Glengarry Glen Ross, by David Mamet
* Macbeth, by William Shakespeare
* Blackfriars: Man of La Mancha, by Dale Wasserman, Joe Darion and Mitch Leigh
* Off-Off Campus Presents: Apocalypso
* Fitna, by Jamil Khoury

**Winter 1996**


* Woman in Mind, by Alan Ayckbourne
* Antigone, by Jean Anouilh
* Six Degrees of Separation, by John Guare
* Off-Off Campus Presents: Step 5: Destroy!
* Winter Music Benefit
* Dance Studio ‘96
* Providence, by Martha Brown
* Schubert's Last Serenade, by Julie Bovasso
* Down With Love, by Stephen Boykewich (premiere)
* A Dreamer Examines His Pillow, by John Patrick Shanley

**Spring 1996**


* Extremities, by William Mastrosimone
* The Crucible, by Arthur Miller
* Tartuffe II by MoliÃ¨re, adapted by Kim Lewis (premiere)
* Off-Off Campus Presents: Six Chinese Nationalists in Search of an Author
* Pounding Their Fists on Reality, by Ani DiFranco, adapted by Leah Sandbank (premiere)
* The Bald Soprano, by Eugene Ionesco
* Night, by Harold Pinter
* Request Concert, by Franz Xavier Kroetz
* An Actors' Nightmare, by Christopher Durang
* The Philadelphia, by David Ives
* Sure Thing, by David Ives
* Universal Language, by David Ives

**Summer 1996**


* Summer Shakespeare in The Court: A Midsummer Night's Dream


<h4 class="text-center mb-2 mt-2">1994–1995 Shows</h4>


**Fall 1994**


* Sitcom, by John Bourdeaux and Dan Goldstein (premiere)
* Of Mice and Men, by John Steinbeck
* The Tempest, by William Shakespeare
* Off-Off Campus Presents: * (The Comedy Troupe Formerly Known As Off-Off Campus)
* Suicide in B Flat, by Sam Shepard
* Death, by Woody Allen
* Death Knocks, by Woody Allen
* The Good Doctor, by Neil Simon
* Am I Blue?, by Beth Henley
* Finger Food, by Nina Shengold
* Brontosaurus, by Lanford Wilson

**Winter 1995**


* A Company of Wayward Saints, by George Herman
* Top Girls, by Carol Churchill
* Medea, by Max Roquette (premiere)
* Off-Off Campus Presents: Slinky, The Unwinding
* Stars Distance, by Vijay MaThew (premiere)
* No Exit, by Jean-Paul Sartre
* Dreamlost, by Johnson

**Spring 1995**


* Rozencrantz and Guildenstern Are Dead, by Tom Stoppard
* Blackfriars: Inferno! by Andre Pluess, Ben Sussman and John Bourdeaux (premiere)
* Off-Off Campus Presents: You Say Potato, I Say New Jersey
* Dance Studio ‘95
* A Cappella Concert
* California Suite, by Neil Simon
* Finding The Sun, by Edward Albee
* English Made Simple, by David Ives

**Summer 1995**


* Summer Shakespeare in The Court: Twelfth Night
* Blackfriars: Guys and Dolls, by Abe Burrows and Frank Loesse


<h4 class="text-center mb-2 mt-2">1993–1994 Shows</h4>


**Fall 1993**


* As You Like It, by William Shakespeare
* Lorraine Hansberry's To Be Young, Gifted and Black, adapted by Howard Nemeroff
* Blackfriars: Once Upon a Mattress, by Marshall Barer and Mary Rodgers
* Off-Off Campus Presents: Euripides, You Pay For ‘Em
* God, by Woody Allen
* Plaza Suite: The Visitor from Forest Hill, by Neil Simon
* Glimpses, a collection of short plays
* Stonewater Rapture, by Doug Wright

**Winter 1994**


* Orpheus Descending, by Tennessee Williams
* Who's Afraid of Virginia Woolf?, by Edward Albee
* Off-Off Campus Presents: Winfield, Alabama: The New Home of Alternative Music
* Battle of The Bands
* Roll Over Rossini
* The Dumbwaiter, by Harold Pinter
* Bondage, by David Henry Hwang
* Declarations, by Chris Jentoft (premiere)
* Talk to Me Like The Rain, and Let Me Listen, by Tennessee Williams
* Fourteen Hundred Thousand, by Sam Shepard
* The Hitchhiker's Guide to The Galaxy, by Douglas Adams (Radio Theater)

**Spring 1994**


* The Heidi Chronicles, by Wendy Wasserstein
* Rope, by Patrick Hamilton
* Blackfriars: Assassins by Stephen Sondheim and John Weidman
* Off-Off Campus Presents: All Thumbs, No Fonz
* Dance Studio ‘94
* The Rising of The Moon, by Lady Gregory
* The Dreammaker, by Oliphant Down
* Tennessee, by Romulus Linney
* Wormwood, by Ellen Graham (premiere)
* Los Vendidos, by Luis Valdez

**Summer 1994**


* Summer Shakespeare in The Court: The Two Gentlemen of Verona
* Radio Theater: Hamlet
