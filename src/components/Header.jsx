import styled from "styled-components";
import { Link } from "react-router-dom";
import { useState } from "react";
import menu from "../assets/nav-bar.png";

export default function Header() {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <>
      <Container>
        <StyleLink to="/">
          <Portfolio>Portfolio</Portfolio>
        </StyleLink>
        <Ul>
          <StyleLink  to="/">
            <Li>Home</Li>
          </StyleLink>
          <StyleLink to="/reactjs">
            <Li>React Js</Li>
          </StyleLink>
          <StyleLink to="/reactnative">
            <Li>React Native</Li>
          </StyleLink>
          <StyleLink to="/dom">
            <Li>DOM</Li>
          </StyleLink>
        </Ul>
        <MenuIcon onClick={() => setIsVisible(!isVisible)} src={menu} />
      </Container>
      {isVisible && (
        <Menu>
          <StyleLink to="/">
            <List onClick={() => setIsVisible(false)}>Home</List>
          </StyleLink>
          <StyleLink to="/reactjs">
            <List onClick={() => setIsVisible(false)}>React Js</List>
          </StyleLink>
          <StyleLink to="/reactnative">
            <List onClick={() => setIsVisible(false)}>React Native</List>
          </StyleLink>
          <StyleLink to="/dom">
            <List onClick={() => setIsVisible(false)}>DOM</List>
          </StyleLink>
        </Menu>
      )}
    </>
  );
}

const Container = styled.div`
  width: 100%;
  height: 70px;
  background: #35a29f;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 50px;
  position: relative;
`;
const Portfolio = styled.h1`
  font-size: 30px;
  font-weight: bold;
  color: white;
  &:hover {
    color: #e0e6e9;
    
  }
`;
const Ul = styled.ul`
  display: flex;
  gap: 30px;
  list-style-type: none;
  margin-right: 70px;
  @media (max-width: 1100px) {
    margin-right: 15px;
    gap: 24px;
  }
  @media (max-width: 768px) {
    display: none;
  }
`;
const MenuIcon = styled.img`
  display: none;
  cursor:pointer;
  @media (max-width: 768px) {
    display: block;
  }
`;
const Menu = styled.div`
  position: absolute;
  padding: 20px 0;
  width: 100%;
  display:none;
  visibility: hidden;
  display: flex;
  flex-direction: column;
  align-items: space-between;
  overflow: hidden;
  z-index:5;
  @media (max-width: 768px) {
    display: block;
    height:200px;
    background-color: #f2f2f2;
    transition: height 3s;
    visibility:visible;
  }
`;
const Li = styled.li`
  color: white;
  font-size: 20px;
  cursor: pointer;
  &:hover {
    color: #e0e6e9;
    scale: 1.05;
    transition: 0.3s;
  }
  @media (max-width: 1100px) {
    font-size: 18px;
  }
`;
const StyleLink = styled(Link)`
  text-decoration: none;
  display: flex;
  justify-content: center;
  align-items: center;
  
`;
const List = styled.p`
  color: #35a29f;
  margin: 10px 10px;
  
`;
