import React from 'react';
import { Container, Fade } from '@material-ui/core';
import { useStyles } from './support.styles';

const Support = () => {
  const classes = useStyles();
  return (
    <Container>
      <Fade in={true}>
        <div>
          My Support page
        </div>
      </Fade>
    </Container>
  )
}

export default Support;
