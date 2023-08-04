import "./ForgetPassword.css"
// import Logo from "../assets/Logo.jpg"

const ForgetPassword=(Logo)=>{
    return(
        <>

         <main className="forgetpassword">
             
             <section className="forgetpasswordwrap">
                    <div className="cardforget">
                            <div className="imagelogo">
                                <div className="looog">
                                   
                                </div>
                            </div>
                            <div className="forgettext">
                                 <span> <h2>Forgot Password</h2></span>
                                 <input type="email" placeholder="input email" />
                                 <button> Submit</button>
                            </div>
                    </div>
             </section>

         </main>
        </>
    )
}

export default ForgetPassword 