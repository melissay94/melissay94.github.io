import React from 'react';
import Map from '../components/Map';
import TechLogoList from '../components/TechLogoList';

export default function About() {
  return(
    <div id="about" className='section-layout'>
      <div className='brand-statement'>
        <h2 className='section-header'>The TL;DR</h2>
        <ul className='my-info'>
          <li>Software Engineer focused on <b>Front End Development</b>, who loves creating engaging web products!</li>
          <li>Currently <b>seeking my next full time</b> opportunity in <b>Seattle, WA</b></li>
          <li>Recently completed a <b>full time, 480+ hour, 13 week Software Engineering Immersive</b> at 
            <a href='https://generalassemb.ly/education/software-engineering-immersive/seattle?ga_campaign=immersive-remote&ga_variation=sei-tile' 
               target='_blank'
               rel='noopener noreferrer'> General Assembly</a>
          </li>
          <li>Last full time position was doing <b>Android Development</b> as a Software Engineer at 
            <a 
              href='https://willowtreeapps.com/' 
              target='_blank'
              rel='noopener noreferrer'> WillowTree</a>
          </li>
          <li>Past experience solidified my understanding of <b>strong teamwork in an agile environment</b> as well as an <b>appreciation for candid conversations.</b></li>
          <li><b>Bachelor's Degree in Game Design and Development</b> means a creative mindset and approaching problem solving from a different perspective.</li>
          <li>Attended the
            <a 
              href='https://www.rit.edu/computing/school-interactive-games-and-media' 
              target='_blank' 
              rel='noopener noreferrer'> Rochester Institute of Technology</a>
            , specifically the Golisano College of Information Technology and Science.</li>
          <li>Constantly building knowledge base to share. Especially through <b>volunteering opportunities for teaching Computer Science</b> to the younger generation.</li>
        </ul>
      </div>
      <h2 className='section-header'>The Tech</h2>
      <h6 className='section-subheader'>(Hover a logo for more information)</h6>
      <TechLogoList />
      <div className='map-section'>
        <h2 className='section-header'>The Tale</h2>
        <h6 className='section-subheader'>(Click on a city to learn more about me!)</h6>
        <Map />
      </div>
    </div>
  );
};
