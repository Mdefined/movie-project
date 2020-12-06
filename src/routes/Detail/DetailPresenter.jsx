import React from 'react';
import styled from 'styled-components';
import {VideoContainer, ContentsContainer, NonePreviewWrap} from '../../components/Container';

const PaddingWrap = styled.div`
    padding-top:70px;
`;

const ImgBox = styled.div`
    width:100%; 
    height:500px;
    background:linear-gradient( rgba(255,255,255,0.8), rgba(0,0,0,0.9)),
    url("http://image.tmdb.org/t/p/w1920_and_h800_multi_faces${props => props.backdrop_path}");
    background-size:cover;
    background-position:center center;
    h2{
        color:#333;
        font-size: 56px;
        font-weight: bold;
        text-transform: uppercase;
        margin-bottom: 30px; 
    }
    p{color:#333; font-size:20px; line-height: 24px;}
`;

const TitleWrap = styled.div`
    width:930px;
`;

function DetailPresenter({data}){
    return(
        <>
            {
                data ? (
                    <PaddingWrap>
                        <ImgBox backdrop_path={data.backdrop_path}>
                            <VideoContainer>
                                <div>
                                    <img src={`http://image.tmdb.org/t/p/w220_and_h330_face${data.poster_path}`}/>
                                </div>
                                <TitleWrap>
                                    {
                                        data.original_title ? <h2>{data.original_title}</h2> : null 
                                    }
                                    <p>{data.overview}</p> 
                                </TitleWrap>
                            </VideoContainer>                         
                        </ImgBox>
                        <ContentsContainer>
                            <h2>PREVIEW</h2>
                            {
                                data.detailKey ? (
                                    <iframe className="preview-video" width="100%" height="650" src={`https://www.youtube.com/embed/${data.detailKey}`} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                                ) : (<NonePreviewWrap>미리보기 없음</NonePreviewWrap>)
                            }
                            
                        </ContentsContainer>
                    </PaddingWrap>
                ) :null
            }
        </>
        
    );
}

export default DetailPresenter;