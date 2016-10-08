'use strict';

// KR: One way to solve the problem.

for (var i = 1; i <= 5; i++) {
  (function() {
    var j = i;
    setTimeout(function timer() {
      console.log(j);
    }, i * 1000);
  })();
}

// Excerpt From: Kyle Simpson. "Scope and Closures." iBooks.
