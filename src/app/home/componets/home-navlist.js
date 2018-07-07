import React, { Component } from 'react'
import { Col, Card, Menu } from 'antd'
const { SubMenu } = Menu

class HomeNavList extends Component {
  constructor(props) {
    super(props)
    this.navList = [{
      title: '机构职能',
      options: [{
        title: '机构职能'
      }, {
        title: '机构职能'
      }]
    }, {
      title: '区院荣耀',
      options: [{
        title: '区院荣耀'
      }, {
        title: '区院荣耀'
      }]
    }, {
      title: '联系我们',
      options: [{
        title: '联系我们'
      }, {
        title: '联系我们'
      }]
    }]
  }

  render() {
    const menuList = this.navList.map((nav, index) =>
      <Card><Menu><SubMenu key={index} title={nav.title}>{
        nav.options.map((nav, i) =>
          <Menu.Item key={`${i}${Math.random()}`}>{nav.title}</Menu.Item>
        )}
      </SubMenu></Menu></Card>
    )
    return (
      <Col span={5} className="navlist-box">
        {/* <Card>
          <Menu>
            <SubMenu key="sub4" title={<span><span>Navigation Three</span></span>}>
              <Menu.Item key="9">Option 9</Menu.Item>
              <Menu.Item key="10">Option 10</Menu.Item>
              <Menu.Item key="11">Option 11</Menu.Item>
              <Menu.Item key="12">Option 12</Menu.Item>
            </SubMenu>
          </Menu>
        </Card>
        <Card>
          <Menu>
            <SubMenu key="sub4" title={<span><span>Navigation Three</span></span>}>
              <Menu.Item key="9">Option 9</Menu.Item>
              <Menu.Item key="10">Option 10</Menu.Item>
              <Menu.Item key="11">Option 11</Menu.Item>
              <Menu.Item key="12">Option 12</Menu.Item>
            </SubMenu>
          </Menu>
        </Card>
        <Card>
          <Menu>
            <SubMenu key="sub4" title={<span><span>Navigation Three</span></span>}>
              <Menu.Item key="9">Option 9</Menu.Item>
              <Menu.Item key="10">Option 10</Menu.Item>
              <Menu.Item key="11">Option 11</Menu.Item>
              <Menu.Item key="12">Option 12</Menu.Item>
            </SubMenu>
          </Menu>
        </Card> */}
        {menuList}
      </Col>
    )
  }
}

export default HomeNavList