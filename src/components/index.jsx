import { Card, Layout } from 'antd';
import React from 'react';

import ActionBar from './ActionBar';
import AlertForm from './AlertForm';

import './index.css';

const { Content, Header } = Layout;

const Index = () => {
  return (
    <Layout style={{ height: '100vh' }}>
      <Header id="header">eBay Personal Alerts Panel</Header>
      <Content id="content">
        <ActionBar />
        <AlertForm />
      </Content>
    </Layout>
  );
};

export default Index;
