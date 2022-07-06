import "./App.css";
import { Pin } from "./Components/Pin";
import { useState } from "react";

function App() {
  const [otp, setOtp] = useState("");
  return (
    <div className="App">
      <h3>Pin</h3>
      <Pin
        length={5}
        setOtpHandler={(value) => {
          setOtp(value);
        }}
      />
      <h4>OTV Value is : {otp}</h4>
    </div>
  );
}

export default App;
