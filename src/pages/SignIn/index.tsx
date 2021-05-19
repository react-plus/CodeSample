import React, { FC, useCallback } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { Form, Input, Button, Typography } from 'antd';

import { login } from '../../containers/Auth/thunks';

import StyledWrapper from './styles';

const HomePage: FC = () => {
  const history = useHistory();
  const dispatch = useDispatch();

  const handleSubmit = useCallback(async (values) => {
    await dispatch(login(values));
    console.log('history', values);
    history.push('/');
  }, []);

  return (
    <StyledWrapper>
      <div className="main">
        <Form className="form" layout="vertical" onFinish={(values) => handleSubmit(values)}>
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
            <Input name="username" placeholder="email@example.com" autoComplete="new-password" />
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

export default HomePage;
