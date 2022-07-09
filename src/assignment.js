// ========================
// DO NOT EDIT THIS BLOCK
const assignment = {};
// ========================


/**
 * Challenge - 1
 * 
 * Calculate and return the sum of the numbers in an array.
 * If you did Challenge - 1, remove the comment in the line just after this function
 * 
 * @param {Array} arrayOfNumbers the array of numbers to sum
 * @returns number the sum of the numbers
 */
let sum = 0;
function sumOfNumbers(arrayOfNumbers) {
  for(i=0; i<arrayOfNumbers.length;i++){
    sum += arrayOfNumbers[i];
  }
return arrayOfNumbers.length;
}
const array = [1,2,3,4,5,6];
sumOfNumbers(array);
console.log(sum)


/**
 * Challenge - 2
 * 
 * Count all even numbers within an array of numbers.
 * If you did Challenge - 2, remove the comment in the line just after this function
 * 
 * @param {Array} arrayOfNumbers the array containing even or non-even numbers
 * @returns number the count of even numbers
 */

const even = [];
function countEvenNumbers(arrayOfNumbers){
  arrayOfNumbers.forEach(number =>{
    if(number % 2 === 0){
      even.push(number)
    }
  })
  return even.length;
}
const array2 = [1,2,3,4,5,6,7,8,9,10,12,8];
countEvenNumbers(array2)
console.log(even.length)



/**
 * Challenge - 3
 * 
 * Given an array of numbers representing temperatures in Celsius,
 * convert each number to Fahrenheit and return a new array containing the converted
 * temperatures in Fahrenheit. Decimal figures in the converted values in Fahrenheit should be removed.
 * E.g 51.21 should just be 51 (hint: Math.trunc(...) function)
 * If you did Challenge - 3, remove the comment in the line just after this function
 * 
 * See https://www.thoughtco.com/celcius-to-farenheit-formula-609227 for the conversion formula
 * 
 * @param {Array} arrayOfNumbers the array containing temperatures in Celsius to be converted
 * @returns Array the converted temperatures in Fahrenheit
 */

newDegree = []
function celsiusToFahrenheit(arrayOfNumbers) {
  arrayOfNumbers.forEach(number => {
    let x = Math.trunc(number)
    let degreeInCelcius = (x * 1.8) + 32

    newDegree.push(degreeInCelcius)
  })
    return newDegree;
}
const degreeinInFahrenheit = [49, 59.2, 25, 94.0]
celsiusToFahrenheit(degreeinInFahrenheit)
console.log(newDegree)

// assignment.celsiusToFahrenheit = celsiusToFahrenheit;


// ========================
// DO NOT EDIT THIS BLOCK
module.exports = assignment;
// ========================

