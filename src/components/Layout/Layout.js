import { Container, ThemeProvider } from '@material-ui/core';
import React from 'react';
import theme from '../../theme';
import { useStyles } from "./layout.styles";

const Layout = ({ children }) => {
  const classes = useStyles();
  return (
    <ThemeProvider theme={theme}>
      <Container className={classes.main}>
        { children }
      </Container>
    </ThemeProvider>
  )
}

export default Layout;
