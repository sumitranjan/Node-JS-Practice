import "./App.css";

function App() {
  const data = [
    {
      heading : "Phones",
      items: ["Samsung", "HTC","Mictomax", "Apple"]
    },
    {
      heading : "OS",
      items: ["Android", "Blackberry","iPhone", "Windows Phone"]
    }
  ]

  return (
    <>
  
      <h1>Mobile Manufacturers</h1>
      <ul>
        <li>Samsung</li>
        <li>HTC</li>
        <li>Micromax</li>
        <li>Apple</li>
      </ul>
    </>
  );
}

export default App;
