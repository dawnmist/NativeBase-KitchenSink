import * as React from "react";
import {
  Container,
  Header,
  Title,
  Content,
  Button,
  Icon,
  H1,
  H2,
  H3,
  Text,
  Left,
  Right,
  Body
} from "native-base";
import styles from "./styles";

import { NavigationScreenConfigProps } from "react-navigation";

export interface NHTypographyProps extends NavigationScreenConfigProps { }
class NHTypography extends React.Component<NHTypographyProps> {
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
            <Title>Typography</Title>
          </Body>
          <Right />
        </Header>

        <Content padder={true}>
          <H1 style={styles.mb10}>Header One</H1>
          <H2 style={styles.mb10}>Header Two</H2>
          <H3 style={styles.mb10}>Header Three</H3>
          <Text>Default</Text>
        </Content>
      </Container>
    );
  }
}

export default NHTypography;
