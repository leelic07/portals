import React, { Component } from 'react'
import { Col, Card, Menu, Icon } from 'antd'
const { SubMenu } = Menu
const MenuItemGroup = Menu.ItemGroup

class HomeNav extends Component {
  constructor(props) {
    super(props)
    this.navList = [{
      title: '律师预约',
      subMenu: {
        title: '预约详情',
        options: [{
          title: '律师预约'
        }, {
          title: '律师预约'
        }]
      }
    }, {
      title: '公众信箱',
      subMenu: {
        title: '信箱详情',
        options: [{
          title: '公众信箱'
        }, {
          title: '公众信箱'
        }]
      }
    }, {
      title: '网上投票',
      subMenu: {
        title: '投票详情',
        options: [{
          title: '网上投票'
        }, {
          title: '网上投票'
        }]
      }
    }, {
      title: '新闻投稿',
      subMenu: {
        title: '投稿详情',
        options: [{
          title: '新闻投稿'
        }, {
          title: '新闻投稿'
        }]
      }
    }, {
      title: '行贿犯罪档案查询',
      subMenu: {
        title: '行贿犯罪档案详情',
        options: [{
          title: '行贿犯罪档案查询'
        }, {
          title: '行贿犯罪档案查询'
        }]
      }
    }]
  }

  render() {
    const menuList = <Menu onClick={(e) => console.log('click', e)} mode="vertical-right">{this.navList.map((nav, index) => {
      return <SubMenu key={index} title={nav.title}>{
        <MenuItemGroup key={index} title={nav.subMenu.title}>
          {nav.subMenu.options.map((op, i) =>
            <Menu.Item key={`${i}${Math.random()}`}>
              {op.title}
            </Menu.Item>
          )}
        </MenuItemGroup>
      }</SubMenu>
    })}
    </Menu>
    return (
      <Col span={5} className="nav-box">
        <Card style={{ width: '100%' }}>
          {/* <Menu onClick={(e) => { console.log('click', e) }} style={{ width: 256 }} mode="vertical">
            <SubMenu key="sub1" title={<span><span>Navigation One</span></span>}>
              <MenuItemGroup title="Item 1">
                <Menu.Item key="1">Option 1</Menu.Item>
                <Menu.Item key="2">Option 2</Menu.Item>
              </MenuItemGroup>
              <MenuItemGroup title="Iteom 2">
                <Menu.Item key="3">Option 3</Menu.Item>
                <Menu.Item key="4">Option 4</Menu.Item>
              </MenuItemGroup>
            </SubMenu>
            <SubMenu key="sub2" title={<span><span>Navigation Two</span></span>}>
              <Menu.Item key="5">Option 5</Menu.Item>
              <Menu.Item key="6">Option 6</Menu.Item>
              <SubMenu key="sub3" title="Submenu">
                <Menu.Item key="7">Option 7</Menu.Item>
                <Menu.Item key="8">Option 8</Menu.Item>
              </SubMenu>
            </SubMenu>
            <SubMenu key="sub4" title={<span><span>Navigation Three</span></span>}>
              <Menu.Item key="9">Option 9</Menu.Item>
              <Menu.Item key="10">Option 10</Menu.Item>
              <Menu.Item key="11">Option 11</Menu.Item>
              <Menu.Item key="12">Option 12</Menu.Item>
            </SubMenu>
          </Menu> */}
          {menuList}
        </Card>
      </Col>
    )
  }
}

export default HomeNav