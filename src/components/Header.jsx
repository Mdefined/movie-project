import React from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';

const HeaderWrap = styled.header`
    width:100%;
    height:70px;
    position:fixed;
    top:0;
    left:0;
    padding:0 15px;
    display:flex;
    align-items:center;
    justify-content:flex-start;
`;

const UlWrap = styled.ul`
    display:flex;
    justify-content:flex-start;
`;

const Header = () => {
    return(
        <HeaderWrap>
            <h1>
                <Link to="/">logo</Link>
            </h1>
            <UlWrap>
                <li>
                    <Link to="/movie">영화</Link>
                </li>
                <li>
                    <Link to="/tv">TV</Link>
                </li>
                <li>
                    <Link to="/bookmark">위시리스트</Link>
                </li>
            </UlWrap>
        </HeaderWrap>
    );

}

export default Header;