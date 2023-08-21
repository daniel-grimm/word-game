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
  const [success, setSuccess] = useState(false)
  
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
      if (guess.toLowerCase() === answer.toLowerCase())
      {
        setSuccess(true)
      }
    }
    setGuess("")
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  function setGuessText(e: any) {
    let newGuess = ""
    if (e.data != null)
    {
        newGuess = guess + e?.data;
    }
    else
    {
        if (guess.length > 1)
        {
            newGuess = guess.substring(0, guess.length - 1);
        }
        else
        {
            newGuess = ""
        }
    }
    setGuess(newGuess)
    setError(false)
    setSuccess(false)
  }

  function restart() {
    setGuess("")
    setError(false)
    setSuccess(false)
    setAttempts(0)
    setAnswer(words[Math.floor(Math.random() * 496)])
    setGuessArr([])
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
          <Submit onClick={() => restart()}>Play Again</Submit>
        </Form>
        {error && <Error>Please enter a 5 word answer</Error>}
        {success && <Error>You win!</Error>}
        {attempts > 5 && <Error>Answer was {answer}</Error>}
      </UserInput>
    </>
  );
};

export default Grid;
