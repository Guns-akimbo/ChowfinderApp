import "./Onboard.css";
import { MdAlternateEmail } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";
import { BsPerson, BsTelephone } from "react-icons/bs";
import { AiOutlineEyeInvisible, AiOutlineEye } from "react-icons/ai";
import { useEffect, useState, } from "react";
import slogan from "../assets/slogan.jpeg";
import { GiConfirmed } from "react-icons/gi";
import Input from "../Componets/Input";
import axios from "axios";
import Swal from "sweetalert2";
import Header from "../Componets/Header";
// import HashLoader from "react-spinners/ClipLoader";
import HashLoader from "react-spinners/HashLoader";
import { NavLink, Navigate, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const loginSchema = yup
  .object({
    email: yup.string().required("Email is required"),
    password: yup
      .string()
      .required("Password is required")
      .matches(
        "^(?=.*[!@#$%^&*])(?=.*[A-Z]).{8,}$",
        "8 characters, 1 capital, 1 special eg:@."
      ),
  })
  .required();

const signupSchema = yup
  .object({
    fullName: yup.string().required("Fullname is required."),
    email: yup.string().required("Email is required"),
    phoneNumber: yup
      .string()
      .required("Phone number is required.")
      .matches(/^\d{11}$/,
       "Phone number must be a 11-digit numeric value."),
    password: yup
      .string()
      .required("Password is required")
      .matches( "^(?=.*[!@#$%^&*])(?=.*[A-Z]).{8,}$", 
      "8 characters, 1 capital, 1 special eg:@."

      ),
  })
  .required();

const Login = () => {
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();
  const [isActive, setIsActive] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showSignUpForm, setShowSignUpForm] = useState(false);
  const [load, setLoad] = useState(false);
  const {
    register: loginRegister,
    handleSubmit: LoginhandleSubmit,
    watch,
    formState: { errors: loginErrors },
  } = useForm({
    resolver: yupResolver(loginSchema),
  });
  const {
    register: signupRegister,
    handleSubmit: SignuphandleSubmit,
    watch: Signupwatch,
    formState: { errors: SignupErrors },
  } = useForm({
    resolver: yupResolver(signupSchema),
  });

  useEffect(() => {
    setLoad(true);
    setTimeout(() => {
      setLoad(false);
    }, 5000);
  }, []);

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
    // {
    //   id: 5,
    //   name: "confirmPassword",
    //   type: "password",
    //   placeholder: "Confirm Password",
    //   icon: <GiConfirmed className={`icon ${isActive ? "active" : ""}`} />,
    // },
  ];

  const signupSubmit = async (data) => {
    try {
      setLoad(true);
      const res = await axios.post(
        "https://chowfinder.onrender.com/api/sign-up",
        data
      );
      console.log(res);
      setLoad(false);
      Swal.fire({
        title: "Verify email address!",
        text: "Kindly go to your mail and verify",
        icon: "info",
        confirmButtonText: "Ok",
      });
      setTimeout(() => {
        // console.log("call")
        setShowSignUpForm(false);
      }, 2000);
    } catch (err) {
      setLoad(false);
      console.log(err); 
      setErrorMessage(err.response.data.message)
    }
  };

  const loginSubmit = async (data) => {
    try {
      setLoad(true);
      const res = await axios.post(
        "https://chowfinder.onrender.com/api/log-in",
        data
      );
      console.log(res);
      setLoad(false);

      const token = res.data.token; 
      localStorage.setItem("access_token", token);

           axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;

      navigate("/");
    } catch (err) {
      setLoad(false);
      console.log(err);
    }
  };
  
  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <>
      <Header />
      <section className="bigcontainer">
        {load ? (
          <HashLoader

            color={"#F6F5F5"}
            load={load}         
            size={130}
          />
        ) : (
          <div className="formcontainer">
            <div
              className={`form-box sign-in ${showSignUpForm ? "hide" : "show"}`}
            >
              <h2>Login</h2>
              <form onSubmit={LoginhandleSubmit((data) => loginSubmit(data))}>
                {Values.map((e) => (
                  <Input
                    {...e}
                    // {...register(e.name)}
                    register={loginRegister}
                    errors={loginErrors}
                    key={e.id}
                    name={e.name}
                    type={e.type}
                    placeholder={e.placeholder}
                    // icon={e.icon}
                  />
                ))}
                <div className="forget-link">
                  <NavLink to="/forgotpassword">Forgot Password ?</NavLink>
                </div>
                <input
                  disabled={load}
                  type="submit"
                  className="submit-btn"
                  value="Login"
                />
              </form>
              <p style={{color:"red",marginBlockStart:"5px"}}>{errorMessage}</p>
            </div>

            <div
              className={`imgBox sign-in ${showSignUpForm ? "hide" : "show"}`}
            >
              <div className="sliding-link">
                <p>Don't have an account yet ?</p>
                <span
                  className="signup"
                  onClick={() => setShowSignUpForm(true)}
                >
                  SignUp
                </span>
              </div>
              <div>
                <img src={slogan} alt="" />
              </div>
            </div>

            <div
              className={`imgBox sign-up ${showSignUpForm ? "show" : "hide"}`}
            >
              <div className="sliding-link">
                <p>Already a member?</p>
                <span
                  className="signup"
                  onClick={() => setShowSignUpForm(false)}
                >
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
              <form
                action=""
                onSubmit={SignuphandleSubmit((data) => signupSubmit(data))}
              >
                {Value.map((e) => (
                  <Input
                    {...e}
                    key={e.id}
                    register={signupRegister}
                    errors={SignupErrors}
                    name={e.name}
                    type={e.type}
                    placeholder={e.placeholder}
                    icon={e.icon}
                  />
                ))}

                <input
                  disabled={load}
                  type="submit"
                  className="submit-btn"
                  value="Sign Up"
                />
                <p style={{color:"red",marginBlockStart:"5px"}}>{errorMessage}</p>
              </form>
            </div>
          </div>
        )}
      </section>
    </>
  );
};

export default Login;
