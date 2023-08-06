import Header from "../../../../Componets/Header";
import "./Cashback.css";

const Cashback = () => {
  return (
    <>
      <Header />
      <main className="vendormain">
        <div className="vendorwrap">
          <section className="vendorleft"></section>
          <section className="vendorright">
            <div className="uppervend">
              <h2>Cashback</h2>
              <p>Let's see how your doing </p>
            </div>
            <div className="lowvend">
              <div className="leftlowvend">
                <div className="cardbalance">
                  <div className="leftcard">
                    <h2>Total Balance</h2>
                    <h4>#2,000</h4>
                  </div>
                </div>
              </div>
              <div className="rightlowvend">
                <img src="./src/assets/cashback.svg" alt="" />
              </div>
            </div>
          </section>
        </div>
      </main>
    </>
  );
};

export default Cashback;
