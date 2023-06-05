/*`````````SIMPLE JAVASCRIPT CHALLENGES FOR TASK 5``````````````

1) Create a function that will be able to convert figures from Fahrenheit to Celsius.
2) Create a function that will calculate the average of numbers in an array.
3) Create a function that checks if a number, n is divisible by two numbers x and y. All inputs are positive, non-zero digits.
4) Create a function that will output the first 100 prime numbers.
5) Create a function that will return a boolean specifying if a number is a prime number.
6) Create a function that receives an array of numbers of diverse numbers and returns an array containing only positive numbers.
7) Write a program that prints the numbers from 1 to 100. But for multiples of 3 prints 
"Fizz" instead of the number and for the multiples of 5 prints "Buzz". 
For numbers which are multiples of both 3 and 5 prints "FizzBuzz".
8) The marketing team is spending way too much time typing in hashtags. Let’s create a hashtag generator for them, our hashtag generator will meet the following criteria; 
        <it must start with a hash symbol, #.
        <Ignore all spaces in the input.
        <All words must have their first letter capitalized.
        <If the final result is going to be longer than 140 characters, it should return false.
        <If the input or result is an empty string, it should return false.*/

console.log("\n"); //Skip lines

// ``````````````````````QUESTION 1```````````````````````

console.log("<QUESTION ONE> \n"); //Numbering the questions

function figures(Celsius) {
  let celsiusCal = Celsius * 1.8 + 32;
  console.log(celsiusCal);
}
figures(9); //figures(48.2s)

console.log("\n"); //Skip lines

// ``````````````````````QUESTION 2```````````````````````

console.log("<QUESTION TWO> \n");

function averageNumber(array_num) {
  let average = array_num;
  let arr = [];
  let i = [];

  for (i = 0; i <= 20; i++) {
    arr.push(i);
    // console.log(arr);
  }
  let totalResult = arr.reduce((a, b) => {
    return a + b;
  }); //Sum up the array list or items

  let sumOfArray = totalResult;

  let noOfArr = arr.length;
  //console.log(noOfElement); //Length of array Test the number of le

  average = sumOfArray / noOfArr; //Average calculation by diving sum by number of items

  console.log(average); // result of the average
}
averageNumber(); //average(10)

console.log("\n"); //Skip lines

// ``````````````````````QUESTION 3```````````````````````

console.log("<QUESTION THREE> \n");
function numberDivisible(n) {
  let x = 2;
  let y = 3;
  if (n == 2) {
    console.log(n / x);
  } else if (n == 4) {
    console.log(n / x);
  } else if (n == 8) {
    console.log(n / x);
  } else if (n == 3) {
    console.log(n / y);
  } else if (n == 6) {
    console.log(n / y);
  } else if (n == 9) {
    console.log(n / y);
  } else if (n == 5 || n == 7) {
    console.log("NOT DIVISIBLE: It has a remainder");
  } else {
    console.log("Not part Of Non-Zeros");
  }
}
numberDivisible(8); //numberDivisible(insert any number from 1-9)

console.log("\n"); //Skip lines

// ``````````````````````QUESTION 4```````````````````````

console.log("<QUESTION FOUR> \n");

function primeNumber(listPrimes) {
  let getPrimes = listPrimes + 0;
  switch (getPrimes) {
    case 2:
      {
        console.log(2, "is a prime number");
      }
      break;
    case 3:
      {
        console.log(3, "is a prime number");
      }
      break;
    case 5:
      {
        console.log(5, "is a prime number");
      }
      break;
    case 7:
      {
        console.log(7, "is a prime number");
      }
      break;
    case 11:
      {
        console.log(11, "is a prime number");
      }
      break;
    case 13:
      {
        console.log(13, "is a prime number");
      }
      break;
    case 17:
      {
        console.log(17, "is a prime number");
      }
      break;
    case 19:
      {
        console.log(19, "is a prime number");
      }
      break;
    case 23:
      {
        console.log(23, "is a prime number");
      }
      break;
    case 29:
      {
        console.log(29, "is a prime number");
      }
      break;
    case 31:
      {
        console.log(31, "is a prime number");
      }
      break;
    case 37:
      {
        console.log(37, "is a prime number");
      }
      break;
    case 41:
      {
        console.log(41, "is a prime number");
      }
      break;
    case 43:
      {
        console.log(43, "is a prime number");
      }
      break;
    case 47:
      {
        console.log(47, "is a prime number");
      }
      break;
    case 53:
      {
        console.log(53, "is a prime number");
      }
      break;
    case 59:
      {
        console.log(59, "is a prime number");
      }
      break;
    case 2:
      {
        console.log(61, "is a prime number");
      }
      break;
    case 67:
      {
        console.log(67, "is a prime number");
      }
      break;
    case 71:
      {
        console.log(71, "is a prime number");
      }
      break;
    case 73:
      {
        console.log(73, "is a prime number");
      }
      break;
    case 79:
      {
        console.log(79, "is a prime number");
      }
      break;
    case 83:
      {
        console.log(83, "is a prime number");
      }
      break;
    case 89:
      {
        console.log(89, "is a prime number");
      }
      break;
    case 97:
      {
        console.log(97, "is a prime number");
      }
      break;
    default:
      {
        if (listPrimes > 100) {
          console.log("Sorry it's above 100");
        } else {
          console.log(
            "The number you selected is not a prime number from 1-100"
          );
        }
      }
      break;
  }
}
primeNumber(7); //primeNumber(7 is a prime number)

console.log("\n"); //Skip lines

// ``````````````````````QUESTION 5```````````````````````

console.log("<QUESTION FIVE> \n");

function checkBoolean(booleanValue) {
  let i = booleanValue + 0;
  if (
    i == 2 ||
    i == 3 ||
    i == 5 ||
    i == 27 ||
    i == 13 ||
    i == 17 ||
    i == 19 ||
    i == 23 ||
    i == 29 ||
    i == 31 ||
    i == 37 ||
    i == 41 ||
    i == 43 ||
    i == 47 ||
    i == 53 ||
    i == 59 ||
    i == 61 ||
    i == 67 ||
    i == 71 ||
    i == 73 ||
    i == 79 ||
    i == 83 ||
    i == 89 ||
    i == 97
  ) {
    console.log(true);
  } else {
    console.log(false);
  }
}

checkBoolean(23); //checkBoolean(23)

console.log("\n"); //Skip lines

// ``````````````````````QUESTION 6```````````````````````

console.log("<QUESTION SIX> \n");

// 6) Create a function that receives an array of numbers of diverse numbers and returns an array containing only positive numbers.
// function positiveNumbers() {

function returnPositives(array) {
  const positiveArr = array.filter((numInteger) => numInteger > -1);
  console.log(positiveArr);
}
returnPositives([-5, 10, -3, 12, -9, 5, 90, 0, 1]); //returnPositives [ 10, 12, 5, 90, 0, 1 ]

console.log("\n"); //Skip Lines

// ``````````````````````QUESTION 7```````````````````````

console.log("<QUESTION SEVEN> \n");

console.log("\nBelow are the numbers from 1 -100");

for (let numberList = 0; numberList <= 100; numberList++) {
  console.log(numberList);
}
console.log("\nBelow are the numbers for multiples of 3");

for (let multipleNumber = 1; multipleNumber <= 100; multipleNumber++) {
  if (multipleNumber % 3 === 0) {
    // console.log(multipleNumber);
    console.log("Fizz");
  }
}

console.log("\nBelow are the multiples of 5");

for (let multipleNumber = 1; multipleNumber <= 100; multipleNumber++) {
  if (multipleNumber % 5 === 0) {
    // console.log(multipleNumber)
    console.log(multipleNumber);
  }
}

console.log("\n Below are the multiples of 3 and 5 altogether");

for (let multipleNumber = 1; multipleNumber <= 100; multipleNumber++) {
  if (multipleNumber % 3 === 0 || multipleNumber % 5 == 0) {
    // console.log(multipleNumber);
    console.log("FizzBuzz");
  }
}
console.log("\n");
// ``````````````````````QUESTION 8```````````````````````

console.log("<QUESTION EIGHT> \n");

function tagGenerator(string) {
  let hashTagNames = string;

  if (string) {
    const strLetter =
      hashTagNames.charAt(0).toUpperCase() + hashTagNames.slice(1);
    console.log(`#${strLetter}`);
  } else if (string === "") {
    console.log(false);
  } else if (hashTagNames.length > 140) {
    console.log("false");
  } else if (hashTagNames === "") {
    console.log(false);
  }
}
tagGenerator("Twitter"); //tagGenerator(#Twitter)

console.log("\n"); //Skip lines
