import React from 'react';

function OverlayItem(props) {

  const renderVideo = (mediaItem, index) => {
    if(props.link) {
      return (
        <a href={props.link}>
          <div className="overlay-item-inner" key={index}>
            <video muted autoPlay loop playsInline src={'https:' + mediaItem.fields.file.url}>
            </video>
          </div>
        </a>
      )
    }
    else {
      return (
        <div className="overlay-item-inner" key={index}>
          <video muted autoPlay loop playsInline src={'https:' + mediaItem.fields.file.url}>
          </video>
        </div>
      )
    }
  }

  const renderImage = (mediaItem, index) => {
    if(props.link) {
      return (
        <a href={props.link}>
          <div className="overlay-item-inner" key={index}>
            <img data-src={'https:' + mediaItem.fields.file.url} alt={props.title} />
          </div>
        </a>
      )
    }
    else {
      return (
        <div className="overlay-item-inner" key={index}>
          <img data-src={'https:' + mediaItem.fields.file.url} alt={props.title} />
        </div>
      )
    }
  }

  if(props.workItem.sys.contentType.sys.id === 'workHeading') {
    return (
      <div className="overlay-title-outer">
        {props.workItem.fields.title ? (<h2 className="work-item-title">{props.workItem.fields.title}</h2>) : (<></>)}
        {props.workItem.fields.desc ? (<p>{props.workItem.fields.desc}</p>) : (<></>)}
      </div>
     );
  }
  else {    
    return props.workItem.fields.media.map((mediaItem, index) => {
      if(mediaItem.fields.file.contentType === 'video/mp4') {
        return renderVideo(mediaItem, index);
      }
      else {
        return renderImage(mediaItem, index);
      }
    });

  }
}

export default OverlayItem;