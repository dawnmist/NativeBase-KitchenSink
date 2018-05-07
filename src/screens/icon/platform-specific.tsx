import * as React from "react";

import {
  Container,
  Header,
  Title,
  Content,
  Button,
  Icon,
  Body,
  Left,
  Right,
  Grid,
  Col,
  Row,
  Text
} from "native-base";

import styles from "./styles";

import { NavigationScreenConfigProps } from "react-navigation";

export interface PlatformSpecificIconProps extends NavigationScreenConfigProps { }
class PlatformSpecificIcon extends React.Component<PlatformSpecificIconProps> {
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
            <Title>Platform</Title>
          </Body>
          <Right />
        </Header>

        <Content padder={true}>
          <Grid>
            <Row>
              <Col style={styles.col}>
                <Icon ios="ios-person" android="md-person" />
                <Text>person</Text>
              </Col>
              <Col style={styles.col}>
                <Icon ios="ios-apps-outline" android="md-apps" />
                <Text>apps</Text>
              </Col>
              <Col style={styles.col}>
                <Icon ios="ios-alarm" android="md-alarm" />
                <Text>alarm</Text>
              </Col>
              <Col style={styles.col}>
                <Icon ios="ios-paper" android="md-paper" />
                <Text>paper</Text>
              </Col>
              <Col style={styles.col}>
                <Icon ios="ios-cart-outline" android="md-cart" />
                <Text>cart</Text>
              </Col>
            </Row>
          </Grid>
        </Content>
      </Container>
    );
  }
}

export default PlatformSpecificIcon;
