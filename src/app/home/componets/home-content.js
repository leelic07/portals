import React, { Component } from 'react'
import { Row } from 'antd'
import HomeSecretary from './home-secretary'
import HomeTile from './home-title'
import HomeCarousel from './home-carousel'

class HomeContent extends Component {
  render() {
    return (
      <Row className="content-box">
        <HomeSecretary></HomeSecretary>
        <HomeTile></HomeTile>
        <HomeCarousel></HomeCarousel>
      </Row>
    )
  }
}

export default HomeContent;