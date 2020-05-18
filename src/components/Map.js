import React, { useState } from 'react';
import { Fade, Row, Col } from 'reactstrap';
import CityMap from '../assets/mapOutline.png';

export default function Map() {
  
  const cityInfo = [
    {
      name: "Seattle",
      moved: "June 2019 - Current",
      companies: ["General Assembly"],
      description: "After years of visiting, int the summer of 2019, I finally decided to move across the country to be with my partner in Seattle. While I was sad to leave my amazing position at WillowTree, being apart during a small medical issue put into perspective that the distance was just too much strain on both of us. Also, I love Seattle, so why not move now versus later? With this big life change occuring, moving across the country and then into a new apartment, plus quite a bit of travel coming up after that, I decided to take it easy, and organized our life. While doing this, I decided to focus on what field of development I truly wanted to work in, which is the Front End. After a few months of learning on my own, I decided that it would be beneficial to enroll at General Assembly, a bootcamp program one of my coworkers had told me about back in Virginia!"
    },
    {
      name: "San Diego",
      moved: "Jan 2016 - Aug 2016",
      companies: ["Intuit"],
      description: "Sunny California and my first position at a tech company! During my fourth year at RIT, I applied and got a Software Engineer co-op position with Intuit, most well known for TurboTax. There, I was placed on a small internal team of about 6 people where I mainly contributed to the Front End of a web app for the Social Media team. This was also my first experience with using a framework for the front end, in this case Angular v1.0. My projects also included research on the possibility of gamification of taxes, and working on a prototype for a new feature designed by another team. Along with our regular developer responsibilities, all co-ops participated in a week-long rapid prototyping competition. We were divided into two teams, given the same problem to solve, and then spent about 80+ hours working on ideation and development. My team won the overall competition and I was given a leadership award for my conflict resolution skills."
    },
    {
      name: "Charlottesville",
      moved: "Nov 2017 - June 2019",
      companies: ["WillowTree"],
      description: "Shortly after graduating, I was hired as a Software Engineer, initially for Front End, and moved to a brand new city where I only knew the people I had met during my recruitment process. To say I was both excited and nervous was an understatement. WillowTree was the best experience I could have imagined as a student for my first position! Everyone was welcoming, and motivated to create great software. My teams were interdisciplinary, and I appreciated working with, and learning from, our designers, test engineers, and other software engineers. When I started I got a curveball because there weren't any teams that needed Front End, so I got the opportunity to learn Android development and join a brand new team at WillowTree to create a native app using Kotlin, which was an amazing experience. While I appreciated being able to learn a new platform, and everything that goes into mobile development, I found myself missing the Front End."
    },
    {
      name: "Rochester",
      moved: "Aug 2012 - May 2017",
      companies: ["Rochester Institute of Technology", "RIT CAIR Lab", "GDD Labbie", "The Commons"],
      description: "Almost 18 and ready to escape my small town, I was over the moon to move to college, and start school as... a Chemical Engineering Major. Surprise! After growing up in my small town, I had next to no idea what programming was, other than what you would see hackers doing in movies. So I started in ChemE, and stuck with it for almost 2 years. During this time, I became good friends with a Game Design and Development major on my floor, and with a Software Engineer major who introduced me to Python. In my second year, I applied to switch to GDD and learned what I could from Codacamedy in the meantime. Eventually, my transfer was approved, I started the coursework and pretty quickly added on being a labbie for my major and working as a student developer for a professor in the Software Engineering department. I also spent quite a bit of my free time working as a Head of the Women in Computing Outreach committee. After growing up with no knowledge of programming, I wanted to make sure to share as much as I could with kids of all ages to give them more choices when thinking of their futures. During the course of studying, I became more drawn to front end technologies. While I still have a love for making games in my free time, I chose to focus on the front end for my career."
    },
    {
      name: "New Milford",
      moved: "Oct 1994 - Aug 2012",
      companies: ["New Milford High School", "Applebees"],
      description: "I was born and raised in this small-ish town in Connecticut, and am the oldest of two kids. Growing up, my family was lucky enough to be able to spend a few weeks every summer in Brazil with my mom's family, which is how I learned portuguese. As a kid, most of my interests fell into creative areas, I loved to draw, paint, and write. Really I just loved to do anything that allowed me to fashion new worlds, which is what sparked my decision to major in Game Development when I got to college. However, I didn't get any real exposure to programming growing up, and as such felt pressured to pick a more 'realistic' career path when applying to schools, thus I decided to major in chemical engineering because it was my favorite science growing up, and still is now."
    }
  ];

  const [currentCity, setCurrentCity] = useState(cityInfo[0]);
  const [fadeIn, setFadeIn] = useState(true);

  const handleCityTransition = city => {
    setFadeIn(false);

    setTimeout(() => {
      setCurrentCity(city);
      setFadeIn(true);
    }, 250);
  }

  return(
    <Row className='map-container'>
      <Col lg='12'  xl='6' className='map-col'>
        <div className='map'>
          <img src={ CityMap } alt="map of us with points of interest" />
          {
            cityInfo.map(city => (
              <h6 
                className='city-label'
                key={ city.name }
                onClick={ () => handleCityTransition(city) }
                id={ (city.name.toLocaleLowerCase()).replace(/\s/g, '-') }
                >
                  { city.name }
              </h6>
            ))
          }
        </div>
      </Col>
      <Col lg='12' xl='6' className='city-info'>
      { currentCity.name ? 
        (
          <Fade in={fadeIn} tag='div'>
            <h3>{ currentCity.name }</h3>
            <h5>{ currentCity.moved }</h5>
            <p>{ currentCity.description }</p>
          </Fade>
        ): null
      }
      </Col>
    </Row>
  );
};
