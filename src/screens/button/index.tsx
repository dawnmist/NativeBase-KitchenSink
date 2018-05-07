import * as React from "react";
import {
  Container,
  Header,
  Title,
  Content,
  Button,
  Icon,
  Left,
  Right,
  Body,
  Text,
  List,
  ListItem
} from "native-base";
import styles from "./styles";

const datas = [
  {
    route: "Default",
    text: "Default Button"
  },
  {
    route: "Outline",
    text: "Outline Button"
  },
  {
    route: "Rounded",
    text: "Rounded Button"
  },
  {
    route: "Block",
    text: "Block Button"
  },
  {
    route: "Full",
    text: "Full Button"
  },
  {
    route: "Custom",
    text: "Custom Size Button"
  },
  {
    route: "Transparent",
    text: "Transparent Button"
  },
  {
    route: "IconBtn",
    text: "Icon Button"
  },
  {
    route: "Disabled",
    text: "Disabled Button"
  }
];

import { NavigationScreenConfigProps } from "react-navigation";

export interface NHButtonProps extends NavigationScreenConfigProps { }
class NHButton extends React.Component<NHButtonProps> {
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
            <Title>Buttons</Title>
          </Body>
          <Right />
        </Header>

        <Content>
          <List
            dataArray={datas}
            renderRow={(data) =>
              <ListItem
                button={true}
                onPress={() => this.props.navigation.navigate(data.route)}
              >
                <Left>
                  <Text>
                    {data.text}
                  </Text>
                </Left>
                <Right>
                  <Icon name="arrow-forward" style={{ color: "#999" }} />
                </Right>
              </ListItem>}
          />
        </Content>
      </Container>
    );
  }
}

export default NHButton;
