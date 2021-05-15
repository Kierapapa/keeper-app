import React from 'react'
import EmojiList from '../components/EmojiList'
import emojipedia from '../emojipedia'

//1. Create Entry Component
//2. Create props to replace hardcoded data
//3a. Import the emojipedia const
//3b. Map through the emojipedia array and render Entry component
// var numbers = [3, 56, 2, 48, 5];

//Map -Create a new array by doing something with each item in an array.

// function double(x) {
//   return x * 2;
// }
// const newNumbers = numbers.map(double);

// var newNumbers = [];
// numbers.forEach(function (x) {
//   newNumbers.push(x * 2);
// });

// const newNumbers = numbers.map(function (x) {
//   return x * 2;
// });

// console.log(newNumbers);

//Filter - Create a new array by keeping the items that return true.

// const newNumbers = numbers.filter(function(num) {
//   return num < 10;
// });

// var newNumbers = [];
// numbers.forEach(function(num) {
//   if (num < 10) {
//     newNumbers.push(num);
//   }
// })

//Reduce - Accumulate a value by doing something to each item in an array.

// var newNumber = numbers.reduce(function (accumulator, currentNumber) {
//   console.log("accumulator = " + accumulator);
//   console.log("currentNumber = " + currentNumber);
//     return accumulator + currentNumber;
// })

// var newNumber = 0;
// numbers.forEach(function (currentNumber) {
//   newNumber += currentNumber
// })

//Find - find the first item that matches from an array.

// const newNumber = numbers.find(function (num) {
//   return num > 10;
// })

// console.log(newNumber);

//FindIndex - find the index of the first item that matches.

// const newNumber = numbers.findIndex(function (num) {
//   return num > 10;
// })

// console.log(newNumber);

// var numbers = [3, 56, 2, 48, 5];

// const newNumbers = numbers.map(x => x * x);

//Map -Create a new array by doing something with each item in an array.
// const newNumbers = numbers.map( x => x * 2);

////Filter - Create a new array by keeping the items that return true.
// const newNumbers = numbers.filter(num => num < 10);

//Reduce - Accumulate a value by doing something to each item in an array.
//const newNumber = numbers.reduce((accumulator, currentNumber) => accumulator + currentNumber);

//Find - find the first item that matches from an array.
// const newNumber = numbers.find(num => num > 10);

//FindIndex - find the index of the first item that matches.
// const newNumber = numbers.findIndex(num => num > 10);


const EmojiPedia = () => {
    return (
        <div className="emojipedia-container">
            <h1>
                <span>EmojiPedia</span>
            </h1>
            <dl className="dictionary">
                {emojipedia.map(emoji => 
                    <EmojiList 
                    key={emoji.id}
                    id={emoji.id}
                    emoji={emoji.emoji}
                    name={emoji.name}
                    meaning={emoji.meaning}
                    />
                )}
            </dl>
        </div>
    )
}

export default EmojiPedia
