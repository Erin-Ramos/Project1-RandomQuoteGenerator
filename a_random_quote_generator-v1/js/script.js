/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// quotes array holds 5 quotes to be displayed on the web page
let quotes = [
  { quote: "Sometimes life is like this tunnel. You can't always see the light at the end of the tunnel, but if you keep moving, you will come to a better place.", source: "Iroh", citation: "ATLA | Episode 2.20" },
  { quote: "It's the quenchiest!", source: "Sokka", year: 2006 },
  { quote: "MY CABBAGES!", source: "The Cabbage Merchant", tag: "Trauma" },
  { quote: "The way of the sword doesn't belong to any one nation. Knowledge of the arts belongs to us all.", source: "Piandao" },
  { quote: "It is important to draw wisdom from different places. If you take it from only one place, it becomes rigid and stale.", source: "Iroh" }
];

// define global variables
let rgbValue;
let color;
let randomNumberMax;
let randomNumber;
let randomQuote;

// get the RGB values to be used in randomColor function
function getRGB() {
  rgbValue = Math.floor(Math.random() * 256);
  return rgbValue;
}

// get the final color using getRGB function and change the background to that color
function randomColor() {
  color = `rgb(${getRGB()}, ${getRGB()}, ${getRGB()})`
  document.body.style.backgroundColor = color; // https://www.w3schools.com/jsref/prop_style_backgroundcolor.asp
}

// get a random quote from quotes array
function getRandomQuote() {
  randomNumber = Math.floor(Math.random() * quotes.length);
  randomQuote = quotes[randomNumber];
  return randomQuote;
}

/* 
  print the quote given the guidance in the project instructions
  calls the getRandomQuote function and the randomColor function
*/
function printQuote() {
  getRandomQuote()
  randomColor()
  htmlString =
    `<p class = "quote"> ${randomQuote.quote} </p>
    <p class = "source"> ${randomQuote.source}`
  if (randomQuote.citation) {
    htmlString += `<span class = "citation"> ${randomQuote.citation} </span> </p>`
  }
  if (randomQuote.year) {
    htmlString += `<span class = "year"> ${randomQuote.year} </span> </p>`
  }
  if (randomQuote.tag) {
    htmlString += `<span class = "tag"> ${randomQuote.tag} </span> </p>`
  }
  '</p>'
  document.getElementById('quote-box').innerHTML = htmlString;
}

// automatically change the quote every 5 seconds
// source: https://www.w3schools.com/jsref/met_win_setinterval.asp
function autoRefresh () {
  setInterval(printQuote, 5000);
}

// call autoRefresh function
autoRefresh();

/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/
document.getElementById('load-quote').addEventListener("click", printQuote, false);