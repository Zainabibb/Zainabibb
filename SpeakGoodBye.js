// SpeakGoodBye.js

// STEP 6: Wrap the entire contents of SpeakGoodBye.js inside of an IIFE
(function(window) {
  // STEP 7: Create an object, called 'byeSpeaker'
  var byeSpeaker = {};

  // STEP 8: Rewrite the 'speak' function attached to 'byeSpeaker' object
  byeSpeaker.speak = function(name) {
    var speakWord = "Good Bye";
    console.log(speakWord + " " + name);
  };

  // STEP 9: Expose the 'byeSpeaker' object to the global scope
  window.byeSpeaker = byeSpeaker;

})(window);

