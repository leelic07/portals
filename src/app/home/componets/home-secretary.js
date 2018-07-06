import React, { Component } from 'react'
import { Col, Card } from 'antd'
import imageUrl from '../../../assets/images/secretary.png'
const { Meta } = Card

class HomeSecretary extends Component {
  constructor(props) {
    super(props)
    this.nameList = [{
      name: '姓名'
    }, {
      name: '姓名'
    }, {
      name: '姓名'
    }, {
      name: '姓名'
    }, {
      name: '姓名'
    }, {
      name: '姓名'
    }, {
      name: '姓名'
    }, {
      name: '姓名'
    }]
  }

  render() {
    const nameList = <ul>{this.nameList.map((item, index) => <li key={index}>{item.name}</li>)}</ul>
    return (
      <Col span={5} className="secretary-box">
        <Card
          hoverable
          style={{ width: '100%' }}
          cover={<img alt="secretary" src={imageUrl} />}
        >
          <Meta
            title={[<h3>姓名</h3>, <h3>党组织书记, 检察长</h3>]}
            description={nameList}
          />
        </Card>
      </Col>
    )
  }
}

export default HomeSecretary