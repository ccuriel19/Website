import React, {useState} from 'react';
import Video from '../../videos/video.mp4';
import { Button } from '../ButtonElement';
import { 
  HeroContainer, 
  HeroBckgrnd, 
  VideoBckgrnd,
  HeroBtnWrapper,
  HeroContent, 
  HeroH1, 
  HeroP,
  ArrowForward, 
  ArrowRight } from './HeroElements';
  

const HeroSection = () => {
  const [hover, setHover] = useState(false)

  const onHover = () => {
    setHover(!hover)
  }

  return (
    <HeroContainer>
        <HeroBckgrnd>
            <VideoBckgrnd autoPlay loop muted src={Video} type='video/mp4'/>
        </HeroBckgrnd>
        <HeroContent>
          <HeroH1>Family Powerwashing Business</HeroH1>
          <HeroP>Sign up for a new account 
            today and receive $250 in credit 
            towards your next payment.
          </HeroP>
          <HeroBtnWrapper>
            <Button to="signup" 
            onMouseEnter={onHover} 
            onMouseLeave={onHover}>
              Get started {hover ? <ArrowForward/> : <ArrowRight/>}
            </Button>
          </HeroBtnWrapper>
        </HeroContent>
    </HeroContainer>
  )
}

export default HeroSection