import React from 'react';
import useFetchGif from '../hooks/useFetchGif';
import GifGridItem from './GifGridItem';

const GifGrid = ({ category }) => {

    const {data:image, loading} = useFetchGif(category);

    


    return (
        <>
            <h3 className="animate__animated animate__fadeInLeft">{category}</h3>
            {loading && <p>Cargando................................................</p>}
            <div className="card-grid">
            {
                    image.map( img  => (
                        <GifGridItem
                            key={img.id}
                            {...img}
                        />
                    ))
                }
            </div>   
        </>
    );
}

export default GifGrid;