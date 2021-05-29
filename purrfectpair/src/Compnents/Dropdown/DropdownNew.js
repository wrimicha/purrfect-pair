import { Menu, Dropdown } from 'antd';
import { DownOutlined } from '@ant-design/icons';
import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import 'antd/dist/antd.css';
import "../../HomePage/home.css";
export default function DropdownNew(props){

    const mid = ()=>{
        const elements = [];
        for(let i = 1; i < props.items.length - 1 ; i++ ){
            elements.push(
              <Menu.Item className="MenuItem" style={{paddingLeft:30,paddingRight:30}}>
          <a target="_blank" rel="noopener noreferrer" onClick={() => props.setProperty(props.items[i])}>
            {props.items[i]}
          </a>
        </Menu.Item>
            )
        }
        return elements;
      }
    
      const menu = (
        <Menu style={{ marginLeft: -23, borderBottomLeftRadius: 30, borderBottomRightRadius: 30,marginTop:10}}>
          <Menu.Item className="MenuItem" style={{paddingLeft:30,paddingRight:30,marginTop:-5}}>
            <a target="_blank" rel="noopener noreferrer" onClick={() => props.setProperty(props.items[0])}>
              {props.blankValue}
            </a>
          </Menu.Item>
          {mid()}
          <Menu.Item className="MenuItem" style={{paddingLeft:30,paddingRight:30,borderBottomLeftRadius:30,borderBottomRightRadius:30,marginBottom:-5}}>
            <a target="_blank" rel="noopener noreferrer" onClick={() => props.setProperty(props.items[props.items.length-1])}>
              {props.items[props.items.length-1]}
            </a>
          </Menu.Item>
        </Menu>
      );
        return(
            <Dropdown overlay={menu}>
            <a className="ant-dropdown-link" style={{ color: "black" }} onClick={e => e.preventDefault()}>
              {props.property.length === 0 ? props.blankValue : props.property}  <DownOutlined />
            </a>
          </Dropdown>
        )
}