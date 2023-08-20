import { theme } from "../../theme";
import { Box } from "./Answer.style";

export interface GuessCheck {
  answer: string;
  guess: string | undefined;
}

export const Answer: React.FC<GuessCheck> = ({ answer, guess }) => {
  let color = "gray";
  if (guess && answer === guess) {
    color = theme.blue;
  } else if (guess && answer !== guess) {
    color = theme.orange;
  }

  return (
    <>
      <Box color={color}>
        <>{answer}</>
        <>{guess}</>
      </Box>
    </>
  );
};

export default Answer;
