import React, { Component } from 'react'
import { Row } from 'antd'
import HomeSecretary from './home-secretary'
import HomeTile from './home-title'
import HomeCarousel from './home-carousel'
import HomeCheck from './home-check'
import HomeNav from './home-nav'
import HomeHotPot from './home-hot'
import HomeSubject from './home-subject'
import HomeNavList from './home-navlist'
import HomeCase from './home-case'
import HomeLaw from './home-law'
import HomeInspector from './home-inspector'
import HomeLink from './home-link'

class HomeContent extends Component {
  render() {
    return (
      <Row className="content-box">
        <HomeSecretary></HomeSecretary>
        <HomeTile></HomeTile>
        <HomeCarousel></HomeCarousel>
        <HomeCheck></HomeCheck>
        <HomeNav></HomeNav>
        <HomeHotPot></HomeHotPot>
        <HomeSubject></HomeSubject>
        <HomeNavList></HomeNavList>
        <HomeCase></HomeCase>
        <HomeLaw></HomeLaw>
        <HomeInspector></HomeInspector>
        <HomeLink></HomeLink>
      </Row>
    )
  }
}

export default HomeContent;