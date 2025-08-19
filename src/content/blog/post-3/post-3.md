---
title: '3. P.O.U.R Principles.'
description: 'Implementing P.O.U.R guidelines.'
date: '19 August 2025' 
draft: false

---

Figuring out where to start when it comes to integrating  <abbr title = "Web Content Accessibility Guidelines">WCAG </abbr> is admittedly overwhelming. One of the main questions I asked myself was: *how I could ensure the user experience was easy and inclusive across a variety of needs?*

Knowing that multiple user needs can often overlap did make things easier, however the nagging feeling that something might get left off the list when it comes to applying accessible design still persisted. 

Thankfully there are four great tenets to consider when it comes to implementing <abbr title = "Web Content Accessibility Guidelines">WCAG</abbr>, and luckily they make an easy to remember acronym: [P.O.U.R](https://www.w3.org/WAI/standards-guidelines/wcag/glance/)  

P.O.U.R stands for: 

**Perceivable**: How can information be presented, and in what ways? 
- As a developer, have I provided alternative text for non-text content? If I were a user could I easily contrast the font colour with the background colour? 

**Operable**: Is it functional across different devices? 
- Can my web pages be operated using only the keyboard? Are users able to navigate easily on my page and find the content they need? 

**Understandable**: Is information and functionality understandable and consistent?
- Are any actions on my web pages consistent? If a user clicks on the home icon while on a different page, can they expect to be taken back to the home page? 

**Robust**: Can content be understood by a wide range of varying user tools? 
- Have I made sure to use clear HTML elements that state what a component on my webpage does for someone using assistive technology? 

At a very fundamental level I was already off to a good start, having in my own projects provided alternative image descriptions, pages with clear navigation bars, text that I hoped was clear to understand, and status messages alerting to the successes or failures dependent on user interactions. Though I wasn't building large scale applications, it was encouraging to know that I had taken on these considerations at some level. 

Working through each acronym highlighted that the overlap of user needs wasn't as complicated as I initially thought, until I reached Robust. This principle introduced me to <abbr title=" Web Accessibility Initiative - Accessible Rich Internet Applications"> WAI-ARIA</abbr>, which helps make web content more understandable to screen readers and other assistive tech. Robust didn't feel as tangible as other principles, especially as my use of assistive tech was limited. Initially it felt like discovering another version of English. Every word needed an explanation about why it was there, what it was doing and its relationship to the words around it. 

After a deeper dive, and using tools such as [WAVE](https://wave.webaim.org/) (more of that in my next post), the Robust principle eventually fell into place. I no longer had to fear replacing every <abbr title="HyperText Markup Language"> HTML</abbr> file I'd ever written, but instead ensure that my components had a clear name, role and value for assistive technologies to understand. Having a framework to work within made accessibility feel less like guesswork and more like good practice - a reliable way to approach accessibility systematically. 
