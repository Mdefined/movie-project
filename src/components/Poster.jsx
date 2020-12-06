import React from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';

const DataWrap = styled.div`
    width:200px; margin-bottom:50px;
    .img-box{
        width:200px; 
        height:300px;
        position:relative;
        margin-bottom:10px;
        background:linear-gradient( to bottom, rgba(0,0,0,0.1), rgba(0,0,0,1)),
        url("http://image.tmdb.org/t/p/w220_and_h330_face${props => props.poster_path}");
        background-size: cover;
        background-repeat:no-repeat;
        h3{
            position:absolute;
            bottom:20px;
            width:100%;
            padding:0 8px;
            text-align:center;
            text-transform: uppercase;
            font-size: 14px;
            opacity: 0.7;
        }
    }

`;

function Poster({url, title, poster_path}){
    return(  
        <DataWrap poster_path={poster_path}>
            <Link to={url}>
                <div className="img-box">
                    <h3>{title}</h3>
                </div>
            </Link> 
        </DataWrap>
    );
}

export default Poster;