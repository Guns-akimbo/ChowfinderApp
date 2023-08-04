import { useState } from "react";
import "../Onboarding/Onboard.css";

const Input = (props) => {


console.log(props)

  return (
    <div className="field">
      {props.icon}
      <input
        // {...props?.register(props.name)}
        
        name={props.name}
        type={props.type}
        placeholder={props.placeholder}
        className="input"
      />
    </div>
  );
};

export default Input;


