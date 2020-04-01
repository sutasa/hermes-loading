import React from "react"
import PropTypes from "prop-types"
import styled, {keyframes} from "styled-components"
import {color,size,border} from "./DefaultValue"

ClipLoader.prototype = {
    loading : PropTypes.bool.isRequired,
    color : PropTypes.string,
    size : PropTypes.number,
    border : PropTypes.number
}

function ClipLoader(props){
    const circle = keyframes`
        0% {
            transform: rotate(0deg) scale(1);
        }

        50% {
            transform: rotate(180deg) scale(0.8);
        }
        
        100% {
            transform: rotate(360deg) scale(1);
        }
    `

    const Loader = styled.div`
        display : inline-block;
        background : transparent !important;
        width : ${props.size || size}px;
        height : ${props.size || size}px;
        border-radius : 100%;
        border : ${props.border || border}px solid;
        border-color : ${props.color || color};
        border-bottom-color: transparent;
        animation-name : ${circle};
        animation-duration : 0.7s;
        animation-timing-function: linear;
        animation-delay: 0s;
        animation-fill-mode: both;
        animation-iteration-count: infinite;
    `
    return(
        props.loading ?
            <Loader/>
        : null
    )
}
export default ClipLoader