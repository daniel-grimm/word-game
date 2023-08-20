import { Box } from "./Answer.style"

export interface GuessCheck {
    answer: string,
    guess: string | undefined
}

export const Answer: React.FC<GuessCheck> = ({answer, guess}) => {
    return (
        <Box>
            <>{answer}</>
            <>{guess}</>
        </Box>
    )
}

export default Answer