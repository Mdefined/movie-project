import React from 'react';

function Poster({title, poster_path, overview}){
    return(
        <>
            <div>{title}</div>
            <div>
                <img src={`//image.tmdb.org/t/p/w220_and_h330_face${poster_path}`} />
            </div>
            <p>{overview}</p>
        </>
    );
}

export default Poster;