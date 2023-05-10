import React from 'react'
import styled from 'styled-components';
import Container from './Container';

const StyledEditorsContainer = styled ( Container )`
    justify-content: space-evenly;
    background-color: hsl(225, 6%, 25%);
    height: 50%;
    max-height: 90%;
    resize: vertical;
    overflow: auto;
`

export default function EditorsContainer( { className, display, gap, onMouseDown, children } ) {

    return (
        <StyledEditorsContainer className={ `${ className } editors-container`} display={ display } gap={ gap } onMouseDown={ onMouseDown }> { children }</StyledEditorsContainer>
    )
}
