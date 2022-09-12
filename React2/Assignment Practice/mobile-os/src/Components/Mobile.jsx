import React from 'react'

const Mobile = () => {
  const data = [
    {
      heading: "Mobile Operating System",
      item: ["Android", "Blackberry", "iPhone", "Windows Phone"],
    },
    {
      heading: "Mobile Manufacturers",
      item: ["Samsung", "HTC", "Micromax", "Apple"],
    },
  ];
  return (
    <div>
      {data.map((data)=>(
        <div><h1>{data.heading}</h1>
        <p>{data.item.map((item)=>(
          <li>{item}</li>
        ))}</p></div>
      ))}
    </div>
  )
}

export default Mobile