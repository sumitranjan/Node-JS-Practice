var num=[1,2,3,4];
var sum=0
num.forEach(function(item){
  if(item%2==1)
    sum+=item;
});
console.log(sum)