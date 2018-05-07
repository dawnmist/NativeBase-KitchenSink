import * as React from "react";
import {
  Container,
  Header,
  Title,
  Fab,
  Button,
  IconNB,
  Left,
  Right,
  Body,
  Icon,
  View
} from "native-base";
import styles from "./styles";

import { NavigationScreenConfigProps } from "react-navigation";

export interface BasicFabProps extends NavigationScreenConfigProps { }
interface BasicFabState {
  active: boolean;
}
class BasicFab extends React.Component<BasicFabProps, BasicFabState> {
  constructor(props: BasicFabProps) {
    super(props);
    this.state = {
      active: false
    };
  }

  render() {
    return (
      <Container style={styles.container}>
        <Header>
          <Left>
            <Button transparent={true} onPress={() => this.props.navigation.goBack()}>
              <Icon name="arrow-back" />
            </Button>
          </Left>
          <Body>
            <Title>Single FAB</Title>
          </Body>
          <Right />
        </Header>

        <View style={{ flex: 1 }}>
          <Fab
            active={this.state.active}
            direction="up"
            containerStyle={{}}
            style={{ backgroundColor: "#5067FF" }}
            position="bottomRight"
            onPress={() => this.setState({ active: !this.state.active })}
          >
            <IconNB name="md-share" />
            <Button style={{ backgroundColor: "#34A34F" }}>
              <IconNB name="logo-whatsapp" />
            </Button>
            <Button style={{ backgroundColor: "#3B5998" }}>
              <IconNB name="logo-facebook" />
            </Button>
            <Button disabled={true} style={{ backgroundColor: "#DD5144" }}>
              <IconNB name="ios-mail" />
            </Button>
          </Fab>
        </View>
      </Container >
    );
  }
}

export default BasicFab;
