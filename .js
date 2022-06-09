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