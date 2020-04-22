import React from 'react';
import { Row, Col } from 'reactstrap';
import Map from '../components/Map';
import BootstrapLogo from '../assets/bootstrapLogo.png';
import CssLogo from '../assets/cssLogo.png';
import ExpressLogo from '../assets/expressLogo.png';
import HtmlLogo from '../assets/htmlLogo.png';
import JsLogo from '../assets/jsLogo.png';
import MaterialUILogo from '../assets/materialUILogo.png';
import NodeJsLogo from '../assets/nodeJsLogo.png';
import PhaserLogo from '../assets/phaserLogo.png';
import PostgresLogo from '../assets/postgresLogo.png';
import ReactLogo from '../assets/reactLogo.png';
import SequelizeLogo from '../assets/sequelizeLogo.png';

export default function About() {

  const logos = [{
    logo: HtmlLogo,
    altText: 'HTML Logo'
  },{
    logo: CssLogo,
    altText: 'CSS Logo'
  },{
    logo: JsLogo,
    altText: 'JavaScript Logo'
  },{
    logo: BootstrapLogo,
    altText: 'Bootstrap Logo'
  },{
    logo: MaterialUILogo,
    altText: 'Material UI Logo'
  },{
    logo: ReactLogo,
    altText: 'React Logo'
  },{
    logo: ExpressLogo,
    altText: 'Express Logo'
  },{
    logo: NodeJsLogo,
    altText: 'Node Logo'
  },{
    logo: PhaserLogo,
    altText: 'Phaser 3 Logo'
  },{
    logo: SequelizeLogo,
    altText: 'Sequelize Logo'
  },{
    logo: PostgresLogo,
    altText: 'Postgres Logo'
  }
];
  return(
    <Row id="about" className='section-layout'>
      <Col xs='12' lg='auto' xl='6' className='brand-statement'>
        <h2>About Me</h2>
        <p>I am a passionate Software Engineer focused on Front End Development, utilizing JavaScript technologies to create engaging, outward facing customer products. My past experience as an app developer solidified my understanding of strong teamwork in agile environments, as well as an appreciation for candid conversation. As a self-motivated lifelong learner, I love building my knowledge base to share with others. For example, I seek out volunteering opportunities, specifically around teaching Computer Science to the younger generation.</p>
        <Row className='tech-logo-section'>
          {logos.map(item => (
            <Col xs='6' md='4' xl='3' key={ (item.altText.toLocaleLowerCase()).replace(/\s/g, '-') }>
              <img src={ item.logo } alt={ item.altText } className='tech-logo' />
            </Col>
          ))}
        </Row>
      </Col>
      <Col xs='12' lg='auto' xl='6' className='map-section'>
        <h2>Map of Me</h2>
        <h6>(Click on a city to learn more about me!)</h6>
        <Map />
      </Col>
    </Row>
  );
};
