// SpeakHello.js

// STEP 2: Wrap the entire contents of SpeakHello.js inside of an IIFE
(function(window) {
  // STEP 3: Create an object, called 'helloSpeaker'
  var helloSpeaker = {};

  // STEP 4: Rewrite the 'speak' function attached to 'helloSpeaker' object
  helloSpeaker.speak = function(name) {
    var speakWord = "Hello";
    console.log(speakWord + " " + name);
  };

  // STEP 5: Expose the 'helloSpeaker' object to the global scope
  window.helloSpeaker = helloSpeaker;

})(window);

