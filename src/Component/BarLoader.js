import React from "react"
import PropTypes from "prop-types"
import styled, {keyframes} from "styled-components"
import {width1,height1,width2,height2} from "./DefaultValue"

BarLoader.prototype = {
    loading : PropTypes.bool.isRequired,
    width1 : PropTypes.number,
    height1 : PropTypes.number,
    width2 : PropTypes.number,
    height2 : PropTypes.number
}

function BarLoader(props) {

    const animate = keyframes`
        0% {
            background-position: -468px 0;
        } 

        100% {
            background-position: 468px 0;
        }
    `

    const LoaderBar1 = styled.div`
        position:relative;
        background-color: #CCC;
        width:${props.width1 || width1}vw;
        height: ${props.height1 || height1}px;
        animation-name: ${animate}; 
        animation-duration: 1.3s; 
        animation-iteration-count: infinite;
        animation-timing-function: linear;   
        background: -webkit-gradient(linear, left top, right top, color-stop(5%, #f5f6f8), color-stop(18%, #e6e6e6), color-stop(30%, #f5f6f8));
        background: -webkit-linear-gradient(left, #f5f6f8 5%, #e6e6e6 18%, #f5f6f8 30%);
        background: linear-gradient(to right, #f5f6f8 5%, #e6e6e6 18%, #f5f6f8 30%);
        -webkit-background-size: 800px 104px;  
    `
    const LoaderBar2 = styled.div`
        position:relative;
        background-color: #CCC;
        width:${props.width2 || width2}vw;
        height: ${props.height2 || height2}px;
        animation-name: ${animate}; 
        animation-duration: 1.3s; 
        animation-iteration-count: infinite;
        animation-timing-function: linear;   
        background: -webkit-gradient(linear, left top, right top, color-stop(5%, #f5f6f8), color-stop(18%, #e6e6e6), color-stop(30%, #f5f6f8));
        background: -webkit-linear-gradient(left, #f5f6f8 5%, #e6e6e6 18%, #f5f6f8 30%);
        background: linear-gradient(to right, #f5f6f8 5%, #e6e6e6 18%, #f5f6f8 30%);
        -webkit-background-size: 800px 104px;  
    `
    const Bottom = styled.div`
        border-bottom: 1px solid #f5f5f5;
        padding-bottom:0.5rem;
    `
    const Loader1 = styled.div`
        display: block;
        height: 100%;
        width: 100%;
    `
    const Loader2 = styled.div`
        display: block;
        height: 100%;
        width: 100%;
        padding-top:16px;
    `
    const Load = styled.div`
        text-alert:left;
        margin-top:0.5rem;
    `
    const Container = styled.div`

    `
    return(
        props.loading ?
        <Container>
            <Load>
                <Loader1>
                    <LoaderBar1 index={1}/>
                </Loader1>
                <Loader2>
                    <LoaderBar2 index={1}/>
                </Loader2>
                <Bottom/>
            </Load>
        </Container>
        : null
    )
}
export default BarLoader