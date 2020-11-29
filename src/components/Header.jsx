import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';
import {BiSearch} from 'react-icons/bi';

const HeaderWrap = styled.header`
    width:100%;
    height:70px;
    position:fixed;
    top:0;
    left:0;
`;

const Container = styled.div`
    width:1200px;
    height:100%;
    margin:0 auto;
    display:flex;
    align-items:center;
    justify-content:space-between;
`;

const UlWrap = styled.ul`
    display:flex;
    justify-content:flex-start;
    margin-left:40px;
    li{
        &:not(:first-child){margin-left: 30px;}
    }
`;

const TitleWrap = styled.div`
    display:flex;
    justify-content:flex-start;   
    align-items: center; 
    .logo{font-family: 'Piedra', cursive; font-size:28px; color:#ff0000; letter-spacing:2px;}
`;

const SearchWrap = styled.div`
    form{display:flex; align-items:center;}
    button{border:none; background-color:transparent;}
`;

const InputArea = styled.input`
    width:${props => props.toggle ? "200px" : 0 };
    transition:0.3s;
    height:30px;
    background-color:transparent;
    border:none;
    outline:none;
    color:#fff;
    border-bottom:${props => props.toggle ? "1px solid #ddd" : "none"};

`;

const Header = () => {

    const [search, setSearch] = useState(false);

    const openInput = () => {
        setSearch(!search);
    }

    return(
        <HeaderWrap>
            <Container>
                <TitleWrap>
                    <h1>
                        <Link to="/" className="logo">MOVIEDAY</Link>
                    </h1>
                    <UlWrap>
                        <li>
                            <Link to="/movie">MOVIE</Link>
                        </li>
                        <li>
                            <Link to="/tv">TV</Link>
                        </li>
                        <li>
                            <Link to="/bookmark">WISH LIST</Link>
                        </li>
                    </UlWrap>
                </TitleWrap>
                <SearchWrap>
                    <form onSubmit={(e) => e.preventDefault()}>
                        <InputArea type="text" placeholder="Search" toggle={search}/>
                        <button onClick={openInput}>
                            <BiSearch size="20" color="#fff"/>
                        </button>
                    </form>
                </SearchWrap>
            </Container>
        </HeaderWrap>
    );

}

export default Header;