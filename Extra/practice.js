// Ex 1

function repStr(string,num){
    
    let word = '';
    for (i=0; i<num; i++){
    word = word + string;
    }

    console.log(word);
}

// repStr('Boo',4)

// Ex 2


let word = 'history';
let word2 = 'makers';

    let output = 'Ishad ' + 'Shafna'

    let name = word + word2;

    console.log(name);

    console.log(output);

 
    let text1 = 45; 


//     let text2 = text1.toString().padStart(5,'X') 

//     console.log(text2);
    
//     let text = "Please visit Microsoft & Microsoft!"; 

// console.log(text.replace(/Microsoft/g,"Schools")); 



// let text = "I love cats. Cats are very easy to love. Cats are very popular." 

// text = text.replace(/Cats/i,"Dogs"); 

// text = text.replaceAll("cats","dogs"); 

// console.log('     ')

let myArray = [['a','b'],'c','d','e'];

myArray.push('mow')

myArray.pop('mow')

console.log(myArray);

function myFun(a, b, ...manyMoreArgs) {
    console.log("a", a);}
  
  myFun("one", "two", "three", "four", "five", "six");
  
  // Console Output:
  // a, one
  // b, two
  // manyMoreArgs, ["three", "four", "five", "six"]






  function longestString() {
    let longest = "";
    for (let i = 0; i < arguments.length; i++) {
      if (arguments[i].length > longest.length) {
        longest = arguments[i];
      }
    }
    return longest;
  }

  console.log(longestString(81132,43,'siad','sataa'));

  

  function myFun(a, b, ...manyMoreArgs) {
    console.log("A", a);
    console.log("B", b);
    console.log("manyMore", manyMoreArgs);
  }
  
  myFun("one");
  
  // Console Output:
  // A, one
  // B, two
  // manyMore, ["three", "four", "five", "six"]
  




// Implement a function that takes an array and some other arguments then removes the other arguments from that array:

// ```javascript
// removeFromArray([1, 2, 3, 4], 3); // should remove 3 and return [1,2,4]
// ```


const removeFromArray = function (array, ...args) {
    // create a new empty array
    const newArray = [];
    // use forEach to go through the array
    array.forEach((item) => {
      // push every element into the new array
      // UNLESS it is included in the function arguments
      // so we create a new array with every item, except those that should be removed
      if (!args.includes(item)) {
        newArray.push(item);
      }
    });
    // and return that array
    return newArray;
  };
  

// let fruits = ["Apple", "Banana", "Mango", "Orange","Papaya"];

// let index = fruits.indexOf("Apple"); // Find the index of the element to remove

// console.log(index);

// if (index !== -1) {
//   fruits.splice(index, 2); // Remove 1 element at the specified index
// }

// console.log(fruits); // Output: ["Apple", "Banana", "Orange"]




 
// let textString = "isd mohd"; 
// let myArray = textString.split(""); 
// console.log(Array.isArray(myArray));


// console.log(textString);
// console.log(myArray);

    
    // output: 		Length text1 = 22 
        //          Length text2 = 12 