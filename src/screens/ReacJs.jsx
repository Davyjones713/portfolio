import { ReactData } from "../Data"
import styled from 'styled-components'
import Card from "../components/Card"
import Title from "../components/Title"

export default function ReactJs(){
    return(
        <>
        <Title>React Js Projects</Title>
        <Container>
            {ReactData.map((item,index) => (
                <Card data={item} key={index}/>
            ))}
        </Container>
        </>
        )
}

const Container = styled.div`
    width: 100%;
    height: 100%;
    padding: 50px 40px;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 60px;
    @media (max-width: 1024) {
        padding: 50px 0px;
  } 
`