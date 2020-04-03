import React from 'react';

import Photo from './Photo';

const PhotoResults = props => {
    props.query ?  props.searchFlickr(props.query) : props.searchFlickr();
    //creates array variable from props data
    const photosArr = props.photos
    //creates a variable storing React photo components 
    let flicks = photosArr.map(info => <Photo info={info} key={info.id}/>)
        return(
        <ul>
        {flicks}
        </ul>
        )
}
export default PhotoResults;