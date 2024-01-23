import React from 'react';
import { SkillsContainer,
    SkillsWrapper,
    SkillsCard,
    SkillsH1,
    SkillsH2,
    SkillsP} from './SkillsElements';

const Skills = () => {
    return(
        <SkillsContainer id="Skills">
            <SkillsH1>Skills</SkillsH1>
            <SkillsWrapper>
                <SkillsCard>
                    <SkillsH2>Software Dev</SkillsH2>
                    <SkillsP>C++ | Python | R | Java | Selenium</SkillsP>
                </SkillsCard>
                <SkillsCard>
                    <SkillsH2>Web Dev</SkillsH2>
                    <SkillsP>JavaScript | HTML | CSS | React</SkillsP>
                </SkillsCard>
                <SkillsCard>
                    <SkillsH2>Microsoft Office</SkillsH2>
                    <SkillsP>Excel | Word | Powerpoint | Microsoft Teams | One Note</SkillsP>
                </SkillsCard>
                <SkillsCard>
                    <SkillsH2>Languages</SkillsH2>
                    <SkillsP>Spanish - Fluent | Japanese - Beginner</SkillsP>
                </SkillsCard>
            </SkillsWrapper>
        </SkillsContainer>
    )
}

export default Skills