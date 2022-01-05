import React from 'react';

function SectionHeader(props) {
  return (
    <div className="heading aos-init aos-animate" data-aos="fade-up">
      {props.headline.length ? 
        (<h2>{props.headline}</h2>
        ) : (<></>)
      }
      
      {props.description.length ? 
        (<p>{props.description}</p>
        ) : (<></>)
      }
    </div>
 );
}

export default SectionHeader;