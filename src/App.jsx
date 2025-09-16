import { useState } from "react";

import Header from "./components/Header";
import Results from "./components/Results";
import UserInput from "./components/UserInput";

function App() {
  const [userInput, setUserInput] = useState({
    initialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn: 8,
    duration: 6,
  });

  const inputIsValid =
    userInput.duration >= 1 &&
    userInput.initialInvestment >= 1 &&
    userInput.annualInvestment > 0 &&
    userInput.expectedReturn > 0;

  function handleChange(inputIdentifier, newValue) {
    setUserInput((prevUserInput) => {
      return {
        ...prevUserInput,
        [inputIdentifier]: +newValue,
      };
    });
  }

  return (
    <>
      <Header />
      <UserInput onChangeInput={handleChange} input={userInput} />
      {!inputIsValid && <p className="center">Please enter valid values</p>}
      {inputIsValid && <Results input={userInput} />}
    </>
  );
}

export default App;
