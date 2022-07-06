import React from "react";

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
  console.log(data);
  return (
    <div>
      {data.map((e) => (
        <div>
          <h1 key={e.heading}>{e.heading}</h1>
          <ul style={{width:"200px", margin:"auto"}}>
            {e.item.map((i) => (
              <li>{i}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default Mobile;
