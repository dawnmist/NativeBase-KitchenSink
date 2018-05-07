import * as React from "react";
import {
  Container,
  Header,
  Title,
  Content,
  Button,
  Icon,
  Text,
  Right,
  Body,
  Left,
  Picker,
  ListItem
} from "native-base";
import styles from "./styles";

const Item = Picker.Item;

import { NavigationScreenConfigProps } from "react-navigation";

export interface NHPickerProps extends NavigationScreenConfigProps { }
interface NHPickerState {
  selectedItem?: any;
  selected1: string;
  results: {
    items: Array<any>;
  };
}
class NHPicker extends React.Component<NHPickerProps, NHPickerState> {
  constructor(props: NHPickerProps) {
    super(props);
    this.state = {
      selectedItem: undefined,
      selected1: "key1",
      results: {
        items: []
      }
    };
  }
  onValueChange(value: string) {
    this.setState({
      selected1: value
    });
  }
  render() {
    return (
      <Container style={styles.container}>
        <Header>
          <Left>
            <Button transparent={true} onPress={() => this.props.navigation.navigate("DrawerOpen")}>
              <Icon name="menu" />
            </Button>
          </Left>
          <Body>
            <Title>Picker</Title>
          </Body>
          <Right />
        </Header>

        <Content>
          <ListItem icon={true}>
            <Left>
              <Button style={{ backgroundColor: "#4CDA64" }}>
                <Icon name="arrow-dropdown" />
              </Button>
            </Left>
            <Body>
              <Text>Pick SIM</Text>
            </Body>
            <Right>
              <Picker
                note={true}
                mode="dropdown"
                style={{ width: 120 }}
                selectedValue={this.state.selected1}
                onValueChange={this.onValueChange.bind(this)}
              >
                <Item label="TATA" value="key0" />
                <Item label="AIRTEL" value="key1" />
              </Picker>
            </Right>
          </ListItem>
        </Content>
      </Container>
    );
  }
}

export default NHPicker;
