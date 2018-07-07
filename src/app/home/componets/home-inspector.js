import React, { Component } from 'react'
import { Card, Col } from 'antd'
import imageUrl from '../../../assets/images/timg.jpg'

class HomeInspector extends Component {
  constructor(props) {
    super(props)
    this.tabList = [{
      key: '1',
      tab: '检员风采'
    }]
    this.inspectorList = [{
      url: imageUrl,
      name: '风采内容'
    }, {
      url: imageUrl,
      name: '风采内容'
    }, {
      url: imageUrl,
      name: '风采内容'
    }, {
      url: imageUrl,
      name: '风采内容'
    }, {
      url: imageUrl,
      name: '风采内容'
    }, {
      url: imageUrl,
      name: '风采内容'
    }]
  }

  render() {
    const inspectorList = <ul>{this.inspectorList.map((inspector, index) =>
      <li key={index}>
        <img src={inspector.url} alt="" />
        <p>{inspector.name}</p>
      </li>
    )}</ul>
    return (
      <Col className="inspector-box">
        <Card
          style={{ width: '100%' }}
          extra={<a href="" onClick={(e) => { e.preventDefault() }}>查看更多></a>}
          activeTabKey={this.tabList[0].key}
          tabList={this.tabList}
          hoverable
        >
          {inspectorList}
        </Card>
      </Col>
    )
  }
}

export default HomeInspector