import Card from "../components/Card";
import styled from 'styled-components'
import { DomData } from "../Data";
import Title from "../components/Title";

export default function Dom(){
    return (
        <>
        <Title>DOM Manipulation</Title>
    <Container>
        {DomData.map((item,index)=> (
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
`