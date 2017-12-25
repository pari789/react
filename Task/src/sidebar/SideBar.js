import React,{Component} from 'react';
import {Container, Content,Card,CardItem,Thumbnail,Header,Footer,Text,List,Right,ListItem,Left,Button} from 'native-base';
import {Image, StatusBar,StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

export default class SideBar extends Component{
  render(){
    return(
      <Container>
        <Content>
      <Card style={{backgroundColor:'white'}}>
      <CardItem header>
      <Left>
      <Thumbnail source={require('../img/cat.jpg')} />
      </Left>
      </CardItem>
        <CardItem style={styles.top}>
        < Text style={{fontWeight: 'bold'}}>Pariyani Yogita</Text>
        </CardItem>
        <CardItem>
        <Text note style={styles.top}>@pari_p{"\n"}</Text>
        </CardItem>


        <CardItem style={styles.top}>
        <Text style={{fontWeight: 'bold'}}>500<Text style={{color: 'grey'}}>Following</Text></Text>
        <Text style={{fontWeight: 'bold'}}>   300<Text style={{color: 'grey'}}>Followers</Text></Text>
        <Right>
        <Icon name='chevron-down' style={{fontSize:25, color:'blue'}}/>
        </Right>

        </CardItem>
      </Card>
        <List>
        <ListItem>
        <Button full transparent >
        <Icon name='user-o' style={styles.size} />
        <Text style={styles.textC}>Profile</Text>
        </Button>
        </ListItem>

        </List>
        <List>
        <ListItem>
        <Button full transparent >
        <Icon name='list' style={styles.size}/>
        <Text style={styles.textC}>Lists</Text>
        </Button>
        </ListItem>

        <ListItem>
        <Button full transparent >
        <Icon name='bolt' style={styles.size}/>
        <Text style={styles.textC}>Moments</Text>
        </Button>
        </ListItem>



        <ListItem>
        <Button full transparent>
        <Icon name='square-o' style={styles.size}/>
        <Text style={styles.textC}>Highlights</Text>
        </Button>
        </ListItem>
        </List>
        <Card>
        <CardItem>
        <Text>Settings and privacy</Text>
        </CardItem>

        <CardItem>
        <Text>Help Centre</Text>
        </CardItem>
        </Card>
        <Footer style={{backgroundColor: 'white'}}>

        <Left>

        <Icon name='moon-o' style={{fontSize:25}} />

        </Left>
        <Right>

        <Icon name='th' style={{fontSize:25}} />

        </Right>

        </Footer>


</Content>
</Container>
    );
  }
}

const styles = StyleSheet.create({
  top: {
    marginTop: -15
  },
  textC:{color: 'black'},
  size:{ fontSize: 20}

});
