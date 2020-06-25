import React from 'react';

const Photo = (props) => {
    const img = {
        id: props.info.id,
        secret: props.info.secret,
        server: props.info.server,
        farm: props.info.farm,
        title: props.info.title
    }
    return(
        <div>
          <img className="single-photo" src={`https://farm${img.farm}.staticflickr.com/${img.server}/${img.id}_${img.secret}.jpg`} alt={img.title} />
        </div>
    )
}

export default Photo;