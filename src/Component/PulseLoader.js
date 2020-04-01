import React from "react"
import PropTypes from "prop-types"
import styled, {keyframes} from "styled-components"
import {color,size,margin} from "./DefaultValue"

PulseLoader.prototype = {
    loading : PropTypes.bool.isRequired,
    color : PropTypes.string,
    size : PropTypes.number,
    margin : PropTypes.number
}

function PulseLoader(props){
    const circle = keyframes`
        0% {
            transform: scale(1);
            opacity : 1;
        }

        45% {
            transform: scale(0.1);
            opacity : 0.7;
        }
        
        80% {
            transform: scale(1);
            opacity : 1;
        }
    `

    const Loader = styled.div`
        display : inline-block;
        width : ${props.size || size}px;
        height : ${props.size || size}px;
        border-radius : 100%;
        margin: ${props.margin || margin}px;
        background-color: ${props.color || color};
        animation-name : ${circle};
        animation-duration : 0.75s;
        animation-timing-function: cubic-bezier(0.2, 0.68, 0.18, 1.08);
        animation-delay: ${props => props.index * 0.12}s;
        animation-fill-mode: both;
        animation-iteration-count: infinite;
    `
    return(
        props.loading ?
        <div>
            <Loader index={1}/>
            <Loader index={2}/>
            <Loader index={3}/>
        </div>
        : null
    )
}
export default PulseLoader