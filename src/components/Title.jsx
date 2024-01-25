import styled from 'styled-components'

export default function Title({children}){
    return( 
   
        <Titlle>{children}</Titlle>
    )
}

const Titlle = styled.h1`
    text-align: center;
    font-size: 50px;
    margin-top: 40px;
    color:#35a29f;
    text-shadow: 1px 1px black;
    @media (max-width: 768px) {
    font-size: 35px;
  }
`   