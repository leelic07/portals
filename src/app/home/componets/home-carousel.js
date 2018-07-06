import React, { Component } from 'react'
import { Card, Col, Carousel } from 'antd'

class HomeCarousel extends Component {
  constructor(props) {
    super(props)
    this.carouselList = []
  }

  render() {
    return (
      <Col className="carousel-box">
        <Card>
          <Carousel autoplay>
            <div><h3>1</h3></div>
            <div><h3>2</h3></div>
            <div><h3>3</h3></div>
            <div><h3>4</h3></div>
          </Carousel>
        </Card>
      </Col>
    )
  }
}

export default HomeCarousel