import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import AccountCircle from '@material-ui/icons/AccountCircle';
import Receipt from '@material-ui/icons/Receipt';
import Category from '@material-ui/icons/Category';
import Help from '@material-ui/icons/Help';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import MailIcon from '@material-ui/icons/Mail';
import { useStyles } from './sideBar.styles';
import logo from "../../assets/myosn-logo.png";

const SideBar = () => {
  const classes = useStyles();
  const navigate = useNavigate();
  const location = useLocation();
  console.log(location.pathname);

  const drawer = (
    <div className={classes.drawerContent}>
      <div className={classes.logoContainer}>
        <img src={logo} className={classes.logo} alt="myOsn" />
      </div>
      {/* <div className={classes.toolbar} /> */}
      <Divider />
      <List>
        <ListItem 
          button 
          classes={{ root: classes.listItem}}
          selected={location.pathname === "/account"}
          onClick={() => navigate("/account")}
        >
          <ListItemIcon>{<AccountCircle />}</ListItemIcon>
          <ListItemText primary={"My Account"} />
        </ListItem>
        <ListItem 
          button
          classes={{ root: classes.listItem}} 
          selected={location.pathname === "/bills"}
          onClick={() => navigate("/bills")}
        >
          <ListItemIcon>{<Receipt />}</ListItemIcon>
          <ListItemText primary={"Bills"} />
        </ListItem>
        <ListItem 
          button
          classes={{ root: classes.listItem}} 
          selected={location.pathname === "/packs"}
          onClick={() => navigate("/packs")}
        >
          <ListItemIcon>{<Category />}</ListItemIcon>
          <ListItemText primary={"Packs"} />
        </ListItem>
        <ListItem 
          button
          classes={{ root: classes.listItem}} 
          selected={location.pathname === "/support"}
          onClick={() => navigate("/support")}
        >
          <ListItemIcon>{<Help />}</ListItemIcon>
          <ListItemText primary={"Support"} />
        </ListItem>
      </List>
      <Divider />
      <List>
        {['FAQs', 'Renew', 'Sign out'].map((text, index) => (
          <ListItem button key={text} onClick={() => navigate("/signin")}>
            <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
    </div>
  );

  return (
    <div className={classes.root}>
      <nav className={classes.drawer} aria-label="Left sidebar">
        
        <Drawer
          classes={{
            paper: classes.drawerPaper,
          }}
          variant="permanent"
          open
          anchor="left"
        >
          {drawer}
        </Drawer>
      </nav>
    </div>
  )
}

export default SideBar;
