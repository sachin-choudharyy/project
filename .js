//object----
// var a={
//     fname: "sachin",
//     lname: "choudhary",
//     age: 22,
//     favmoves :['abc','bcd','gba'],
//     add: {
//         city:"indore"
//     },
//     salary : function(){
//         return 20000;
//     },
//     fullname: function(){
//         return this.fname+ " "+this.lname
//     }
// }
// console.log(a)
// console.log(a.add.city)
// console.log(a.favmoves[1])
// console.log(a.salary())
// console.log(a.fullname())


// let school = {
// 	name: 'Vivekananda School',
// 	location : 'Delhi',
// 	established : '1971',
// 	displayInfo : function(){
// 		console.log(`${school.name} was established 
// in ${school.established} at ${school.location}`);
// 	}
// }
// school.displayInfo();

// let obj ={name:"sachin",age:22,phone:123456};
// console.log(obj);

// console.log(Object.keys(obj));

// let obj ={name:"sachin",age:22,phone:123456};
//  console.log(obj);
//  console.log(Object.keys(obj));
//  console.log(Object.values(obj));
//  console.log(Object.entries(obj));

//call back

// const first =(friend,callfriend) =>{
//     setTimeout( ()=>{
//         console.log(`i am busy i am talking to ${friend}.i will call you back`)
//   },5000)
//     callfriend()
// }
// const second = () =>{
//     console.log(`i call you back yes`)
// }
// first("sachin",second) 

//promises

// const hello =new Promise ( (resolev,reject)=>{
//       setTimeout( ()=>{
//           let number=[1,2,3,4,5]
//           resolev(number)
//           reject('error is this ')
//       } ,5000)    
// })
// hello.then( (number)=>{
//    console.log(number)

// }).catch( (error)=>{
//    console.log(error)
// })

// prototype

// const obj={
//     name:"sachin",
//     getName:function(){
//         return this.name
//     }
// }
// // console.log(obj)

// const obj1={
//     rollno:11,
//     class:1,
//     name:obj,
//    // name:"manish"
// }
// console.log(obj1.name.getName(),obj1.rollno)

// const myObject = {
//     city: 'Madrid',
//     greet() {
//       console.log(`Greetings from ${this.city}`);
//     }
//   }
  
//   myObject.greet(); // Greetings from Madrid
  
// const hello = {
//     name:'sachin',
//     hello1() {
//        console.log(`hello ${this.name}`)
//     }
// }
// hello.hello1()

// constructor function
// function Person (name,age) {
//     this.name = name,
//     this.age = age
// }

// // creating objects
// const person1 = new Person("sachin",25);
// const person2 = new Person("manish",27);
// console.log(person1.name, person1.age,"\n",person2.name, person2.age);


// hoisting

// sum(5,2)
// function sum(a,b)
// {
//     add=a+b
//     console.log(add)
// }

// console.log(num); // Returns 'undefined' from hoisted var declaration (not 6)
// var num; // Declaration
// num = 6; // Initialization
// console.log(num); // Returns 6 after the line with initialization is executed.


// console.log(num); // Returns 'undefined' from hoisted var declaration (not 6)
// var num = 6; // Initialization and declaration.
// console.log(num); // Returns 6 after the line with initialization is executed.

// a = 'Cran'; // Initialize a
// b = 'berry'; // Initialize b

// console.log(a + " " + b); // 'Cranberry'

