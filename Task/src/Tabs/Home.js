import React, { Component } from 'react';
import { Image,AppRegistry } from 'react-native';
import Search from './Search.js';
import Icon from 'react-native-vector-icons/FontAwesome';

import { Container, Header,Tab,Tabs,Fab,TabHeading,Title, Content, Card, CardItem, Thumbnail, Text, Button,Left, Body, Right } from 'native-base';


export default class Home extends Component {
  static navigationOptions = {
     tabBarIcon: ({ tintColor }) => (
         <Icon name="home" style={{color: tintColor}} />
    ), }
  render() {
    return (
      <Container>
      <Content>


          <Card>
            <CardItem>
              <Left>
                <Thumbnail source={require('../img/peace-smiley.jpg')} />
                <Body>
                  <Text style={{fontWeight:'bold'}}>Smiley Cuttie <Text style={{color: 'grey'}}> @smiley..   34 m</Text></Text>
                  <Text>Smile, it is the key that fits the lock of everybodys heart</Text>


                </Body>
              </Left>
            </CardItem>

            <CardItem cardBody  style={{marginLeft:70}}>

              <Image source={require('../img/peace-smiley.jpg')} style={{height: 200, width: null, flex: 1}}/>

            </CardItem>

            <CardItem style={{marginLeft:70}}>

                <Button transparent >
                  <Icon name="comment-o" style={{fontSize:25}} />
                  <Text style={{fontSize:16}}>12 </Text>
                </Button>


                <Button transparent>
                  <Icon  name="retweet" style={{fontSize:25}}/>
                  <Text style={{fontSize:16}}>4 </Text>
                </Button>

                <Button transparent>
              <Icon active name="heart-o"  style={{fontSize:25}} />
                <Text>11</Text>
                </Button>
                <Button transparent>
              <Icon active name="envelope-o" style={{fontSize:25}}/>
              </Button>

            </CardItem>
          </Card>

          <Card>
            <CardItem>
              <Left>
                <Thumbnail source={require('../img/life.jpg')} />
                <Body>
                <Text style={{fontWeight:'bold'}}>Kiara patel  <Text style={{color: 'grey'}}> @goodlife        45 m</Text></Text>
                <Text>What Consumes Your Mind Controls Your Life...</Text>

                </Body>
              </Left>
            </CardItem>
            <CardItem cardBody style={{marginLeft:70}}>
              <Image source={require('../img/im.jpg')} style={{height: 200, width: null, flex: 1}}/>
            </CardItem>
            <CardItem style={{marginLeft:70}}>

                <Button transparent >
                  <Icon active name="comment-o" style={{fontSize:25}}/>
                  <Text style={{fontSize:16}}>26 </Text>
                  </Button>



                <Button transparent>
                  <Icon active name="retweet" style={{fontSize:25}}/>
                  <Text style={{fontSize:16}}>4 </Text>
                </Button>

                <Button transparent>
                  <Icon active name="heart-o" style={{fontSize:25}}/>
                  <Text>11</Text>
                  </Button>

                  <Button transparent>
                <Icon active name="envelope-o" style={{fontSize:25}}/>
              </Button>

            </CardItem>
          </Card>

          <Card>
            <CardItem>
              <Left>
                <Thumbnail source={require('../img/flower.jpg')} />
                <Body>
                <Text style={{fontWeight:'bold'}}>Krystal Dmello  <Text style={{color: 'grey'}}> @happiness.      45 m</Text></Text>
                <Text> Listen to silence it has So much to say</Text>

                </Body>
              </Left>
            </CardItem>
            <CardItem cardBody style={{marginLeft:70}}>
              <Image source={require('../img/lmages.jpg')} style={{height: 200, width: null, flex: 1}}/>
            </CardItem>
            <CardItem style={{marginLeft:70}}>

                <Button transparent>
                  <Icon active name="comment-o" style={{fontSize:25}}/>
                  <Text style={{fontSize:16}}>10 </Text>
                </Button>


                <Button transparent>
                  <Icon active name="retweet" style={{fontSize:25}}/>
                  <Text style={{fontSize:16}}>40 </Text>
                </Button>

                  <Button transparent>
              <Icon active name="heart-o"  style={{fontSize:25}} />

                <Text style={{fontSize:16}}>11</Text>
                </Button>
                <Button transparent>
              <Icon active name="envelope-o" style={{fontSize:25}}/>
              </Button>

            </CardItem>
          </Card>


        </Content>
      </Container>
    );
  }
}


AppRegistry.registerComponent('Task',() =>Home);
