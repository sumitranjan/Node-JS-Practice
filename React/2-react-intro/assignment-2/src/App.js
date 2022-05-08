import "./App.css";

function App() {
  const links = ["Services", "Projects", "About"];
  return (
    <div className="App">
      <Logo />
      <div className="links">
      {links.map((e) => {
          return <Link link={e} />;
        })}
      </div>

      <Contact />
    </div>
  );
}

//Component
function Logo() {
  return <p className="logo">LOGOBAKERY</p>;
}

function Link(props) {
  return <p className="redtext">{props.link}</p>;
}

function Contact() {
  return <button className="btn">Contacts</button>;
}

export default App;
