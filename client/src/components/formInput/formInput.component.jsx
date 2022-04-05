import React from "react";
import "./formInput.styles.scss";
export default function FormInput(props) {
  const { onChange, label,ref, ...otherProps } = props;
  // console.log(otherProps);
  return (
    <div className="group">
      <input
        className="form-input"
        onChange={onChange}
        {...otherProps}
      ></input>
      {label ? (
        <label
          className={`form-input-label ${
            otherProps.value?.length ? "shrink" : ""
          } `}
        >
          {label}
        </label>
      ) : null}
    </div>
  );
}
