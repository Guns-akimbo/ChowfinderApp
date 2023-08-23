import React, { useState } from 'react'
import './Partner.css'
import Header from '../../../Componets/Header';
import Input from '../../../Componets/Input';
import { MdOutlineMail } from 'react-icons/md';
import { GrFormViewHide, GrView } from 'react-icons/gr';
import axios from 'axios'





const Partner = () => {

    const [seepassword, setSeepassword] = useState(false);
    const [profileImage, setProfileImage] = useState('')

    const showpassword = () => {
        setSeepassword(!seepassword)
    };

    const HandleFileChange = (event) => {
        const selectedFile = event.target.files[0]

        if (selectedFile) {
            const reader = new FileReader();

            reader.onload = (e) => {
                setProfileImage(e.target.result);
            };

            reader.readAsDataURL(selectedFile);
        }
    }

    const restSignUp = async (data) => {
        try {
            const response = await axios.post("https://chowfinder.onrender.com/api/rest/signup", data)
            console.log('Response:', response.data);

        } catch (error) {
            console.error("Error:", error)
            // i will handle error here later make my sign up work first
        }
    };




    const Values = [
        {
            id: 1,
            name: "businessName",
            type: "text",
            placeholder: "Enter BusinessName",
        },

        {
            id: 2,
            name: "address",
            type: "text",
            placeholder: "Enter Address",
        },

        {
            id: 3,
            name: "email",
            type: "email",
            placeholder: "Enter Email",
            icon: <MdOutlineMail color='#76787B' size={20} />,
        },

        {
            id: 4,
            name: "description",
            type: "text",
            placeholder: "Enter Restaurant Description",
        },

        {
            id: 5,
            name: "phoneNumber",
            type: "text",
            placeholder: "Enter Phonenumber",
        },

        {
            id: 6,
            name: "password",
            type: "password",
            placeholder: "Enter Password",
            icon:<GrView color='#76787B'/>,
        },

        {
            id: 7,
            name: "confirmPassword",
            type: "password",
            placeholder: "Confirm Password",
        },

        {
            id: 8,
            name: "profileImage",
            type: "file",
            placeholder: "Enter Restaurant profileImage",
            accept: "image/*",
            onChange: { HandleFileChange },
        },
    ]

    const signupRegister = () => {
        console.log("i can do this")
    }

    const signupErrors = () => {
        console.log("i doing this")
    }
    const loginRegister = () => {
        console.log("i got this")
    }

    const loginErrors = () => {
        console.log("i got this")
    }

    return (
        <>
            <Header />
            <article className='Partner'>
                <section className="bigcontainer">


                    <div className="formcontainer">
                        <div
                            className='form-box sign-in'
                        >
                            <h2>Login</h2>


                            <form >


                                <Input
                                    name="email"
                                    type="email"
                                    placeholder="Email"
                                    register={signupRegister}
                                    errors={signupErrors}
                                />

                                <Input
                                    name="password"
                                    type="password"
                                    placeholder="enter pass pls"
                                    register={signupRegister}
                                    errors={signupErrors}
                                />


                                <div className="forget-link">
                                    Forgot Password ?
                                </div>
                                <input

                                    type="submit"
                                    className="submit-btn"
                                    value="Login"
                                />
                            </form>
                        </div>

                        <div
                            className='imgBox sign-in '
                        >
                            <div className="sliding-link">
                                <p>Don't have an account yet ?</p>
                                <span
                                    className="signup"

                                >
                                    SignUp
                                </span>
                            </div>
                        </div>

                        <div
                            className='imgBox sign-up'
                        >
                            <div className="sliding-link">
                                <p>Already a member?</p>
                                <span
                                    className="signup"
                                >
                                    Sign In
                                </span>
                            </div>
                            <div>
                            </div>
                        </div>
                        <div
                            className='form-box sign-up'>
                            <h2>Sign Up </h2>
                            <form
                                action=""
                            >
                                {
                                    Values.map((e) => (
                                        <Input
                                            {...e}
                                            key={e.id}
                                            name={e.name}
                                            type={e.type}
                                            placeholder={e.placeholder}
                                            icon={e.icon}
                                            register={restSignUp}
                                            errors={signupErrors}
                                        />
                                    ))
                                }

                                <input
                                    type="submit"
                                    className="submit-btn"
                                    value="Sign Up"
                                />

                            </form>
                        </div>
                    </div>

                </section>
            </article>
        </>
    );
};

export default Partner;
