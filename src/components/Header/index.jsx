import { Link } from "react-router-dom"
import styled from "styled-components"

const HeaderStyles = styled.header`
    width: 100%;
    height: 125px;
    background-color: ${props => props.$color};
    display: flex;
    justify-content: space-between;
    border-bottom: 5px solid #2271D1;
    div{
        padding: 42.5px 51px;
    }

    nav{
        ul{
            height: 100%;
            display: flex;
            list-style: none;
            align-items: center;
            gap: 25px;
            margin-right: 51px;
            
             li{
                padding: 15px 20px;
                border: 1px #F5F5F5 solid;
                border-radius: 10px;
             }
            

            a{
               
                color: var(--white);
                font-weight: 800;
                
            }
        }
    }

`


const Header = ({color}) => {
    return <HeaderStyles $color={color}>
                <div>
                    <img src="/img/aluraflix-logo.png" alt="logo"/>
                </div>
                <nav>
                    <ul>
                        <li><Link to="/">HOME</Link></li>
                        <li><Link to="/new">NUEVO VIDEO</Link></li>
                    </ul>
                </nav>
            </HeaderStyles>
}

export default Header