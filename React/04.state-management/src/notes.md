//Child ==> parent

function App(data){
    const handleChange = (value) =>{
        console.log("Hello", value);
    }

    return First(handleChange);
}

function FIrst(handleChange){
    const data = "test";
    handleChange(data);
}