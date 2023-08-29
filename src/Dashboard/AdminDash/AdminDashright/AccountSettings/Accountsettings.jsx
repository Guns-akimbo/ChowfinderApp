const { VITE_End_Point } = import.meta.env;
import "./Accountsettings.css";
import Header from "../../../../Componets/Header";
import { updateUser } from "../../../../Api/Index";
import {
  Typography,
  Form,
  Button,
  Checkbox,
  DatePicker,
  Input,
  Select,
} from "antd";
import { useEffect, useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";
// import { useForm } from "react-hook-form";

const Accountsettings = () => {
  const token = JSON.parse(localStorage.getItem("User"))?.token;
  const [loading, setLoading] = useState(false);
  const [dataSource, setdataSource] = useState([]);
  const [form] = Form.useForm();
  const [errorMessage, setErrorMessage] = useState("");

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       setLoading(true);
  //       const data = await updateUser(token); // Use 'data' instead of 'res.data'
  //       setdataSource(data); // Update state with fetched data
  //       console.log(data);
  //       setLoading(false);
  //     } catch (error) {
  //       console.error("Error fetching orders:", error);
  //       setLoading(false);
  //     }
  //   };

  //   fetchData();
  // }, [token]);
  return (
    <>
      <div className="updateaccountsetings">
        <Form
          autoComplete="off"
          labelCol={{ span: 10 }}
          wrapperCol={{ span: 40 }}
          form={form}
          onFinish={async (values) => {
            try {
              setLoading(true);
              // Make API request to update user information
              const res = await axios.patch(
                `${VITE_End_Point}/users/update/`,
                values,
                {
                  headers: {
                    Authorization: `Bearer ${token}`,
                  },
                }
              );

              // Handle successful response, e.g., show success message
              Swal.fire({
                title: "Update successful!",
                text: "Your information has been updated.",
                icon: "success",
                confirmButtonText: "Ok",
              });

              // Optional: Update the form fields with the new values
              form.setFieldsValue(values);

              setLoading(false);
            } catch (err) {
              setLoading(false);
              console.log(err);
              setErrorMessage(err.response.data.message);
            }
          }}
        >
          <Form.Item
            name="fullName"
            label="Fullname"
            hasFeedback
            initialValue={dataSource.fullName}
            rules={[
              {
                required: true,
                message: "Please enter your name",
              },
              { whitespace: "true" },
              { min: 8 },
            ]}
          >
            <Input placeholder="Type your name" />
          </Form.Item>
          <Form.Item
            name="email"
            label="Email"
            hasFeedback
            initialValue={dataSource.email}
            rules={[
              {
                required: true,
                message: "Please enter your email",
              },
              { type: "email" },
            ]}
          >
            <Input placeholder="Type your Email" />
          </Form.Item>
          <Form.Item
            name="password"
            label="Password"
            hasFeedback
            initialValue={dataSource.password}
            rules={[
              {
                required: true,
                message: "Password is required",
              },
              { type: "password" },
              { min: 8 },
            ]}
          >
            <Input.Password placeholder="Type your Password" />
          </Form.Item>

          {/* <Form.Item name="gender" label="Gender" requiredMark="optional">
            <Select placeholder="Select your Gender">
              <Select.Option value="male">Male</Select.Option>
              <Select.Option value="female">Female</Select.Option>
            </Select>
          </Form.Item> */}

          {/* <Form.Item
            name="agreement"
            wrapperCol={{ span: 24 }}
            hasFeedback
            valuePropName="checked"
            rules={[
              {
                validator: (_, value) =>
                  value
                    ? Promise.resolve()
                    : Promise.reject(
                        "To proceed with the update form, your agreement is needed. to agree to terms"
                      ),
              },
            ]}
          >
            <Checkbox className="checkedbox">
              Agree to <a href="#">Terms for updating user info?</a>
            </Checkbox>
          </Form.Item> */}
          <Form.Item wrapperCol={{ span: 24 }}>
            <Button block type="primary" htmlType="submit" className="Addbtn">
              Submit
            </Button>
          </Form.Item>
        </Form>
      </div>
    </>
  );
};

export default Accountsettings;
