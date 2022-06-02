
let h2 = document.getElementById('count');
function counter () {

    let i = 100;
    let x = setInterval(function () {

        i = i - 1;
        // console.log('i:',i);

        h2.innerHTML=i; 
        if(i == 0){
            //How will clear Interval know which to clear?
            //For that  we need to give some identification to setInterval
            //store setInterval value to  x and passed it to clearInterval
    
            clearInterval(x);
        } 
    } , 1000);
}

counter();