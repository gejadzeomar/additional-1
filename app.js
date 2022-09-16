

const myName = "Omar" ,
    myHobby = "codding" ,
    yearOfBirth = 1989 ,
    currentYear = 2022 ;

    let aboutMe = "My name is " 
    + myName +  " I am " +
     (currentYear - yearOfBirth) + 
     " years old and my hobby is " + 
     myHobby; 
    
// console.log(aboutMe);
myAge = (currentYear - yearOfBirth);
let user = {
    name: "Omar",
    yearOfBirth: 1989,
    age: myAge,
    adress: "tbilisi",
    email: "example@gmail.com",
    tel: {
        home: 12345678,
        mob: 598123456
    },

}


// console.log(user);


let myArr = [2, 5, 9, 7, 4];
let myArrLength = myArr.length;
let myArrSum = myArr[0] + myArr[1] + myArr[2] + myArr[3] + myArr[4];
let myArrAvverage = myArrSum / myArrLength;
// console.log('averrage is ' + myArrAvverage);

let person = {
    firstname: "Nino",
    lastName: "Arveladze",
    age: 20,
    phoneNumbers: [123456, 654321],
    adress: ["Tbilisi", "Kutaisi"],  
};
// // console.log(person);

// let myObjArr = [
//     {name: "nino", age: 10},
//     {name: "tea", age: 15},
//     {name: "gio", age: 20},
//     {name: "nika", age: 25},
//     {name: "saba", age: 22},
// ]
// console.log(myObjArr)

// let personObjNino = myObjArr[0];
// console.log(personObjNino);

// console.log("my name is" + person.firstname, "my age is " + person.age, 'my adress is ' + person.adress[0]);

// console.log(person.firstname)

let totalPrice = 200;
let distance = 15;
let deliveryPrice = 10;

// if(distance < 10){
//     console.log("delivery price is 20$")
// }

// console.log('example text');

// if(distance < 10){
//     console.log("delivery price is 20$")
// } else {
//     console.log("delivery price is 100$")
// }

// console.log('example text');

// if(distance < 10) {
//     console.log("delivery price is 20$")
// } else if(distance >= 10 < 20) {
//     console.log("delivery price is 30$")
// } else if(distance >= 20 && distance < 50) {
//     console.log("delivery price is 40$")
// } else {
//     console.log("delivery price is 0$")
// }
// console.log('example text');

// if (distance < 10 || totalPrice >= 200) {
//     console.log('delivery price is 20$');
// }

// switch (distance) {
//     case 10:
//         console.log('delivery price is 10$');
//         break;

//     case 20:
//         console.log('delivery price is 20$');
//         break;

//     default:
//         console.log('delivery price is 20$');
//         break;

// }

// console.log('example text');

// for (let i = 0; i < 10; i++) {
//     // console.log("text", i)
// }

// let i = 0;
// while (i < 3) {
//     console.log("text", i);
//     i++
// }

// let myArrFor = [2, 4, 6, 8, 10];
// let myArrForLength = myArrFor.length;
// console.log(myArrFor);
// let sumFor = 0;

// for (let index = 0; index < myArrForLength; index++) {
//     sumFor = sumFor + index;
//     console.log(sumFor, myArrFor[index]);
   
// }

// console.log(sumFor / myArrForLength);

// let j = 10;
// do {
//     console.log('do while', j);
//     j++;
// } while (j < 5);

let myArrFor = [2, 4, 6, 8, 10];
let sumFor = 0;
for (let index = 0; index < myArrFor.length; index++) {
    sumFor = sumFor + myArrFor[index];
    averrage = sumFor / myArrFor.length;
    console.log(sumFor);
    console.log("average is ", averrage);
}


