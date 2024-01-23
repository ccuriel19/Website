import React from 'react'
import { 
    Column2, 
    Img, 
    ImgWrap, 
    InfoContainer,
    InfoWrapper, 
    InfoTitle,
    Column1, 
    InfoRow, 
    TextWrapper, 
    TopLine, 
    Heading,
    Subtitle } from './InfoElements'

const InfoSection  = ({lightBg, id, imgStart, topLine, lightText, headline, infoTitle,
darkText, description, img, alt}) => {
  return (
    <> 
        <InfoContainer lightBg={lightBg} id={id}>
        <InfoTitle lightText={lightText}>{infoTitle}</InfoTitle> 
            <InfoWrapper>
                <InfoRow imgStart={imgStart}> 
                    <Column1>
                    <TextWrapper>
                        <TopLine lightText={lightText}>{topLine}</TopLine>
                        <Heading lightText={lightText}>{headline}</Heading>
                        <Subtitle darkText={darkText}>{description}</Subtitle>
                    </TextWrapper>
                    </Column1>
                    <Column2>
                        <ImgWrap>
                        <Img src={img} alt={alt}/>
                        </ImgWrap>
                    </Column2>
                </InfoRow>
            </InfoWrapper>
        </InfoContainer>
    </>
  )
}

export default InfoSection 
