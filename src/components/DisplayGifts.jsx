import React from 'react';
import UseApi from '../hooks/UseApi';
import ImageItem from './ImageItem';

const DisplayGifts = ({category}) => { 

    const url =`https://api.giphy.com/v1/gifs/search?api_key=nmUkP6NoVySTkKNtTFH3fzaJz3Yo8XJH&q=${category}&limit=9 `;
    const {loading,data} = UseApi(url);

    return (
        <div className='container-gifs'>
            
            {
                loading?
                data.map(img => (
                    <ImageItem  key={img.id}title={img.title} url={img.images.downsized_medium.url}/>
                ))
                :''
                
                
            }
        </div>

     );
}

export default DisplayGifts;