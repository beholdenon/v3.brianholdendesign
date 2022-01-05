import React from 'react';
import SectionHeader from './SectionHeader';

function Skills(props) {
  return (
    <div className="section skills">
       <SectionHeader headline={props.landingItems[0].fields.skillsHeadline} description={props.landingItems[0].fields.skillsDescription} />
       
       <ul className="skill-list">
        {props.skills[0].fields.skills.map((item, index) => (
         <li data-aos="fade-up" data-aos-duration="600" className="aos-init aos-animate" key={index}>
             <div className="inner">{item}</div>
          </li>
         ))}
       </ul>
    </div>
  );
}

export default Skills;