import React from 'react';
import ProjectSection from '../components/ProjectSection';
import { Row } from 'reactstrap';

const projects = [
  {
    name: "Gradie's Grueling Grind",
    technologies: ['HTML/CSS', 'JavaScript', 'Phaser 3', 'Parcel', 'Bootstrap'],
    description: "A top down 2D rouge-like dungeon crawler web game.",
    github: "https://www.github.com/melissay94/Gradies-Grueling-Grind",
    liveDemo: "https://melissay94.github.io/Gradies-Grueling-Grind/",
    images:[{
      index: 0,
      src: 'https://github.com/melissay94/gradies-grueling-grind/raw/master/assets/ghosties_spawn.png',
      alt: 'Ghost enemies'
    }, {
      index: 1,
      src: 'https://github.com/melissay94/gradies-grueling-grind/raw/master/assets/switching_rooms.png',
      alt: 'Room Changing'
    },{
      index: 2,
      src: 'https://github.com/melissay94/gradies-grueling-grind/raw/master/assets/starting_area.png',
      alt: 'Starting Area'
    }]
  },
  {
    name: "GameRally",
    technologies: ['HTML/CSS', 'JavaScript', 'Bootstrap', 'EJS', 'Express', 'Sequelize', 'Postgres'],
    description: "A meetup web application geared towards small board game groups.",
    github: "https://www.github.com/melissay94/GameRally",
    liveDemo: "https://gamerallyio.herokuapp.com/",
    images:[{
      index: 0,
      src: 'https://github.com/melissay94/GameRally/raw/master/readMeImg/landingPage.jpg',
      alt: 'Landing Page - GameRally'
    }, {
      index: 1,
      src: 'https://github.com/melissay94/GameRally/raw/master/readMeImg/specificEvent.jpg',
      alt: 'Specific Event Page - GameRally'
    },{
      index: 2,
      src: 'https://github.com/melissay94/GameRally/raw/master/readMeImg/gameSearch.jpg',
      alt: 'Game Search Page - GameRally'
    },{
      index: 3,
      src: 'https://github.com/melissay94/GameRally/raw/master/readMeImg/404page.jpg',
      alt: '404 Page - GameRally'
    }]
  },
  {
    name: "GiveBack",
    technologies: ['HTML/CSS', 'JavaScript', 'React', 'Material UI', 'Express', 'Mongoose', 'MongoDB'],
    description: "An organizational service aimed at helping bringing volunteers and organizations together.",
    github: "https://www.github.com/melissay94/GiveBack",
    liveDemo: "https://givebackvolunteer.herokuapp.com/",
    images:[{
      index: 0,
      src: 'https://github.com/melissay94/GiveBack/raw/master/readme_images/givebackLanding.png',
      alt: 'Landing Page - GiveBack'
    },{
      index: 1,
      src: 'https://github.com/melissay94/GiveBack/raw/master/readme_images/giveBackOrganization.png',
      alt: 'Organization Page = GiveBack'
    },{
      index: 2,
      src: 'https://github.com/melissay94/GiveBack/raw/master/readme_images/giveBackDashboard.png',
      alt: 'Dashboard - GiveBack'
    },{
      index: 3,
      src: 'https://github.com/melissay94/GiveBack/raw/master/readme_images/giveBackSearch.png',
      alt: 'Organization Search Page - GiveBack'
    }]
  },
  {
    name: "Giftbasket",
    technologies: ['HTML/CSS', 'JavaScript', 'Material UI', 'React', 'GraphQL', 'Apollo', 'Sequelize', 'Postgres'],
    description: "A web application for users to keep track of potential gift ideas for others.",
    github: "https://www.github.com/melissay94/giftbasket",
    liveDemo: "https://melissay94.github.io/giftbasket/",
    images:[{
      index: 0,
      src: 'https://github.com/melissay94/giftbasket/raw/master/readme_imgs/giftbasketCompletedBasket.png',
      alt: 'A basket - Giftbasket'
    },{
      index: 1,
      src: 'https://github.com/melissay94/giftbasket/raw/master/readme_imgs/giftbasketUserGifts.png',
      alt: 'User Gifts - Giftbasket'
    },{
      index: 2,
      src: 'https://github.com/melissay94/giftbasket/raw/master/readme_imgs/giftbasketCreateBasket.png',
      alt: 'Create a basket - Giftbasket'
    },{
      index: 3,
      src: 'https://github.com/melissay94/giftbasket/raw/master/readme_imgs/giftbasketAbout.png',
      alt: 'About Section - Giftbasket'
    }]
  }
];

export default function Projects() {

  return(
    <div id="projects" className='section-layout'>
      <h2 className='section-header'>My Projects</h2>
      <Row className='project-row'>
        { projects.map(project => (
          <ProjectSection project={ project } />
        )) }
      </Row>
    </div>
  );
};
