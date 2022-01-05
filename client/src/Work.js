import React from 'react';
import SectionHeader from './SectionHeader';
import './Work.scss';

function Work(props) {

    function handleClick(id) {
      props.openOverlay(id);
    }

    return (
      <div className="section work">

        <SectionHeader headline={props.landingItems[0].fields.workHeadline} description={props.landingItems[0].fields.workDescription} />

        <div className="grid-container">
          {props.projects.map((item, index) => (
            <div className="work-item" data-aos="fade-up-right" data-aos-duration="400" key={index}>
              <button onClick={() => handleClick(index)}>
                <div className="inner">
                  <figure>
                    <img src={'https:' + item.fields.thumbnail.fields.file.url} alt={item.fields.title} />
                  </figure>
                  <div className="text-inner">
                    <h4>{item.fields.client}</h4>
                    <h3>{item.fields.title}</h3>
                    <p>{item.fields.shortDescription}</p>
                  </div>
                </div>
              </button>
            </div>
          ))}
        </div>
      </div>
    );
}

export default Work;
