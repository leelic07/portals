import React, { Component } from 'react'
import { Card, Col } from 'antd'
import imageUrl from '../../../assets/images/timg.jpg'

class HomeLink extends Component {
  constructor(props) {
    super(props)
    this.tabList = [{
      key: '1',
      tab: '友情链接'
    }]
    this.linkList = [{
      url: '/link',
      name: '湘潭市人民检察院'
    }, {
      url: '/link',
      name: '湘潭县人民检察院'
    }, {
      url: '/link',
      name: '雨湖区人民检察院'
    }, {
      url: '/link',
      name: '韶山区人民检察院'
    }, {
      url: '/link',
      name: '湘乡区人民检察院'
    }]
  }

  render() {
    const linkList = <ul>{this.linkList.map((link, index) =>
      <li key={index}>
        <a href={link.url} alt={index}>{link.name}</a>
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
          {linkList}
        </Card>
      </Col>
    )
  }
}

export default HomeLink