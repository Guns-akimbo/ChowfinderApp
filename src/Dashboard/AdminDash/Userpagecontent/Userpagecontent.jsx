import Userroutes from "../UserRoutes/Userroutes";

const Userpagecontent = () => {
  return (
    <>
      <div
        className="userpagecontent"
        style={{
          backgroundColor: "white",
          color: "white",
          //   height:"92vh",
          //   width:"85vw",
          padding: "10px",
        }}
      >
        <Userroutes />
      </div>
    </>
  );
};

export default Userpagecontent;
