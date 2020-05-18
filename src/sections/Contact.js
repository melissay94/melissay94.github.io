import React from 'react';
import { Row, Col } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faGithubSquare } from '@fortawesome/free-brands-svg-icons';
import Footer from '../components/Footer';

export default function Contact() {
  return(
    <div id='contact' className='section-layout'>
      <h2 className='section-header'>Contact Me</h2>
      <Row>
        <Col xs='12' md='6' className='tagline'>
          <img src='https://avatars2.githubusercontent.com/u/7768121?s=460&u=32c0fc6cc61163b9adbb7ec34511245465626461&v=4' alt='Developer Melissa Young' className='profile-pic' />
          <h4>Looking for a developer??</h4>
          <h4 className='highlight'>I'm looking for a career!!</h4>
        </Col>
        <Col xs='12' md='6' className='contact-info'>
          <Row>
            <Col xs='1'>
              <FontAwesomeIcon icon={faEnvelope} className='icon' />
            </Col>
            <Col xs='10'>
              <h6>melissadcy@gmail.com</h6>
            </Col>
          </Row>
          <Row>
            <Col xs='1'>
              <FontAwesomeIcon icon={faGithubSquare} className='icon' />
            </Col>
            <Col xs='10'>
              <h6>
                <a 
                  href='https://www.github.com/melissay94'
                  target='_blank'
                  rel='noopener noreferrer'>
                    My GitHub Page
                    </a>
              </h6>
            </Col>
          </Row>
          <Row>
            <Col xs='1'>
              <FontAwesomeIcon icon={faLinkedin} className='icon' />
            </Col>
            <Col xs='10'>
              <h6>
                <a 
                  href='https://www.linkedin.com/in/melissadcyoung/'
                  target='_blank'
                  rel='noopener noreferrer'>
                    My LinkedIn Profile
                  </a>
                </h6>
              </Col>
            </Row>
          </Col>
        </Row>
      <Footer />
    </div>
  );
};
