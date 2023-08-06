import "./Onboard.css";
import { MdAlternateEmail } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";
import { BsPerson, BsTelephone } from "react-icons/bs";
import { AiOutlineEyeInvisible, AiOutlineEye } from "react-icons/ai";
import { useEffect, useState } from "react";
import slogan from "../assets/slogan.jpeg";
import { GiConfirmed } from "react-icons/gi";
import Input from "../Componets/Input";
import axios from "axios";
import Swal from "sweetalert2";
import Header from "../Componets/Header";
import { Navigate } from "react-router-dom";


const Login = () => {
  const [isActive, setIsActive] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showSignUpForm, setShowSignUpForm] = useState(false);
  const [load, setLoad] = useState(false)



  useEffect(() => {
    console.log(load);
  }, [load]);


  const Values = [
    {
      id: 1,
      name: "email",
      type: "email",
      placeholder: "Email",
      icon: <MdAlternateEmail className={`icon ${isActive ? "active" : ""}`} />,
    },
    {
      id: 2,
      name: "password",
      type: "password",
      placeholder: "Password",
      icon: (
        <RiLockPasswordFill className={`icon ${isActive ? "active" : ""}`} />
      ),
    },
  ];

  const Value = [
    {
      id: 1,
      name: "fullName",
      type: "text",
      placeholder: "Fullname",
      icon: <BsPerson className={`icon ${isActive ? "active" : ""}`} />,
    },
    {
      id: 2,
      name: "email",
      type: "email",
      placeholder: "Email",

      icon: (
        <RiLockPasswordFill className={`icon ${isActive ? "active" : ""}`} />
      ),
    },
    {
      id: 3,
      name: "phoneNumber",
      type: "tel",
      placeholder: "Phonenumber",
      icon: <BsTelephone className={`icon ${isActive ? "active" : ""}`} />,
    },
    {
      id: 4,
      name: "password",
      type: "password",
      placeholder: "Password",

      icon: (
        <RiLockPasswordFill className={`icon ${isActive ? "active" : ""}`} />
      ),
      

    },
    {
      id: 5,
      name: "confirmPassword",
      type: "password",
      placeholder: "Confirm Password",
      icon: <GiConfirmed className={`icon ${isActive ? "active" : ""}`} />,
    },
  ];

  const signupSubmit = async () => {
    Swal.fire({
      title: "Verify email address!",
      text: "Kindly go to your mail and verify",
      icon: "info",
      confirmButtonText: "Ok",
    });
    try {
      setLoad(true);
      const res = await axios.post(
        "https://chowfinder.onrender.com/api/sign-up",
        others
      );
      console.log(res);
      setLoad(false);
      // navigate("/loginpage")
    } catch (err) {
      setValued({
        fullName: "",
        email: "",
        password: "",
        phoneNumber: "",
      });
      setLoad(false);
      console.log(err);
    }
  };

  const loginSubmit = async () => {
    try {
      setLoad(true);
      const res = await axios.post(
        "https://chowfinder.onrender.com/api/log-in",
        others
      );
      console.log(res);
      setLoad(false);
      // navigate("/loginpage")
    } catch (err) {
      setValued({
        email: "",
        password: "",
      });
      setLoad(false);
      console.log(err);
    }
  };

  return (
    <>
      <Header />
      <section className="bigcontainer">
        <div className="formcontainer">
          <div
            className={`form-box sign-in ${showSignUpForm ? "hide" : "show"}`}
          >
            <h2>Login</h2>
            <form>
              {Values.map((e) => (
                <Input 
                {...e} 
                key={e.id} 
                
                name={e.name}
                type={e.type}
                placeholder={e.placeholder}
                 icon={e.icon}
                  />
              ))}
              <div className="forget-link">
                <a href="">Forgot Password</a>
              </div>
              <input
                disabled={load}
                type="submit"
                className="submit-btn"
                value="Login"
              />
            </form>
          </div>

          <div className={`imgBox sign-in ${showSignUpForm ? "hide" : "show"}`}>
            <div className="sliding-link">
              <p>Don't have an account yet ?</p>
              <span className="signup" onClick={() => setShowSignUpForm(true)}>
                SignUp
              </span>
            </div>
            <div>
              <img src={slogan} alt="" />
            </div>
          </div>

          <div className={`imgBox sign-up ${showSignUpForm ? "show" : "hide"}`}>
            <div className="sliding-link">
              <p>Already a member?</p>
              <span className="signup" onClick={() => setShowSignUpForm(false)}>
                Sign In
              </span>
            </div>
            <div>
              <img src={slogan} alt="" />
            </div>
          </div>
          <div
            className={`form-box sign-up ${showSignUpForm ? "show" : "hide"}`}
          >
            <h2>Sign Up </h2>
            <form action="">
              {Value.map((e) => (
                <Input {...e} key={e.id} />
              ))}

              <input
                disabled={load}
                type="submit"
                className="submit-btn"
                value="Sign Up"
              />
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default Login;
