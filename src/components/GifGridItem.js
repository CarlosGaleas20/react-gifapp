import React from 'react';

const GifGridItem = ({title, url}) => {
    return (
        <div className="card animate__animated animate__fadeInUpBig">
            <p>{title}</p>
            <img src={url} />
        </div>
    );
}

export default GifGridItem;