import React, { useState } from 'react';
import { Fade, Row, Col } from 'reactstrap';
import CityMap from '../assets/mapOutline.png';

export default function Map() {
  
  const cityInfo = [
    {
      name: "Seattle",
      moved: "June 2019 - Current",
      companies: ["General Assembly"],
      description: "Start of my next chapter! After some mild health issues with my partner, I decided it was time to move across the country to be with them, as they already lived in Seattle. Now I'm attending the General Assembly Seattle Campus's Software Engineering Immersive. It's an intense, 12 week, 480+ hour course geared to help get me ready to be a developer in Seattle, mostly focusing on web technologies. I'm excited to learn all I can and get back out there as a Front End Developer!"
    },
    {
      name: "San Diego",
      moved: "Jan 2016 - Aug 2016",
      companies: ["Intuit"],
      description: "Sunny California and my first experience at a tech company! It was a big one too! During my fourth year at RIT, I interviewed and got a co-op position with Intuit, most well known for TurboTax. There, I was placed on a small internal team of about 6 people where I got to work on the Front End of a web app that was created for the Social Media team. I picked up a ton in the 7ish months I worked there, and got a better sense of what I wanted in my future career once I was done with school."
    },
    {
      name: "Charlottesville",
      moved: "Nov 2017 - June 2019",
      companies: ["WillowTree"],
      description: "I have a diploma, I managed to get a fulltime Front End Developer position, and now it's time to move away from everyone I've known to a brand new city where I only knew the people I had met during my recruitment process. To say I was both excited and nervous was an understatement. However, WillowTree ended up being the best experience I could have imaginged as a student for my first fulltime position! Everyone was extrememly welcoming, and seemed motivated towards creating great software. The only curveball I got thrown was that day one I was told there weren't any teams that needed a Front End person on it, but if I wanted, I could start learning one of the native mobile platforms we had. Since I already had a Google phone, and I had a very basic exposure to Java from my student developer position, I became an Android Developer."
    },
    {
      name: "Rochester",
      moved: "Aug 2012 - May 2017",
      companies: ["Rochester Institute of Technology", "RIT CAIR Lab", "GDD Labbie", "The Commons"],
      description: "Almost 18 and ready to escape my small town, I was over the moon to move to Rochester, (well, Rochester Adjacent) and start school as... a Chemical Engineering Major. Surprise! After growing up in my small town, I had next to no idea what programming was, other than what you would see hackers doing in movies. So I started in ChemE, and stuck with it for almost 2 years. During this time, I became good friends with a Game Design and Development major on my first year floor, and with a Software Engineer major who introduces me to Python.By second year, I was applying to switch to GDD and learning what I could from Codacamedy in the meantime. Eventually, my transfer was approved, I started the coursework and pretty quickly added on being a labbie for my major and working as a student developer for a professor in the Software Engineering department."
    },
    {
      name: "New Milford",
      moved: "Oct 1994 - Aug 2012",
      companies: ["New Milford High School", "Applebees"],
      description: "Where it all started. And by it, I mean me. I grew up here my whole life, was a Girl Scout, did Colorguard in high school. What can I say? It was a pretty normal childhood in a small town that I could not wait to leave. Fun fact: Kids rode their tractors to school in high school."
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
      <Col xs='12' xl='6' className='map-col'>
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
      <Col xs='12' xl='6' className='city-info'>
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
