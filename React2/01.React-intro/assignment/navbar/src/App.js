import logo from "./logo.svg";
import "./App.css";
import Logo from "./components/Logo";
import Links from "./components/Links";
import Button from "./components/Button";

function App() {
  const links = ["Services", "Projects", "About"];
  return (
    <div className="App">
      <div className="nav-bar">
        <Logo />
        <div className="link-bar">
          {links.map((link) => (
            <div key={link}>
              <Links value={link} />
            </div>
          ))}
        </div>
        <Button />
      </div>
    </div>
  );
}

export default App;
