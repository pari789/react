import React, { Component } from "react";


import Tab from "./Tab.js"
import SideBar from "../sidebar/SideBar.js";
import { DrawerNavigator } from "react-navigation";
const HomeScreenRouter = DrawerNavigator(
  {
    SideBar:{screen: Tab}
  },
  {

  drawerPosition: 'left',
 drawerOpenRoute: 'DrawerOpen',
drawerCloseRoute: 'DrawerClose',
drawerToggleRoute: 'DrawerToggle',

    contentComponent: props => <SideBar {...props} />
  }
);
export default HomeScreenRouter;
