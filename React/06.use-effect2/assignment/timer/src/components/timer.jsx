import {useState,useEffect} from "react";

export const  Timer = () =>{

    const [timer,setTimer] = useState(0);

    useEffect(() =>{
        let Id = setInterval(() =>{
            setTimer((prevCount)=>{
                if(prevCount+1===59){
                    clearInterval(Id)
                }
                return prevCount + 1
            })
        },500)
        return () =>{
            clearInterval(Id)
        }
    },[])
    return(
    <div>
        Timer:{timer}
    </div>
    )
}
