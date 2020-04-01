import React from "react"
import PropTypes from "prop-types"
import styled, {keyframes} from "styled-components"

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
        width : ${props.size || 15}px;
        height : ${props.size || 15}px;
        border-radius : 100%;
        border : ${props.border || 4}px solid;
        border-color : ${props.color};
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