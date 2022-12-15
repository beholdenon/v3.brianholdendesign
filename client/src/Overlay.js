import React from 'react';
import OverlayItem from './OverlayItem';
import Button from './Button';
import './Overlay.scss';

function Overlay(props) {

    function handleClick(e) {
      e.preventDefault();
      props.closeOverlay();
    }

    return (
      <div className="overlay">
        <div className="inner">
          <div className="close-btn" onClick={handleClick}>X</div>
            <div className="content">


            {props.projects.map((item, index) => (

              <div className="overlay-outer" data-index={index} key={index}>

                <div className="overlay-header">
                  {item.fields.brand ? <h3 className="work-overlay-brand" id="overlay-brand">{item.fields.brand}</h3> : <></> }
                  {item.fields.title ? <h2 className="work-overlay-title" id="overlay-name">{item.fields.title}</h2> : <></> }
                  {item.fields.longDescription ? <p id="overlay-desc">{item.fields.longDescription}</p> : <></> }
                  
                  {item.fields.roles ? 
                    <div className="overlay-roles">
                      <ul>
                      {item.fields.roles.map((rolesItem, rolesIndex) => (
                        <li key={rolesIndex}>{rolesItem}</li>
                      ))}
                      </ul>
                    </div>
                  :<></>}

                </div>


                {item.fields.workOverlay ? 
                <div className="work-container">
                  {item.fields.workOverlay.map((workItem, workIndex) => (
                    <div className="overlay-item" key={workIndex}>
                      <div className="overlay-item-outer">
                        <OverlayItem workItem={workItem} title={item.fields.title} link={item.fields.link} />
                      </div>
                    </div>
                  ))}
                </div>
                :<></>}
                
                {item.fields.link ? <Button href={item.fields.link} title="Launch Project" /> : '' }
                  
                

              </div>


            

            ))}

            </div>

          </div>
        <div className="bg"></div>
      </div>
    );
}

export default Overlay;



