import {createGlobalStyle} from "styled-components";
import reset from 'styled-reset';

const GlobalStyles = createGlobalStyle`
    ${reset};
    a{text-decoration:none; color:inherit;}

    *{box-sizing:border-box;}
    body{font-size:14px; color:#fff; background-color:#343434; padding-top:70px;}
`;

export default GlobalStyles;
