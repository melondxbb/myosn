import React from "react";
import { Container, Hidden, ThemeProvider } from "@material-ui/core";
import { MuiPickersUtilsProvider } from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns";

import { useStyles } from "./layout.styles";
import theme from "../../theme";
import Provider from "../../state/context";
import SideBar from "../SideBar/SideBar";
import BottomBar from "../BottomBar/BottomBar";

const Layout = ({ children }) => {
  const classes = useStyles();
  return (
    <ThemeProvider theme={theme}>
      <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <Provider>
        <div className={classes.layout}>
          <Hidden xsDown implementation="css">
            <div className={classes.sideBar}>
              <SideBar />
            </div>
          </Hidden>
          <Container className={classes.main}>
            { children }
          </Container>
          <Hidden smUp implementation="css">
            <div className={classes.bottom}>
              <BottomBar />
            </div>
          </Hidden>
        </div>
      </Provider>
      </MuiPickersUtilsProvider>
    </ThemeProvider>
  )
}

export default Layout;
