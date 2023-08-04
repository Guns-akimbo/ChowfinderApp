import Header from "../../../../Componets/Header";
import "./Timeline.css";

const Timeline = () => {
  return (
    <>
      <Header />
      <main className="Timelinemain">
        <div className="Timelinemainwap">
          <section className="Timelineleft"></section>
          <section className="Timelineright">
            <div className="Timelinerightwrap">
              <h2>Activity Timeline</h2>
              <div className="Timeline">
                <p>Date</p>
                <div className="Timelinecard">
                  <div className="Timelinecardimg">
                    <div className="imagecard"></div>
                  </div>
                  <div className="Timelinetext">
                    <span>
                      <h2>Amoke Abula</h2>
                      <h2>- Location</h2>
                    </span>
                     <div className="price">
                     <p>Order:</p>
                      <p>Price# 2,000</p>
                     </div>
                     
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>
    </>
  );
};

export default Timeline;
