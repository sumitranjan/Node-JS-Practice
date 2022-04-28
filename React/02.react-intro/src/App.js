import "./App.css";

function App() {
  const food = "Pizza";
  const age = 19;
  const skills = ["mern", "node", "dsa", "design", "animation"];

  return (
    <div className="App">
      Your fav food is {food}
      <div>you are {age > 18 ? "Eligible" : "Not eligible"} for license </div>
      <div>
        {skills.map((e) => {
          return <Skill skill={e} key="value" age={12} />;
        })}
      </div>
    </div>
  );
}

//Component
function Skill(props) {
  console.log("Skills props", props);
  return <p className="redtext">Skill: {props.skill}</p>;
}

export default App;
