// // // let a=[1,2,3,4,"sachin",5,6,"manoj"]

// // // let newarr = a.slice(-4,-2)

// // // console.log(newarr)
// // // console.log(a)

// // let arr = [1,2,3,4,5,6,7,8,9];

// // let newArr = arr.filter((value)=>{
// //     if(value%2===0) return value;
// // })

// // console.log(arr);
// // console.log(newArr);



// let arr=[10,20,30,40,50]
// arr.shift(10)
// const fruits = ["Banana", "Orange", "Apple", "Mango"];

// console.log(fruits.shift())
// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// fruits.unshift("Lemon","Pineapple")
// console.log(fruits)

// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// //fruits.pop();
// console.log(fruits.pop())

// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// fruits.push("Kiwi","apple");
// console.log(fruits)

// const fruits = ["Banana", "Orange", "Apple", "Mango"];

// fruits.splice(2, 0, "Lemon", "Kiwi");
// console.log(fruits)

// const fruits = ["Banana", "Orange", "Apple", "Mango", "Kiwi"];
// fruits.splice(2, 2);
// console.log(fruits)

// const fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
// const myBest = fruits.slice(-4, -1);
// console.log(myBest)

// const fruits = [ "Banana", "Orange", "Apple", "Mango", "Kiwi"];
// fruits.splice(2, 2);
// console.log(fruits)
// const fruits = ["Banana", "Orange", "Apple", "Mango"];

// fruits.splice(2, 0, "Lemon", "Kiwi");
// console.log(fruits)


// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// fruits.fill("Kiwi");
// console.log(fruits)

// const fruits = ["Banana", "Orange", "Apple", "Mango","graps","abc"];
// fruits.fill("Kiwi", 2, 2);
// console.log(fruits)

// Array.from("ABCDEFG")
let str = "ABCDEFGHI"
let arr = str.split("");
console.log(arr);
let str2 = arr.join("");
console.log(str2);