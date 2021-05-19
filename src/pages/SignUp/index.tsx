import React, { FC, useCallback } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { Form, Input, Button, Typography, message } from 'antd';

import { register } from 'containers/Auth/thunks';

import StyledWrapper from './styles';
import { AppDispatch } from 'types';

const SignUpPage: FC = () => {
  const history = useHistory();
  const dispatch: AppDispatch = useDispatch();

  const handleSubmit = useCallback(async (values) => {
    message.loading({ content: 'Loading...', key: 'login' });
    const resultAction = await dispatch(register(values));
    if (register.rejected.match(resultAction)) {
      message.error({ content: 'Email or password invalid', key: 'login' });
      return;
    }
    history.push('/');
  }, []);

  return (
    <StyledWrapper>
      <div className="main">
        <Form className="form" layout="vertical" onFinish={handleSubmit}>
          <Typography.Title className="mb-6 text-center">Register account</Typography.Title>
          <Form.Item
            label="Email address:"
            name="email"
            rules={[
              {
                required: true,
                message: 'Email address is a required field!',
              },
            ]}
          >
            <Input name="username" placeholder="email@example.com" autoComplete="new-password" />
          </Form.Item>
          <Form.Item
            label="First Name:"
            name="firstName"
            rules={[
              {
                required: true,
                message: 'First Name is a required field!',
              },
            ]}
          >
            <Input name="firstName" placeholder="First Name" />
          </Form.Item>
          <Form.Item
            label="Last Name:"
            name="lastName"
            rules={[
              {
                required: true,
                message: 'Last Name is a required field!',
              },
            ]}
          >
            <Input name="lastName" placeholder="Last Name" />
          </Form.Item>
          <Form.Item
            label="Password:"
            name="password"
            rules={[
              {
                required: true,
                message: 'Password is a required field!',
              },
            ]}
          >
            <Input.Password name="password" placeholder="******" autoComplete="new-password" />
          </Form.Item>
          <Button htmlType="submit" type="primary" block className="mt-6">
            Submit
          </Button>
        </Form>
      </div>
    </StyledWrapper>
  );
};

export default SignUpPage;
