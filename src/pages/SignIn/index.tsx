import React, { FC, useCallback } from 'react';
import { useHistory } from 'react-router-dom';
import { Form, Input, Button, Typography } from 'antd';

import StyledWrapper from './styles';

const HomePage: FC = () => {
  const history = useHistory();

  const handleSubmit = useCallback(() => {
    //TODO handle sign-in
    history.push('/');
  }, []);

  return (
    <StyledWrapper>
      <div className="main">
        <Form
          className="form"
          layout="vertical"
          onFinish={() => {
            handleSubmit();
            return Promise.resolve();
          }}
        >
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
