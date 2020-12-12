import React, {useContext} from 'react';
import Poster from '../../components/Poster';
import {PaddingContainer, ContentsContainer, SubContainer, VideoWtap} from '../../components/Container';
import SearchContext from '../../components/Context';
import styled from 'styled-components';

const NoneresultTitle = styled.div`
    min-height:700px;
    display:flex;
    justify-content:center;
    align-items:center;
    font-size:32px;
    font-weight:bold;
`;

function TVPresenter({tvData, searchTV}){

    const {search} = useContext(SearchContext);
    if(!searchTV){
        return(
            <>
                {
                    tvData.tvvideosKey ? (
                        <VideoWtap>
                            <iframe 
                            width="100%"
                            height="1200px" 
                            src={`https://www.youtube.com/embed/${tvData.tvvideosKey}?mute=1&control=0&autoplay=1&amp;loop=1`}
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen></iframe>
                        </VideoWtap>
                    ) : <img src={`http://image.tmdb.org/t/p/w1920_and_h800_multi_faces${tvData.popularTV[0].backdrop_path}`} />
                }
                <ContentsContainer>
                    <h2>TV</h2>
                    <PaddingContainer>
                        {
                        tvData.latestTV ? (
                        <Poster
                            url={`tv/${tvData.latestTV.id}`}
                            title={tvData.latestTV.original_name}
                            />
                            ) : null
                        }
                        {
                        tvData.airingTodayTV ? (tvData.airingTodayTV.map(item=>{
                            return <Poster
                            key={item.id}
                            url={`tv/${item.id}`}
                            title={item.original_name}
                            poster_path={item.poster_path}
                            overview={item.overview}/>
                        })) : null
                        }
                        {
                        tvData.popularTV ? (tvData.popularTV.map(item=>{
                            return <Poster
                            key={item.id}
                            url={`tv/${item.id}`}
                            title={item.original_name}
                            poster_path={item.poster_path}
                            overview={item.overview}/>
                        })) : null
                        }
                    </PaddingContainer>
                </ContentsContainer>
            </>
        );
        
    }
    if(searchTV.length === 0){
        return(
            <SubContainer>
                <NoneresultTitle>{search} 검색 결과없음</NoneresultTitle>
            </SubContainer>
        );
    }
    if(searchTV.length > 0){
        return(
            <>
                <ContentsContainer>
                    <h2>검색결과</h2>
                    <PaddingContainer>
                    {
                        searchTV ? searchTV.map(item =>{
                            return(
                                <Poster key={item.id} title={item.original_name} poster_path={item.poster_path} />
                            );
                        }) : null
                    }
                    </PaddingContainer>
                </ContentsContainer>
            </>
        );
    }
    
}

export default TVPresenter;