---
title: '3. P.O.U.R Principles.'
description: 'Implementing P.O.U.R guidelines.'
date: '25 June 2025' 
draft: true

---

Knowing where to start when it comes to integrating  <abbr title = "Web Content Accessibility Guidelines">WCAG </abbr> is admittedly overwhelming. One of the main questions I asked myself was how I could ensure to make the user experience easy and inclusive across a variety of needs?

Learning about how user needs overlap made things easier in the sense that the benefit of one can be extended to the benefit of all. However the nagging feeling that something might get left off the list when it comes to accessibility still persisted. 

Thankfully there are four great tenets to consider when it comes to implementing <abbr title = "Web Content Accessibility Guidelines">WCAG </abbr>, and luckily they make an easy to remember acronym: [P.O.U.R](https://www.w3.org/WAI/standards-guidelines/wcag/glance/)  

P.O.U.R stands for: 

**Perceivable**: How can information be presented, and in what ways? 
- As a developer, have I provided alternative text for non-text content? If I were a user could I easily contrast the font colour with the background colour? 

**Operable**: Is it functional across different devices? 
- Can my web pages be operated using only the keyboard? Are users able to navigate easily on my page and find the content they need? 

**Understandable**: Is information and functionality understandable and consistent?
- Are any actions on my web pages consistent? If a user clicks on the home icon while on a different page, can they expect to be taken back to the home page? 

**Robust**: Can content be understood by a wide range of varying user tools? 
- Have I made sure to use clear HTML elements that state what a component on my webpage does for someone using assistive technology? 

At a very fundamental level I was already off to a good start, having in my own projects provided alternative image descriptions, pages with clear navigation bars, text that I hoped was clear to understand, and status messages alerting to the success or failures depending on user interactions. Though I wasn't building large scale applications, it was encouraging to know that I had taken on these considerations at some level. 

Learning through each acronym continued to enhance how the overlap of needs didn't need to be as complicated as I previously thought. Admittedly the Robust principle is where I felt the least certain of how to implement. Here I was introduced to <abbr title=" Web Accessibility Initiative - Accessible Rich Internet Applications"> WAI-ARIA </abbr>, a completely new concept that felt like I needed to completely re-write my <abbr title="HyperText Markup Language"> HTML </abbr>. It was like discovering that there was another version of English. 

After a deeper dive, and using tools such as WAVE (more of that in my next post), the Robust principle fell into place. I no longer had to overhaul my <abbr title="HyperText Markup Language"> HTML </abbr>, but instead ensure that my components had a clear name, role and value for assistive technologies to understand. Having a framework to work within made accessibility feel less like guesswork and more like good practice - a reliable way to approach accessibility systematically. 
