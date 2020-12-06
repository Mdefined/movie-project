import React, {useState, useEffect} from 'react';
import {movieReq, tvReq} from '../../api/api';
import DetailPresenter from './DetailPresenter';

function DetailContainer({location: {pathname}}){

    const [data, setData] = useState({});

    const getMovieDetail = async (id) =>{
        const {data} = await movieReq.detail(id);
        const {data : {videos : {results : detailVideos}}} = await movieReq.detail(id);
        console.log(detailVideos)
        if(detailVideos.length > 0){
            const detailKey = detailVideos[0].key;
            setData({...data, detailKey})
        }else{
            setData({...data})
        }
       
        
    }

    const getTVDetail = async (id) =>{
        const {data} = await tvReq.detail(id);
        setData({...data})
        console.log(data)
    }

    useEffect(()=>{
        if(pathname.split("/")[1] === "tv"){
            const tvID = pathname.slice(4);
            getTVDetail(tvID);
        }else{
            const movieID = pathname.slice(7);
            getMovieDetail(movieID);
        }
    },[])

    return(
        
        <DetailPresenter data={data} />
        
    );
}

export default DetailContainer;