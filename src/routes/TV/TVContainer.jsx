import React, { useEffect, useState, useContext } from 'react';
import { tvReq, searchTVReq } from '../../api/api';
import TVPresenter from './TVPresenter';
import Loading from '../../components/Loading';
import SearchContext from '../../components/Context';


function TVContainer(){

    const [load, setLoad] = useState(true);
    const [tvData, setTVData] = useState({});
    const {search, random} = useContext(SearchContext);
    const [searchTV, setSearchTV] = useState(null);

    const getTVData = async () =>{
        try{
            const randomNumber = random();
            const {data : latestTV} = await tvReq.latest();
            const {data : {results : airingTodayTV}} = await tvReq.airingToday();
            const {data : {results : popularTV}} = await tvReq.popular();
            const {data : {results : videoTV}} = await tvReq.videos(airingTodayTV[randomNumber].id);
    
            let tvvideosKey = null;

            if(videoTV.length !== 0){
                tvvideosKey = videoTV[0].key;
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

    const getSearchTV = async () =>{
        try{
            if(search === ""){
                setSearchTV(null);
                
            }else{
                const {data : {results : searchDataTV}} = await searchTVReq.searchTV(search);
                setSearchTV([...searchDataTV]);
            }   
        }catch(error){
            console.log(error)
        }
        console.log(search)
        
    }

    useEffect(()=>{
        getTVData();
    },[])
    
    useEffect(()=>{
        getSearchTV();
    },[search])

    return(
        <>
            {
                load ? <Loading /> : <TVPresenter searchTV={searchTV} tvData={tvData}/>               
            }
        </>
    );
}



export default TVContainer;