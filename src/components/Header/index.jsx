import styled from "styled-components"

const HeaderStyles = styled.header`
    width: 100%;
    height: 125px;
    background-color: #000;
`


const Header = () => {
    return <HeaderStyles>
                <div>
                    <img src="/img/aluraflix-logo.png" alt="logo"/>
                </div>
                <nav>
                    <ul>
                        <li></li>
                        <li></li>
                    </ul>
                </nav>
            </HeaderStyles>
}

export default Header