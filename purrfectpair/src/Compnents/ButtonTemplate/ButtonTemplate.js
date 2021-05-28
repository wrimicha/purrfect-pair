import React from "react";
import './ButtonTemplate.css'
import colors from "../../constants/colors";
const ButtonTemplate = props =>{
    return(
    <div>
        <button id="button" style={{backgroundColor:colors.secondaryWhite}} onClick={props.clickEvent}>
            {props.text}
        </button>
    </div>
    )
}

export default ButtonTemplate;