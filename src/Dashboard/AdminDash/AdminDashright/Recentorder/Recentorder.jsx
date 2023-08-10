import { Typography } from "antd";

const Recentorder = () => {
  return (
    <>
      <div >
        <Typography.Title level={4}>Recent Vendors </Typography.Title>
        {/* <Typography.Text style={{fontSize:"14px"}}> Your recently seen vendor</Typography.Text> */}
        <div style={{marginTop:"20px"}}>
          <Typography.Text>You haven't visited any vendors yet</Typography.Text> <br />
          <Typography.Text>
            You will see a list of vendors you visit as you start browsing our
            amazing restaurants 
          </Typography.Text>
        </div>
      </div>
    </>
  );
};

export default Recentorder;
