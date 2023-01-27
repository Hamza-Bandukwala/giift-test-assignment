import React from "react";
import { Button, Checkbox, Form, Input } from "antd";
import { postApi } from "../../Api/apiCalls";

function AddUser({ setIsAddUserModal, setToast, getUsers }) {
  const onFinish = (values) => {
    postApi(`users`, {
      ...values,
      status: values?.status ?? false,
      createdAt: new Date().toLocaleString(),
      lastUpdatedAt: new Date().toLocaleString(),
    })
      .then(() => {
        setIsAddUserModal(false);
        setToast({
          type: "success",
          title: "User created",
          message: "User is created successfully",
        });
        getUsers();
      })
      .catch((err) => {
        console.error("api error", err);
      });
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  const onReset = () => {
    setIsAddUserModal(false);
  };

  return (
    <div>
      <Form
        name="basic"
        labelCol={{
          span: 8,
        }}
        wrapperCol={{
          span: 16,
        }}
        style={{
          maxWidth: 600,
        }}
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        onReset={onReset}
        autoComplete="off"
      >
        <Form.Item
          label="User Name"
          name="userName"
          rules={[
            {
              required: true,
              message: "Please input your username!",
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          name="status"
          valuePropName="checked"
          wrapperCol={{
            offset: 8,
            span: 16,
          }}
        >
          <Checkbox>Active</Checkbox>
        </Form.Item>

        <Form.Item
          wrapperCol={{
            offset: 8,
            span: 16,
          }}
        >
          <Button type="default" htmlType="reset">
            Cancel
          </Button>
          <Button type="default" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
}

export default AddUser;
