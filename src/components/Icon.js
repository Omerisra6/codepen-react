import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'

const sizesMap = { 
    sm: '0.6vw',
    md: '1vw',
    lg: '1.4vw',
}

const colorsMap = {
    light: {
        color :'#8FD6E1',
        hover : '#000'
    },
    dark:{
        color :'#000',
        hover : '#8FD6E1'
    },
}


const StyledIcon = styled.i`

    font-size: ${ ( { size } ) => sizesMap[ size ]};
    color: ${ ( { color } ) => colorsMap[ color ].color};
    height: fit-content;

    &:hover {
        color:${ ( { color } ) => colorsMap[ color ].hover };
    }
`

StyledIcon.defaultProps = {
    size: 'md',
    color: 'light'
}

StyledIcon.propTypes = {
    size: PropTypes.oneOf([
        'sm',
        'md',
        'lg',
    ]),
    color: PropTypes.oneOf([ 
        'light',
        'dark'
    ])
}


export default function Icon(props) {

   
    return (
        <StyledIcon size={ props.size} className={`fa fa-${props.iconClass} ${props.className}`} onClick={props.onClick}></StyledIcon>
    )
}
