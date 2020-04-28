import React from 'react';
import { Row, Col } from 'reactstrap';
import ImageCarousel from '../components/ImageCarousel';

export default function ProjectSection({ project }) {
  return (
      <Col xs='12' xl='6'>
        <ImageCarousel images={ project.images } />
        <div className='project-info'>
          <h4>{ project.name }</h4>
          <h6>{ project.technologies.join(' • ') }</h6>
          <p>{ project.description }</p>
          <Row>
            <Col md='6' xs='6'>
              <a 
                href={project.github}
                target='_blank'
                rel='noopener noreferrer'>GitHub Repo</a>
            </Col>
            <Col md='6' xs='6'>
              { project.liveDemo ?
              <a 
                href={project.liveDemo}
                target='_blank'
                rel='noopener noreferrer'>Live Demo</a>: null }
            </Col>
          </Row>
        </div>
      </Col>
  );
}
