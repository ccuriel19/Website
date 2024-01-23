import React, {useState} from 'react';
import Video from '../../videos/calm.mp4';
import { Button } from '../ButtonElement';
import { 
  HeroContainer, 
  HeroBckgrnd, 
  VideoBckgrnd,
  HeroBtnWrapper, //for button that was removed
  HeroContent, 
  HeroH1,
  HeroH4, 
  HeroP,
  ArrowForward, //for button that was removed
  ArrowRight //for button that was removed
} from './HeroElements';
  

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
          <HeroH1>Citlalli Curiel</HeroH1>
          <HeroH4>
            Oak Point, TX
          </HeroH4>
          <HeroH4>
            (940) 597 - 2567
          </HeroH4>
          <HeroH4>
            citlallicuriel19@gmail.com
          </HeroH4>
          <HeroP>
          Software Tester effective at working in fast-paced testing environments to
          review software at each stage of development and production. Checks
          function, layout and operation for usability and visual design issues.
          </HeroP>
        </HeroContent>
    </HeroContainer>
  )
}

export default HeroSection

/*Not needed but important:
<HeroBtnWrapper>
  <Button to="signup" 
  onMouseEnter={onHover} 
  onMouseLeave={onHover}
  primary="true"
  dark="true">
    Get started {hover ? <ArrowForward/> : <ArrowRight/>}
  </Button>
</HeroBtnWrapper>
*/