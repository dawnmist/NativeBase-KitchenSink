import * as React from "react";
import { Image } from "react-native";
import {
  Container,
  Header,
  Title,
  Content,
  Button,
  Icon,
  Card,
  CardItem,
  Text,
  Thumbnail,
  Left,
  Body,
  Right
} from "native-base";
import styles from "./styles";

const logo = require("../../../assets/logo.png");
const cardImage = require("../../../assets/drawer-cover.png");

import { NavigationScreenConfigProps } from "react-navigation";

export interface NHCardImageProps extends NavigationScreenConfigProps { }
class NHCardImage extends React.Component<NHCardImageProps> {
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
            <Title>Card Image</Title>
          </Body>
          <Right />
        </Header>

        <Content padder={true}>
          <Card style={styles.mb}>
            <CardItem>
              <Left>
                <Thumbnail source={logo} />
                <Body>
                  <Text>NativeBase</Text>
                  <Text note={true}>GeekyAnts</Text>
                </Body>
              </Left>
            </CardItem>

            <CardItem cardBody={true}>
              <Image
                style={{
                  resizeMode: "cover",
                  width: undefined,
                  height: 200,
                  flex: 1
                }}
                source={cardImage}
              />
            </CardItem>

            <CardItem style={{ paddingVertical: 0 }}>
              <Left>
                <Button transparent={true}>
                  <Icon active={true} name="thumbs-up" />
                  <Text>4923 Likes</Text>
                </Button>
              </Left>
              <Body>
                <Button transparent={true}>
                  <Icon active={true} name="chatbubbles" />
                  <Text>89 Comments</Text>
                </Button>
              </Body>
              <Right>
                <Text>11h ago</Text>
              </Right>
            </CardItem>
          </Card>
        </Content>
      </Container>
    );
  }
}

export default NHCardImage;
