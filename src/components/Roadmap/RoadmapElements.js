import styled from "styled-components";

export const RoadmapContainer = styled.div`
height: 900px;
width: 100%;
display: flex;
justify-content: space-between;
align-items: center;
color: white;
flex-direction: column;
background: #72d9ff;
`

export const PhaseContainer = styled.div`
display: flex;
flex-direction: column;
width: 900px;

@media screen and (max-width: 780px)
{
    transition: 0.8s all ease;
    width: 700px;
        
}
@media screen and (max-width: 480px)
{
    transition: 0.8s all ease;
    width: 350px;
    height: 600px;
}
`

export const Phase = styled.div`
display: flex;
@media screen and (max-width: 480px)
{
    transition: 0.8s all ease;
    width: 350px;
}
`

export const BarAndText = styled.div`
display: flex;
height: fit-content;

@media screen and (max-width: 480px)
{
    transition: 0.8s all ease;
    width: 350px;
}
`

export const PhaseImg = styled.img`
height: 100px;
width: 100px;
padding-right: 45px;

@media screen and (max-width: 480px)
{
    transition: 0.8s all ease;
    height: 75px;
    width: 75px;
}
`

export const PhaseTitle = styled.div`
display: flex;
justify-content: center;
align-items: center;
font-size: 65px;
font-family: Modak;
-webkit-text-stroke: 2px white;
text-align: right;

@media screen and (max-width: 780px)
{
    transition: 0.8s all ease;
    font-size: 55px;
}
@media screen and (max-width: 480px)
{
    transition: 0.8s all ease;
    font-size: 40px;
}
`

export const RoBar = styled.img`
width: 100px;
height: 100%;
padding-right: 45px;

@media screen and (max-width: 480px)
    {
        transition: 0.8s all ease;
        width: 75px;
        padding-right: 5px;
    }
`

export const RoadmapText = styled.div`
font-family: Dosis;
font-style: italic;
font-size: 35px;
display: flex;
flex-direction: column;
justify-content: space-between;
padding-bottom: 45px;
color: black;

@media screen and (max-width: 780px)
{
    transition: 0.8s all ease;
    font-size: 25px;
}
`
export const RoadmapGoal = styled.div`
display: flex;
padding-top: 25px;
justify-items: flex-start;
align-items: flex-start;
text-align: right;
`

export const ButtonDiv = styled.div`
width: 100%;
height: 100px;
display: flex;
justify-content: center;
align-items: center;

@media screen and (max-width: 780px)
{
    transition: 0.8s all ease;
}

`

export const UpArrow = styled.button`
color: white;
font-size: 85px;
background-color: transparent;
border-color: transparent;
cursor:pointer;
height: 100px;
`

export const DownArrow = styled.button`
color: white;
font-size: 85px;
background-color: transparent;
border-color: transparent;
cursor:pointer;
height: 100px;
`