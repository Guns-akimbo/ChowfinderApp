import { useState } from "react";
import "../Onboarding/Onboard.css";

const Input = ({ name, type, icon, placeholder}) => {
console.log(typeof register)

  return (
    <div className="field">
      {icon}
      <input
        
        name={name}
        type={type}
        placeholder={placeholder}
        className="input"
      />
    </div>
  );
};

export default Input;
