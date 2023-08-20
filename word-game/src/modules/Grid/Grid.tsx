import { useEffect, useState } from "react";
import { Error, Form, Guess, Submit, UserInput } from "./Grid.style";
import Array from "../Array/Array";
import { words } from "../../../resources/words"

export const Grid: React.FC = () => {
  const [error, setError] = useState(false);
  const [guess, setGuess] = useState("");
  const [answer, setAnswer] = useState("")
  const [attempts, setAttempts] = useState(0)
  const [guessArr, setGuessArr] = useState<Array<string>>([])
  
  useEffect(() => {
    setAnswer(words[Math.floor(Math.random() * 496)])
  }, [])

  function handleInput() {
    if (guess.length != 5) {
      setError(true);
    } else {
      const newVal: Array<string> = [...guessArr, guess]
      setGuessArr(newVal)
      setError(false);
      setAttempts(attempts + 1)
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
      <Array solution={answer} guessArr={guessArr} />
      <UserInput>
        <Form>
          <Guess
            type="text"
            value={guess}
            onChange={() => setGuessText(event)}
            placeholder="Enter your guess here"
          />
          <Submit disabled={attempts > 5} onClick={() => handleInput()}>Submit</Submit>
        </Form>
        {error && <Error>Please enter a 5 word answer</Error>}
      </UserInput>
    </>
  );
};

export default Grid;
