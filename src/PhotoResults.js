import React from 'react';

import Photo from './Photo';

const PhotoResults = props => {
    //creates array variable from props data
    const photosArr = props.photos
    let flicks
    //creates a variable storing React photo components 
    if (photosArr.length > 0) {
        flicks = photosArr.map(info => <Photo info={info} key={info.id}/>)
    } else if (props.loading === true) {

    } else {
        flicks = <div className="not-found"><h3>Sorry, no results for your search term. </h3></div>
    }
    return(
        <div className="gallery-display">
                {flicks}
        </div>
        )
}
export default PhotoResults;

