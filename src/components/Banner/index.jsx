import styled from "styled-components"

const BannerStyles = styled.section`
    width: 100%;
    height:auto;
    margin-bottom: 100px;
    img{
        width: 100%;
        height: 100%;
    }
`


const Banner = () => {
    return <BannerStyles>
                <img src="/img/banner.png" />
            </BannerStyles>
}

export default Banner 