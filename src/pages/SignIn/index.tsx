import React, { FC, useCallback } from 'react';
import { useHistory, Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { Form, Input, Button, message, Typography } from 'antd';

import { AppDispatch } from 'types';
import { login } from 'containers/Auth/thunks';

import StyledWrapper from './styles';

const SignInPage: FC = () => {
  const history = useHistory();
  const dispatch: AppDispatch = useDispatch();

  const handleSubmit = useCallback(async (values) => {
    message.loading({ content: 'Loading...', key: 'login' });
    const resultAction = await dispatch(login(values));
    if (login.rejected.match(resultAction)) {
      message.error({ content: 'Email or password invalid', key: 'login' });
      return;
    }
    message.success({ content: 'Success', key: 'login' });
    history.push('/');
  }, []);

  return (
    <StyledWrapper>
      <div className="main">
        <Form className="form" layout="vertical" onFinish={handleSubmit}>
          <Typography.Title className="mb-6 text-center">Sign-in</Typography.Title>
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
            <Input name="email" placeholder="email@example.com" autoComplete="new-password" />
          </Form.Item>
          <Form.Item
            label="Password:"
            name="passWord"
            rules={[
              {
                required: true,
                message: 'Password is a required field!',
              },
            ]}
          >
            <Input.Password name="passWord" placeholder="******" autoComplete="new-password" />
          </Form.Item>
          <Button htmlType="submit" type="primary" block className="mt-6">
            Submit
          </Button>
          Or <Link to="/sign-up">Register now!</Link>
        </Form>
      </div>
    </StyledWrapper>
  );
};

export default SignInPage;
