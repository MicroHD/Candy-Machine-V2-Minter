import styled from "styled-components";

export const TeamContainer = styled.div`
    position: relative;
    width: 100%;
    height: fit-content;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: #050505;
    padding-bottom: 35px;
    
`

export const TeamWrapper = styled.div`
    position: relative;
    color: #40BBBB;
    white-space: pre-line;
    word-spacing: 3px;
    line-height: 10px;
    background: #070707;
    width: 100%;
    height: fit-content;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    @media screen and (max-width: 1280px)
    {
        transition: 0.8s all ease;
        justify-content: center;
        flex-direction: row;
    }
`

export const ImgContainer = styled.div`
    
    height: 70%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 45px;
 
    @media screen and (max-width: 1280px)
    {
        transition: 0.8s all ease;
        justify-content: center;
        flex-direction: column;
    }
    @media screen and (max-width: 780px)
    {
        transition: 0.8s all ease;
        width: 250px;
    }
    @media screen and (max-width: 480px)
    {
        transition: 0.8s all ease;
        width: 90px;
    }
`

export const TeamMember = styled.div`

    display: flex;
    height: 450px;
    width: 400px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: relative;
    margin: 10px;
  
    @media screen and (max-width: 1920px)
    {
        transition: 0.8s all ease;
        width: 325px;
        margin: 0;
    }
    @media screen and (max-width: 480px)
    {
        transition: 0.8s all ease;
        width: 175px;
        height: 300px;
        margin: 0;
    }
    
`

export const TeamImg = styled.img`
    
    border-radius: 90%;
    height: 200px;
    width: 200px;
    box-shadow: 3px 3px 6px black;

    @media screen and (max-width: 1920px)
    {
        transition: 0.8s all ease;
        height: 175px;
        width: 175px;
    }
    @media screen and (max-width: 480px)
    {
        transition: 0.8s all ease;
        height: 125px;
        width: 125px;
    }


`

export const TeamTitle = styled.div`
    position: relative;
    font-size: 85px;
    font-weight: normal;
    padding: 35px;
    padding-bottom: 0;
    font-family: Modak;
    border-top: 5px solid white;
    width: 80%;
    line-height: 7px;
    
    @media screen and (max-width: 480px)
    {
        transition: 0.8s all ease;
        padding: 0;
        margin: 0;
        font-size: 55px;
    }
`

export const TeamInfo = styled.div`
h1{
    font-size: 40px;
    font-family: Modak;
    font-weight: normal;
    text-transform: none;
}

font-size: 20px;
text-align: center;
width: 100%;
line-height: 1.2;
text-transform: uppercase;

@media screen and (max-width: 480px)
    {
        transition: 0.8s all ease;
        h1{
            font-size: 22px;
        }
    }
`

export const SocialIcon = styled.a`
    color: #fff;
    justify-self: flex-start;
    cursor: pointer;
    font-size: 2.5rem;
    display: flex;
    align-items: center;
    margin-left: 22px;
    margin-right: 22px;
    font-weight: bold;
    text-decoration: none;
    padding-top: 25px;
`

export const Socials = styled.div `
    display: flex;
    text-align: center;
    cursor: pointer;

    &:hover {
        transition: all 0.2s ease-in-out;
        color: lightgray;
    }
`