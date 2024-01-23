//rafce + enter is a hack to begin
import React from 'react'
import { 
    SidebarContainer,
    Icon,
    CloseIcon, 
    SideBtnWrap,
    SidebarLink,
    SidebarRoute, 
    SidebarWrapper, 
    SidebarMenu } from './SidebarElements'

const Sidebar = ({isOpen, toggle}) => {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
        <Icon onClick={toggle}>
            <CloseIcon/>
        </Icon>
        <SidebarWrapper>
            <SidebarMenu>
                <SidebarLink to="education" onClick={toggle}>
                    Education
                </SidebarLink>
                <SidebarLink to="experience" onClick={toggle}>
                    Experience
                </SidebarLink>
                <SidebarLink to="certs" onClick={toggle}>
                    Certifications/Projects
                </SidebarLink>
                <SidebarLink to="skills" onClick={toggle}>
                    Skills
                </SidebarLink>
                
            </SidebarMenu>
        </SidebarWrapper>
    </SidebarContainer>
  )
}

export default Sidebar
/*
<SideBtnWrap>
    <SidebarRoute to="/signin" onClick={toggle}>Sign In</SidebarRoute>
</SideBtnWrap>
*/