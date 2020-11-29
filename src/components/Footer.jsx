import React from 'react';
import styled from 'styled-components';

const FooterWrap = styled.div`
    width:100%;
    height: 100px;
    background-color: #292929;
    p{line-height:100px; text-align:center;}
`;

const Footer = () =>{
    return(
        <FooterWrap>
            <p>Copyright &copy; 2020 Mdefined</p>
        </FooterWrap>
    );
}

export default Footer;