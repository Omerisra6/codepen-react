import React, { useState } from 'react'
import 'codemirror/lib/codemirror.css'
import 'codemirror/theme/material.css'
import 'codemirror/mode/xml/xml'
import 'codemirror/mode/javascript/javascript'
import 'codemirror/mode/css/css'
import {Controlled as ControlledEditor} from 'react-codemirror2'
import Container from './Container'
import styled from 'styled-components'
import Icon from './Icon'

const StyledEditorsContainer = styled( Container )`

    .CodeMirror{
        height: 100% !important;
    }

    flex-grow: ${ ( { grow } ) => grow ? 0 : 1};
    flex-basis: 0;
    padding: .5rem;
    
    & > .code-mirror-wrapper{
        flex-grow: 1;
    }

    & > .code-mirror-wrapper > div{
        border-radius: 0 0 8px 8px;
    }

    .CodeMirror-scroll{
        position: absolute;
        -ms-overflow-style: none;
        scrollbar-width: none;
    }

    .CodeMirror-scroll::-webkit-scrollbar {
        display: none;
    }
`

const TopContainer = styled( Container )`
    justify-content: space-between;
    align-items: center;
    padding: 0 1vw;
    background-color: hsl( 225, 6%, 13%);
    border-radius: 8px 8px 0 0;
    height: 10vh;

    & > h3{
        color: #fff;
    }
`

const StyeldSizeIcon = styled( Icon )`
    padding-left: 2vw;
`


export default function Editor( { title, onChange, value, language } ) {

    const [ isCompressed, setIsCompressed ] = useState( false )

    const handelCompress = ( e ) => {

        e.currentTarget.classList.toggle( 'fa-compress', isCompressed )
        e.currentTarget.classList.toggle( 'fa-expand-alt', ! isCompressed )
        setIsCompressed( ! isCompressed )
    }

    
    function handleChange( editor, data, value) 
    {
        onChange(value)
    }

    
    return (
        <StyledEditorsContainer className="editor-container" grow={ isCompressed } display="flex-column">

            <TopContainer className="top-editor" display="flex">

                <h3 className="editor-title"> { title }</h3>
                <StyeldSizeIcon iconClass="compress" size="lg" onClick={ handelCompress }></StyeldSizeIcon>

            </TopContainer>
            
            <ControlledEditor
            onBeforeChange={ handleChange }
            value={ value }
            className="code-mirror-wrapper"
            options={ {
                lineNumbers: true,
                lineWrapping: true,
                lint: true,
                mode: language,
                theme: 'material',
            } }/>
        </StyledEditorsContainer>
    )
}
