import React from "react";
import { Button, Checkbox, Form, Input } from "antd";
import { putApi } from "../../Api/apiCalls";

function UpdateUser({ setIsUpdateUserModal, setToast, getUsers, user }) {
  const onFinish = (values) => {
    putApi(`users/${user.id}`, {
      ...user,
      ...values,
      status: values?.status ?? false,
      lastUpdatedAt: new Date().toLocaleString(),
    })
      .then(() => {
        setIsUpdateUserModal(false);
        setToast({
          type: "success",
          title: "User updated",
          message: "User is updated successfully",
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
    setIsUpdateUserModal(false);
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
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        onReset={onReset}
        initialValues={user}
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
          <Input defaultValue={user.userName} />
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

export default UpdateUser;
