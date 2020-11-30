import {createGlobalStyle} from "styled-components";
import reset from 'styled-reset';

const GlobalStyles = createGlobalStyle`
    ${reset};
    a{text-decoration:none; color:inherit;}

    *{box-sizing:border-box;}
    body{width:100%; height:100vh; font-size:14px; color:#fff; background-color:#111; overflow-wrap: break-word;}
    #root{width:100%; height:100%;}
    button{outline:none; cursor:pointer;}
`;


export default GlobalStyles;
