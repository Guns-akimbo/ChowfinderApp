import Header from "../../../../Componets/Header";
import "./Recentvendor.css";

const Recentorder = () => {
  return (
    <>
      <Header />
      <main className="vendormain">
        <div className="vendorwrap">
          <section className="vendorleft"></section>
          <section className="vendorright">
            <div className="uppervend">
              <h2>Recent Vendors</h2>
              <p>Your recently seen vendors</p>
            </div>
            <div className="lowvend">
              <h2> You haven't visited any vendors yet</h2>
              <p>
                You will see a list of vendors you visit as you start browsing
                our amazing products
              </p>
            </div>
          </section>
        </div>
      </main>
    </>
  );
};

export default Recentorder;
