import * as React from "react";
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
  Left,
  Right,
  Body
} from "native-base";
import styles from "./styles";

import { NavigationScreenConfigProps } from "react-navigation";

export interface NHCardListProps extends NavigationScreenConfigProps { }
class NHCardList extends React.Component<NHCardListProps> {
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
            <Title>Card List</Title>
          </Body>
          <Right />
        </Header>

        <Content padder={true}>
          <Card style={styles.mb}>
            <CardItem header={true} bordered={true}>
              <Text>Social Applications</Text>
            </CardItem>
            <CardItem>
              <Left>
                <Icon
                  active={true}
                  name="logo-googleplus"
                  style={{ color: "#DD5044" }}
                />
                <Text>Google Plus</Text>
              </Left>
              <Right>
                <Icon name="arrow-forward" />
              </Right>
            </CardItem>
            <CardItem>
              <Left>
                <Icon
                  active={true}
                  name="logo-facebook"
                  style={{ color: "#3B579D" }}
                />
                <Text>facebook</Text>
              </Left>
              <Right>
                <Icon name="arrow-forward" />
              </Right>
            </CardItem>
            <CardItem>
              <Left>
                <Icon active={true} name="logo-twitter" style={{ color: "#55ACEE" }} />
                <Text>Twitter</Text>
              </Left>
              <Right>
                <Icon name="arrow-forward" />
              </Right>
            </CardItem>
            <CardItem>
              <Left>
                <Icon active={true} name="logo-reddit" style={{ color: "#FF4500" }} />
                <Text>Reddit</Text>
              </Left>
              <Right>
                <Icon name="arrow-forward" />
              </Right>
            </CardItem>
            <CardItem>
              <Left>
                <Icon
                  active={true}
                  name="logo-linkedin"
                  style={{ color: "#007BB6" }}
                />
                <Text>LinkedIn</Text>
              </Left>
              <Right>
                <Icon name="arrow-forward" />
              </Right>
            </CardItem>
            <CardItem>
              <Left>
                <Icon active={true} name="logo-youtube" style={{ color: "#D62727" }} />
                <Text>YouTube</Text>
              </Left>
              <Right>
                <Icon name="arrow-forward" />
              </Right>
            </CardItem>
          </Card>
        </Content>
      </Container>
    );
  }
}

export default NHCardList;
