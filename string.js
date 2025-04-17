//-------------------------- METHODS OF STRINGS-----------------------

//----------------------valueof method of string--------------------
// const stringObj = new String("foo");
// console.log(stringObj);
// console.log(stringObj.valueOf());


//------------------- split method of String----------------
// const str = "The quick brown fox jumps over the lazy dog.";
// const words = str.split(" ");
// console.log(words[3]);
// const chars = str.split("");
// console.log(chars[8]);
// const strCopy = str.split();
// console.log(str.split());


//--------------------------- slice method of String------------------------
// const str = "The quick brown fox jumps over the lazy dog.";
// console.log(str.slice(31));
// console.log(str.slice(4, 19));
// console.log(str.slice(-4));
// console.log(str.slice(-9, -5));


//--------------- replace&replaceAll method of String-------------------
// const paragraph = "I think Ruth's dog is cuter than your dog!";
// console.log(paragraph.replace("Ruth's", "my"));
// const regex = /Dog/i;
// console.log(paragraph.replace(regex, "ferret"));
// console.log("xxx".replace("", "_"));
// console.log("xxx".replaceAll("", "_"));
// const str = "Twas the night before Xmas...";
// const newstr = str.replace(/xmas/i, "Christmas");
// console.log(newstr);



//---------------- pad method of String--------------------
// const str1 = "Breaded Mushrooms";
// console.log(str1.padEnd(25, "."));
// const str2 = "200";
// console.log(str2.padEnd(5));
// const str1 = "5";
// console.log(str1.padStart(2, "0"));
// const fullNumber = "2034399002125581";
// const last4Digits = fullNumber.slice(-4);
// const maskedNumber = last4Digits.padStart(fullNumber.length, "*");
// console.log(maskedNumber);


//------------------ charAt method of String-----------------
// const sentence = "The quick brown fox jumps over the lazy dog.";
// const index = 4;
// console.log(`The character at index ${index} is ${sentence.charAt(index)}`);


// function palindrome(str) {
//     return str === str.split("").reverse().join("");
// }
// console.log(palindrome("eye"))
