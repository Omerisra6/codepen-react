import styled from "styled-components";
import Container from "./Container";

const StyledPageView = styled( Container )`
    width: 100%;
    height: inherit;
`

export default function PageView( { srcDoc } ){

    return(
        <StyledPageView>
            <iframe 
            srcDoc={srcDoc}
            title='output' 
            sandbox='allow-scripts'
            width='100%'
            height='100%'
            />
        </StyledPageView>
    )
}