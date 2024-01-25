import styled from "styled-components";

export default function Card({data}) {
  return (
    <Container>
      <Title>{data.title}</Title>
      <Image src={data.img} />
      <Wrap>
        <Des>Description</Des>
        <Description>
          {data.description}
        </Description>
      </Wrap>
      
      <Wrapper>
        {data.build && <Button href={data.web} target='_blank'>Visit Site</Button>}
        <Button href={data.code} target='_blank'>See Code</Button>
      </Wrapper>
    </Container>
  );
}

const Container = styled.div`
  width: 600px;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: 3px 3px 8px grey;
  background-color: white;
  border-radius: 10px;
  padding: 15px 20px;
  
`;
const Title = styled.h1`
  font-weight: bold;
  font-size: 28px;
  color: #35a29f;
  margin-bottom: 10px;
`;
const Image = styled.img`
  width: 100%;
`;

const Description = styled.p`
    color: #35a29f;
    margin-bottom: 20px;
    opacity: 0.7;
`;
const Wrapper = styled.div`
    width: 100%;
    margin-bottom: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 15px;
`
const Button = styled.a`
    width: 80px;
    height: 30px;
    cursor: pointer;
    text-decoration: none;
    background-color: #35a29f;
    color: white;
    border: none;
    border-radius: 5px;
    display: flex;
    align-items:center;
    justify-content:center;
`
const Wrap = styled.div`
  width:100%;
`
const Des = styled.h4`
  font-size: 20px;
  color: #167572;
  margin: 15px 0;
  
`

