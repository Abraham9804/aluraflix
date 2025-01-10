import styled from "styled-components"

const BannerStyles = styled.section`
    width: 100%;
    height: 650px;

    img{
        width: 100%;
        height: 100%;
    }
`


const Banner = () => {
    return <BannerStyles>
                <img src="/img/banner2.jpg" />
            </BannerStyles>
}

export default Banner 