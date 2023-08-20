import { theme } from "../../theme";
import { Box } from "./Answer.style";

export interface GuessCheck {
  answer: string;
  index: number;
  guess: string | undefined;
}

export const Answer: React.FC<GuessCheck> = ({ answer, guess, index }) => {
  let placeholder = '-'
  if (guess) {
    placeholder = guess[index]
  }
  let color = "gray";
  if (guess && answer[index].toLowerCase() === guess[index].toLowerCase()) {
    color = theme.blue;
  }
  if (guess && answer[index].toLowerCase() !== guess[index].toLowerCase() && answer.indexOf(guess[index]) > 0) {
    color = theme.orange;
  }

  return (
    <>
      <Box color={color}>
        <>{placeholder}</>
      </Box>
    </>
  );
};

export default Answer;
