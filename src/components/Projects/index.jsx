import styled from 'styled-components';
import {useState} from "react";
import ProjectCard from "../Cards/ProjectCard";
import {projects} from "../../data/constants";

const Container = styled.div`
  background: linear-gradient(343.07deg, rgba(132, 59, 206, 0.06) 5.71%, rgba(132, 59, 206, 0) 64.83%);
    display: flex;
    flex-direction: column;
    justify-content: center;
    position: relative;
    z-index: 1;
    align-items: center;
    clip-path: polygon(0 0, 100% 0, 100% 100%, 100% 98%, 0 100%);
    @media screen and (max-width: 768px) {
        clip-path: polygon(0 0, 100% 0, 100% 100%, 100% 99%, 0 100%);
    }
`;

const Wrapper = styled.div`
  max-width: 1350px;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  gap: 12px; 
  color: ${({theme}) => (theme.text_primary)};
  padding: 10px 0 100px 0;
`;

const Title = styled.h1`
  font-size: 42px;
  font-weight: 600;
  text-align: center;
  margin-top: 20px;
  
  color: ${({theme}) => (theme.text_primary)};
  
  @media screen and (max-width: 768px) {
    margin-top: 12px;
    font-size: 32px;
  }
`;

const Desk = styled.p`
  font-size: 18px;
  max-width: 600px;
  text-align: center;
  color: ${({theme}) => (theme.text_secondary)};
  
  @media screen and (max-width: 768px) {
    font-size: 16px;
  }
`;

const ToggleButtonGroup = styled.div`
  display: flex;
  border: 1.5px solid ${({theme}) => (theme.primary)};
  color: ${({theme}) => (theme.primary)};
  font-size: 16px;
  border-radius: 12px;
  font-weight: 500;
  margin: 22px 0;
  
  @media screen and (max-width: 768px) {
    font-size: 12px;
  }
`;

const ToggleButton = styled.div.withConfig({
  shouldForwardProp: (prop) => !['$active'].includes(prop),
})`
  padding: 8px 18px;
  cursor: pointer;
  border-radius: 6px;
  
  ${({$active, theme}) => 
    $active && 
    `
    background-color: ${(theme.primary+20)};
    `}
  
  &:hover {
    background-color: ${({theme}) => (theme.primary+8)};
  }
  
  @media screen and (max-width: 768px) {
    padding: 6px 8px;
    border-radius: 4px;
  }
`;

const Divider = styled.div`
  width: 1.5px;
  background-color: ${({theme}) => (theme.primary)};
`;

const CardContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 28px;
`;

const Projects = () => {
  const [toggle, setToggle] = useState('all')

  return (
    <Container id="projects">
      <Wrapper>
        <Title>Проекти</Title>
        <Desk>
          Ось деякі з моїх проектів
        </Desk>
        <ToggleButtonGroup >
          {toggle === 'all' ?
            <ToggleButton $active onClick={() => setToggle('all')}>All</ToggleButton>
            :
            <ToggleButton onClick={() => setToggle('all')}>All</ToggleButton>
          }
          <Divider />
          {toggle === 'web app' ?
            <ToggleButton $active onClick={() => setToggle('web app')}>WEB APP'S</ToggleButton>
            :
            <ToggleButton onClick={() => setToggle('web app')}>WEB APP'S</ToggleButton>
          }
          {/*<Divider />
          {toggle === 'android app' ?
            <ToggleButton $active onClick={() => setToggle('android app')}>ANDROID APP'S</ToggleButton>
            :
            <ToggleButton onClick={() => setToggle('android app')}>ANDROID APP'S</ToggleButton>
          }
          <Divider />
          {toggle === 'machine learning' ?
            <ToggleButton $active onClick={() => setToggle('machine learning')}>MACHINE LEARNING</ToggleButton>
            :
            <ToggleButton onClick={() => setToggle('machine learning')}>MACHINE LEARNING</ToggleButton>
          }*/}
        </ToggleButtonGroup>

        <CardContainer>
          {toggle === 'all' &&
            projects.map((project) => <ProjectCard key={`project-${project.id}`} project={project}/>)}
          {projects.filter((item) => item.category === toggle).map((project) => <ProjectCard key={`project-filtered-${project.id}`} project={project}/>)}
        </CardContainer>
      </Wrapper>
    </Container>
  );
};

export default Projects;