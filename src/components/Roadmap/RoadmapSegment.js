import React, {useState, useEffect} from 'react'
import { BarAndText, Phase, PhaseContainer, PhaseTitle, RoadmapContainer, RoadmapGoal, RoadmapText, UpArrow, ButtonDiv, DownArrow } from './RoadmapElements'
import { TiArrowSortedUp, TiArrowSortedDown } from 'react-icons/ti'


const RoadmapGoals = () => {
    

    const [PhaseNumber, setPhaseNumber] = useState(0);
    
    if (PhaseNumber < 1){

        
    return (
        <RoadmapContainer>
            <ButtonDiv>
                
            </ButtonDiv>
        <PhaseContainer>
        <Phase>
            <PhaseTitle style={{ color: "#030303"}}>
                PUBLIC-MINT
            </PhaseTitle>
        </Phase>
        <BarAndText>
            <RoadmapText>
                <RoadmapGoal>-Frog Nation building a diverse and multiple awareness family</RoadmapGoal>
                <RoadmapGoal>-Build Amazing Community & Discord</RoadmapGoal>
                <RoadmapGoal>-SUPER Engaging Community Event</RoadmapGoal>
            </RoadmapText>
        </BarAndText>
        
    </PhaseContainer>
      <ButtonDiv>
      <DownArrow onClick={() => setPhaseNumber(PhaseNumber + 1)}>
          <TiArrowSortedDown/>
      </DownArrow>
  </ButtonDiv>
  
  </RoadmapContainer>
    
    )
    }
    else if (PhaseNumber == 1)
    {
        return (
            <RoadmapContainer>
            <ButtonDiv>
                <UpArrow onClick={() => setPhaseNumber(PhaseNumber - 1)}>
                    <TiArrowSortedUp/>
                </UpArrow>
            </ButtonDiv>
            <PhaseContainer>
            <Phase>
                <PhaseTitle style={{ color: "#030303"}}>
                    PHASE 1 
                </PhaseTitle>
            </Phase>
            <BarAndText>
            <RoadmapText>
                <RoadmapGoal>-Secondary Market Listings (MagicEden, AlphaArt)</RoadmapGoal>
                <RoadmapGoal>-Frog Nation Game Development</RoadmapGoal>
                
            </RoadmapText>
            </BarAndText>
        
    </PhaseContainer>
        <ButtonDiv>
            <DownArrow onClick={() => setPhaseNumber(PhaseNumber + 1)}>
                <TiArrowSortedDown/>
            </DownArrow>
        </ButtonDiv>
        
        </RoadmapContainer>
            ) 
    }
    else if (PhaseNumber == 2)
    {
        return (
            <RoadmapContainer>
            <ButtonDiv>
                <UpArrow onClick={() => setPhaseNumber(PhaseNumber - 1)}>
                    <TiArrowSortedUp/>
                </UpArrow>
            </ButtonDiv>
            <PhaseContainer>
            <Phase>
                <PhaseTitle style={{ color: "#030303"}}>
                    COMMUNITY JOBS
                </PhaseTitle>
            </Phase>
            <BarAndText>
            <RoadmapText>
        
                <RoadmapGoal>-3D Animator</RoadmapGoal>
                <RoadmapGoal>-Metaverse Community Manager</RoadmapGoal>
                <RoadmapGoal>-Gaming Event Organizer</RoadmapGoal>
                <RoadmapGoal>-Graphic Designer</RoadmapGoal>
                <RoadmapGoal style={{fontFamily: "Marker", justifyContent: "center", textAlign: "center"}}> AND MUCH MORE!!</RoadmapGoal>
                
            </RoadmapText>
            </BarAndText>
        
    </PhaseContainer>
        <ButtonDiv>
            <DownArrow onClick={() => setPhaseNumber(PhaseNumber + 1)}>
                <TiArrowSortedDown/>
            </DownArrow>
        </ButtonDiv>
        
        </RoadmapContainer>
            ) 
    }
    else if (PhaseNumber == 3)
    {
        return (
            <RoadmapContainer>
            <ButtonDiv>
                <UpArrow onClick={() => setPhaseNumber(PhaseNumber - 1)}>
                    <TiArrowSortedUp/>
                </UpArrow>
            </ButtonDiv>
            <PhaseContainer>
            <Phase>
                <PhaseTitle style = {{ color: "#030303"}}>
                    PHASE 2
                </PhaseTitle>
            </Phase>
            <BarAndText>
            <RoadmapText>
                <RoadmapGoal>-Continue Expanding on Community Outreach</RoadmapGoal>
                <RoadmapGoal>-Upgraded FrogNation Game Experience</RoadmapGoal>
                <RoadmapGoal>-Update Website to Dynamic Leaderboards and Shop</RoadmapGoal>
            
                <RoadmapGoal>***TO BE CONTINUED IN ROADMAP 2.0***</RoadmapGoal>
            </RoadmapText>
            </BarAndText>
        
    </PhaseContainer>
        <ButtonDiv>
            
        </ButtonDiv>
 
        </RoadmapContainer>
            ) 
    }
}





const RoadmapSegment = () => {

    return (
       <RoadmapGoals/>
    )
}

export default RoadmapSegment
