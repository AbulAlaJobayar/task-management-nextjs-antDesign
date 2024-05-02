"use client";

import { useSignupQuery } from "@/redux/fetcurs/signinApi";
import { ILoginTypes, TLoginResponse } from "@/types";
import { Button, Checkbox, Form, FormProps, Input, Typography } from "antd";
import Title from "antd/es/typography/Title";
import { toast } from "sonner";

const Login = () => {
  const { data: userData } = useSignupQuery("");
  const onFinish: FormProps<ILoginTypes>["onFinish"] = (values) => {
    const toastId = toast.loading("login User", {
      position: "top-center",
      duration: 2000,
    });
    const res = userData as TLoginResponse[];
    let findData;
    if (res) {
      findData = res.find(
        (data) =>
          data.email === values.email && data.password === values.password
      );
    }
    if (findData) {
      toast.success("login success", {
        id: toastId,
        duration: 2000,
        position: "top-center",
        style: { color: "green" }
      });
    } else {
      toast.error(
        "something went wrong!!",
        { id: toastId, duration: 2000, style: { color: "red" } }
      );
    }
  };

  return (
    <div className="w-full h-[100vh] bg-gradient-to-br from-[#001427] to-[#2B6CB0] py-10">
      <div className=" w-[90%] md:w-2/5 bg-white mx-auto px-10 py-4 rounded-xl border-[#F26430]">
        <Typography className=" text-center">
          <Title level={1}>Login</Title>
        </Typography>

        <Form
          layout="vertical"
          name="basic"
          labelCol={{ span: 8 }}
          style={{ maxWidth: 600 }}
          initialValues={{ remember: true }}
          onFinish={onFinish}
          autoComplete="off"
          className="mx-auto"
        >
          <Form.Item<ILoginTypes>
            label="Email"
            name="email"
            rules={[{ required: true, message: "Please input your username!" }]}
          >
            <Input />
          </Form.Item>

          <Form.Item<ILoginTypes>
            label="Password"
            name="password"
            rules={[{ required: true, message: "Please input your password!" }]}
          >
            <Input.Password />
          </Form.Item>

          <Form.Item<ILoginTypes>
            name="remember"
            valuePropName="checked"
            wrapperCol={{ offset: 8, span: 16 }}
          >
            <Checkbox>Remember me</Checkbox>
          </Form.Item>

          <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default Login;
