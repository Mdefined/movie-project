import React, { useEffect, useState } from 'react';
import { tvReq } from '../../api/api';
import TVPresenter from './TVPresenter';



function TVContainer(){

    const [load, setLoad] = useState(true);
    const [tvData, setTVData] = useState({});

    const getTVData = async () =>{
        try{
            const {data : latestTV} = await tvReq.latest();
            const {data : {results : airingTodayTV}} = await tvReq.airingToday();
            const {data : {results : popularTV}} = await tvReq.popular();
            console.log(latestTV, airingTodayTV, popularTV);
            setTVData({
                latestTV,
                airingTodayTV,
                popularTV
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
                load ? "로딩중" : <TVPresenter tvData={tvData}/>               
            }
        </>
    );
}



export default TVContainer;