import { Layout } from 'antd';
import React from 'react';
import { Provider } from 'react-redux';

import AlertForm from './alertForm/AlertForm';
import AlertList from './alertList/AlertList';

import store from '../redux';

import './index.css';

const { Content, Header } = Layout;

const Index = () => {
  return (
    <Provider store={store}>
      <Layout style={{ height: '100vh' }}>
        <Header id="header">eBay Personal Alerts Panel</Header>
        <Content id="content">
          <AlertList />
          <AlertForm />
        </Content>
      </Layout>
    </Provider>
  );
};

export default Index;
