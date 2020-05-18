import React from 'react';
import ProjectSection from '../components/ProjectSection';
import { Row } from 'reactstrap';
import tictactoeStart from '../assets/setupGame.png';
import tictactoeWon from '../assets/wonGame.png';
import injoyFeed from '../assets/injoyFeed.png';
import injoyFlashCard from '../assets/injoyFlashCard.png';
import injoyHomepage from '../assets/injoyHomepage.png';
import injoySignup from '../assets/injoySignupflow.png';

const projects = [
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
    name: "Giftbasket",
    technologies: ['HTML/CSS', 'JavaScript', 'Material UI', 'React', 'GraphQL', 'Apollo', 'Sequelize', 'Postgres'],
    description: "A web application for users to keep track of potential gift ideas for others.",
    github: "https://www.github.com/melissay94/giftbasket",
    liveDemo: "https://www.melissayoung.dev/giftbasket/",
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
  },
  {
    name: "GiveBack",
    technologies: ['HTML/CSS', 'JavaScript', 'React', 'Material UI', 'Express', 'Mongoose', 'MongoDB'],
    description: "An organizational service aimed at helping bring volunteers and organizations together.",
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
    name: "Gradie's Grueling Grind",
    technologies: ['HTML/CSS', 'JavaScript', 'Phaser 3', 'Parcel', 'Bootstrap'],
    description: "A top down 2D rouge-like dungeon crawler web game about a poor lost kobold trying to survive and find his way home.",
    github: "https://www.github.com/melissay94/gradies-grueling-grind",
    liveDemo: "https://www.melissayoung.dev/gradies-grueling-grind/",
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
  }, {
    name: "Tic Tac Toe",
    technologies: ['HTML/CSS', 'JavaScript'],
    description: "A simple Tic Tac Toe game with a random placement 'AI'.",
    github: "https://www.github.com/melissay94/tic-tac-toe",
    liveDemo: "https://www.melissayoung.dev/tic-tac-toe/",
    images: [{
      index: 0,
      src: tictactoeStart,
      alt: 'Starting Set up'
    },{
      index: 1,
      src: tictactoeWon,
      alt: 'Won Game'
    }]
  }, {
    name: "InJoy", 
    technologies: ["HTML/CSS", "Material UI", "React", "Express"],
    description: "Mobile-first web application that supplies users with prompts for stay home activities and encourages them to share the results!",
    github: "https://github.com/melissay94/InJoy",
    images: [{
      index: 0,
      src: injoyHomepage,
      alt: 'InJoy Home Screen'
    }, {
      index: 1,
      src: injoySignup,
      alt: 'InJoy SignUp - Select Preferred Categories'
    }, {
      index: 2,
      src: injoyFlashCard,
      alt: 'Injoy Topic Card Screen'
    }, {
      index: 3,
      src:injoyFeed,
      alt: 'Injoy Feed Screen'
    }]
  }
];

export default function Projects() {

  return(
    <div id="projects" className='section-layout'>
      <h2 className='section-header'>My Projects</h2>
      <Row className='project-row'>
        { projects.map(project => (
          <ProjectSection project={ project } key={project.name} />
        )) }
      </Row>
    </div>
  );
};
