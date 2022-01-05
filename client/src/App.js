import React, { useState, useEffect } from 'react';
import './App.scss';
import Landing from './Landing';
import Work from './Work';
import Experience from './Experience';
import Skills from './Skills';
import Contact from './Contact';
import Overlay from './Overlay';
import $ from 'jquery';
import vType from './vType.js';
import vFont from './vFont.js';
import AOS from 'aos';
const axios = require('axios');

function App() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [landingItems, setLandingItems] = useState([]);
  const [projects, setProjects] = useState([]);
  const [clients, setClients] = useState([]);
  const [skills, setSkills] = useState([]);
  const [overlayOpen, setOverlayOpen] = useState(false);

  const openOverlay = (id) => {
    setOverlayOpen(true);
    // set scroll position to the top
    $('.overlay .inner').scrollTop(0);

    // show only active overlay
    $(".overlay .overlay-outer").hide().eq(id).show();

    // add class to body and trigger show css animation
    $("body").addClass("overlay-active");

    // show all images and videos
    $(".overlay .overlay-outer").eq(id).find('.overlay-item-inner video').each(function() {
      $(this).html('<source src="' + $(this).data('src') + '" type="video/mp4"></source>');
      $(this)[0].load();
    });

    $(".overlay .overlay-outer").eq(id).find('.overlay-item-inner img').each(function() {
      $(this).attr('src', $(this).data('src'));
    });
  };

  const closeOverlay = () => {
    setOverlayOpen(false);
    $('body').removeClass('overlay-active');
  };

  $(() => {
    $(".overlay .inner").not('.work-item').on('click', () => {
      closeOverlay();
    });

    $(document).on('keydown', function(e) {
      if (e.key === 'Escape' && overlayOpen) {
        closeOverlay();
      }
    });

    $(window).on('scroll', () => {
      let perc = $(window).scrollTop() / 2 / ($(window).height() / 2);
      $('.landing .inner').css('filter', "blur(" + perc * 8 + "px)");
      $('.landing .inner').css('opacity', 1 - (perc/4));
    });
  });

  useEffect(() => {

    // set title
    document.title = "Brian Holden Design & Development";

    // load landing page data
    const getLandingPage = () => axios.get('/landing');

    // load project data
    const getProjects = () => axios.get('/projects');

    //load all clients
    const getClients = () => axios.get('/clients');

    //load all skills
    const getSkills = () => axios.get('/skills');

    // after all data is loaded render page (axios)
    Promise.all([getLandingPage(), getProjects(), getClients(), getSkills()])
      .then((results) => {
        setLandingItems(results[0].data.items);
        setProjects(results[1].data.items);
        setClients(results[2].data.items);
        setSkills(results[3].data.items);
        setIsLoaded(true);
      });

  }, []);


  if (!isLoaded) {
    return <div>Loading...</div>;
  } 
  else {

    $(() => {

      Math.dist = function (a, b) {
        var dx = b.x - a.x;
        var dy = b.y - a.y;
        return Math.sqrt(Math.pow(dx, 2), Math.pow(dy, 2));
      };

      function initVariableType() {
        let t = new vType();
        t.init();
        var f = new vFont('title');
        f.init();
      } 

      function initAnimation() {
        AOS.init({
          mirror: true
        });
      }

      initVariableType();
      initAnimation();
    });

    return (
      <>
        <div id="main">
          <div className="bg"></div>
          <Landing landingItems={landingItems} />
          <Work landingItems={landingItems} projects={projects} openOverlay={openOverlay} />
          <Experience landingItems={landingItems} clients={clients} />
          <Skills landingItems={landingItems} skills={skills} />
          <Contact landingItems={landingItems} />
        </div>
        <Overlay projects={projects} closeOverlay={closeOverlay} />
      </>
    );
  }
}

export default App;
