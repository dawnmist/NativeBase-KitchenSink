import * as React from "react";
import {
  Container,
  Header,
  Title,
  Content,
  Button,
  Icon,
  ListItem,
  Radio,
  Text,
  Left,
  Right,
  Body
} from "native-base";
import { NavigationScreenConfigProps } from "react-navigation";
import styles from "./styles";

export interface NHRadioProps extends NavigationScreenConfigProps { }
interface NHRadioState {
  radio1: boolean;
  radio2: boolean;
  radio3: boolean;
  radio4: boolean;
}
class NHRadio extends React.Component<NHRadioProps, NHRadioState> {
  constructor(props: NHRadioProps) {
    super(props);
    this.state = {
      radio1: false,
      radio2: false,
      radio3: false,
      radio4: true
    };
  }
  toggleRadio1() {
    this.setState({
      radio1: true,
      radio2: false,
      radio3: false,
      radio4: false
    });
  }
  toggleRadio2() {
    this.setState({
      radio1: false,
      radio2: true,
      radio3: false,
      radio4: false
    });
  }
  toggleRadio3() {
    this.setState({
      radio1: false,
      radio2: false,
      radio3: true,
      radio4: false
    });
  }
  toggleRadio4() {
    this.setState({
      radio1: false,
      radio2: false,
      radio3: false,
      radio4: true
    });
  }
  render() {
    return (
      <Container style={styles.container}>
        <Header>
          <Left>
            <Button
              transparent={true}
              onPress={() => this.props.navigation.navigate("DrawerOpen")}
            >
              <Icon name="menu" />
            </Button>
          </Left>
          <Body>
            <Title>Radio</Title>
          </Body>
          <Right />
        </Header>

        <Content>
          <ListItem
            selected={this.state.radio1}
            onPress={() => this.toggleRadio1()}
          >
            <Left>
              <Text>Lunch Break</Text>
            </Left>
            <Right>
              <Radio
                selected={this.state.radio1}
                onPress={() => this.toggleRadio1()}
              />
            </Right>
          </ListItem>
          <ListItem
            selected={this.state.radio2}
            onPress={() => this.toggleRadio2()}
          >
            <Left>
              <Text>Daily Stand Up</Text>
            </Left>
            <Right>
              <Radio
                selected={this.state.radio2}
                onPress={() => this.toggleRadio2()}
              />
            </Right>
          </ListItem>
          <ListItem
            selected={this.state.radio3}
            onPress={() => this.toggleRadio3()}
          >
            <Left>
              <Text>Finish List Screen</Text>
            </Left>
            <Right>
              <Radio
                selected={this.state.radio3}
                onPress={() => this.toggleRadio3()}
              />
            </Right>
          </ListItem>
          <ListItem
            selected={this.state.radio4}
            onPress={() => this.toggleRadio4()}
          >
            <Left>
              <Text>Discussion with Client</Text>
            </Left>
            <Right>
              <Radio
                selected={this.state.radio4}
                onPress={() => this.toggleRadio4()}
              />
            </Right>
          </ListItem>
        </Content>
      </Container>
    );
  }
}

export default NHRadio;
