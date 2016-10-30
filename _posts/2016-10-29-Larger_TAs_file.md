---
layout: page
title: Larger TAs Data File
author: Karen Reid
categories:
  - Assignment
---

I have created a larger data set for you to test your assignment 2 against. It is the file named [turing\_tas.json](/assignments/a2/turing_tas.json).  Note that the keys in each TA are listed in a different order than the original file you were given.  This should not cause any problems with your program because this is just how the Python json module serialized the dictionary.

I created a little Python program to generate TA JSON files for testing your assignment. I'm including it here, together with the files I used to produce the above output file.  You don't need to use it, but are welcome to.

 - [mk_tas.py](/assignments/a2/mk_tas.py): The python program.  It does not take any arguments.
 
 - [turing_names.txt](/assignments/a2/turing_names.txt): A list of names of the format "family name, given name).  This file happens to contain the names of all the Turing award winners.
 
 - [courses.json](/assignments/a2/courses.json): A JSON file containing the list of courses.s
