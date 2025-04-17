//--------------- tostring method of Array--------------
// const array1 = [1, 2, "k645", "16"];
// let str=array1.toString()
// console.log(str)
// console.log(typeof str);


//--------------- unshift method of Array-----------
// The unshift() method of Array adds the specified elements to the beginning of an array and returns the new length of the array.
// const array1 = [1, 2, 3];
// console.log(array1.unshift(4, 5));
// console.log(array1);


//-------------- at method of Array----------------
// const array1 = [5, 12, 8, 130, 44];
// let index = 2;
// console.log(array1.at(index));
// index = -2;
// console.log(array1.at(index));


//---------------- findIndex method of array-------------
// const array1 = [5, 20, 12, 25, 18]; 
// const isLargeNumber = (element) => element < 13;
// console.log(array1.findIndex(isLargeNumber));


//------------- find method of Array--------------
// const array1 = [5, 20, 12, 25, 18]; 
// const found = (element) => element < 13;
// console.log(array1.find(found));


//--------------- indexOf method of Array----------------
// const beasts = ["ant", "bison", "camel", "duck", "bison"];
// console.log(beasts.indexOf("bison"));
// console.log(beasts.indexOf("bison", 2));
// console.log(beasts.indexOf("giraffe"));


//----------------- includes method of Array----------------
// const array1 = [101, 102, 103];  
// console.log(array1.includes(102));  
// const subjects = ["Math", "Science", "English"];  
// console.log(subjects.includes("Math"));  
// console.log(subjects.includes("Art"));


//--------------- filter method of array -----------------------
// const words = ["spray", "elite", "exuberant", "destruction", "present"];
// const result = words.filter((word) => word.length > 6);
// console.log(result);

//------------- filter ,map and reduce method of Array---------------
// const users = [
//     {
//         firstName: "Usman",
//         lastName: "Jamil",
//         age: 22,
//     },
//     {
//         firstName: "Elon",
//         lastName: "Musk",
//         age: 50,
//     },
//     {
//         firstName: "Rizwan",
//         lastName: "Khalil",
//         age: 34,
//     },
//     {
//         firstName: "Shafique",
//         lastName: "Javed",
//         age: 22,
//     },
//     {
//         firstName: "Iqbal",
//         lastName: "Khan",
//         age: 45,
//     }
// ];
// let output1 = users.filter((x) => x.age > 30)
// .map((x) => x.firstName + " " + x.lastName);
// console.log(output1);
// let output=users.reduce(function(acc,curr){
//     if(acc[curr.age]){
//         acc[curr.age]=++acc[curr.age]
//     }else{
//         acc[curr.age]=1
//     }
//     return acc;
// },{})
// console.log(output)


// ----------- performing same tasks with function and reduce method of Array-----------
// let arr = [4, 3, 5, 7, 2, 1];
// function findSum(arr) {
//     let sum = 0;
//     for (let i = 0; i < arr.length; i++) {
//         sum = sum + arr[i];
//     }
//     return sum;
// }
// console.log(findSum(arr));
// let output = arr.reduce(function (acc, crr) {
//     acc = acc + crr;
//     return acc;
// },0)
// console.log(output)


//----------------------- reduce method real life problem of Computing Average Ratings from Reviews------------------
// const ratings = [4.5, 3.8, 4.2, 5.0, 3.9];
// const averageRating = ratings.reduce((acc, rating) => acc + rating, 0) / ratings.length;
// console.log(averageRating.toFixed(2));