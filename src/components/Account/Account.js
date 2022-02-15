import React from 'react';
import { Container, Fade } from '@material-ui/core';
import { useStyles } from './account.styles';

const Account = () => {
  const classes = useStyles();
  return (
    <Container>
      <Fade in={true}>
        <div>
          My Account page
        </div>
      </Fade>
    </Container>
  )
}

export default Account;
