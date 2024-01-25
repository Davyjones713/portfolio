import img from "../assets/upwork.jpg";
import styled from "styled-components";
function Homepage() {
  return (
    <MainDiv>
      <LeftDiv>
        <Image src={img} />
        <MainInfo>
          <Infos>Name : Daviti</Infos>
          <Infos>Surname : Iashvili</Infos>
          <Infos>Birthday :1999/07/06</Infos>
          <Infos>Number : +995 574937575</Infos>
          <Infos>Email : datoiashvili713@gmail.com</Infos>
        </MainInfo>
      </LeftDiv>
      <RightDiv>
        <Title>About Me </Title>
        <Description>
          Hello there! I'm Daviti, a skilled and passionate ReactJS and React
          Native developer, I bring a wealth of experience and knowledge in
          building robust and efficient web and mobile applications. My
          expertise extends to various web technologies, including{" "}
          <Skill>
            HTML, CSS, Tailwind, Styled-Component, Javascript, Typescript,
            ReactJS and React Native.
          </Skill>
          With a particular affinity for creating visually appealing and
          responsive user interfaces, I have honed my skills in utilizing
          Tailwind CSS to craft modern and elegant designs.
        </Description>
        <Description>
          Over the course of my journey in the software development industry, I
          have had the opportunity to work with cutting-edge frameworks and
          libraries. ReactJS and React Native have been the focal points of my
          career, allowing me to master their respective ecosystems, develop
          intricate frontend solutions, and seamlessly transition between web
          and mobile development.
        </Description>
        <Description>
          Having contributed to more than 25 projects throughout my career, I
          have gained a deep understanding of project lifecycles and
          collaborative development environments. My ability to grasp complex
          concepts quickly and efficiently has enabled me to deliver
          high-quality code and solve challenging technical problems. Moreover,
          I am well-versed in implementing various React hooks to optimize
          performance and maintainable codebases.
        </Description>
      </RightDiv>
    </MainDiv>
  );
}

export default Homepage;

const MainDiv = styled.div`
  height: 100%;
  width: 100%;
  padding: 50px 60px;
  display: flex;
  gap: 50px;
  justify-content: space-between;
  align-items: center;
  @media (max-width: 1100px) {
    flex-direction: column;
    padding: 55px 15px;
  }

  @media (max-width: 768px) {
    padding: 35px;
  }
`;

const Image = styled.img`
  width: 300px;
  height: 360px;
  border-radius: 50%;
  @media (max-width: 768px) {
    width: 300px;
    height: 300px;
  }
`;
const LeftDiv = styled.div``;
const RightDiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;
const MainInfo = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 40px;
  gap: 10px;
  color: #35a29f;
  margin-top: 20px;
  border-radius: 20px;
  font-family: "Poppins";
  font-size: 20px;
`;
const Infos = styled.li``;

const Title = styled.h1`
  text-align: left;
  color: #35a29f;
  padding-left: 15px;
  font-size: 60px;
  font-weight: 900;
`;
const Description = styled.h2`
  font-size: 18px;
  font-weight: 300;
  line-height: 25px;
  letter-spacing: 1px;
  padding: 15px;
  font-family: "Poppins";
  color: #35a29f;
  opacity: 0.6;
`;

const Skill = styled.span`
  font-weight: bold;
  color: black;
`;
