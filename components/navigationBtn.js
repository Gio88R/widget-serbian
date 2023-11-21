import styled from "styled-components";
import Link from "next/link";
export default function Navigation () {

const Button = styled.button`
  background-color: black;
  color: white;
  font-size: 20px;
  padding: 10px 60px;
  opacity: 0.9;
  border-radius: 5px;
  margin: 10px 0px;
  cursor: pointer;
`;

const ButtonGroup = styled.div`
  display: flex;
  justify-content: space-around;
`
return (
    <ButtonGroup>
      <h1>Widget-demos</h1>
          <Link href="/"> {}
    <Button>GoalWidget</Button>
  </Link>
    <Link href="/spiderwidget"> {}
      <Button>SpiderWidget</Button>
    </Link>
    <Link href="/xwidget"> {}
    <Button>XWidget</Button>
  </Link>
  </ButtonGroup>
  );
}