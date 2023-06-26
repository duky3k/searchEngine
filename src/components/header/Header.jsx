import React from 'react';
import { Menu, Button } from 'antd';
import { LogoutOutlined } from '@ant-design/icons';

const Header = () => {
  return (
    <div>
      <div className="demo-logo" />
      <Menu
        theme="dark"
        mode="horizontal"
        defaultSelectedKeys={['1']}
      >
        <Menu.Item key="1">Home</Menu.Item>
        <Menu.Item key="2">About</Menu.Item>
        <Menu.Item key="3">Services</Menu.Item>
        <Menu.Item key="4">Contact</Menu.Item>
      </Menu>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <Button type="text" danger icon={<LogoutOutlined />}>
          Sign Out
        </Button>
      </div>
    </div>
  );
};

export default Header;