import "./App.css";
import Mobile from "./components/Mobile";

function App() {
  const data = [
    {
      heading: "Mobile Operating System",
      item: ["Android", "Blackberry", "iPhone", "Windows Phone"],
    },
    {
      heading: "Mobile Manufacturs",
      item: ["Samsung", "HTC", "Micromax", "Apple"],
    },
  ];
  return (
    <div className="App">
      {/* passing object element individually*/}

      {/* {data.map((e) =>{
          return <Mobile heading={e.heading} item={e.item}/>
      })} */}

      {/* passing object */}
      {data.map((e) => {
        return <Mobile props={e} />;
      })}
    </div>
  );
}

export default App;
