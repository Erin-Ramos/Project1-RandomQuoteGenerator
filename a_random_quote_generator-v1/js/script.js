/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance: 
// Check the "Project Resources" section of the project instructions
// Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

/*** 
 * `quotes` array 
***/
let quotes = [
  { quote: "Sometimes life is like this tunnel. You can't always see the light at the end of the tunnel, but if you keep moving, you will come to a better place.", source: "Iroh", citation: "ATLA | Episode 2.20"},
  { quote: "It's the quenchiest!", source: "Sokka", year: 2006},
  { quote: "MY CABBAGES!", source: "The Cabbage Merchant"},
  { quote: "The way of the sword doesn't belong to any one nation. Knowledge of the arts belongs to us all.", source: "Piandao"},
  { quote: "It is important to draw wisdom from different places. If you take it from only one place, it becomes rigid and stale.", source: "Iroh"}
];

let randomNumberMax;
let randomNumber;
let randomQuote;

/***
 * `getRandomQuote` function
***/

function getRandomQuote() {
  randomNumberMax = quotes.length;
  randomNumber = Math.floor(Math.random() * randomNumberMax);
  randomQuote = quotes[randomNumber];
  return randomQuote;
}

/***
 * `printQuote` function
***/

function printQuote() {
  getRandomQuote()
  htmlString = 
    `<p class = "quote"> ${randomQuote.quote} </p>
    <p class = "source"> ${randomQuote.source}`
      if (randomQuote.citation) {
        htmlString += `<span class = "citation"> ${randomQuote.citation} </span> </p>`
      } 
      if (randomQuote.year) {
        htmlString += `<span class = "year"> ${randomQuote.year} </span> </p>`
      }
    '</p>'
    document.getElementById('quote-box').innerHTML = htmlString; 
}

/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);