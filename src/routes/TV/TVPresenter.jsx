import React from 'react';
import Poster from '../../components/Poster';
import {PaddingContainer} from '../../components/Container';

function TVPresenter({tvData}){
    return(
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
    );
}

export default TVPresenter;