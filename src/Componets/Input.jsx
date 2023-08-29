import { useState } from "react";
import "../Onboarding/Onboard.css";

const Input = ({ name, type, icon, placeholder, register, errors }) => {

  return (
    <div style={{marginBottom:"0px"}}>
      <div className="field">
        {icon}
        <input
          {...register(name)}
          name={name}
          type={type}
          placeholder={placeholder}
          className="input"
        />
      </div>
      <p style={{ color: "red",lineHeight:"0",fontSize:"10px" }}>{errors[name]?.message}</p>
    </div>
  );
};

export default Input;