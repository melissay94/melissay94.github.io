import React from 'react';
import { Row } from 'reactstrap';
import TechLogo from './TechLogo';
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
import GraphqlLogo from '../assets/graphqlLogo.png';

const logos = [{
  logo: HtmlLogo,
  altText: 'HTML Logo',
  technology: 'HyperText Markup Language',
  rating: 4
},{
  logo: CssLogo,
  altText: 'CSS Logo',
  technology: 'Cascading Style Sheet',
  rating: 4
},{
  logo: JsLogo,
  altText: 'JavaScript Logo',
  technology: 'JavaScript',
  rating: 3
},{
  logo: BootstrapLogo,
  altText: 'Bootstrap Logo',
  technology: 'Bootstrap',
  rating: 4
},{
  logo: MaterialUILogo,
  altText: 'Material UI Logo',
  technology: 'Material UI',
  rating: 2
},{
  logo: ReactLogo,
  altText: 'React Logo', 
  technology: 'React',
  rating: 2.5
},{
  logo: ExpressLogo,
  altText: 'Express Logo',
  technology: 'Express',
  rating: 2
},{
  logo: NodeJsLogo,
  altText: 'Node Logo',
  technology: 'Node JS',
  rating: 3
},{
  logo: PhaserLogo,
  altText: 'Phaser 3 Logo',
  technology: 'Phaser 3',
  rating: 1
},{
  logo: SequelizeLogo,
  altText: 'Sequelize Logo', 
  technology: 'Sequelize',
  rating: 2
},{
  logo: PostgresLogo,
  altText: 'Postgres Logo', 
  technology: 'Postgres',
  rating: 2
}, {
  logo: GraphqlLogo,
  altText: 'Graphql Logo',
  technology: 'GraphQL',
  rating: 2
}
];

export default function TechLogoList() {
  return(
    <Row className='tech-logo-section'>
      {logos.map(logo => (
        <TechLogo logo={ logo } key={ (logo.altText.toLocaleLowerCase()).replace(/\s/g, '-') } />
      ))}
    </Row>
  );
}
