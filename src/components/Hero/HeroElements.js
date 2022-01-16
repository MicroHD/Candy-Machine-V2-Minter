import styled from "styled-components";
import {Link as LinkS} from "react-scroll"

export const HeroContainer = styled.div`
background: #5d58b4;
height: 1000px;
width: 100%;
display: flex;
justify-content: center;
align-items: center;
position: relative;
/* @media screen and (max-width: 1580px)
{
    transition: 0.8s all ease;
    height: 1000px;
} */
@media screen and (max-height: 720px)
{
    transition: 0.8s all ease;
    height: 600px;
}
@media screen and (max-width: 1280px)
{
    transition: 0.8s all ease;
    height: 700px;
}
@media screen and (max-width: 780px)
{
    transition: 0.8s all ease;
    height: 500px;
}
@media screen and (max-width: 480px)
{
    transition: 0.8s all ease;
    height: 300px;
    overflow: hidden;
    
}
`

export const HeroImage = styled.img`
height: 100%;
width: 100%;
position: absolute;
z-index: 0;
@media screen and (max-width: 480px)
{
    transition: 0.8s all ease;
    width: 110%;
   
}
`

export const HeroSupply = styled.div`
font-family: Marker;
font-size: 45px;
position: absolute;
justify-content: bottom;
align-items: center;
height: 155px;
width: 100%;

bottom: 0;
left: 0;
z-index: 3;
`

export const HeroText = styled.div`
height: 75px;
width: 100%;
justify-content: center;
font-family: Marker;

`

export const TwitterBtn = styled.div`
z-index: 3;
background: transparent;
height: 29%;
width: 12%;
display: flex;
justify-content: center;
align-items: center;
right: 17%;
bottom: 20%;
position: absolute;
border-radius: 90px;
`

export const DiscordBtn = styled.div`
z-index: 3;
height: 16%;
width: 8%;
background: transparent;
display: flex;
position: absolute;
justify-content: center;
align-items: center;
bottom: 17.2%;
right: 47%;
`

export const SocialBtn = styled.a`
    cursor: pointer;
    display: flex;
    height: 100%;
    width: 100%;
`

export const ConnectContainer = styled.div`
z-index: 3;
height: 100%;
width: 100%;
background: transparent;
display: flex;
position: absolute;

`
export const AboutLink = styled(LinkS)`
z-index: 3;
height: 15%;
width: 14%;
background: transparent;
position: absolute;
bottom: 6%;
left: 25%;
cursor: pointer;
border-radius: 90px;
`
export const AboutArea = {
    id: 'about',
}