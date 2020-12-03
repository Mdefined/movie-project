import React, { useEffect, useState } from 'react';
import { tvReq } from '../../api/api';



function TVContainer(){

    const [load, setLoad] = useState(false);
    const [tvData, setTVData] = useState({});

    const getTVData = async () =>{
        try{
            setLoad(true)
            const {data : latestTV} = await tvReq.latest();
            console.log(latestTV);
            setTVData({
                latestTV
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
                load ? null : <div>{tvData.latestTV.original_name}</div>                
            }
        </>
    );
}



export default TVContainer;