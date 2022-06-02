//reduce

var arr = [3,5,6,7];

// var sum=10;
// for(var i=0;i<arr.length;i++){
//     sum+=arr[i];
// }

// console.log(sum);

// whenever you want to get single value as out --> reduce
// accumulator is similar to sum

var res = arr.reduce(function (sum, currentValue){
    return sum+currentValue; //stored in sum
});

console.log(sum);

//sum=10 --> cv = 3 -->10+3 --> sum=13;
//sum=13 --> cv = 5 -->13+5 --> sum=18;
//sum=18 --> cv = 6 -->18+6 --> sum=24;
//sum=24 --> cv = 7 -->24+7 --> sum=32;

// whenever there is no initial value, it will take 1st element if arr as initial


//sum=3 --> cv = 5 -->3+5 --> sum=8;
//sum=8 --> cv = 6 -->8+6 --> sum=14;
//sum=14 --> cv = 7 -->14+7 --> sum=21;