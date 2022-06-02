var num=[1,2,3,4,5,6];
var sum_cube=0
num.forEach(function(item){
  if(item%3==0)
    sum_cube+=item*item*item;
});
console.log(sum_cube)