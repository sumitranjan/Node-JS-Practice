import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Button from "./Button";
import App from "../App";

describe("Button Tests", () => {
  it("Should have button in dom", () => {
    //Debug the test
    // screen.debug();

    render(<Button>Click Me</Button>); //virtually
    let button = screen.getByText("Click Me"); //'screen' is same as document.getElementById()
    expect(button).toBeInTheDocument();
  });

  it("Should have button with text Click me in App.js", () => {
    render(<App></App>);
    let button = screen.getByTestId("cButton");
    expect(button).toBeInTheDocument();
  });
  it("Should render empty button", () => {
    render(<Button>C</Button>);
    let button = screen.getByTestId("cButton");
    expect(button).toBeInTheDocument();
  });

  it("Should change theme ", () => {
    render(<App></App>);
    let h3 = screen.getByText("Current Theme is light");
    expect(h3).toHaveTextContent("light");

    let themeButton = screen.getByText("Change Theme");
    userEvent.click(themeButton);
    expect(h3).toHaveTextContent("dark");
  });
});

//Expectations -> Actual Results

//1. we wanted to access a button with text  Click me inside App.js
//2. But the button is actually using the text "Change theme"
//3. So, by default the test should have failed
