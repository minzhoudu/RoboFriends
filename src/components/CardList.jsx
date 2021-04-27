import React from "react";
import Card from "./Card";

const CardList = (props) => {
  const cardsArray = props.robots.map((robot, index) => {
    return (
      <Card
        id={props.robots[index].id}
        name={props.robots[index].name}
        email={props.robots[index].email}
        key={props.robots[index].id}
      />
    );
  });

  return <div>{cardsArray}</div>;
};

export default CardList;
