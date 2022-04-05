import React from "react";
import "./Info.styles.scss";
export default function Info(props) {
  return (
    <div className="information-of-form">
      <h1 className="info-title">{props.title}</h1>
      <p className="info-sub-title">{props.info}</p>
    </div>
  );
}
