import * as React from "react";
import {
  Container,
  Header,
  Title,
  Content,
  Button,
  Icon,
  Text,
  Left,
  Body,
  Right,
  List,
  ListItem
} from "native-base";
import styles from "./styles";

const datas = [
  {
    route: "BasicCard",
    text: "Basic Card"
  },
  {
    route: "NHCardHeaderAndFooter",
    text: "Card Header & Footer"
  },
  {
    route: "NHCardItemBordered",
    text: "Bordered CardItem"
  },
  {
    route: "NHCardTransparent",
    text: "Transparent Card"
  },
  {
    route: "NHCardItemButton",
    text: "Button CardItem"
  },
  {
    route: "NHCardList",
    text: "Card List"
  },
  {
    route: "NHCardImage",
    text: "Card Image"
  },
  {
    route: "NHCardShowcase",
    text: "Card Showcase"
  }
];

import { NavigationScreenConfigProps } from "react-navigation";

export interface NHCardProps extends NavigationScreenConfigProps { }
class NHCard extends React.Component<NHCardProps> {
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
            <Title>Card</Title>
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

export default NHCard;
