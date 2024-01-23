import React from 'react'
import { FooterContainer, 
    FooterWrapper,
    SocialIconLink,
    SocialIcons,
    SocialLogo,
    SocialMedia,
    SocialMediaWrapper,
    WebsiteRights } from './FooterElements'
import { FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa'
import { animateScroll as scroll } from 'react-scroll'

const Footer = () => {
    const toggleHome = () => {
        scroll.scrollToTop();
    };

    return (
    <FooterContainer>
        <FooterWrapper>
            <SocialMedia>
                <SocialMediaWrapper>
                    <SocialLogo to="/" onClick={toggleHome}>
                        Citlalli Curiel
                    </SocialLogo>
                    <WebsiteRights>Citlalli Curiel © {new Date().getFullYear()}
                        All rights reserved.</WebsiteRights>
                    <SocialIcons>
                        <SocialIconLink href="https://www.facebook.com/citlalli.curiel.39" target="_blank" aria-label="Facebook">
                            <FaFacebook/>
                        </SocialIconLink>
                        <SocialIconLink href="https://www.instagram.com/curielcitlalli/" target="_blank" aria-label="Instagram">
                            <FaInstagram/>
                        </SocialIconLink>
                        <SocialIconLink href="https://www.linkedin.com/in/citlalli-curiel-4b0717230/" target="_blank" aria-label="LinkedIn">
                            <FaLinkedin/>
                        </SocialIconLink>
                    </SocialIcons>
                </SocialMediaWrapper>
            </SocialMedia>
        </FooterWrapper>
    </FooterContainer>
    )
}

export default Footer