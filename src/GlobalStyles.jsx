import { createGlobalStyle } from "styled-components";
import image from './assets/watercolor6.webp'

const GlobalStyles=createGlobalStyle`
*{
    margin:0;
    padding:0;
    box-sizing:border-box;
};
body{
    width:100%;
    background-image: url(${image})
}
`

export default GlobalStyles