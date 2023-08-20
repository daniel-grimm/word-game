import Answer from "../../components/Answer/Answer";
import { Column, Row } from "./Array.style";

export const Array: React.FC = () => {
  return (
    <Column>
      <Row>
        <Answer answer={"A1"} guess={undefined} />
        <Answer answer={"A2"} guess={undefined} />
      </Row>
      <Row>
        <Answer answer={"B1"} guess={undefined} />
        <Answer answer={"B2"} guess={undefined} />
      </Row>
    </Column>
  );
};

export default Array;
