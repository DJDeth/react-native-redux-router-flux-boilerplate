import React from 'react';
import { Container, Header, Title, Content, Button, Left, Right, Body, Text, Form, Item, Label, Input } from 'native-base';
import { Actions } from 'react-native-router-flux';
import { StatusBar } from 'react-native';

class Register extends React.Component{
  render() {
    return(
      <Container>
        <Header>
            <Left />
            <Body>
                <Title>Register</Title>
            </Body>
            <Right />
        </Header>
        <Content>
          <Form style={{ height: 300, flex: 1, justifyContent: 'space-between' }}>
            <Item floatingLabel>
              <Label>Username</Label>
              <Input />
            </Item>
            <Item floatingLabel last>
              <Label>Password</Label>
              <Input />
            </Item>
            <Button rounded block primary
              onPress={() => {
                // navigate to home
                Actions.home()
              }}>
              <Text>Register!</Text>
            </Button>
            <Button rounded block light
            onPress={() => {
              // navigate to home
              Actions.login()
            }}>
              <Text>Back to Login</Text>
            </Button>
          </Form>
        </Content>
    </Container>
    )
  }
}

export default Register;
