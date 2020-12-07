import React, {useState, useEffect, useContext} from 'react';
import HomePresenter from './HomePresenter';
import {movieReq, tvReq, searchMovieReq} from '../../api/api';
import SearchContext from '../../components/Context';

function HomeContainer(){

    const [load, setLoad] = useState(true);
    const [error, setError] = useState("");
    const [moviedata, setMoviedata] = useState({});
    const [tvdata, setTVData] = useState({});
    const {search} = useContext(SearchContext);
    const [searchData, setSearchData] = useState([]);

    const getMovie = async () =>{
        try{
            const {data:{results:popularMovie}} = await movieReq.popular();
            const {data:latestMovie} = await movieReq.latest();
            const {data:{results:nowPlayingMovie}} = await movieReq.nowPlaying();
            const {data:{results:upcomingMovie}} = await movieReq.upcoming();
        
            setLoad(false);
            setMoviedata({
                popularMovie,
                latestMovie,
                nowPlayingMovie,
                upcomingMovie
            });
        }catch(error){
            setError(error);
        }finally{
            setLoad(false);
        }
    }

    const getTV = async () => {
        try{
            const {data : lastestTV} = await tvReq.latest();
            const {data : {results : airingTodayTV}} = await tvReq.airingToday();
            const {data : {results : popularTV}} = await tvReq.popular();  
            
            setTVData({
                lastestTV,
                airingTodayTV,
                popularTV
            })
        }catch(error){
            console.log(error);
        }finally{
            setLoad(false);
        }
    }

    useEffect(() => {
        getMovie();
        getTV();
    },[])

    const getSearchData = async () =>{
        try{    
            if(search === ""){
                setSearchData(null);                 
            }else{
                const {data : {results: searchResults}} = await searchMovieReq.search(search);
                setSearchData([...searchResults]);  
            }
            
        }catch(error){
            console.log(error)
        }
    }
  
    useEffect(()=>{
        getSearchData()        
    },[search])

    return(
        <>
            {load ? "로딩중" : (<HomePresenter searchData={searchData} moviedata={moviedata} tvdata={tvdata}/>)}
        </>
    );
}

export default HomeContainer;