// Given an array of numbers generate an array containing the double value of the numbers

// Sample Input [1, 2]
// Sample Output [2, 4]
var num=[1,2];
var arr=[];
num.forEach(function(item){
  arr.push(item*2)
});
console.log(arr)