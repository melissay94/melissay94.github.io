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
  return(
    <Row id="about">
      <Col xs='12' lg='auto' xl='6' className='map-section'>
        <h2>Map of Me</h2>
        <h6>(Click on a city to learn more about me!)</h6>
        <Map />
      </Col>
      <Col xs='12' lg='auto' xl='6' className='brand-statement'>
        <h2>About Me</h2>
        <p>I am a passionate Software Engineer focused on Front End Development, utilizing JavaScript technologies to create engaging, outward facing customer products. My past experience as an app developer solidified my understanding of strong teamwork in agile environments, as well as an appreciation for candid conversation. As a self-motivated lifelong learner, I love building my knowledge base to share with others. For example, I seek out volunteering opportunities, specifically around teaching Computer Science to the younger generation.</p>
        <Row className='tech-logo-section'>
          <Col xs='6' md='4' xl='3'>
            <img src={ HtmlLogo } alt='HTML Logo' className='tech-logo' />
          </Col>
          <Col xs='6' md='4' xl='3'>
            <img src={ CssLogo } alt='CSS Logo' className='tech-logo' />
          </Col>
          <Col xs='6' md='4' xl='3'>
            <img src={ JsLogo } alt='JavaScript Logo' className='tech-logo' />
          </Col>
          <Col xs='6' md='4' xl='3'>
            <img src={ BootstrapLogo } alt='Bootstrap Logo' className='tech-logo' />
          </Col>
          <Col xs='6' md='4' xl='3'>
            <img src={ MaterialUILogo } alt='Material UI Logo' className='tech-logo' />
          </Col>
          <Col xs='6' md='4' xl='3'>
            <img src={ ReactLogo } alt='React Logo' className='tech-logo' />
          </Col>
          <Col xs='6' md='4' xl='3'>
            <img src={ ExpressLogo } alt='Express Logo' className='tech-logo' />
          </Col>
          <Col xs='6' md='4' xl='3'>
            <img src={ NodeJsLogo } alt='Node Logo' className='tech-logo' />
          </Col>
          <Col xs='6' md='4' xl='3'>
            <img src={ PhaserLogo } alt='Phaser 3 Logo' className='tech-logo' />
          </Col>
          <Col xs='6' md='4' xl='3'>
            <img src={ SequelizeLogo } alt='Sequelize Logo' className='tech-logo' />
          </Col>
          <Col xs='6' md='4' xl='3'>
            <img src={ PostgresLogo } alt='Postgres Logo' className='tech-logo' />
          </Col>
        </Row>
      </Col>
    </Row>
  );
};
