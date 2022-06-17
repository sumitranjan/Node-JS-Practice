import logo from "./logo.svg";
import { AppLogo, AppHeader, AppStyled, Flexbox } from "./App.style";
// import Flexbox from "./Flexbox";

function App() {
  const flexProps = {
    flexDirection: "row",
  };
  return (
    <AppStyled>
      <AppHeader>
        <AppLogo src={logo} alt="logo" />
        <Flexbox {...flexProps}>
          <div>A</div>
          <div>B</div>
        </Flexbox>
      </AppHeader>
    </AppStyled>
  );
}

export default App;
