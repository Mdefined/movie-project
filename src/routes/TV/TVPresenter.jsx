import React from 'react';
import Poster from '../../components/Poster';
import {PaddingContainer, ContentsContainer, SubContainer, VideoWtap} from '../../components/Container';

function TVPresenter({tvData}){
    return(
        <>
          <SubContainer>
                {
                    tvData.detailKey ? (
                        <VideoWtap>
                            <iframe 
                            width="100%" height="1000px" 
                            src={`https://www.youtube.com/embed/${tvData.detailKey}?mute=1&control=0&autoplay=1&amp;loop=1`} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                        </VideoWtap>
                    ) : null
                }
            </SubContainer>
            <ContentsContainer>
                <h2>TV</h2>
                <PaddingContainer>
                    {
                    tvData.latestTV ? (<Poster url={`tv/${tvData.latestTV.id}`} title={tvData.latestTV.original_name} />) : null
                    }
                    {
                    tvData.airingTodayTV ? (tvData.airingTodayTV.map(item=>{
                        return <Poster url={`tv/${item.id}`} title={item.original_name} poster_path={item.poster_path} overview={item.overview}/>
                    })) : null
                    }
                    {
                    tvData.popularTV ? (tvData.popularTV.map(item=>{
                        return <Poster url={`tv/${item.id}`} title={item.original_name} poster_path={item.poster_path} overview={item.overview}/>
                    })) : null
                    }
                </PaddingContainer>
            </ContentsContainer>
        </>
    );
}

export default TVPresenter;