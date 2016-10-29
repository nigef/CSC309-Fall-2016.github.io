# CSC309 Project

Design and implement a web application for a domain of your choice. There is no set topic, so part of the task is to determine a reasonable scope for your web application.  Feedback on your proposal and consulation with your TA will help you manage the scope of your project.

### Specification

 - Your web app should be implemented using Node.js or any framework dependent on Node.js as the back-end programming language.
 - You may host your web app on a live hosting server of your choice.  We recommend Heroku, which provides free hosting. (See [Getting Started on Heroku with Node.js](https://devcenter.heroku.com/articles/getting-started-with-nodejs#introduction)
 
 
### Features

- **Profiling:** You will design and implement a set of features representing user profiles. By using these profiling features, users should be able to update their personal information and see the profiles of other users. There should be at least two levels: (a) admin (your team), and (b) regular user.

- **User Authentication and Authorization:** Your web app must authenticate users based on passwords. Since there are at least two different user roles in your web app, you must authorize users when they attempt to conduct certain tasks. For instance, a regular user can’t change the password or personal information of other users, but an admin can.

- **Search:** There should be some way for users to search for data on your web application.

- **Data:** There must be some data set associated with your web site.  The type of this data could be wide ranging.  Users will interact with this data, possibly adding to it, or changing it.  It might schedule oriented, or recommendation oriented.

- **Views:** Your application will need to support several different views.  At the very least there will be an adminstrative dashboard, and a main view for users.  The main view for the regular users will change as the user interacts with it, and may be composed of several different views.  (Don't get carried away here.)

- **Admin:** You should provide basic admin functionality, including but not necessarily limited to the following: changing passwords; adding, updating, and deleting users and their information; and initializing/repopulating the database. The admin panel for WordPress (and its role authorization) is a good example.



### Additional features

You migth consider some of the follwoing additional features:
- A third-party authentication mechanism, such as Google, Facebook, or GitHub; or two-factor authentication. 

- A social network component. For example, you might provide a way for sellers and buyers to communicate, or players in a game to communicate.  Users might be able to "follow" other users if appropriate for your application.

- A rating and/or commenting component. 

- You might consider pulling data from a third-party API.


## Project Proposal

All documents for your project proposal should be stored in a directory called `proposal` at the top level of your repository.

Your proposal will include the following information:

- A paragraph or two describing the topic of your application.  What is the overall purpose of your application?  Who does it serve?  Explain at a high level what users will be able to do using your application.

- A detailed list of the user interactions with the application. How will you get data into your application?  What are all the different things a user will do when they use your application.

- Sketches of what the views will look like to the user.  These do not have to be fancy polished drawings, or HTML mockups.  They must be legible, but they could be scanned hand drawings.

The proposal documents should not be very long.  The goal is to clearly identify what you plan to implement for your application.  The documents should be written in proper English, but may be in point form.


## Project 

You may use additional libraries and frameworks to implment your project.  (This includes Bootstrap and other CSS aids.)  The backend server will be written in Node, and you are welcome to use additional models.  You may choose to write your front end in Javascript/JQuery/HTML/CSS, or your may use React. No paid or free-trial services are allowed.

Your project should include some unit testing using nodeunit, Mocha or another testing framework.  A complete set of tests is not required

You will include a `README.md` file (or `README.pdf` file if you prefer) at the top level of your repository that contains a description of how to use your application.  It will include:

  - A section on the detailed design of your application including a description of each part of the web app and how they interact with one another.
  
  - A link to your live site, if applicable.
  
  - If applicable, a description of any aspects of your appliation that were not fully implemented or do not quite work as desgined.
  
  - A description of any enhancements or additional features you have made to your application.

You should provide the package.json file so that the TA can install all the necessary modules.

## Demo

In the final week of classes you will give a demo to your TA and a subset of the students in the course.  Your demo will be between 6 and 8 minutes long and will show the features of your application.  All members of you group will participate in the demo, and at least two of the group members must speak. You may not use any slides.  (Only if your application or parts of your application do not work, will you be allowed to use slides.)

You will sign up for a demo slot.  All members of your team must be present for the demo, and stay for the other demos in the same time slot.  We will schedule approximately 5 demos in a time slot so that you don't have to stay too long.