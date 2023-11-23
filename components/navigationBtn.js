import styled from "styled-components";
import Link from "next/link";
export default function Navigation () {

const Button = styled.button`
  background-color: #FFDE00;
  color: black;
  font-size: 20px;
  padding: 10px 60px;
  opacity: 0.9;
  border-radius: 5px;
  margin: 10px 0px;
  cursor: pointer;
  margin-top: 30px;
`;

const ButtonGroup = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: end;
  background: #2c2c2c
`
return (
          <ButtonGroup>
          <Link href="/spiderwidget"> {}
      <Button>Spider- & Xwidget</Button>
    </Link>
  
          <Link href="/"> {}
    <Button>GoalWidget</Button>
  </Link>


  </ButtonGroup>
  );
}