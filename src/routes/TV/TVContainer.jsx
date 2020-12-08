import React, { useEffect, useState } from 'react';
import { tvReq } from '../../api/api';
import TVPresenter from './TVPresenter';
import Loading from '../../components/Loading';


function TVContainer(){

    const [load, setLoad] = useState(true);
    const [tvData, setTVData] = useState({});

    const getTVData = async () =>{
        try{
            const {data : latestTV} = await tvReq.latest();
            const {data : {results : airingTodayTV}} = await tvReq.airingToday();
            const {data : {results : popularTV}} = await tvReq.popular();
            const {data : {results : videoTV}} = await tvReq.videos(airingTodayTV[Math.floor(Math.random()*19)].id);
    
            let tvvideosKey = null;

            if(videoTV.length !== 0){
                tvvideosKey = videoTV[0].key;
                console.log(tvvideosKey)
            }

            setTVData({
                latestTV,
                airingTodayTV,
                popularTV,
                tvvideosKey
            })
            
        }catch(error){
            console.log(error)
        }finally{
            setLoad(false)
        }
    }
    useEffect(()=>{
        getTVData();
    },[])
    

    return(
        <>
            {
                load ? <Loading /> : <TVPresenter tvData={tvData}/>               
            }
        </>
    );
}



export default TVContainer;