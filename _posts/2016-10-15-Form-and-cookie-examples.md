---
layout: page
title: Form and Cookie Examples
author: Karen Reid
categories:
  - Examples
---

Examples from this week's lectures:

 - (form.zip)[lectures/w5/form.zip] : A simple example showing different types of form elements.  It would be worth looking at this page on both Chrome and Firefox, since Firefox does not implement the date type input field.

    Files include:
    
    - `forms\_ex.html`: A form with a few different input types.
    - `forms\_client.html`: A form with some HTML 5 validation, and using an Ajax call to submit the form.
    - `server1.js`: A server that used Express and body-parser to parse the form data.  It simply prints some of the fields to the console.
    - `assets/css/styles.css`, `assets/scripts/scripts.js`: scripts.js includes some simple client-side validation.
 
 - (cookies.zip)[lectures/w5/cookies.zip]: This example includes both some server-side validiation and an illustration of sending cookies.  Check the developer tools to see the contents of the cookies.
 
   Files include:
    
   - `login.html`: A username and password form that does server-side validation, and creates three cookies.
   - `server.js`: A server using express and cookie-parser to send cookies.
   
 - (clickcount.html)[lectures/w5/clickcount.html]: A illustration of using sessionStorage on the client.  Try running multiple copies of this to see that each one gets its own session storage.  You can just open the file using the browser.
