import React, { Component } from 'react'
import { Row, Col } from 'antd'

class HomeFooter extends Component {
  constructor(props) {
    super(props)
    this.footerList = []
  }

  render() {
    return (
      <Row className="footer-box">
        <Col span={10}>
          <ul>
            <li><p>网站地图</p></li>
            <i></i>
            <li>联系我们 (联系电话: XXX-XXXXXXXX)</li>
          </ul>
          <ul>
            <li>岳塘区人民检察院</li>
            <li>地址：湘潭市岳塘区</li>
          </ul>
          <ul>
            <li>岳塘区人民检察院版权所有</li>
            <li>备案号：XXXXXXXXXXX</li>
            <li>技术支持：XXXX</li>
          </ul>
        </Col>
      </Row>
    )
  }
}

export default HomeFooter