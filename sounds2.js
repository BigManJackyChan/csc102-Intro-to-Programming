// Strict mode helps catch common coding mistakes and "unsafe" actions
'use strict';

// Declaring a constant to hold the image element (the sound trigger)
// Using document.getElementById to access the specific image by its ID
const soundTrigger = document.getElementById('soundTrigger');

// Declaring a constant to hold the HTML5 audio element
// This is the element that controls the sound playback
const audioElement = document.getElementById('soundFile');

// Function to handle the sound playback logic
// NOTE: This function is called by the 'onmouseover' property, not inline HTML
const playSound = () => {
    // Setting the playback position back to the beginning (0 seconds)
    // This allows the sound to be played completely even if triggered repeatedly
    audioElement.currentTime = 0;
    
    // Starting the sound playback
    audioElement.play();
};

// Function to handle stopping the sound
// NOTE: This function is also called by the 'onmouseout' property
const stopSound = () => {
    // Pausing the sound playback
    audioElement.pause();
    
    // Optionally reset the time again if a full stop is desired
    audioElement.currentTime = 0;
};

/* --- Event Listener Implementation --- */

// Attaching the 'playSound' function to the 'onmouseover' property of the image
// This executes 'playSound' when the mouse pointer moves onto the element
// This directly sets the DOM property, fulfilling the 'MUST NOT use actionListeners' requirement
soundTrigger.onmouseover = playSound;

// Attaching the 'stopSound' function to the 'onmouseout' property of the image
// This executes 'stopSound' when the mouse pointer moves off the element
soundTrigger.onmouseout = stopSound;

// All JavaScript functions are external to the HTML.