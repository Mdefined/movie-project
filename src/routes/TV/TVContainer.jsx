import React, { useEffect, useState } from 'react';
import { tvReq } from '../../api/api';
import TVPresenter from './TVPresenter';

function TVContainer(){

    const [load, setLoad] = useState(false)
    const [tvData, setTVData] = useState({})

    const getTV = async () =>{
        try{
            const {data : latest} = await tvReq.latest();
            const {data : {results : airingTdoay}} = await tvReq.airingToday();
            const {data : {results : popular}} = await tvReq.popular();
            console.log(latest)
            setTVData({
                latest,
                airingTdoay,
                popular
            });
            
            setLoad(true);
            
        }catch(error){
            console.log(error)
        }finally{
            console.log(tvData)
        }
       
    }

    useEffect(()=>{
        getTV()
    },[])

    return(
        <>
           <TVPresenter tvData={tvData}/>
        </>
    );
}

export default TVContainer;