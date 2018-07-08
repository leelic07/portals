import React, { Component } from 'react';
import HomeMenu from '../componets/home-menu';
import HomeContent from '../componets/home-content';
import HomeFooter from '../componets/home-footer'
import { Layout } from 'antd';
const { Header, Content, Footer } = Layout;

class Home extends Component {
  render() {
    return (
      <Layout>
        <Header></Header>
        <Content>
          <HomeMenu></HomeMenu>
          <HomeContent></HomeContent>
        </Content>
        <Footer>
          <HomeFooter></HomeFooter>
        </Footer>
      </Layout>
    );
  }
}

export default Home;