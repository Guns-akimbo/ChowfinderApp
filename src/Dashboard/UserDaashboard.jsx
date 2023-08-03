import "./Dasboard.css"
import Header from "../Componets/Header";

const UserDashboard = () => {
  return (
    <>
      <Header />
      <main className="Bigdash">
          <section className="bigdashwrap">
                <div className="dropdown">
                    <div className="HomeLogo"></div>
                    <div className="Userdropdown"></div>
                    <div className="signout"></div>
                </div>
                <div className="textarea"></div>
          </section>
      </main>
    </>
  );
};

export default UserDashboard;
