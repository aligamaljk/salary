import { useMutation } from '@tanstack/react-query';
import { Form, Input, Button, message } from 'antd';
import {  AuthRegister } from '../../../network/auth';
import { getStoredUser, setStoredToken, setStoredUser } from '../../../Services/user-storage';
import {
    authLogIn,
  ErrorMessage,
  LocalizationTypes,
  MyMutationResult,
} from '../../../Types';
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import '../Login/Login.scss';
import axiosInstance from '../../../Services/react-query/axiosInstance';

const Register = ({ t }: LocalizationTypes) => {
  const [form] = Form.useForm();
  const [loading, setLoading] = useState<boolean>(false);
  const navigate = useNavigate();
  const { mutate }: MyMutationResult = useMutation({
    mutationFn: (body: authLogIn) => AuthRegister(body),
    onSuccess: (res) => {
      setLoading(true);
      // console.log(res, 'res');
      if (!res) {
        setLoading(false);
        return message.error('Something went wrong');
      }
      setLoading(false);
      setStoredToken(res.data.token);
      axiosInstance.defaults.headers.common[
        'Authorization'
      ] = `Bearer ${res.data.token}`;
      navigate('/');
      message.success(`Welcome ${getStoredUser()}`);
    },
    onError: (error: ErrorMessage) => {
      console.log(error.response.data, 'error');
      message.error(error.response.data?.message);
      setLoading(false);
    },
  }) as unknown as MyMutationResult;

  const onFinish = (values: {
    email: string;
    password: string;
    name: string;
  }) => {
    setLoading(true);
    console.log('Success:', values);
    setStoredUser(values.name);
    mutate({ name: values.name, email: values.email, password: values.password });
  };

  return (
    <div className="auth-box-wrapper">
      <div className="auth-box-holder">
        <h2 className="auth-title">Salary</h2>
        <Form
          className="form-style"
          layout="vertical"
          onFinish={onFinish}
          form={form}
        >
          <Form.Item
            name="name"
            label={t.userName}
            rules={[
              { required: true, message: t.requiredName },
              {
                min: 6,
                message: 'Name must be at least 3 characters long',
              },
            ]}
          >
            <Input type="text" placeholder={t.userName} />
          </Form.Item>
          <Form.Item
            name="email"
            label={t.email}
            rules={[{ required: true, message: t.requiredEmail }]}
          >
            <Input placeholder={t.email} />
          </Form.Item>
          <Form.Item
            name="password"
            label={t.password}
            rules={[{ required: true, message: t.requiredPassword }]}
          >
            <Input.Password placeholder={t.password} />
          </Form.Item>

          <Button
            size="large"
            shape="round"
            block
            htmlType="submit"
            type="primary"
            loading={loading}
          >
            {t.registerTitle}
          </Button>
          <p className="account-register-row">
            {t.account} <Link to="/login"> {t.login} </Link>
          </p>
        </Form>
      </div>
    </div>
  );
};

export default Register;
