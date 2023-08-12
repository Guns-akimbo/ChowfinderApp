import "./Accountsettings.css";
import Header from "../../../../Componets/Header";
import { Typography } from "antd";

const Accountsettings = () => {
  return (
    <>
      <main className="accountsetings">
        {/* <Typography.Text> Account Settings</Typography.Text> */}
        <div className="accountsetings">
          <section className="Timelineright">
            <div className="Timelinerightwrap">
              <span className="Timelinerightwrapspan">
                <h2>Account Settings</h2>
                <h4>
                  This is your private area. Please keep your information up to
                  date.
                </h4>
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
