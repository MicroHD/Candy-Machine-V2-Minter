import styled from "styled-components";

 export const AboutContainer = styled.div` 
    height: 900px;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    background: #0B0C0C;  
 `

 export const AboutWrapper = styled.div`
 
    width: 95%;
    height: 100.5%;
    display: flex;
    background: transparent;
    
    justify-content: space-between;
    align-items: center;
    border-bottom: 5px solid white;

    @media screen and (max-width: 1080px)
    {
        transition: 0.8s all ease;
        justify-content: center;
        flex-direction: column;
        width: 80%;
    }
 `

 export const ImageWrapper = styled.div`
    display: flex;
    flex-direction: column;
    margin: 5%;

    @media screen and (max-width: 1280px)
    {
        transition: 0.8s all ease;

        margin-top: 0;
    }

 `

 export const ImageRow = styled.div`
    display: flex;
    flex-direction: row;
    width: 525px;
    height: 260px;
  
    justify-content: center;
    align-items: center;
    @media screen and (max-width: 1280px)
    {
        transition: 0.8s all ease;
        height: 160px;
        width: 325px;
    }
 `

 export const FrogExample = styled.img`
    height: 250px;
    width: 250px;
    margin: 5px;
    border-radius: 15px;
    border: 2px solid #72d9ff;
    box-shadow: 5px 5px 10px black;


    @media screen and (max-width: 1280px)
    {
        transition: 0.8s all ease;
        height: 150px;
        width: 150px;
    }
 `

export const AboutBox = styled.div`
    display: flex;
    flex-direction: column;
    height: 100%;
    width: 90%;
    justify-content: center;
    align-items: center;
    margin: 5%;
    @media screen and (max-width: 1080px)
    {
        transition: 0.8s all ease;
        height: 50%; 
     
    }

`

export const AboutTitle = styled.div`
    font-family: Marker;
    font-size: 55px;
    justify-content: center;
    align-items: center;
    margin-top: 35px;
    line-height: 3;
   

    @media screen and (max-width: 580px)
    {
        transition: 0.8s all ease;
        font-size: 30px
    }
    @media screen and (max-height: 720px)
    {
        transition: 0.8s all ease;
        margin-top: 15px;
    }
`

export const AboutText = styled.div`
    font-family: Dosis;
    font-size: 35px;
    justify-content: center;
    align-items: center;
    width: 100%;
    

    @media screen and (max-width: 1580px)
    {
        transition: 0.8s all ease;
        font-size: 25px;
      
    }
    @media screen and (max-width: 1080px)
    {
        transition: 0.8s all ease;
        
        font-size: 20px;
        
    }
    @media screen and (max-width: 580px)
    {
        transition: 0.8s all ease;
        font-size: 15px;
      
    }
`
export const PriceText = styled.div`
    font-family: Marker;
    font-size: 35px;
    justify-content: center;
    align-items: center;
    @media screen and (max-width: 1680px)
    {
        transition: 0.8s all ease;
        font-size: 25px;
        margin-bottom: 45px;
    }
    @media screen and (max-width: 780px)
    {
        transition: 0.8s all ease;
        font-size: 20px;
        
    }
    @media screen and (max-width: 580px)
    {
        transition: 0.8s all ease;
        font-size: 17px;
    }
`
export const PriceWrapper = styled.div`
font-family: Marker;
width: 70%;
display: flex;
flex-direction: row;
justify-content: space-between;
margin-bottom: 25px;
margin-top: 5%
` 
