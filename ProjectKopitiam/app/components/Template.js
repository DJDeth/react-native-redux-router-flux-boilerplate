import React, { Component } from 'react';
import { Container, Header, Content, Tab, Tabs, Icon, Text, ScrollableTab, StyleProvider, getTheme } from 'native-base';
import { connect } from 'react-redux';


class Template extends Component {

  // initialization
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  // componentDidMount
  // componentWillUnmount
  // componentWillReceiveProps

  render() {
    const { } = this.props;  // action names

    return (
      <Container>
      </Container>
    );
  }
}

mapStateToProps = (state) => state;

//To tell the world (whole application) to do functions based on action type
mapDispatchToProps = (dispatch) => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(Template);
