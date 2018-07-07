import React, { Component } from 'react'
import { Card, Col, Carousel } from 'antd'
import imgUrl from '../../../assets/images/timg.jpg'

class HomeCarousel extends Component {
  constructor(props) {
    super(props)
    this.carouselList = [{
      url: imgUrl
    }, {
      url: imgUrl
    }, {
      url: imgUrl
    }, {
      url: imgUrl
    }]
  }

  render() {
    const carouselList = this.carouselList.map((img, index) => <div key={index}><img alt={index} src={img.url} /></div>)
    return (
      <Col className="carousel-box">
        <Card
          hoverable>
          <Carousel autoplay>
            {carouselList}
          </Carousel>
        </Card>
      </Col>
    )
  }
}

export default HomeCarousel