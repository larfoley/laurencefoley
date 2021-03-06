function stringToArray(s) {
  var wordList = [];
  var word = "";
  for (var i = 0; i < s.length; i++) {
    if (s.charAt(i) !== " ") {
      word += s.charAt(i)
    };
     if (s.charAt(i + 1) === " ") {
       wordList.push(word);
       word = "";
     }
   }
  wordList.push(word);
  return wordList;
}

function toggleClass(el, classToToggle) {
  var classExists = false,
      classlist,
      classString;
  // get array of the els class names
  classlist = stringToArray(el.className);
  // check if the new class exists
  for (var i = 0; i < classlist.length; i++) {
    if (classlist[i] === classToToggle) {
      classExists = true;
      classlist.splice(i, 1);
    }
  }
  // if not, then add new class to the class list array
  if (!classExists) {
    classlist.push(classToToggle);
  }
  // add the new class
  if (classlist.length === 1) {
    el.className = classlist.join("");
  } else {
    el.className = classlist.join(" ");
  };
}

(function() {
  "use strict";
  // Toggle the site nav when the menu button is clicked

  // Show the toggle menu button
  var menuBtn = document.querySelector('.site-nav__button');
  menuBtn.style.display = "block";

  var menuList = document.querySelector('.site-nav__list');

  // Hide the menu
  menuList.className += " site-nav__list--is-hidden";

  menuBtn.onclick = function () {
    toggleClass(menuList, "site-nav__list--is-hidden");
  };

}())
