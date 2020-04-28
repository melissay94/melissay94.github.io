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
  used: 'Used professionally as an intern',
},{
  logo: CssLogo,
  altText: 'CSS Logo',
  technology: 'Cascading Style Sheet',
  used: 'Used professionally as an intern',
},{
  logo: JsLogo,
  altText: 'JavaScript Logo',
  technology: 'JavaScript',
  used: 'Used professionally as an intern',
},{
  logo: BootstrapLogo,
  altText: 'Bootstrap Logo',
  technology: 'Bootstrap',
  used: 'Used on personal projects',
},{
  logo: MaterialUILogo,
  altText: 'Material UI Logo',
  technology: 'Material UI',
  used: 'Used on personal projects',
},{
  logo: ReactLogo,
  altText: 'React Logo', 
  technology: 'React',
  used: 'Used on personal projects',
},{
  logo: ExpressLogo,
  altText: 'Express Logo',
  technology: 'Express',
  used: 'Used on personal projects',
},{
  logo: NodeJsLogo,
  altText: 'Node Logo',
  technology: 'Node JS',
  used: 'Used on personal projects',
},{
  logo: PhaserLogo,
  altText: 'Phaser 3 Logo',
  technology: 'Phaser 3',
  used: 'Used on a personal project',
},{
  logo: SequelizeLogo,
  altText: 'Sequelize Logo', 
  technology: 'Sequelize',
  used: 'Used on personal projects',
},{
  logo: PostgresLogo,
  altText: 'Postgres Logo', 
  technology: 'Postgres',
  used: 'Used on personal projects',
}, {
  logo: GraphqlLogo,
  altText: 'Graphql Logo',
  technology: 'GraphQL',
  used: 'Used on a personal project',
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
