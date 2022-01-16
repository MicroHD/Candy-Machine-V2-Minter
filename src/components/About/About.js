import React from 'react'
import { AboutContainer, AboutText, AboutTitle, AboutWrapper, ImageRow, ImageWrapper, FrogExample, AboutBox, PriceWrapper, PriceText } from './AboutElements'

import Preview1 from '../../img/About/Preview1.png'
import Preview2 from '../../img/About/Preview2.png'
import Preview3 from '../../img/About/Preview3.png'
import Preview4 from '../../img/About/Preview4.png'
import { AboutArea } from '../Hero/HeroElements'


const AboutSection = () => {
    return (
        <AboutContainer {...AboutArea}>
            <AboutWrapper>
                <AboutBox>
                    <AboutTitle>
                        Frog Nation 
                    </AboutTitle>
                    <AboutText>
                    Frog Nation is a club of 1,777  frogs deployed on the Solana Blockchain with exclusive access to our DAO
                    </AboutText>
                    <PriceWrapper>
                    <PriceText>
                        1777 Supply
                    </PriceText>
                    <PriceText>
                        Price: 0.30 SOL 
                    </PriceText>
               
                    </PriceWrapper>
                </AboutBox>
                <ImageWrapper>
                    <ImageRow>
                        <FrogExample src = {Preview1}/>
                        <FrogExample src = {Preview2}/>
                    </ImageRow>
                    <ImageRow>
                        <FrogExample src = {Preview3}/>
                        <FrogExample src = {Preview4}/>
                    </ImageRow>
                </ImageWrapper>
            </AboutWrapper>
            </AboutContainer>
    )
}

export default AboutSection
