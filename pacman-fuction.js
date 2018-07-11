// Named function
function eatDot() {
  console.log("MUNCH!");
}

// Anonymous function
// Here we assign the function to a variable instead of giving it a name directly
var eatDot = function() {
  console.log("MUNCH!");
}
/*

Functions are similar to methods in Ruby,
but they are also more powerful.
Technically speaking, the difference between
 a function and a method is that functions stand alone,
but methods are behaviours of an object.

JavaScript has first-order functions.
This means you can define functions on their own (without an object),
 you can store a function in a variable and you
 can provide a function as an argument to a different function!

*/
function eatDot() {
    console.log("MUNCH!");
  }
 eatDot();
MUNCH!
eatDot
//[Function: eatDot] // eatDot without () returns the actual function,
//but doesn't execute it
var highScores = [];
 function addHighScore(highScoreList, playerInitials, score) {
    var record = { player: playerInitials, score: score };
    highScoreList.push(record); // add record to array
  }
 highScores
[] // empty array to start
addHighScore(highScores, 'SDL', 2000);
highScores
[ { player: 'SDL', score: 2000 } ]
addHighScore(highScores, 'JSL', 10000);
 highScores
[ { player: 'SDL', score: 2000 },
  { player: 'JSL', score: 10000 } ]
