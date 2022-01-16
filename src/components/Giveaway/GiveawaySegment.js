import React, {useEffect, useState} from 'react'

import { GiveawaySection, TitleSection, Cloud, PrizeSection, PrizeColumn, Prize, PrizeImg, PrizeText, PrizeDesc, CloudPeak, PrizeNumb, MushieLogo, PayoutText, PayoutDesc, PayoutNumb, PayoutContainer, VideoContainer, YouTubed, SocialIcon } from "../Giveaway/GiveawayElements.js"
import GunterIcon from '../../img/GunterIcon.png'
import Thugbird from '../../img/giveaway/Degen.png'
import Aurory from '../../img/giveaway/Degen.png'
import Degen from '../../img/giveaway/Degen.png'
import Degod from '../../img/giveaway/Degod.png'
import Shadowy from '../../img/giveaway/Shadowy.jpg'
import Pesky from '../../img/giveaway/Degen.png'
import Robot from '../../img/giveaway/Degen.png'
import SMB from '../../img/giveaway/Degen.png'
import SolanaPic from '../../img/giveaway/Degen.png'
import Turtles from '../../img/giveaway/Degen.png'
import MushiesLogo from '../../img/giveaway/MushieLogo.png'
import ZiggysLogo from '../../img/giveaway/Ziggys.jpg'
import YouTube from 'react-youtube'
import styled from 'styled-components'


const GiveawaySegment = () => {
    return (
        <GiveawaySection >
      
        <TitleSection>
        MUSHIES MINT GIVEAWAY
        </TitleSection>

        <VideoContainer>
          <YouTubed videoId="VvIsAhSse98"/>
        </VideoContainer>
        {/* <PrizeSection>
          <PrizeColumn>
 
            <Prize>
              <PrizeImg src={SolanaPic}/>
              <PrizeText>
                <PrizeNumb>
                  #1
                </PrizeNumb>
                <PrizeDesc>
                  5 SOL
                </PrizeDesc>
              </PrizeText>
            </Prize>

            <Prize>
              <PrizeImg src={Thugbird}/>
              <PrizeText>
                <PrizeNumb>
                  #69
                </PrizeNumb>
                <PrizeDesc>
                  THUGBIRD
                </PrizeDesc>
              </PrizeText>
            </Prize>

       
 
          </PrizeColumn>

          <PrizeColumn>
 
          <Prize>
              <PrizeImg src={Degen}/>
              <PrizeText>
                <PrizeNumb>
                  #420
                </PrizeNumb>
                <PrizeDesc>
                  DEGEN APE
                </PrizeDesc>
              </PrizeText>
            </Prize>

            <Prize>
              <PrizeImg src={Turtles}/>
              <PrizeText>
                <PrizeNumb>
                  #1500
                </PrizeNumb>
                <PrizeDesc>
                  TURTLE
                </PrizeDesc>
              </PrizeText>
            </Prize>

</PrizeColumn>
<PrizeColumn>
 

<Prize>
   <PrizeImg src={Pesky}/>
   <PrizeText>
     <PrizeNumb>
       #2500
     </PrizeNumb>
     <PrizeDesc>
       NOOT NOOT
     </PrizeDesc>
   </PrizeText>
 </Prize>

 <Prize>
   <PrizeImg src={Robot}/>
   <PrizeText>
     <PrizeNumb>
       #3500
     </PrizeNumb>
     <PrizeDesc>
       TAIYO
     </PrizeDesc>
   </PrizeText>
 </Prize>

</PrizeColumn>
<PrizeColumn>
 
 <Prize>
   <PrizeImg src={SMB}/>
   <PrizeText>
     <PrizeNumb>
       #4444
     </PrizeNumb>
     <PrizeDesc>
       SMB
     </PrizeDesc>
   </PrizeText>
 </Prize>

 <Prize>
   <SocialIcon href="https://www.instagram.com/ziggyssmokeshop/">
   <PrizeImg src={ZiggysLogo}/>
   </SocialIcon>
   <PrizeText>
     <PrizeNumb>
       ZIGGY'S
       </PrizeNumb>
     <PrizeDesc>
       5 SMOKE KITS
     </PrizeDesc>
   </PrizeText>
 </Prize>

<MushieLogo src={MushiesLogo}/>

</PrizeColumn>
        </PrizeSection>
      <PayoutContainer>
        <PayoutText>
      <PrizeImg src={SolanaPic}/>
      <PrizeText>
        <PayoutNumb>
          TOTAL WORTH
          </PayoutNumb>
         <PayoutDesc>
            OVER 300 SOL
         </PayoutDesc>
       </PrizeText>
 
        </PayoutText>
      </PayoutContainer> */}
       </GiveawaySection>
    )
}

export default GiveawaySegment
