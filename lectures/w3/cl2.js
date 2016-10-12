'use strict';

// KR: A more realistic example of using a closure

// KR: Note that message (a parameter to wait) is in the
// lexical scope of timer and wait.

function wait(message) {
  setTimeout(function timer() {
    console.log(message);
  }, 1000);
}

wait('Hello, closure!');

// Excerpt From: Kyle Simpson. "Scope and Closures." iBooks.
