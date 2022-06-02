// // function web15(message, web14) {
// //   console.log("hai" + " " + message);
// //   web14();
// // }

// // web15("I am student from web-15", web14);

// // function web14() {
// //   console.log("i am student from web-14 async");
// // }

// // function xyz() {
// //   console.log("some function");
// // }

// // xyz();

// // function statement
// // function xyz() {
// //   console.log("some function");
// // }

// // xyz();

// // // function expression
// // var b = function () {
// //   console.log("another function");
// // };

// // b()

// // forEach
// var names = ["prateek", "nrupul", "yogesh"];

// // console.log(names[0]);
// // console.log(names[1]);
// // console.log(names[2]);

// // for (var i = 0; i < names.length; i++) {
// //   console.log(names[i]);
// // }

// // names.forEach(someFunction);

// // function someFunction(item) {
// //   console.log(item);
// // }

// var nums = [64, 12, 12, 4, 5];
// // var arr = [];

// // nums.forEach(function (elem, index, array) {
// //   arr.push(elem);
// // });
// // console.log(arr);

// // order of parameters should be same

// // map -- > same as forEach but with one adv

// var res = nums.map(function (a) {
//   return a*2;
// });

// console.log(res);

// // forEach wont return anything -- undefined
// // map will return an array

// var arr = ["1", "2", "3", "4"]

// arr.map(myNum)

// function myNum(elem) {
//     return Number(elem)
// }

// filter

var words = ["abc", "abcd", "abcde", "abcddfe", "abcddety"];

// filter will also return like map

// var res = words.map(function (elem) {
//   return elem.length > 3;
// });

// console.log(res);

// whatever condition is true, filter will return those in form of array

// var ages = [10, 40, 12, 18, 20];

// var res = ages.filter(function (elem) {
//   return elem > 18;
// });

// console.log(res);
// // filter is also returning an array

var nums = [3, 8, 9, 6, 12];

var res = function (elem) {
  return elem % 2 == 1;
};

 console.log(nums.filter(res));


// reduce -- combine diff items to single item 





