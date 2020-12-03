import React from 'react';
import {Link} from 'react-router-dom';

function Poster({title, poster_path, overview}){
    return(   
        <Link>
            <div>
                <img src={`//image.tmdb.org/t/p/w220_and_h330_face${poster_path}`} />
            </div>
            <h2>{title}</h2>
            <p>{overview}</p>
        </Link>
    );
}

export default Poster;