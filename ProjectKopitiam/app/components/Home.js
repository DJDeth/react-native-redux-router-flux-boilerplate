import React from 'react';
import { Container, Header, Title, Content, Button, Left, Right, Body, Text, Form, Item, Label, Input } from 'native-base';
import { Actions } from 'react-native-router-flux';
import { StatusBar } from 'react-native';

class Login extends React.Component{
  render() {
    return(
      <Container>
        <Header>
            <Left />
            <Body>
                <Title>Home</Title>
            </Body>
            <Right />
        </Header>
        <Content>
          <Text>Homeeeeeeeeeeeeeeeeee!</Text>
        </Content>
    </Container>
    )
  }
}

export default Login;
