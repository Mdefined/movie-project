import React from 'react';

function TVPresenter({tvData}){
    return(
        <>
            {
                tvData.latest ? <div>{tvData.latest.original_name}</div> : null
            }
        </>
    );
}

export default TVPresenter;