//----------- assign method of object---------
// const obj1 = { a: 1, b: 2 };
// const obj2 = { b: 4, c: 5 };
// const obj3 = Object.assign(obj1, obj2);
// console.log(obj3)
// console.log(obj1);
// console.log(obj3 === obj1);


//---------------create method of object--------------
// const student = {
//     age: 18,
//     isHuman:true,
//     printIntroduction: function () {
//         console.log(`My name is ${this.name}. Am I human? ${this.isHuman} and my age is ${this.age}`);
//     },
// };
// student.printIntroduction()
// const me = Object.create(student);
// me.name = "Usman Jamil";
// me.age = 22;
// me.printIntroduction();
// console.log(me)


//------------------ entries method of object-----------------
// const student = {
//     name:"Usman Jamil",
//     age: 22,
// };
// let arr=Object.entries(student);
// console.log(arr)
// for (const [key, value] of Object.entries(student)) {
//     console.log(`${key}: ${value}`);
// }


//---------------- fromEntries method of Object-----------------
// const student = [
//     ["name","Usman"],
//     ["Age", 42],
//   ];
//   const obj = Object.fromEntries(student);
//   console.log(obj);


//------------ keys method of Object----------------
// const student = {
//     name: "Usman Jamil",
//     age: 22,
//     taxPayed: false,
//   };
//   console.log(Object.keys(student));


//------------ values method of Object----------------
// const student = {
//     name: "Usman Jamil",
//     age: 22,
//     taxPayed: false,
//   };
//   console.log(Object.values(student));


//----------------- groupBy method of Object------------------
// const students = [
//     { name: "Usman Jamil", subject: "Math", grade: 85 },
//     { name: "Zahid", subject: "Science", grade: 45 },
//     { name: "Sameer", subject: "English", grade: 78 },
//     { name: "Usama", subject: "History", grade: 92 },
//     { name: "Saim", subject: "Math", grade: 30 },
// ];
// const performance = Object.groupBy(students, ({ grade }) =>
//     grade < 50 ? "needs_improvement" : "passing"
// );
// console.log(performance);


//--------------- is method of Object---------------
// console.log(Object.is("Usman", "Sameer")); 
// console.log(Object.is(NaN, NaN)); 
// console.log(Object.is(-0, 0)); 
// const student = {};
// console.log(Object.is(student, {}));



