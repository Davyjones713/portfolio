import styled from "styled-components";
import facebook from "../assets/facebook.png";
import instagram from "../assets/instagram.png";
import github from "../assets/github.png";
import linkedin from "../assets/linkedin.png";

export default function Footer() {
  return (
    <Container>
      <IconFacebook href="https://www.facebook.com/DI713/" target="_blank" />
      <IconInsta href="https://www.instagram.com/datoiash713/" />
      <IconGithub href="https://github.com/Bubulika" target="_blank" />
      {/* <IconLink
        href="https://www.linkedin.com/in/gia-kharabadze-2a6597285/"
        target="_blank"
      /> */}
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  height: 120px;
  background-color: #35a29f;
  display: flex;
  align-items: center;
  padding: 0 50px;
`;
const IconFacebook = styled.a`
  width: 60px;
  height: 60px;
  background-image: url(${facebook});
`;
const IconInsta = styled.a`
  width: 60px;
  height: 60px;
  background-image: url(${instagram});
`;
const IconGithub = styled.a`
  width: 60px;
  height: 60px;
  background-image: url(${github});
`;
const IconLink = styled.a`
  width: 60px;
  height: 60px;
  background-image: url(${linkedin});
`;
