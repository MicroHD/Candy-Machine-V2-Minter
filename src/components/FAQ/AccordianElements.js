import styled from 'styled-components'
import { IconContext } from 'react-icons/lib'
import { FiPlus } from 'react-icons/fi'
import { FaTimes } from 'react-icons/fa'
import { Data } from './Data'
import {useState} from 'react'



const AccordionSection = styled.div`
    color: white;
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100%;
    width: 100%;
    background: #72d9ff;
   
    padding-bottom: 35px;
`

const Container = styled.div`
position: relative;
justify-content: center;
/* background: black; */
width: 95%;
height: 95%;
align-items: center;
text-align: center;
display: flex;
flex-direction: column;

`
const Wrap = styled.div` 
   
    width: 80%;
    background-color: #040407;
    height: 15%;
    display: flex;
    position: relative;
    justify-content: center;
    align-items: center;
    border-style: solid;
    border-color: #1786AF;
    margin-top: 10px;
    box-shadow: 3px 3px 6px black;
    
    cursor: pointer;
    @media screen and (max-width: 1280px)
        {
            transition: 0.8s all ease;
            width: 90%;
        }

`
const FaqIcon = styled.div`
    display: flex;
    color: white;
    height: 100%;
    margin-right: 5%;
    font-size: 35px;
  
`

const FaqTitle = styled.div`
    text-align: center;
    align-items: center;
    font-family: Marker;
    font-size: 35px;
    padding: 25px;
   /* background: pink; */
   width: 70%;
    @media screen and (max-width: 1280px)
        {
            transition: 0.8s all ease;
            font-size: 25px;
        }

       @media screen and (max-width: 480px)
        {
            transition: 0.8s all ease;
            font-size: 20px;
        }
`


const Dropdown = styled.div` 
background: #EFF3F5;
color: white;
width: 80%;
height: 150px;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
margin-top: 5px;
border: 3px solid #0A0A0A;
font-size: 23px;
box-shadow: 3px 3px 6px black;

@media screen and (max-width: 1280px)
{
    transition: 0.8s all ease;
    width: 90%;
}


`

const TitleSection = styled.div`
border-top: 5px solid white;
text-align: center;
top: 0;
height: 20%;
width: 80%;
font-family: Modak;
font-size: 85px;
color: #010202;
-webkit-text-stroke: 2px white;
justify-content: center;
align-items: center;
padding-top: 15px;
`

const DropdownText = styled.div`
font-size: 23px;
font-weight: 400;
padding: 15px;
color: black;
@media screen and (max-width: 1280px)
        {
            transition: 0.8s all ease;
            font-size: 18px;
        }

       @media screen and (max-width: 480px)
        {
            transition: 0.8s all ease;
            font-size: 12px;
        }

`


const AccordionC = () => {
const [clicked, setClicked] = useState(false)

const toggle = index => {
    if(clicked === index) {
        return setClicked(null)
    }

    setClicked(index)
}

  return(

      <AccordionSection>
          <TitleSection>FAQ</TitleSection>
            <Container>
            {Data.map((item, index) => {
                return(
                    <>
                    <Wrap onClick = {() => toggle(index)} key={index}>
                        <FaqIcon>{clicked === index ? <FaTimes /> : <FiPlus />}</FaqIcon>
                    <FaqTitle>{item.question}</FaqTitle>
                    </Wrap>
                    {clicked === index ? (
                            <Dropdown>
                            <DropdownText>{item.answer}</DropdownText>
                            </Dropdown>

                    ) : null}
                
                    </>
                )
            })}

            </Container>

      </AccordionSection>
   
  )  
};

export default AccordionC;