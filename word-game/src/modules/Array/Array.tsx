import Answer from "../../components/Answer/Answer";
import { Column, Row } from "./Array.style";

export interface ArrayProps {
    solution: string
    guessArr: string[]
}

export const Array: React.FC<ArrayProps> = ({ solution, guessArr }) => {
  return (
    <Column>
      <Row>
        <Answer answer={solution} guess={guessArr[0]} index={0} />
        <Answer answer={solution} guess={guessArr[0]} index={1} />
        <Answer answer={solution} guess={guessArr[0]} index={2} />
        <Answer answer={solution} guess={guessArr[0]} index={3} />
        <Answer answer={solution} guess={guessArr[0]} index={4} />
      </Row>
      <Row>
        <Answer answer={solution} guess={guessArr[1]} index={0} />
        <Answer answer={solution} guess={guessArr[1]} index={1} />
        <Answer answer={solution} guess={guessArr[1]} index={2} />
        <Answer answer={solution} guess={guessArr[1]} index={3} />
        <Answer answer={solution} guess={guessArr[1]} index={4} />
      </Row>
      <Row>
        <Answer answer={solution} guess={guessArr[2]} index={0} />
        <Answer answer={solution} guess={guessArr[2]} index={1} />
        <Answer answer={solution} guess={guessArr[2]} index={2} />
        <Answer answer={solution} guess={guessArr[2]} index={3} />
        <Answer answer={solution} guess={guessArr[2]} index={4} />
      </Row>
      <Row>
        <Answer answer={solution} guess={guessArr[3]} index={0} />
        <Answer answer={solution} guess={guessArr[3]} index={1} />
        <Answer answer={solution} guess={guessArr[3]} index={2} />
        <Answer answer={solution} guess={guessArr[3]} index={3} />
        <Answer answer={solution} guess={guessArr[3]} index={4} />
      </Row>
      <Row>
        <Answer answer={solution} guess={guessArr[4]} index={0} />
        <Answer answer={solution} guess={guessArr[4]} index={1} />
        <Answer answer={solution} guess={guessArr[4]} index={2} />
        <Answer answer={solution} guess={guessArr[4]} index={3} />
        <Answer answer={solution} guess={guessArr[4]} index={4} />
      </Row>
      <Row>
        <Answer answer={solution} guess={guessArr[5]} index={0} />
        <Answer answer={solution} guess={guessArr[5]} index={1} />
        <Answer answer={solution} guess={guessArr[5]} index={2} />
        <Answer answer={solution} guess={guessArr[5]} index={3} />
        <Answer answer={solution} guess={guessArr[5]} index={4} />
      </Row>
    </Column>
  );
};

export default Array;
