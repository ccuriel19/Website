import React from 'react';
import Icon1 from '../../images/amazon.png';
import Icon2 from '../../images/hackerrank.png';
import Icon3 from '../../images/codecademy.png';
import { CertsContainer,
    CertsWrapper,
    CertsCard,
    CertsH1,
    CertsH2,
    CertsIcon,
    CertsP} from './CertsElements';

const Certs = () => {
    return(
        <CertsContainer id="certs">
            <CertsH1>Certificates & Projects</CertsH1>
            <CertsWrapper >
                <CertsCard>
                <CertsIcon src={Icon2}/>
                    <CertsH2>SQL (Basic) Certification</CertsH2>
                    <CertsP><a href = " https://www.hackerrank.com/certificates/4d6bceb8e67d">  https://www.hackerrank.com/certificates/4d6bceb8e67d </a></CertsP>
                </CertsCard>
                <CertsCard>
                    <CertsIcon src={Icon1}/>
                    <CertsH2>Introduction to AWS Elastic Beanstalk Certification</CertsH2>
                </CertsCard>
                <CertsCard>
                <CertsIcon src={Icon1}/>
                    <CertsH2>Getting Started with .NET on AWS Certification</CertsH2>
                </CertsCard>
                <CertsCard>
                <CertsIcon src={Icon3}/>
                    <CertsH2> Learn Intermediate JavaScript Certification</CertsH2>
                </CertsCard>
                <CertsCard>
                    <CertsH2>Automation Tool</CertsH2>
                    <CertsP><a href = "https://github.com/ccuriel19/AutomationTool"> https://github.com/ccuriel19/AutomationTool </a>  Private due to sensitive information meant only for Samsung 
employees: Automation tool that creates an excel file with information acquired form a Samsung website, 
given specifics from the user.
</CertsP>
                </CertsCard>
                <CertsCard>
                    <CertsH2>Theme Park Management System</CertsH2>
                    <CertsP><a href = "https://github.com/Usman0111/Theme-Park-Management-System">  https://github.com/Usman0111/Theme-Park-Management-System </a>: Helped design and develop an 
amusement park database system along with three other students. In charge of implementing the frontend 
of our website using React, HTML, CSS, and JavaScript. Assisted in analyzing reports of “customer” 
interactions to create summaries of park performance and cash flow.</CertsP>
                </CertsCard>
            </CertsWrapper>
        </CertsContainer>
    )
}

export default Certs