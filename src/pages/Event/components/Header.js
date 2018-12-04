import React from "react";
import styled from "react-emotion";

const EventHeader = props => {
  const Container = styled("div")`
    height: 42vh;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
      url(${props.image}) center;
    background-size: cover;
  `;
  const Paddings = styled("div")`
    padding-left: 5%;
    padding-right: 5%;
    & h1 {
      margin-bottom: 25px;
    }
  `;

  return (
    <Container>
      <Paddings>
        <h1 className="title white">{props.title}</h1>
      </Paddings>
    </Container>
  );
};

export default EventHeader;
