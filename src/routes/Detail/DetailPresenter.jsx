import React from 'react';
import {PaddingContainer} from'../../components/Container';
import styled from 'styled-components';

const PaddingWrap = styled.div`
    padding-top:70px;
`;

const ImgBox = styled.div`
    width:100%; 
    height:500px;
    background:linear-gradient( rgba(255,255,255,0.8), rgba(0,0,0,1)),
    url("http://image.tmdb.org/t/p/w1920_and_h800_multi_faces${props => props.backdrop_path}");
    background-size:cover;
    background-position:center center;
    display:flex; justify-content:space-between;
    h2{color:#000; font-size:32px;}
    p{color:#000; font-size:20px;}
`;

function DetailPresenter({data}){
    return(
        <PaddingWrap>
            <ImgBox backdrop_path={data.backdrop_path}>
                <h2>{data.original_title}</h2>
                <p>{data.overview}</p>
            </ImgBox>
            
        </PaddingWrap>
        
    );
}

export default DetailPresenter;