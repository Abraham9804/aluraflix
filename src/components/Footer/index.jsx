import styled from "styled-components"

const FooterStyles = styled.footer`
    width: 100%;
    height: 125px;
    background-color: var(--black);
    display: flex;
    justify-content: center;
    align-items: center;
    border-top: 5px solid #2271D1;
`

const Footer = () => {
    return (
            <FooterStyles>
                <img src="/img/aluraflix-logo.png" />
            </FooterStyles>
    )
}

export default Footer