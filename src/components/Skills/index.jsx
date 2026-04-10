import styled from 'styled-components';
import {skills} from "../../data/constants";
import {Container} from "@mui/material";




const Skills = () => {
  return (
    <Container id="skills">
      <Wrapper>
        <Title>Skills</Title>
        <Desk>
          Here are some of my skills on which I have been working on for the past 2 years.
        </Desk>
        <SkillsContainer>
          {skills.map((item) => {
            return (
              <Skill
                key={item.id}
                className="skill"
              >
                <SkillTitle>{item.title}</SkillTitle>
                <SkillList>
                  {item.skills.map((skill) => {
                    <SkillItem>
                      <SkillImage src={skill.image} alt={skill.name} />
                      {skill.name}
                    </SkillItem>
                  })}
                </SkillList>
              </Skill>
            )
          })}
        </SkillsContainer>
      </Wrapper>
    </Container>
  )
    ;
};

export default Skills;