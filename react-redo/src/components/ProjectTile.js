import React from 'react';
import { Card, CardHeader, CardText, CardBody, CardTitle, CardSubtitle, Button } from 'reactstrap';

export default function ProjectTile({ project }) {
  return(
    <Card>
      <CardHeader>{ project.name }</CardHeader>
      <div className='image-holder'>
        <img src={ project.image } alt={ project.name } />
      </div>
      <CardBody>
        <CardSubtitle>{ project.technologies.join(' • ') }</CardSubtitle>
        <CardText>{ project.description }</CardText>
        <Button>See More</Button>
      </CardBody>
    </Card>
  );
};
