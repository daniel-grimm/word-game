import { useState } from "react";
import { Error, Form, Guess, Submit, UserInput } from "./Grid.style";
import Array from "../Array/Array";

export const Grid: React.FC = () => {
  const [error, setError] = useState(false);
  const [guess, setGuess] = useState("");

  function checkGuess() {
    console.log("checked guess")
  }

  function validateInput() {
    if (guess.length != 5) {
      setError(true);
    } else {
      checkGuess();
      setError(false);
    }
    setGuess("")
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  function setGuessText(e: any) {
    const newGuess = guess + e?.data;
    setGuess(newGuess);
    setError(false);
  }

  return (
    <>
      <Array />
      <UserInput>
        <Form>
          <Guess
            type="text"
            value={guess}
            onChange={() => setGuessText(event)}
            placeholder="Enter your guess here"
          />
          <Submit onClick={() => validateInput()}>Submit</Submit>
        </Form>
        {error && <Error>Please enter a 5 word answer</Error>}
      </UserInput>
    </>
  );
};

export default Grid;
