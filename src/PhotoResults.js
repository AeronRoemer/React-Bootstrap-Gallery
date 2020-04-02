import React from 'react';
import Photo from './Photo'

const PhotoResults = props => {
    const photosArr = props.photos
    let flicks = photosArr.map(info => <Photo info={info} key={info.id}/>)
        return(
        <ul>
        {flicks}
        </ul>
        )
}
export default PhotoResults;