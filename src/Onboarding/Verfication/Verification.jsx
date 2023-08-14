import "./Verification.css";
import verified from "../.../../../assets/verified.png";
import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { Link } from "react-router-dom";

const Verification = () => {
  const { token } = useParams();
  const [isVerified, setIsVerified] = useState(1);
  console.log(token);
  const navigate = useNavigate();

  useEffect(() => {
    const verifyUser = () => {
      axios
        .get(`https://chowfinder.onrender.com/api/users/verify-email/${token}`)
        .then((res) => {
          console.log(res);
          setIsVerified(2);
        })
        .catch((err) => {
          console.log("Error response:", err);
          setIsVerified(3);
        });
    };
    verifyUser();
  }, []);

  return (
    <>
      <main className="Verification">
        {isVerified === 1 ? (
          <h1>Verifying Email.....</h1>
        ) : isVerified === 2 ? (
          <section className="Verificationwrap">
            <div className="cardforget">
              <div className="imagelogo">
                Account Activated
                <div className="looog">
                  <img src={verified} alt="" />
                </div>
              </div>
              <div className="Verificationtext">
                <span>
                  <p>
                    Thank you,your email has been verified.
                    <br />
                    Your account is now active{" "}
                  </p>
                </span>

                <button onClick={() => navigate("/login")}> Login</button>
              </div>
            </div>
          </section>
        ) : (
          <h1>Verification failed</h1>
        )}
      </main>
    </>
  );
};

//     return (
//         <>
//             <div className={style.body}>
//                 <div className={style.card}>
//                     <div className={style.emailImage}>
//                         <img src={image} alt="Email" />
//                     </div>
//                     <h3 className={style.headText}>{isVerified === 1 ? "Verifying Email..." : isVerified === 2 ? "Email Verified Successfully" : "Verification Failed"}</h3>
//                     <div className={style.clickBtn}>
//                         <p>Click to login</p>
//                         <button className={style.loginBtn} onClick={() => nav("/login")}>Login</button>
//                     </div>
//                 </div>
//             </div>
//         </>
//     );
// };

// export default VerifiedEmail;

export default Verification;
