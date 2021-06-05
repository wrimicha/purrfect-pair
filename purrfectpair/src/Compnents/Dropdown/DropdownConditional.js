import { Menu, Dropdown } from 'antd';
import { DownOutlined } from '@ant-design/icons';
import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import 'antd/dist/antd.css';
import "../../HomePage/home.css";
export default function DropdownConditional(props) {
  const [currentType, setCurrentType] = useState(props.selectedPet);
  const mid = () => {
    const elements = [];
    if(props.items[props.selectedPet].length != 0 || props.items[props.selectedPet].length != undefined  ){
    if (props.items[props.selectedPet].length > 0) {
      for (let i = 1; i < props.items[props.selectedPet].length - 1; i++) {
        elements.push(
          <Menu.Item className="MenuItem" style={{ paddingLeft: 30, paddingRight: 30 }}>
            <a target="_blank" rel="noopener noreferrer" onClick={() =>  props.setProperty(props.items[props.selectedPet][i])}>
              {props.items[props.selectedPet][i]}
            </a>
          </Menu.Item>
        )
      }
    }
      return elements;
    }
  }

  const menu = (

    <Menu style={{ marginLeft: -23, borderBottomLeftRadius: 30, borderBottomRightRadius: 30, marginTop: 10, maxHeight: 250, overflow: 'auto' }}>
      <Menu.Item className="MenuItem" style={{ paddingLeft: 30, paddingRight: 30, marginTop: -5 }}>
        <a target="_blank" rel="noopener noreferrer" onClick={() => props.setProperty(props.items[props.selectedPet][0])}>
          {props.blankValue}
        </a>
      </Menu.Item>
      {mid()}
      <Menu.Item className="MenuItem" style={{ paddingLeft: 30, paddingRight: 30, borderBottomLeftRadius: 30, borderBottomRightRadius: 30, marginBottom: -5 }}>
        <a target="_blank" rel="noopener noreferrer"
        onClick={() =>{
          if(props.items[props.selectedPet][props.items[props.selectedPet].length - 1] !== undefined)
          props.setProperty(props.items[props.selectedPet][props.items[props.selectedPet].length - 1])
          }}>
          {props.items[props.selectedPet][props.items[props.selectedPet].length - 1]}
        </a>
      </Menu.Item>
    </Menu>
  );

  return (
    <Dropdown overlay={menu}>
      <a className="ant-dropdown-link" style={{ color: "black" }} onClick={e => e.preventDefault()}>
        {props.property.length === 0 ? props.blankValue : props.property}  <DownOutlined />
      </a>
    </Dropdown>
  )
}