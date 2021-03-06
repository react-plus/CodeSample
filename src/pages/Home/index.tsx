import React, { FC, useCallback } from 'react';

import { Layout, Menu, Breadcrumb, Dropdown, Avatar } from 'antd';
import { UserOutlined, LaptopOutlined, NotificationOutlined } from '@ant-design/icons';

import { Logo } from './styles';
import { useDispatch, useSelector } from 'react-redux';

import { AppDispatch } from 'types';

import { logout } from 'containers/Auth/slice';
import { authSelector } from 'containers/Auth/selector';

const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;

const HomePage: FC = () => {
  const dispatch: AppDispatch = useDispatch();

  const auth = useSelector(authSelector);

  const handleLogout = useCallback(() => {
    dispatch(logout());
  }, []);

  return (
    <Layout style={{ height: '100%' }}>
      <Header className="header" style={{ display: 'flex', alignItems: 'center' }}>
        <Logo>React Plus</Logo>
        <div style={{ flex: 1 }} />
        <Dropdown
          overlay={
            <Menu>
              <Menu.Item onClick={handleLogout}>Logout</Menu.Item>
            </Menu>
          }
          placement="bottomRight"
        >
          <Avatar
            style={{ backgroundColor: '#f56a00', verticalAlign: 'middle', cursor: 'pointer' }}
            size="large"
            gap={0}
          >
            {auth.user?.firstName}
            {auth.user?.lastName}
          </Avatar>
        </Dropdown>
      </Header>
      <Layout>
        <Sider width={200} className="site-layout-background">
          <Menu
            mode="inline"
            defaultSelectedKeys={['1']}
            defaultOpenKeys={['sub1']}
            style={{ height: '100%', borderRight: 0 }}
          >
            <SubMenu key="sub1" icon={<UserOutlined />} title="subnav 1">
              <Menu.Item key="1">option1</Menu.Item>
              <Menu.Item key="2">option2</Menu.Item>
              <Menu.Item key="3">option3</Menu.Item>
              <Menu.Item key="4">option4</Menu.Item>
            </SubMenu>
            <SubMenu key="sub2" icon={<LaptopOutlined />} title="subnav 2">
              <Menu.Item key="5">option5</Menu.Item>
              <Menu.Item key="6">option6</Menu.Item>
              <Menu.Item key="7">option7</Menu.Item>
              <Menu.Item key="8">option8</Menu.Item>
            </SubMenu>
            <SubMenu key="sub3" icon={<NotificationOutlined />} title="subnav 3">
              <Menu.Item key="9">option9</Menu.Item>
              <Menu.Item key="10">option10</Menu.Item>
              <Menu.Item key="11">option11</Menu.Item>
              <Menu.Item key="12">option12</Menu.Item>
            </SubMenu>
          </Menu>
        </Sider>
        <Layout style={{ padding: '0 24px 24px' }}>
          <Breadcrumb style={{ margin: '16px 0' }}>
            <Breadcrumb.Item>Home</Breadcrumb.Item>
            <Breadcrumb.Item>List</Breadcrumb.Item>
            <Breadcrumb.Item>App</Breadcrumb.Item>
          </Breadcrumb>
          <Content
            className="site-layout-background"
            style={{
              padding: 24,
              margin: 0,
              minHeight: 280,
            }}
          >
            Content
          </Content>
        </Layout>
      </Layout>
    </Layout>
  );
};

export default HomePage;
