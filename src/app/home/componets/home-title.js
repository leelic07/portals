import React, { Component } from 'react'
import { Col, Card } from 'antd'

class HomeTitle extends Component {
  constructor(props) {
    super(props)
    this.titleList = [{
      title: '区检以往动态区检以往动态区检以往动态区检以往动态'
    }, {
      title: '区检以往动态区检以往动态区检以往动态区检以往动态'
    }, {
      title: '区检以往动态区检以往动态区检以往动态区检以往动态'
    }]
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick(e) {
    e.preventDefault()
  }

  render() {
    const titleList = <ul>{this.titleList.map((item, index) => <li key={index} onClick={this.handleClick}>{item.title}</li>)}</ul>
    return (
      <Col className="title-box">
        <Card style={{ width: '100%' }}
          hoverable
        >
          <p>岳塘区人民检察院门户网站正式上线</p>
          {titleList}
        </Card>
      </Col>
    )
  }
}

export default HomeTitle