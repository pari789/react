import React, { Component } from 'react';
import { Container, Header,Item,Icon,Input, Button, Text } from 'native-base';

export default class Search extends Component {

  render() {
    return (
      <Container>


        <Header searchBar rounded style={{backgroundColor: 'white'}}>
          <Item>
          <Button  transparent>

            <Icon name='arrow-back'/>
            </Button>
            <Input placeholder='Search Twitter'/>



          </Item>
          </Header>
          </Container>
    );
  }
}
