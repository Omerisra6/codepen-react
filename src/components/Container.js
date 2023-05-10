import React from 'react'
import styled from 'styled-components'

const StyledContainer = styled.div`
display : ${ ( { display } ) => display  ? 'flex' : display  === 'none' ? 'none' : 'block' };
flex-direction: ${( { display } ) => display === 'flex-column' ? 'column' : 'row' };
gap: ${ ( { gap } ) => gap };
${ ( { horizinalCentered } ) => horizinalCentered && 'align-items: center' };`

export default function Container( props  ) {
    
    return (
        <StyledContainer display={ props.display } className={ props.className } width="max">
            { props.children }
        </StyledContainer>
    )
}
