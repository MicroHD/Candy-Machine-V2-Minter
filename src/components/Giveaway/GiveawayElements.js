import styled from "styled-components";
import GiveawayBackground from '../../img/GunterIcon.png'
import CloudImg from '../../img/GunterIcon.png'
import CloudPeek from '../../img/GunterIcon.png'
import YouTube from "react-youtube";

export const SocialIcon = styled.a`
    color: #fff;
    cursor: pointer;
    font-size: 0;
    display: flex;
    align-items: center;
    text-decoration: none;
`

export const GiveawaySection = styled.div`
    position: relative;
    height: 750px;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    /* background:url(${GiveawayBackground});
    background-size: cover; */
    background: #5d58b4;
    @media screen and (max-width: 1920px)
    {
        transition: 0.8s all ease;
       height: 1050px
    }
    @media screen and (max-width: 1380px)
    {
        transition: 0.8s all ease;
       height: 900px
    }
    @media screen and (max-width: 780px)
    {
        transition: 0.8s all ease;
        height: 700px;
    }
    
`

export const BackgroundImage = styled.img`
width: 80%;
height: 100%;
`

export const TitleSection = styled.div`
    height: 15%;
    width: 80%;
    justify-content: center;
    align-items: center;
    display: flex;
    position: relative;
 
    padding-top: 85px;
    font-family: Marker;
    font-size: 95px;
    color: white;
    border-top: 5px solid white;
  

    @media screen and (max-width: 1380px)
    {
        transition: 0.8s all ease;
        margin-top: 35px
        height: 20%;
        /* padding-top: 10px; */
        font-size: 75px;
    }
    @media screen and (max-width: 780px)
    {
        transition: 0.8s all ease;
        height: 15%;
        padding-top: 35px;
        font-size: 75px;
    }
    @media screen and (max-width: 480px)
    {
        transition: 0.8s all ease;
        height: 10%
        padding-top: 45px;
        font-size: 45px;
    }

`

export const PrizeSection = styled.div` 
height: 500px;
width: 80%;
justify-content: center;
align-items: center;
display: flex;
position: relative;


@media screen and (max-width: 1380px)
    {
        transition: 0.8s all ease;
        justify-content: center;
        flex-direction: column;
        height: 1200px;
    }
@media screen and (max-width: 780px)
{
    transition: 0.8s all ease;
    height: 1000px;
    width: 100%;
    justify-content: center;
}

`

export const PrizeColumn = styled.div`
height: 100%;
width: 45%;
justify-content: center;
align-items: center;
display: flex;
flex-direction: column;
margin-left: 45px;
margin-right: 45px;


@media screen and (max-width: 1920px)
{
    transition: 0.8s all ease;
    margin-left: 15px;
    margin-right: 15px;
}
@media screen and (max-width: 1380px)
    {
        transition: 0.8s all ease;
        justify-content: center;
        flex-direction: row;
        width: 100%;
    }
    @media screen and (max-width: 780px)
    {
        transition: 0.8s all ease;
        margin-top: 35px;
        margin-left: 5px
        margin-right: 5px;
    }
 
`

export const Prize = styled.div` 
height: 200px;
width: 400px;
display: flex;
justify-content: flex-start;
align-items: center;
margin-top: 15px;
margin-bottom: 15px;


@media screen and (max-width: 1920px)
    {
        transition: 0.8s all ease;
        margin-top: 5px;
        width: 300px;
    }
@media screen and (max-width: 1380px)
    {
        transition: 0.8s all ease;
        justify-content: center;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        margin-bottom: 0px;
        margin-top: 0px;
    }
@media screen and (max-width: 780px)
{
    transition: 0.8s all ease;
    width: 175px;
    padding: 25px;
}
@media screen and (max-width: 480px)
{
    transition: 0.8s all ease;
    width: 200px;
  
    justify-content: center;
    align-items: center;
    padding: 0;

}
`

export const PrizeImg = styled.img`
   border-radius: 90%;
    height: 100px;
    width: 100px;
    margin-left: 35px;
    border-color: black;
    border-radius: 2;
    border-width: 5;
    box-shadow: 5px 5px 10px black;
    @media screen and (max-width: 1380px)
    {
        transition: 0.8s all ease;
        margin-left: 0;
    }
    @media screen and (max-width: 480px)
    {
        transition: 0.8s all ease;
        height: 75px;
        width: 75px;
    }
`

export const PrizeText = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    
`

export const PrizeNumb = styled.div`
    font-family: Marker;
    font-size: 40px;
    font-weight: normal;
    text-align: left;
    padding: 0 15px;
    color: white;
   margin-left: 15px;
    width: 100%;

    @media screen and (max-width: 1380px)
    {
        transition: 0.8s all ease;
        justify-content: center;
        text-align: center;
        margin-left: 0;
    }
    @media screen and (max-width: 780px)
    {
        transition: 0.8s all ease;
        font-size: 35px;
        padding: 0;
    }
    @media screen and (max-width: 480px)
    {
        transition: 0.8s all ease;
        font-size: 28px;
        text-align: center;
        justify-content: center;
        align-items: center;
       
        
    }
`

export const PrizeDesc = styled.div`
    font-family: Dosis;
    font-size: 35px;
    font-weight: normal;
    text-align: left;
    padding: 0 15px;
    color: white;
    width: 90%;


    @media screen and (max-width: 1380px)
    {
        transition: 0.8s all ease;
        justify-content: center;
        text-align: center;
        width: 100%;
    }
    @media screen and (max-width: 780px)
    {
        transition: 0.8s all ease;
        font-size: 30px;
        padding: 0;
    }
    @media screen and (max-width: 480px)
    {
        transition: 0.8s all ease;
        font-size: 25px;

      
    }
`

export const MushieLogo = styled.img`
height: 350px;
width: 350px;
align-items: center;
@media screen and (max-width: 1920px)
{
    transition: 0.8s all ease;
    height: 325px;
    width: 325px;
}
@media screen and (max-width: 1380px)
{
    transition: 0.8s all ease;
    height: 300px;
    width: 300px;
}
@media screen and (max-width: 780px)
{
    transition: 0.8s all ease;
    height: 250px;
    width: 250px;
}
@media screen and (max-width: 480px)
{
    transition: 0.8s all ease;
    height: 125px;
    width: 125px;
    padding: 25px;
}
`
export const PayoutText = styled.div` 
height: 200px;
width: 100%;
justify-content: center;
align-items: center;
color: black;
font-size: 40px;
font-weight: normal;
font-family: Dosis;
display: flex;
padding-top: 20px;
padding-bottom: 20px;
@media screen and (max-width: 480px)
{
    transition: 0.8s all ease;
    height: 100px;

    padding-top: 5px;
}

`

export const PayoutNumb = styled.div`
    font-family: Marker;
    font-size: 40px;
    font-weight: normal;
    text-align: center;
    padding: 0 15px;
    color: white;
    @media screen and (max-width: 480px)
{
    transition: 0.8s all ease;
    font-size: 30px;
}
`

export const PayoutDesc = styled.div`
    font-family: Dosis;
    font-size: 40px;
    font-weight: normal;
    text-align: center;
    padding: 0 15px;
    color: white;
    @media screen and (max-width: 480px)
{
    transition: 0.8s all ease;
    font-size: 20px;
}
`

export const PayoutContainer = styled.div`
width: 80%;
height: 150px;
justify-content: center;
display: flex;
align-items: center;
position: relative;
margin: 45px;
@media screen and (max-width: 480px)
{
    transition: 0.8s all ease;
    height: 90px;
    margin-bottom: 35px;
}
`

export const VideoContainer = styled.div`
height: 390px;
width: 25%;
justify-content: center;
display: flex;
background: #7c76da;
position: relative;
padding: 15px;
margin: 25px;
box-shadow: 5px 5px 10px black;

@media screen and (max-width: 1380px)
{
    transition: 0.8s all ease;
    width: 720px;
    padding-top: 25px;
}
@media screen and (max-width: 760px)
{
    transition: 0.8s all ease;
    width: 90%;
    
}
`

export const YouTubed = styled(YouTube)`
    display: flex;
    justify-content: center;
    height: 90%;
    position: absolute;
    width: 90%;
    left: 0;
    margin-left: 5%;
    
`