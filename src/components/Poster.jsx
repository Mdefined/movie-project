import React from 'react';


function Poster({title, poster_path, overview}){
    return(   
        <div>
            <div>
                <img src={`//image.tmdb.org/t/p/w220_and_h330_face${poster_path}`} />
            </div>
            <h2>{title}</h2>
            <p>{overview}</p>
        </div>
    );
}

export default Poster;