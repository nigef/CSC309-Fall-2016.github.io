---
layout: page
title: Larger TAs Data File
author: Karen Reid
categories:
  - Assignment
---

I created a little Python program to generate TA JSON files for testing your assignment.  You may want to use it with a smaller set of TA names, so that you are confident the correct data is being displayed and transferred.

 - [turing\_tas.json](/assignments/a2/turing_tas.json) A JSON file that you can use with your program.  Note that the order of the keys in each applicant object is different than the original file I gave you.  That shouldn't cause any problesm.  This is the way the Python module `json` serializes the objects.
 
 - [mk_tas.py](/assignments/a2/mk_tas.py): The python program.  It does not take any arguments.
 
 - [turing_names.txt](/assignments/a2/turing_names.txt): A list of names of the format "family name, given name).  This file happens to contain the names of all the Turing award winners.
 
 - [courses.json](/assignments/a2/courses.json): A JSON file containing the list of courses.s
