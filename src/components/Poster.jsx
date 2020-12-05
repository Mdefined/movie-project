import React from 'react';
import styled from 'styled-components';

const PostWrap = styled.div`
    width: 24%;
    height: 500px;
    margin-bottom: 50px;
    display: flex;
    flex-direction: column;
    justify-content: center;
`;

const ImgWrap = styled.div`
    display: flex;
    justify-content: center;
`;

const PostTitle = styled.h2`
    margin-top: 10px;
    font-size: 26px;
    text-align: left;
    font-weight: 600px;
`;

function Poster({title, poster_path, overview}){
    return(   
        <PostWrap>
            <ImgWrap>
                <img src={`//image.tmdb.org/t/p/w220_and_h330_face${poster_path}`} />
            </ImgWrap>
            <PostTitle>{title}</PostTitle>
            <p>{overview}</p>
        </PostWrap>
    );
}

export default Poster;