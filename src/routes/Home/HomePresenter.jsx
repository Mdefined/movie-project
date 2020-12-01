import React, {useState, useEffect} from 'react';
import styled from 'styled-components';

const HomeWrap = styled.div`
    width:100%;
    height:100%;
    padding-top:70px;
`;

const ImgBox = styled.div`
    width:100%; height:800px; overflow:hidden;
    background:url("http://image.tmdb.org/t/p/w1920_and_h800_multi_faces${props => props.url}")no-repeat center center;
    img{width:100%;}
`;

function HomePresenter(props){

    const [random, setRandom] = useState(0);

    useEffect(() => {
        setRandom(Math.floor(Math.random()*20));
    },[])

    return(
        <>
            {props.moviedata.popular ? (
                <HomeWrap>
                <ImgBox url={props.moviedata.popular[random].backdrop_path}>
                    <h2>Lorem ipsum dolor sit amet.</h2>
                    <button>MORE</button>
                </ImgBox>
                </HomeWrap>
            ): "null"}
        </>
    );
}


export default HomePresenter;