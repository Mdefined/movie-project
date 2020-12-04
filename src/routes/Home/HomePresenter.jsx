import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import {PaddingContainer} from '../../components/Container';

const HomeWrap = styled.div`
    width:100%;
    min-height:100%;
    flex: 1 0 auto;
    padding-top:70px;
`;

const ImgBox = styled.div`
    width:100%; height:800px; overflow:hidden;
    background:linear-gradient(
        to left,
        rgba(0,0,0,0.1),
        rgba(0,0,0,1)), 
        url("http://image.tmdb.org/t/p/w1920_and_h800_multi_faces${props => props.url}");
    background-position:350px;
    background-size: cover;
    background-repeat:no-repeat;
    background-color:#000;
    img{width:100%;}
`;

const TitleWrap =styled.div`
    width:1200px; margin:300px auto 0 auto;
    h2{
        font-size:56px; text-transform:uppercase; margin-bottom:30px; line-height:60px;
        width:600px; height:190px; overflow:hidden; text-overflow:ellipsis;
        display: -webkit-box; -webkit-box-orient: vertical; -webkit-line-clamp: 3;

    }
    button{
        border:2px solid #fff; background-color:transparent; padding:20px; width:200px; line-height:25px;
        color:#fff; font-size:24px;
    }
`;

function HomePresenter({moviedata}){

    const [random, setRandom] = useState(0);
    
    useEffect(() => {
        setRandom(Math.floor(Math.random()*20));
    },[])

    return(
        <>
            {moviedata.popular ? (
                <HomeWrap>
                <ImgBox url={moviedata.popular[random].backdrop_path}>
                    <TitleWrap>
                        <h2>{moviedata.popular[random].overview}</h2>
                        <button>MORE</button>
                    </TitleWrap>
                </ImgBox>
                <PaddingContainer></PaddingContainer>
                </HomeWrap>
            ): "null"}
        </>
    );
}


export default HomePresenter;