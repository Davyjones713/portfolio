import { NativeData } from "../Data"
import Card from "../components/Card"
import styled from 'styled-components'
import Title from "../components/Title"

export default function ReactNative(){
    return (
        <>
        <Title>React Native Projects</Title>
        <Container>
            {NativeData.map((item,index) => (
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