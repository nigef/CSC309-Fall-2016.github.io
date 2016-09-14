# [CSC309-Fall-2016.github.io](https://csc309-fall-2016.github.io/)

This is the source code for the CSC309 Fall 2016 course website.

The site is built using [Jekyll](https://jekyllrb.com/) and hosted on [GitHub Pages](https://pages.github.com/).
Code is based vaguely on [@cssu/cssu.ca](https://github.com/cssu/cssu.ca).


## To add info to the course:

### 1. Install RVM:
<pre><code>$ gpg --keyserver hkp://keys.gnupg.net --recv-keys 409B6B1796C275462A1703113804BB82D39DC0E3
$ curl -sSL https://get.rvm.io | bash -s stable</pre></code>
You might need to  source the RVM config file. Read the instructions on screen carefully.

### 2. Use Latest Ruby:
<pre><code>$ rvm --default use 2.3.0</pre></code>

### 3. Install Bundler (dependancy manager):
<pre><code>$ gem install bundler</pre></code>

### 4. Install Dependencies:
<pre><code>$ bundle install</pre></code>

### 5. Serve Local:
<pre><code>$ jekyll serve</pre></code>

This should start a local server on http://localhost:4000

### 6. Make changes
You can make changes anywhere in the posts/layouts. This might be a good place to start: https://jekyllrb.com/docs/. Generally it's a better idea to branch out your changes and then push them.
<pre><code>$ git checkout -b branchname</pre></code>

### 7. Push changes
The changes made should reload live on your local server. Once you're satisfied push changes to your fork.
<pre><code>$ git push origin branchname</pre></code>

### 8. Create Pull Request.
From your new work, click "New Pull Request" button, and it should do the rest.

Enjoy the Course!
