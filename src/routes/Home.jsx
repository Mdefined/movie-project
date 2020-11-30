import React from 'react';
import styled from 'styled-components';

const HomeWrap = styled.div`
    width:100%;
    height:100%;
    padding-top:70px;
    .img-box{
        width:100%; height:800px; overflow:hidden;
        background:url("/img/img.jpg")no-repeat center center;
        img{width:100%;}
    }
`;

function Home(){
    return(
        <HomeWrap>
            <div class="img-box">
                <h2>Lorem ipsum dolor sit amet.</h2>
                <button>MORE</button>
            </div>
        </HomeWrap>

    );
}


export default Home;