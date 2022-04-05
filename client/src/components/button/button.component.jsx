import React from "react";
import "./button.styles.scss";
export default function Button(props) {
  const { type, btnClass, buttonText, handleClick } = props;
  return (
    <button type={props.type} className={btnClass} onClick={handleClick}>
      {buttonText}
    </button>
  );
}
