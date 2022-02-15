import React from 'react';
import { Container, Fade } from '@material-ui/core';
import { useStyles } from './bills.styles';

const Bills = () => {
  const classes = useStyles();
  return (
    <Container>
      <Fade in={true}>
        <div>
          My Bills page
        </div>
      </Fade>
    </Container>
  )
}

export default Bills;
