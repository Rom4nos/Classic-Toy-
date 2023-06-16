// Assignment 1 | COMP1073 Client-Side JavaScript

/* Variables
-------------------------------------------------- */
// Create a new speechSynthesis object
var synth = window.speechSynthesis;
// Learn more about SpeechSynthesis.speak() at https://developer.mozilla.org/en-US/docs/Web/API/SpeechSynthesis/speak
var textToSpeak = 'This is the text string that you will generate with your script';
var speakButton = document.getElementById('speak');

var word1 = "First Noun"; 
var word2 = "Second Verb";
var word3 = "Third Adjective";
var word4 = "Fourth Noun";
var word5 = "Fifth Place";
var storyTxt = " ";


// Buttons
var firstButton = document.getElementById('one');
var secondButton = document.getElementById('two');
var thirdButton = document.getElementById('three');
var fourthButton = document.getElementById('four');
var fifthButton = document.getElementById('five');
var sixthButton = document.getElementById('six');
var seventhButton = document.getElementById('seven');

// Arrays
// --------------------------------------------------
var nouns1 = ["The cat", "The dog", "The sun", "The flower", "The woman", "The men", "The kid"];
var verbs2 = [" runned", " jumped", " ate", " sleept", " sung", " danced", " read"];
var adjectives3 = [" in front the happy", " trought the tallest", " with the beautiful", " with the clever", " in the funny", " next to the brave", " over the kind"];
var nouns4 = [" cat", " dog", " tree", " book", " car", " house", " mountain"];
var places5 = [" at the beach", " in the park", " at the mountain", " in the city", " in the forest", " at the lake", " at the moon"];

// Functions
// --------------------------------------------------
function speakNow(string) {
  // Create a new speech object, attaching the string of text to speak
  var utterThis = new SpeechSynthesisUtterance(string);
  // Actually speak the text
  synth.speak(utterThis);
}

function getRandomInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Event handlers
// --------------------------------------------------
firstButton.onclick = function() {
  var randomInteger = getRandomInteger(0, 6);
  console.log(randomInteger);
  word1 = nouns1[randomInteger];
  console.log(word1);
  storyTxt += (word1);
  speakNow(word1);
};

secondButton.onclick = function() {
	var randomInteger = getRandomInteger(0, 6);
	console.log(randomInteger);
	word2 = verbs2[randomInteger];
 	console.log(word2);
	speakNow(word2);
	storyTxt += (word2);
	

	
};
thirdButton.onclick = function() {
	var randomInteger = getRandomInteger(0, 6);
	console.log(randomInteger);
	word3 = adjectives3[randomInteger];
 	console.log(word3);
	speakNow(word3);
	storyTxt += (word3);
};
fourthButton.onclick = function() {
	var randomInteger = getRandomInteger(0, 6);
	console.log(randomInteger);
	word4 = nouns4[randomInteger];
 	console.log(word4);
	speakNow(word4);
	storyTxt += (word4);
};
fifthButton.onclick = function() {
	var randomInteger = getRandomInteger(0, 6);
	console.log(randomInteger);
	word5 = places5[randomInteger];
 	console.log(word5);
	speakNow(word5);
	storyTxt += word5;
};
sixthButton.onclick = function() {
	var randomInteger = getRandomInteger(0, 6);
	word1 = nouns1[randomInteger];
	//second word
	var randomInteger = getRandomInteger(0, 6);
	word2 = verbs2[randomInteger];
	//third word
	var randomInteger = getRandomInteger(0, 6);
	word3 = adjectives3[randomInteger];
	//fourth word
	var randomInteger = getRandomInteger(0, 6);
	word4 = nouns4[randomInteger];
	//fifth word
	var randomInteger = getRandomInteger(0, 6);
	word5 = places5[randomInteger];

	console.log(word1 + word2 + word3 + word4 + word5);
	storyTxt = (word1 + word2 + word3 + word4 + word5);
	speakNow("Created!");
  };
  seventhButton.onclick = function() {

	//reset button
	word1 = " "; 
	word2 = " ";
	word3 = " ";
	word4 = " ";
	word5 = " ";
	storyTxt = " ";
	
	console.log("reseted!");
	speakNow("reseted!");

	
  };
/* Event Listeners
-------------------------------------------------- */
// Onclick handler for the button that speaks the text contained in the above var textToSpeak
speakButton.onclick = function() {
	speakNow(storyTxt);
}
