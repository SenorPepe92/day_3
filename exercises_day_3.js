// Exercises: Arrays
// Working with Arrays
// Starting with an empty array called rainbowColors:

// Add "orange" to the end of the array
// Add "red" to the start of the array
// Add "yellow" to the end
// Add "green", "blue", "indigo", and "violet" to the end of the array
// Try and do this using one method
// Log out the length of the array
// Log out the second item
// Log out the last item (make this flexible/dynamic!)
// Log out the index of the string "blue"
// Bonus: Find out the difference between .slice and .splice
// Create an array called twoColors using one method - don't change the rainbowColors array! Essentially pull two colors out of the array (say, between the index of 1 and 3)
const twoColors = rainbowColors.slice(1, 3)
twoColors
(2) ['orange', 'yellow']
// Starting with this array var nums = [0, 1, 2, 2, 2, 3, 3, 4, 5];, remove the duplicates destructively using slice or splice (whichever one is appropriate)
nums.splice(3, 3)
(3) [2, 2, 3]

// Bonus: Work with arrays of arrays
// Starting with this array var arrOfArrs = [["inner array first item", "inner array second item"], ["first", "second", "third"]];
var arrOfArrs = [["inner array first item", "inner array second item"], ["first", "second", "third"]]
// Access "inner array first item" and print it out"
arrOfArrs[0][0]
'inner array first item'
// Print "third" by using a dynamic index
arrOfArrs[1][arrOfArrs[1].length -1]
'third'
// Bonus Bonus: Loop through the second inner array! Print out first, then second, then third
for (let i = 0; i < arrOfArrs[1].length; i++) { 
    console.log(arrOfArrs[1][i]);
}

// Your top choices
// Create an array to hold your top five choices of something (dogs, books, presidents, whatever). If you choose movies, the right top choice is "Satantango".
let gadgets = ['tablet', 'watch', 'camera', 'phone', 'laptop']
// For each choice, log to the screen a string like: "My #1 choice is blue."

// First Answer
let gadgetsChoice = function(choice) {
    console.log(`My #${choice} choice is ${gadgets[choice +1]}`)
}
//For Loop answer

let gadgetsChoice = function(choice) {
    console.log(`My #${choice} choice is ${gadgets[choice-1]}`)
}

for (i = 1; i < (gadgets.length+1); i++) {
    gadgetsChoice(i);
}

// Bonus: Change it to log "My 1st choice, "My 2nd choice", "My 3rd choice", picking the right suffix for the number based on what it is.
// 1st 2nd 3rd 4th 5th 

let gadgetsChoice = function(choice) {
    if (choice == 1) {
        console.log(`My ${choice}st choice is ${gadgets[choice-1]}`)
    }
    if (choice == 2) {
        console.log(`My ${choice}nd choice is ${gadgets[choice-1]}`)
    }
    if (choice == 3) {
        console.log(`My ${choice}rd choice is ${gadgets[choice-1]}`)
    }
    if (choice == 4 || choice == 5) { // The || is a the symbol for 'or', && is the symbol for 'and'
        console.log(`My ${choice}th choice is ${gadgets[choice-1]}`)
    }
    else {
        console.log(`Please enter a number between 1 and 5`)
    }
}