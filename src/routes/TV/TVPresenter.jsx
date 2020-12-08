import React from 'react';
import Poster from '../../components/Poster';
import {PaddingContainer, ContentsContainer, SubContainer, VideoWtap} from '../../components/Container';

function TVPresenter({tvData}){
    return(
        <>
            {
                tvData.tvvideosKey ? (
                    <VideoWtap>
                        <iframe 
                        width="100%" height="1200px" 
                        src={`https://www.youtube.com/embed/${tvData.tvvideosKey}?mute=1&control=0&autoplay=1&amp;loop=1`} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                    </VideoWtap>
                ) : <img src={`http://image.tmdb.org/t/p/w1920_and_h800_multi_faces${tvData.popularTV[0].backdrop_path}`} />
            }
            <ContentsContainer>
                <h2>TV</h2>
                <PaddingContainer>
                    {
                    tvData.latestTV ? (<Poster url={`tv/${tvData.latestTV.id}`} title={tvData.latestTV.original_name} />) : null
                    }
                    {
                    tvData.airingTodayTV ? (tvData.airingTodayTV.map(item=>{
                        return <Poster key={item.id} url={`tv/${item.id}`} title={item.original_name} poster_path={item.poster_path} overview={item.overview}/>
                    })) : null
                    }
                    {
                    tvData.popularTV ? (tvData.popularTV.map(item=>{
                        return <Poster key={item.id} url={`tv/${item.id}`} title={item.original_name} poster_path={item.poster_path} overview={item.overview}/>
                    })) : null
                    }
                </PaddingContainer>
            </ContentsContainer>
        </>
    );
}

export default TVPresenter;