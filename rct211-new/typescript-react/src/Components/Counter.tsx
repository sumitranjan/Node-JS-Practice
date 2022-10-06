import React, { useState } from 'react'
import Button from './Button'
import Header from './Header'

const Counter = () => {
    //Array<number> : Generic
    //const [count, setCount] = useState(0); //value Inference check
    const [count, setCount] = useState<number>(0);

    const handleClick = (value: number) =>{
        setCount(count + value)
    }
  return (
    <div>
        <Header label={'Counter'}/>
        <Header />
        <Header label="Label 1">
            <div>Child div 1</div>
            <div>Child div 2</div>
            <div>Child div 2</div>
        </Header>
        <Header label={`${count}`}/>
        <Button buttonText="Add" handleClick={()=>handleClick(1)}/>
        <Button buttonText="Reduce" handleClick={()=>handleClick(-1)}/>
    </div>
  )
}

export default Counter