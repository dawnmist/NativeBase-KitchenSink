import * as React from "react";
import {
  Container,
  Header,
  Title,
  Button,
  Icon,
  Left,
  Right,
  Body
} from "native-base";
import { Grid, Row } from "react-native-easy-grid";

import { NavigationScreenConfigProps } from "react-navigation";

export interface CustomRowProps extends NavigationScreenConfigProps { }
class CustomRow extends React.Component<CustomRowProps> {
  render() {
    return (
      <Container>
        <Header>
          <Left>
            <Button transparent={true} onPress={() => this.props.navigation.goBack()}>
              <Icon name="arrow-back" />
            </Button>
          </Left>
          <Body>
            <Title>Custom Row</Title>
          </Body>
          <Right />
        </Header>

        <Grid>
          <Row size={1} style={{ backgroundColor: "#635DB7" }} />
          <Row size={2} style={{ backgroundColor: "#00CE9F" }} />
          <Row size={4} style={{ backgroundColor: "#DD9E2C" }} />
        </Grid>
      </Container>
    );
  }
}

export default CustomRow;
