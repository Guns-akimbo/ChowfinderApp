 import { useState } from "react";
import "../Onboarding/Onboard.css";

const Input = (props) => {
  const { onChange, errorMessage } = props;
  const [focused, setFocused] = useState(false);

  const handleFocus = () => {
   };

  return (
    <div className="field">
      {props.icon}
      <input
        name={props.name}
        type={props.type}
        placeholder={props.placeholder}
        onChange={onChange}
        className="input"
        onBlur={handleFocus}
        // onFocus={() =>
        //   inputProps.name === "confirmPassword" && setFocused(true)
        // }
        focused={focused.toString()}
        // required
      />
      {/* <span className="error-el">{errorMessage}</span> */}
    </div>
  );
};

export default Input;
