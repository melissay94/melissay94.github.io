import React, { useState } from 'react';
import { Carousel, CarouselItem, CarouselControl, Row, Col } from 'reactstrap';

const projects = [
  {
    name: "Gradie's Grueling Grind",
    technologies: ['HTML/CSS', 'JavaScript', 'Phaser 3', 'Parcel', 'Bootstrap'],
    description: "A top down 2D rouge-like dungeon crawler web game.",
    github: "https://www.github.com/melissay94/Gradies-Grueling-Grind",
    liveDemo: "https://melissay94.github.io/Gradies-Grueling-Grind/",
    images:[{
      src: 'https://github.com/melissay94/gradies-grueling-grind/raw/master/assets/ghosties_spawn.png',
      alt: 'Ghost enemies'
    }, {
      src: 'https://github.com/melissay94/gradies-grueling-grind/raw/master/assets/switching_rooms.png',
      alt: 'Room Changing'
    },{
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
      src: 'https://github.com/melissay94/GameRally/raw/master/readMeImg/landingPage.jpg',
      alt: 'Landing Page - GameRally'
    }, {
      src: 'https://github.com/melissay94/GameRally/raw/master/readMeImg/specificEvent.jpg',
      alt: 'Specific Event Page - GameRally'
    },{
      src: 'https://github.com/melissay94/GameRally/raw/master/readMeImg/gameSearch.jpg',
      alt: 'Game Search Page - GameRally'
    },{
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
      src: 'https://github.com/melissay94/GiveBack/raw/master/readme_images/givebackLanding.png',
      alt: 'Landing Page - GiveBack'
    },{
      src: 'https://github.com/melissay94/GiveBack/raw/master/readme_images/giveBackOrganization.png',
      alt: 'Organization Page = GiveBack'
    },{
      src: 'https://github.com/melissay94/GiveBack/raw/master/readme_images/giveBackDashboard.png',
      alt: 'Dashboard - GiveBack'
    },{
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
    images:[,{
      src: 'https://github.com/melissay94/giftbasket/raw/master/readme_imgs/giftbasketCompletedBasket.png',
      alt: 'A basket - Giftbasket'
    },{
      src: 'https://github.com/melissay94/giftbasket/raw/master/readme_imgs/giftbasketUserGifts.png',
      alt: 'User Gifts - Giftbasket'
    },{
      src: 'https://github.com/melissay94/giftbasket/raw/master/readme_imgs/giftbasketCreateBasket.png',
      alt: 'Create a basket - Giftbasket'
    },{
      src: 'https://github.com/melissay94/giftbasket/raw/master/readme_imgs/giftbasketAbout.png',
      alt: 'About Section - Giftbasket'
    }]
  }
];

export default function Projects() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const next = () => {
    if (animating) return;

    setActiveIndex(activeIndex === projects.length - 1 ? 0 : activeIndex + 1);
  }

  const previous = () => {
    if (animating) return;

    setActiveIndex(activeIndex === 0 ? projects.length - 1 : activeIndex - 1);
  }

  const selectedIndex = (index) => {
    if (animating) return;

    setActiveIndex(index);
  }

  return(
    <div id="projects" className='section-layout'>
      <h2 className='section-title'>My Projects</h2>
      <Carousel 
        activeIndex={ activeIndex }
        next={ next }
        previous={ previous }
        interval={ false }>
          { projects.map(project => (
            <CarouselItem
              className='project-item'
              tag='div'
              key={project.name}
              onExiting={() => setAnimating(true)}
              onExited={() => setAnimating(false)}>
                <div className='carousel-item-content'>
                  <Row>
                    <Col md='4' className='project-info'>
                      <div className='project-header'>
                        <h2>{project.name}</h2>
                      </div>
                      <h6>{ project.technologies.join(' • ') }</h6>
                      <p>{ project.description }</p>
                      <Row>
                        <Col xs='6'>
                          <a href={project.github} target='_blank'>Project Repo</a>
                        </Col>
                        <Col xs='6'>
                          <a href={project.liveDemo}  target='_blank'>Live Demo</a>
                        </Col>
                      </Row>
                    </Col>
                    <Col md='7' className='project-gallery'>
                      <Row>
                        {project.images ? project.images.map(image => (
                          <Col key={image.alt} xs='6'>
                            <img src={image.src} alt={image.alt} />
                          </Col>
                        )):null}
                      </Row>
                    </Col>
                  </Row>
                </div>
              </CarouselItem>
          ))}
          <CarouselControl direction="prev" directionText="Previous" onClickHandler={previous} />
          <CarouselControl direction="next" directionText="Next" onClickHandler={next} />
      </Carousel>
      <Row className='carousel-controls'>
        { projects.map((project, index) => (
          <Col key={project.name} onClick={() => selectedIndex(index)} xs='3'>
            <a>{ project.name }</a>
          </Col>
        ))}
      </Row>
    </div>
  );
};
