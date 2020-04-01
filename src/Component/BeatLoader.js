import React from "react"
import PropTypes from "prop-types"
import styled, {css,keyframes} from "styled-components"

BeatLoader.prototype = {
    loading : PropTypes.bool.isRequired,
    color : PropTypes.bool,
    size : PropTypes.number,
    margin : PropTypes.number
}

function BeatLoader(props) {

    const circle = keyframes`
        50% {
            transform: scale(0.75);
            opacity: 0.2;
        }
        
        100% {
            transform: scale(1);
            opacity: 1;
        }
    `

    const Loader = styled.div`
        display : inline-block;
        background-color : ${props.color};
        width : ${props.size || 15}px;
        height : ${props.size || 15}px;
        margin : ${props.margin || 10}px;
        border-radius : 100%;
        animation-name : ${circle};
        animation-duration : 0.7s;
        animation-timing-function: linear;
        animation-delay: ${props => props.index % 2 ? "0s" : "0.35s"};
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
export default BeatLoader