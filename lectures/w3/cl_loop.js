'use strict';

// KR: This doesn't work as you would expect.

for (var i = 1; i <= 5; i++) {
  var j = i;
  setTimeout(function timer() {
    console.log( j );
  }, i * 1000);
}

// Excerpt From: Kyle Simpson. "Scope and Closures." iBooks.
