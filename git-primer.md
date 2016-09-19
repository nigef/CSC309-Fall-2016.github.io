---
layout: page
title: Welcome to CSC309 Fall 2016
---

## Introduction to Git and GitHub

We will follow a common patten of Git usage in this course.  It has a bit of extra complexity than is necessary when working on something on your own, but the workflow will pay off when you start working in a team.

There are three repositories that you will interact with:

  - **upstream**:   This repo lives on GitHub and is the one I create for you. You will have read permissions on it, but not write permissions.
  - **fork** or **origin**:  This repo you create by forking the upstream repo using the Web UI on GitHub.  You have read and write permissions on it.
  - **local**: This repo lives on your local computer, and you might have one local repo on the lab machines and one on your local machine.  It is created by cloning the forked repo.
  
### Getting set up

  - Open a GitHub account and set up an [SSH public keey for Git](https://help.github.com/articles/generating-an-ssh-key/).
 
  - Set your Git configuration settings
 
``` 
 $ git config --global user.name "First-name Last-name"
 $ git config --global user.email "your-email@example.com"
```
 
  You may omit the `--global` switch if you wish. Make sure to read up on the differences between global and non-global git configuration, though. 
 
  - Visit the course upstream repository on GitHub and press "Fork".  This will create a clone of the repo on GitHub.
 
  - From your fork, use the "Clone or Download" button to get the link you need. In the terminal on your local machine, navigate to your intended development directory, and running the following command using the URL you just copied.
 
```
 git clone https://github.com/YOUR-GITHUB-ID/REPO-NAME.git
```
 
  - Next create a "remote" to the upstream repo.  This will be used to keep your local copy up to date.  In other words you will "pull" from this remote to get changes that someone made to the upstream repo.  (The url you want for this step is the one found in the "Clone or Download" button in the upstream repo on GitHub)
 
```
 git remote add upstream https://github.com/CSC309-Fall-2016/REPO-NAME.git
```
 
  - Now make sure the remote was added.  The following command should show you "upstream" and "origin" (your forked repo).
```
 git remote -v
```
 
### Development Workflow

When you are working on an assignment or lab by yourself, you don't really need to worry about branches.  You will create and modify some files, and then decide that you want to commit your work to the local repo.

The first step is to tell git which changes you want to be committed.  You can check what work you have done by runnning

```
git status
```

Use `git add FILES` to add the files that have changes to be committed.  (Important:  If you are used to SVN, add is quite different in Git.  You need to use it every time you want to commit changes, and not just for new files.)

Then you can run

```
git commit -m "A useful commit message"
```

You can add and commit as many times as you want.  When you are ready to send your work to your forked repository on GitHub, you will `push` it.

```
git push origin master
```

(This assumes you are working on the master branch.)

Now you can go to your GitHub fork.  You should see the button "Pull Request."  Write a useful message, click "Create Pull Request".  The Pull Request will be visible on the original upstream repository.

### Keeping your local code up-to-date

If changes have been made to the upstream repo that you want to bring into your localrepo, you can run the following:

```
git checkout master
git pull upstream master
```