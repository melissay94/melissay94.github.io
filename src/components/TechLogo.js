import React, { useState } from 'react';
import { Col, Tooltip } from 'reactstrap';

export default function TechLogo({ logo }) {
  const [tooltipShow, setTooltipShow] = useState(false);
  const logo_id = (logo.altText.toLocaleLowerCase()).replace(/\s/g, '-');

  return (
    <Col xs='6' md='4' xl='3'>
      <img src={ logo.logo } alt={ logo.altText } id={ logo_id } className='tech-logo' />
      <Tooltip placement='top' isOpen={tooltipShow} target={ logo_id } toggle={() => { setTooltipShow(!tooltipShow) } }>
        <div>{ logo.technology }</div>
        <div>{ logo.used }</div>
      </Tooltip>
    </Col>
  );
}
