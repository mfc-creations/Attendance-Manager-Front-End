import React from "react";
import classnames from "classnames";
import "./TextField.css";
const TextField = ({
  name,
  placeholder,
  value,
  error,
  type,
  label,
  onChange,
  checked,
}) => {
  return (
    <div className="input-gp">
      <input
        type={type}
        placeholder={placeholder}
        onChange={onChange}
        value={value}
        name={name}
        checked={checked}
        className={classnames("input ", {
          "is-invalid": error,
        })}
      />
      {error && <span className="invalid-feedback">{error}</span>}
    </div>
  );
};
TextField.defaultProps = {
  type: "text",
};
export default TextField;
