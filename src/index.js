// const let
// var val1 = "variable";
// console.log(val1);

// var 上書き可能
// val1 = "variable2";
// console.log(val1);

// var 再宣言可能
// var val1 = "variable3";
// console.log(val1);

// let val2 = "let variable";
// console.log(val2);
// val2 = "let variable updated";
// console.log(val2);

// letは再宣言不可能
// let val2 = 'let variable3'

// const val3 = "const variable";
// console.log(val3);

// val3 = 'const variable2'
// const val3 = 'const variable3'

// const val4 = {
//   name: "yoshi",
//   age: 43
// }

// // console.log(val4);

// val4.name = 'Nobu';

// console.log(val4);
// val4.address = 'Tokyo'

// const val5 = ["dog", "cat"];
// val5.push('monkey')
// val5[0] = 'bird'
// console.log(val5);

// const name = "Yoshi";
// const age = 43;

// console.log(`My name is ${name}, I am ${age} years old`);

// Arrow Function
// function func1(string) {
//   return string;
// }

// const func1 = function (str) {
//   return str;
// };

// console.log(func1("Yoshi"));

// const func2 = (str) => str;
// console.log(func2("Mariko"));

// const func3 = (num1, num2) => num1 + num2;

// console.log(func3(10, 20))

// 分割代入
// const myProfile = {
//   name: 'Yoshi',
//   age: 43,
// };

// const message1 = `My name is ${myProfile.name}, I am ${myProfile.age} years old`;

// console.log(message1);

// const { name , age } = myProfile

// const message2 = `My name is ${name}, I am ${age} years old!!`;
// console.log(message2)

// const myProfile = ['Mariko', 32];
// const [ name, age ] = myProfile;
// const message4 = `Her name is ${name}, she is ${age} years old!!`
// console.log(message4);

// const sayHello = (name="mariko") => console.log(`Hello ${name}!!!`);
// sayHello();

// スプレッド構文...
// 配列の展開
// const arr1 = [1,2];
// console.log(arr1);
// console.log(...arr1);

// const sumFunc = (x, y) => console.log( x + y );
// sumFunc(...arr1)

// スプレッド構文...
// まとめる
// const arr2 = [1, 2, 3, 4, 5];
// const [num1, num2, ...arr3] = arr2;
// console.log(num1);
// console.log(num2);
// console.log(arr3);

// スプレッド構文...
// 配列のコピー、結合

// const arr4 = [10, 20];
// const arr5 = [30, 40];

// const arr6 = [...arr4];

// console.log(arr6)

// const arr7 = [...arr4, ...arr5];
// console.log(arr7);

// map, filterを使った配列の処理

// const nameArr = ["Tanaka", "Yamada", "Suzuki"];

// for(let i = 0; i < nameArr.length; i++) {
//   console.log(`${i+1}番目は${nameArr[i]}です`);
// }

// nameArr.map((name, idx) => console.log(`#${idx+1}: ${name}`))
// const nameArr2 = nameArr.map((name) => {return name});
// console.log(nameArr2)

// nameArr.map((name) => console.log(name));

// const numArr = [1,2,3,4,5];

// const newNumArr = numArr.filter((num) => {
//   return num % 2 === 0;
// })
// console.log(newNumArr);

// const newNameArr = nameArr.map((name) => {
//   if (name === "Tanaka") {
//     return name;
//   } else {
//     return `${name} さん`;
//   }
// });
// console.log(newNameArr);

// 三項演算子
// const val1 = 1 > 0 ? 'This is true' : 'This is false';
// console.log(val1);

// const num = 1300;
// console.log(num.toLocaleString());

// const formattedNum = typeof num === 'number' ? num.toLocaleString() : '数値を入力していください';

// console.log(formattedNum);

// const checkSum = (num1, num2) => {
//   return num1 + num2 > 100 ? 'Over 100!!!' : 'OK below 100';
// }

// console.log(checkSum(20, 20))

// 論理演算子
// const flag1 = true;
// const flag2 = false;

// if(flag1 || flag2) {
//   console.log("1 or 2 is true")
// }

// if(flag1 && flag2) {
//   console.log("1 or 2 is true")
// } else {
//   console.log("1 or 2 is false")
// }

// \\は左側がfalseなら右側を返す
// const num = 100;
// const fee = num || "Undefined";
// console.log(fee);

// &&は左側がtrueなら右を返す
const num2 = 100;
const fee2 = num2 && "something is set";
console.log(fee2);
