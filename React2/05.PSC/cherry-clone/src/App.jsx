import "./App.css";
import Filters from "./components/Filters";
import Navbar from "./components/Navbar";
import Offers from "./components/Offers";
import Restaurants from "./components/Restaurants";


function App() {
  return (
    <>
      <Navbar />
      <Offers />
      <Filters />
      <Restaurants />
    </>
  );
}

export default App;
