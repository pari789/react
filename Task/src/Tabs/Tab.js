import React, {Component} from 'react';
import {StatusBar,AppRegistry,View} from 'react-native';
import {Drawer} from 'native-base';

import SideBar from '../sidebar/SideBar.js';
import Home from './Home.js';



import Search from './Search.js';
//import { TabNavigator } from "react-navigation";
import { Button,Text,Container,Fab,Card,CardItem,Footer,FooterTab,Body,Content,Icon,Thumbnail,Header,Tab,Tabs,TabHeading,Title,Left,Right} from 'native-base';


export default class TabMain extends Component{

render()
{
  return(

  <Container>


<Header hasTabs>
<Left>
<Button large transparent onPress={() => this.props.navigation.navigate("DrawerOpen")}>
<Thumbnail source={require( '../img/cat.jpg')} />

</Button>
</Left>
<Text style={{color: 'white' , fontSize:20}}>{"\n"}Home</Text>
<Right/>
</Header>


<Tabs>
          <Tab heading={ <TabHeading><Icon name="home" /></TabHeading>}>
            <Home />
          </Tab>
          <Tab heading={ <TabHeading><Icon name="search" /></TabHeading>} >
            <Search />
          </Tab>
          <Tab heading={ <TabHeading><Icon name="md-notifications" /></TabHeading>}>

            </Tab>
            <Tab heading={ <TabHeading><Icon name="mail" /></TabHeading>}>

              </Tab>
            </Tabs>

            <Fab

                  direction="up"
                  containerStyle={{ }}
                  style={{ backgroundColor: '#5067FF' }}
                  position="bottomRight">
                  <Icon name="leaf" />
                </Fab>
<Footer style={{backgroundColor: 'white'}}>
<Button transparent>
<Text>All</Text>
</Button>
<Button transparent>
<Text>Mentions</Text>
</Button>
<Right>
<Button transparent>
<Icon name='settings' />
</Button>
</Right>
</Footer>


</Container>
);
}
}
