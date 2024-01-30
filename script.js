// SpeakHello.js
// STEP 2: Wrap the entire contents of SpeakHello.js inside of an IIFE
(function(window) {
  // STEP 3: Create an object, called 'helloSpeaker'
  var helloSpeaker = {};

  // STEP 4: Attach the 'speak' method to 'helloSpeaker' object
  helloSpeaker.speak = function(name) {
    var speakWord = "Hello";
    console.log(speakWord + " " + name);
  };

  // STEP 5: Expose the 'helloSpeaker' object to the global scope
  window.helloSpeaker = helloSpeaker;

})(window);

// SpeakGoodBye.js
// STEP 6: Wrap the entire contents of SpeakGoodBye.js inside of an IIFE
(function(window) {
  // STEP 7: Create an object, called 'byeSpeaker'
  var byeSpeaker = {};

  // STEP 8: Attach the 'speak' method to 'byeSpeaker' object
  byeSpeaker.speak = function(name) {
    var speakWord = "Good Bye";
    console.log(speakWord + " " + name);
  };

  // STEP 9: Expose the 'byeSpeaker' object to the global scope
  window.byeSpeaker = byeSpeaker;

})(window);

