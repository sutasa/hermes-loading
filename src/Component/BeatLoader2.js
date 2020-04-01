import React from "react"
import PropTypes from "prop-types"
import styled, {keyframes} from "styled-components"
import {color,size,width,height} from "./DefaultValue"

BeatLoader2.prototype = {
    loading : PropTypes.bool.isRequired,
    color : PropTypes.string,
    size : PropTypes.number,
    margin : PropTypes.number,
    widthShadow : PropTypes.number,
    heightShadow : PropTypes.number
}

function BeatLoader2(props) {

    const circle = keyframes`
        0%{
            top:60px;
            height:5px;
            border-radius: 50px 50px 25px 25px;
            transform: scaleX(1.7);
        }
        40%{
            height:20px;
            border-radius: 50%;
            transform: scaleX(1);
        }
        100%{
            top:0%;
        }
    `
    const shadow = keyframes`
        0%{
            transform: scaleX(1.5);
        }
        40%{
            transform: scaleX(1);
            opacity: 0.7;
        }
        100%{
            transform: scaleX(.2);
            opacity: 0.4;
        }
    `

    const Loader = styled.div`
        display : inline-block;
        position: absolute;
        background-color : ${props.color || color};
        width : ${props.size || size}px;
        height : ${props.size || size}px;
        border-radius : 50%;
        left:15%;
        transform-origin: 50%;
        animation-name : ${circle};
        animation-duration : 0.5s;
        animation-direction: alternate;
        animation-timing-function: ease;
        animation-fill-mode: none;
        animation-iteration-count: infinite;
        &:nth-child(2){
            left:45%;
            animation-delay: .2s;
        }
        &:nth-child(3){
            left:auto;
            right:15%;
            animation-delay: .3s;
        }
    `
    const Shadow = styled.div`
        display : inline-block;
        position: absolute;
        background-color : rgba(0,0,0,.5);
        width : ${props.widthShadow || width}px;
        height : ${props.heightShadow || height}px;
        border-radius : 50%;
        top:62px;
        transform-origin: 50%;
        left:15%;
        filter: blur(1px);
        animation-name : ${shadow};
        animation-duration : 0.5s;
        animation-timing-function: ease;
        animation-fill-mode: none;
        animation-iteration-count: infinite;
        &:nth-child(4){
            left: 45%;
            animation-delay: .2s
        }
        &:nth-child(5){
            left:auto;
            right:15%;
            animation-delay: .3s;
        }
    `

    const Wrapper = styled.div`
        width:200px;
        height:60px;
        left:50%;
        top:50%;
        transform: translate(-50%, -50%);
    `
    return(
        props.loading ?
        <Wrapper>
            <Loader index={1}/>
            <Loader index={2}/>
            <Loader index={3}/>
            <Shadow index={1}/>
            <Shadow index={2}/>
            <Shadow index={3}/>
        </Wrapper>
        : null
    )
}
export default BeatLoader2