import React, { Component } from 'react'
import { Menu, Input, Row, Col } from 'antd'
const { Search } = Input

class HomeMenu extends Component {
  constructor(props) {
    super(props)
    this.menuList = [{
      name: '首页',
    }, {
      name: '本院概况',
    }, {
      name: '阳光检务',
    }, {
      name: '新闻动态',
    }, {
      name: '检查文化',
    }, {
      name: '服务导航',
    }]
    this.information = {
      title: '通知公告：',
      content: '通知内容通知内容通知内容通知内容通知内容通知内容通知内容通知内容通知内容通知内容通知内容通知内容通知内容通知内容通知内容通知内容通知内容通知内容'
    }
  }
  render() {
    const menuList = this.menuList.map((menu, index) => <Menu.Item key={index}>{menu.name}</Menu.Item>);
    return (
      <div>
        <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={['0']}
          style={{
            lineHeight: '60px',
            background: '#3076bc',
          }}>
          {menuList}
          <Search
            placeholder="请输入关键字"
            enterButton="搜索"
            size="default"
            onSearch={value => console.log(value)}
          />
        </Menu>
        <Row>
          <Col span={3}>
            <i></i>
            <h3 htmlFor="">{this.information.title}</h3>
          </Col>
          <Col span={11}>
            <span>{this.information.content}</span>
          </Col>
          <Col span={2} offset={4}>
            <span>2018/6/13 星期三</span>
          </Col>
          <Col span={1}>
            <span>湘潭</span>
          </Col>
          <Col span={2}>
            <span>多云 22℃~27℃</span>
          </Col>
        </Row>
      </div>
    )
  }
}

export default HomeMenu