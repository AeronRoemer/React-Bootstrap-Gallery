import React from 'react';

const Photo = (props) => {
    const img = {
        id: props.info.id,
        secret: props.info.secret,
        server: props.info.server,
        farm: props.info.farm,
        owner: props.info.owner,
        title: props.info.title
    }
    return(
        <div className="photo-container">
            <a href={`https://www.flickr.com/photos/${img.owner}/${img.id}`}>
            <img className="single-photo" src={`https://farm${img.farm}.staticflickr.com/${img.server}/${img.id}_${img.secret}.jpg`} alt={img.title} />
            </a>
        </div>
    )
}

export default Photo;