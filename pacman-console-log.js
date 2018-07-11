// pacman-console-log.js

console.log('Pac-Man eats ghosts for lunch.');
// i am a comment
/* I am a multiple comment line  */
/*
There are several data types that are primitives and one Object data type. A primitive data type is a basic building block of the language.

Undefined
Null
Boolean
Number
String
Object (not a primitive)
*/

ghost = 'Inky';

ghost

typeof(ghost);
//'string' // JavaScript automatically made 'ghost' a 'string' data type
var numberOfGhost = 4 ;

typeof(numberOfGhosts);
//'number' // JavaScript automatically made 'numberOfGhosts' a 'number' data type

/*

Notice how we used camel case for the numberOfGhosts
variable, instead of underscores, like we do in Ruby
(e.g. number_of_ghosts). Technically you could use underscores
in your variable names, but the convention in JavaScript is
camel case: the first word of the variable is all lowercase,
and capitalize the first letter of each word following (if any).

*/
var ghost = 'Inky';
console.log(ghost);

ghost = 'Blinky';
console.log(ghost);

var name = 'Pac-Man';
console.log(name);

/*By convention in JavaScript, developers prefer single-quotes unless double-quotes
are needed (i.e.because the string has a single-quote
within it).
*/
//concatenate (join together) strings together using a +

var num_ghosts =4 ;
var name = 'Pac-Man';
var sentence  = 'Our hero, ' + name + ', must eat ' + num_ghosts + ' ghosts for maximum points.';
console.log(sentence);
//Strings have the length property and many useful methods.
var name = 'Pac-Man'
name.length
nameUpperCase= name.toUpperCase()
console.log(nameUpperCase);
replaceName = name.replace('Man', 'Woman')
console.log(replaceName);
/*
The following are falsey:

undefined
null
false
0
NaN
'' (empty string)
*/

/*
In Ruby, we use Integers (Fixnum) for whole numbers,
and Floats for numbers with a decimal.
But in JavaScript, there's just Number, which are always floats,
even if they look like Integers sometimes.
*/
