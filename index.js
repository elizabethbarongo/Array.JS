 const arr1 = [3,7,34,90,12];
 const lastElementArr1 = arr1[arr1.length - 1];
 console.log({lastElementArr1});

 const arr2 = [true, "green", "where",12,56];
 const lastElementArr2 = arr2[arr2.length - 1];
 console.log({lastElementArr2});


 const myPets = ["Cow", "Bird", "Snake", "Dog"];
let myNewPets = myPets.toString();
console.log({myNewPets});

var arr3 = [ -5, 9, 5, 3, 2, -3, 6, 8, 4, 1 ];
 let newArr3= arr3.sort((a, b) => a - b);
 console.log({newArr3});

 
 
let arr = ["boy", "man", "girl", "school", "girl", "woman"];
function removeAndFindDuplicates(arr) {
    let uniqueArr = [...new Set(arr)];
    let duplicatesArr = arr.filter(item => arr.indexOf(item) !== arr.lastIndexOf(item));

    return { uniqueArr, duplicatesArr };
}

let { uniqueArr, duplicatesArr } = removeAndFindDuplicates(arr);

console.log("Array without duplicates:", uniqueArr);
console.log("Array with duplicates:", duplicatesArr);


 
let arr5 = ["the", "way", "x", 4];

if (arr5.includes("food")) {
  console.log("food");
} else {
  console.log("The search word was not found");
}


let word = "renniw";
let sortedWord = word.split('').sort().join('');
console.log(sortedWord); 


let fruits = ["Apple", "Banana", "Cherry", "Date", "Pineapple", "Melon", "Grape", "Orange", "Kiwi", "Lemon"];
fruits[5] = "Tomato";
console.log(fruits);
