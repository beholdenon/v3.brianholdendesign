
import React from 'react';
import Button from './Button';
import SectionHeader from './SectionHeader';
import './Experience.scss';

function Experience(props) {

  const listItem = (item, index) => {
   var hideClass;
   index < 3 ? hideClass = 'hide-for-small' : hideClass = '';

   return (
      <li className={hideClass} data-aos="fade-up" data-aos-duration="400" data-aos-delay={index * 100} key={index}>
        <img src={'https:' + item.fields.logo.fields.file.url} alt={item.fields.name} />
      </li>
    );
  };

    return (
      <div className="section experience">
        <SectionHeader headline={props.landingItems[0].fields.experienceHeadline} description={props.landingItems[0].fields.experienceDescription} />
         {props.clients.length ? 
            (
             <ul className="logos">
              {props.clients.map((item, index) => (
                listItem(item, index)
              ))}
             </ul>
            ) : (<></>)
          }

          <div className="inner">
           <Button href="https://www.linkedin.com/in/brianholden/" title="LinkedIn Profile" delay="10000" />
          </div>
      </div>
    );
  }

export default Experience;


