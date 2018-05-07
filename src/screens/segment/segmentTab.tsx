import * as React from "react";
import {
  Container,
  Header,
  Title,
  Content,
  Text,
  Button,
  Icon,
  Left,
  Right,
  Body,
  Segment
} from "native-base";

import { NavigationScreenConfigProps } from "react-navigation";

export interface SegmentNBProps extends NavigationScreenConfigProps { }
interface SegmentNBState {
  seg: number;
}
class SegmentNB extends React.Component<SegmentNBProps, SegmentNBState> {
  constructor(props: SegmentNBProps) {
    super(props);
    this.state = {
      seg: 2
    };
  }
  render() {
    return (
      <Container>
        <Header hasTabs={true}>
          <Left>
            <Button transparent={true} onPress={() => this.props.navigation.goBack()}>
              <Icon name="arrow-back" />
            </Button>
          </Left>
          <Body>
            <Title>Segments</Title>
          </Body>
          <Right>
            <Button transparent={true}>
              <Icon name="search" />
            </Button>
          </Right>
        </Header>
        <Segment>
          <Button
            first={true}
            active={this.state.seg === 1 ? true : false}
            onPress={() => this.setState({ seg: 1 })}
          >
            <Text>Puppies</Text>
          </Button>
          <Button
            active={this.state.seg === 2 ? true : false}
            onPress={() => this.setState({ seg: 2 })}
          >
            <Text>Kittens</Text>
          </Button>
          <Button
            last={true}
            active={this.state.seg === 3 ? true : false}
            onPress={() => this.setState({ seg: 3 })}
          >
            <Text>Cubs</Text>
          </Button>
        </Segment>

        <Content padder={true}>
          {this.state.seg === 1 && <Text>Puppies Selected</Text>}
          {this.state.seg === 2 && <Text>Kittens Selected</Text>}
          {this.state.seg === 3 && <Text>Cubs Selected</Text>}
        </Content>
      </Container>
    );
  }
}

export default SegmentNB;
