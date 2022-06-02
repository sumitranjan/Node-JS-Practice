var num=[1,2,3];
var arr=[]

num.forEach(function(item){
  if(item%2==1)
    arr.push(item)
});
console.log(arr)