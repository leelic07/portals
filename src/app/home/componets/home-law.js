import React, { Component } from 'react'
import { Card, Col } from 'antd'

class HomeLaw extends Component {
  constructor(props) {
    super(props)
    this.tabList = [{
      key: '1',
      tab: '法律法规'
    }]
    this.checkList = [{
      content: '法律法规内容法律法规内容法律法规内容法律法规内容',
      date: '2018-06-13'
    }, {
      content: '法律法规内容法律法规内容法律法规内容法律法规内容',
      date: '2018-06-13'
    }, {
      content: '法律法规内容法律法规内容法律法规内容法律法规内容',
      date: '2018-06-13'
    }, {
      content: '法律法规内容法律法规内容法律法规内容法律法规内容',
      date: '2018-06-13'
    }, {
      content: '法律法规内容法律法规内容法律法规内容法律法规内容',
      date: '2018-06-13'
    }]
  }

  render() {
    const checkList = <ul>{this.checkList.map((check, index) => <li key={index}>
      <p>
        <i></i>
        {check.content}
      </p>
      <span>{check.date}</span>
    </li>)}</ul>
    return (
      <Col className="check-box" style={{ width: '38.5%' }}>
        <Card
          style={{ width: '100%' }}
          extra={<a href="" onClick={(e) => { e.preventDefault() }}>查看更多></a>}
          activeTabKey={this.tabList[0].key}
          tabList={this.tabList}
          hoverable
        >
          {checkList}
        </Card>
      </Col>
    )
  }
}

export default HomeLaw