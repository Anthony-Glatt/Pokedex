import React  from "react";

const InputField = ({ value, label, name, placeholder, handleChange }) => (
  <div className="form-group">
    {label && <label htmlFor="input-field">{label}</label>}
    <input
      type={'text'}
      value={value}
      name={name}
      className="form-control"
      placeholder={placeholder}
      onChange={handleChange}
    />
  </div>
);

export default InputField;