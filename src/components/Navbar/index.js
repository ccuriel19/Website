import React, {useState, useEffect} from 'react';
import {FaBars} from 'react-icons/fa';
import { animateScroll as scroll } from 'react-scroll';
import {
  Nav, 
  NavbarContainer, 
  NavLogo,
  MobileIcon, 
  NavMenu, 
  NavItem, 
  NavLinks,
  NavBtn,
  NavBtnLink} from './NavbarElements';
import { IconContext } from 'react-icons/lib';


const Navbar = ({toggle}) => {
  const [scrollNav, setScrollNav] = useState(false)

  const changeNav = () => {
    if(window.scrollY >= 80){
      setScrollNav(true)
    }
    else{
      setScrollNav(false)
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', changeNav)
  }, []);

  const toggleHome = () => {
    scroll.scrollToTop()
  }

  return (
    <>
      <IconContext.Provider value={{color: '#fff'}}>
        <Nav scrollNav={scrollNav}>
          <NavbarContainer>
              <NavLogo to='/' onClick={toggleHome}>RESUME</NavLogo>
              <MobileIcon onClick={toggle}>
                <FaBars/>
              </MobileIcon>
              <NavMenu>
              <NavItem>
                  <NavLinks to="education"
                  smooth={true}
                  duration={500}
                  spy={true}
                  exact='true'
                  offset={-80}>Education</NavLinks>
                </NavItem>
                <NavItem>
                  <NavLinks to="experience"
                  smooth={true}
                  duration={500}
                  spy={true}
                  exact='true'
                  offset={-80}>Experience</NavLinks>
                </NavItem>
                <NavItem>
                  <NavLinks to="certs"
                  smooth={true}
                  duration={500}
                  spy={true}
                  exact='true'
                  offset={-80}>Certifications/Projects</NavLinks>
                </NavItem>
                <NavItem>
                  <NavLinks to="skills"
                  smooth={true}
                  duration={500}
                  spy={true}
                  exact='true'
                  offset={-80}>Skills</NavLinks>
                </NavItem>
                
              </NavMenu>
          </NavbarContainer>
        </Nav>
      </IconContext.Provider>
    </>
  );
};

export default Navbar;


/*Sign in button that i dont use for this site but can be useful for future projects
<NavBtn>
  <NavBtnLink to="/signin">Sing In</NavBtnLink>
</NavBtn> 
*/