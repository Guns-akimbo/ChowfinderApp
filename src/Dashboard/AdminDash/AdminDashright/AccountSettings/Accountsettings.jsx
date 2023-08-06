import "./Accountsettings.css";
import Header from "../../../../Componets/Header";

const Accountsettings = () => {
  return (
    <>
      <Header />
      <main className="Timelinemain">
        <div className="Timelinemainwap">
          <section className="Timelineleft"></section>
          <section className="Timelineright">
            <div className="Timelinerightwrap">
              <span className="Timelinerightwrapspan">
                <h2>Account Settings</h2>
                <h4>
                  This is your private area. Please keep your information up to
                  date.
                </h4>
              </span>
              <span className="personal">
                {" "}
                <h3>Personal Information</h3>
              </span>
              <div className="middleinput">
                <div className="middleinputwrap">
                  <section className="formcards">
                    <label htmlFor="">FullName</label>
                    <input type="text" />
                    <label htmlFor="">PhoneNumber</label>
                    <input type="text" />
                  </section>
                  <section className="formcard">
                    <label htmlFor="">Email</label>
                    <input type="text" />
                    <label htmlFor="">Address</label>
                    <input type="text" />
                  </section>               
                </div>
                <button className="Addbtn"> Save Changes.</button>
              </div>
            
              
            </div>
          </section>
        </div>
      </main>
    </>
  );
};

export default Accountsettings;
