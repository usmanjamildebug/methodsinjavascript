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
// const performance = Object.groupBy(students, ({ subject }) =>
//     subject ="Math" ? "needs_improvement" : "passing"
// );
// console.log(performance);


//--------------- is method of Object---------------
// console.log(Object.is("Usman", "Sameer")); 
// console.log(Object.is(NaN, NaN)); 
// console.log(Object.is(-0, 0)); 
// const student = {};
// console.log(Object.is(student, {}));


//-------------- call, bind, apply method of Object-------------
// let name = {
//     firstname: "Usman",
//     lastname: "Jamil",
//     age: 22,
//     income: 50000,
//     tax: function () {
//         console.log(`Tax ratio is ${this.income % 30}% for the user ${this.firstname} ${this.lastname}`)
//     },
// }
// let name1 = {
//     firstname: "Akshay",
//     lastname: "Saini",
// }
// name1.__proto__ = name;
// function printFullName(hometown, state) {
//     console.log(this.firstname + " " + this.lastname + " from " + hometown + "," + state);
// }
// name.tax.call(name1);
// printFullName.apply(name, ["Lahore", "Punjab"]);
// printFullName.call(name1, "pune", "UP");
// let printMyName = printFullName.bind(name, "Lahore", "Punjab");
// printMyName();


//-------------shallow copy of Object------------there is two method for this first one is object.assign({},obj) and the other one is spread operator {...obj} but its drawback is that it only accessible for one object and not valid for nested objects.

//for nested objects we need the concept of deep copy which is to use the JSON.parse(JSON.stringify(obj)) but it also have drawback that is does not copy the functions and dates present in the parent object.
