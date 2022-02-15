import React from 'react';
import { Container, Fade } from '@material-ui/core';
import { useStyles } from './packs.styles';

const Packs = () => {
  const classes = useStyles();
  return (
    <Container>
      <Fade in={true}>
        <div>
          
          My Packs page
        </div>
      </Fade>
    </Container>
  )
}

export default Packs;
