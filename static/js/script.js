'use strict';

(function(){

/** Web font */

WebFont.load({
  google: {
    families: ['Open Sans:300,400,600']
  }
});


/** Menu icon */

var showMenuClass = 'showmenu';
var elMenu = document.getElementById('js-mobile-menu');

var closeMenu = function (e) {
  e.stopPropagation();

  if (!elMenu.contains(e.target)) {
    e.preventDefault();
  }

  document.body.classList.remove(showMenuClass);
  document.body.removeEventListener('click', closeMenu);
};

document.getElementById('js-mobile-menu-trigger').addEventListener('click', function (e) {
  e.stopPropagation();
  e.preventDefault();

  if (document.body.classList.contains(showMenuClass)) {
    document.body.classList.remove(showMenuClass);
    document.body.removeEventListener('click', closeMenu);
  } else {
    document.body.classList.add(showMenuClass);
    document.body.addEventListener('click', closeMenu);
  }
});


/** Footer back to top button */

var scrollTop = function () {
  if (document.body.scrollTop !== 0) {
    window.scrollBy(0, -75);
    requestAnimationFrame(scrollTop);
  }
};

document.getElementById('js-scroll-top').addEventListener('click', scrollTop);

})();
