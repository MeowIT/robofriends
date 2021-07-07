import React from "react";
import "./card.styles.css"

export const Card = (props) => {
  console.log(props.robot)
  return (
    <div className="card-container">
      <img alt="robot" src={`https://robohash.org/${props.robot.id}?set=set2&size=180x180`} />
      <h1>{props.robot.name}</h1>
      <h2>{props.robot.email}</h2>
    </div>
  )
}