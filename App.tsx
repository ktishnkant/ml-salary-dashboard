import React from 'react';
import { Layout } from 'antd';
import MainTable from './MainTable';
import LineGraph from './LineGraph';
import 'antd/dist/reset.css';

const { Header, Content } = Layout;

const App: React.FC = () => {
  return (
    <Layout>
      <Header style={{ color: 'white', textAlign: 'center' }}>ML Engineer Salary Dashboard</Header>
      <Content style={{ padding: '50px' }}>
        <LineGraph />
        <MainTable />
      </Content>
    </Layout>
  );
};

export default App;
