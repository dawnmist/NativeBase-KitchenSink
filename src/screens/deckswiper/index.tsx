import * as React from "react";
import {
  Container,
  Header,
  Title,
  Button,
  Icon,
  Text,
  Left,
  Right,
  Body,
  Content,
  List,
  ListItem
} from "native-base";
import styles from "./styles";

const datas = [
  {
    route: "SimpleDeck",
    text: "Simple DeckSwiper"
  },
  {
    route: "AdvancedDeck",
    text: "Advanced DeckSwiper"
  }
];
import { NavigationScreenConfigProps } from "react-navigation";

export interface NHDeckSwiperProps extends NavigationScreenConfigProps { }
class NHDeckSwiper extends React.Component<NHDeckSwiperProps> {
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
            <Title>Deck Swiper</Title>
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

export default NHDeckSwiper;
