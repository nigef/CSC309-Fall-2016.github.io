---
layout: page
title: CSC309H Course Syllabus Fall 2016
permalink: /syllabus/
---

## Overview

Welcome to CSC309H: Programming on the Web!

### Calendar Description

An introduction to software development on the web. Concepts underlying the development of programs that operate on the web; survey of technological alternatives; greater depth on some technologies. Operational concepts of the internet and the web, static client content, dynamic client content, dynamically served content, n-tiered architectures, web development processes, and security on the web. Assignments involve increasingly more complex web-based programs. Guest lecturers from leading e-commerce firms will describe the architecture and operation of their web sites.

### Our Focus This Term

Web technologies change at a rapid rate. Between the time that I wrote this and the time that you are reading it for the first time, it is likely that some hot new technology will have sprung up. As a software developer/computer scientist, how will you assess the latest technology and decide for yourself or your company whether it will fit in with the libraries and frameworks you are already using or whether it is a passing fad?

Our goal in this course is to learn about the fundamental underlying concepts of the protocols, languages, and architectures that make up web programming. These underlying general concepts will allow us to compare different approaches to building web applications and will give us the tools to evaluate new technologies as they come along.

At the end of this course you will be able to:

* Describe the components of a web application.
* Explain the basic architecture of a web server.
* Compare different frameworks from a software architecture point of view, highlighting similarities and differences.
* Write and debug programs that manipulate the DOM.
* Use browser developer tools to analyze and debug a web application.
* Describe and use multiple models for communication between web server and client.
* Build a web application using a variety of Javascript libraries and frameworks including Node.js and React (among others).

## Contact information

### Instructor: Karen Reid

**Email:** | reid -at- cdf.toronto.edu
**Office hours:** | See [course web site](/)

### Section L0101

**Labs:**  |  Tuesdays 1-2 | BA 3175, BA 3185, BA 3195
**Lectures:**  |  Thursdays 1-3 | MP 202

### Section L0201

**Labs:** | Mondays 3-4 | BA 3175, BA 3185, BA 3195
**Lectures:** | Wednesdays and Fridays 3-4 | SS 2135

### Course Information:

- **Website:** <https://csc309-fall-2016.github.io/>

One of the nice things about using Github for the course web site is that you can contribute to the course web site. If you see something on the course web site that should be fixed, or want to improve the UI, please feel free to submit a pull request.

You are especially encouraged to add to the resources page.  If you find particularly useful tutorials, guides, blog posts, please add them to the resources page with an annotation stating what the resource is about and what makes it useful.

- **Reference Materials:**

- **Discussion Board:**
The discussion board is the best place to ask technical questions, and general questions about the course, assignments and labs.

- **Email:**
Please use email for personal issues and the discussion board for
all other course-related questions. I try to respond to email by the end of
the next day. However, due to volume, it may take longer, especially on
weekends. (I am often not able to answer email more than once on the weekend.)

- **Anonymous Feedback:**
If you have feedback about the course, the web page includes a link to an anonymous email form. (You also have the *option* of including your name.) Since the sender cannot be determined, comments sent through the feedback system are considered public, and they may receive a response at the beginning of class or on the discussion board.

### Marking Scheme
- **Lab Exercises 10%:**
For each lab, you will be asked to turn in a small piece of work or to work on an activity during tutorial, usually in a group of 2 or 3. Many of these will be directly related to the assignments. We will take the best 7 out of 8 scores.  No grace periods may be used for the lab exercises.

- **Assignments 20%:**
Over the term, you will complete 2 assignments (worth 10% each). All three assignments are individual work, and each is due on the Friday of the week it is due. To submit your assignment, check your work into your SVN repository.

- **Project 30% (5% proposal, 20% project, 5% presentation)**

- **Final Exam (40%):**
The final exam is comprehensive, 3 hours, and held during the exam period. You must obtain a 40% to pass the course; otherwise, your final mark will be set no higher than 48%.

### Topic Schedule and Term Due Dates

The topic schedule is tentative. I'm new to this course, so I'm not quite sure how long it will take to cover some topics.

<table>
  <thead>
    <tr>
      <th></th>
      <th>Dates</th>
      <th>Topic</th>
      <th>Work Due</th>
      <th>Notes</th>
    </tr>
  </thead>
  <tbody>
    {% for week in site.data.syllabus %}
      <tr>
        <td>{{ forloop.index }}</td>
        <td>{{ week.week }}</td>
        <td>{{ week.topic }}</td>
        <td>{{ week.work }}</td>
        <td>{{ week.notes }}</td>
      </tr>
    {% endfor %}
  </tbody>
</table>


### Policies

- **Minimum Standards for Submitted Work**
For your assignment to be graded, it must meet the minimum standards of a professional computer scientist. **All** files required to build the program must be committed to the repository, and the program must work on a Chrome browser on CDF. Last minute difficulties with git can easily be avoided by ensuring all files are added to the repository well before the deadline, and that you know how to commit them.  If you are unable to complete your assignment, please submit a component of it together with a readme file indicating what is working. **Your submission may receive a grade of 0, if we can't get any part of it to work.**

- **Late Work:**
All assignments are submitted electronically and are due at **10 p.m. sharp**
on the due date. Each student begins the semester with two grace day *tokens*.
Submitting an assignment up to 1 day (24 hours) late uses one token. Submitting
an assignment up to 2 days (48 hours) late uses two tokens. Once your tokens
have been used late assignments will not be accepted. Grace days may not be
used for lab exercises. Please note that 10:01 p.m. will be considered late, and
ensure that your work is not submitted at the very last second. Because you
will be using version control, it is very easy to commit regularly to avoid
running into the deadline.

- **Religious Holidays:**
If a religious holiday will keep you from completing any assigned work, please
let me know as soon as possible (but no later than two weeks before the due
date), and we will work out a mutually agreeable accommodation.

- **Emergencies:**
In the event of an illness or other catastrophe, obtain appropriate
documentation (e.g., medical certificate) and contact me by email within 48
hours of the due date. It is always easier to make alternate arrangements
before a due date, so please inform me as soon as you know that you will need
accommodation.

- **Re-mark Requests:**
If a piece of work has been mis-marked or if you believe the rubric used to
evaluate the work is not appropriate, you may request a re-mark. For a re-mark
to succeed, you must clearly and concisely express what you believe was
mis-marked. To request a re-mark, use the form for the assignment on MarkUs.
Requests must be submitted within *2 weeks* of the marks being returned.

- **Academic Integrity:**
All of the work you submit must be done by you and your work must not be
submitted by someone else. Plagiarism is academic fraud and is taken very
seriously. The department uses software that compares programs for evidence of
similar code. Please read the [Rules and
Regulations](http://www.governingcouncil.utoronto.ca/policies/behaveac.htm)
from the U of T Calendar (especially the Code of Behaviour on Academic
Matters). Here are a couple of guidelines to help you avoid plagiarism:
  - If you find snippets of code or examples on the web that you want to use in your work, you must cite your sources.  In other words, include in a source code comment, a link to where you found the code you are using.

Maintain absolute control of your work -- including notes and partial solutions
-- at all times. We encourage you to discuss course concepts and to study for
exams with other students, but any work that is submitted should be your own.
The easiest way to avoid plagiarism is to only discuss submitted work with your
partner or the instructor. Similarly, google (and wikipedia) may help you with
course material, but do not use the internet to look for solutions to the
assignment problems.

- **Accessibility Needs:**
The University of Toronto is committed to accessibility. If you require
accommodations for a disability, or have any accessibility concerns about the
course, the classroom or course materials, please contact Accessibility
Services as soon as possible: disability.services@utoronto.ca or <http://studentlife.utoronto.ca/accessibility>
