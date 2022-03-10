import React, {Component} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
// @ts-ignore
import RNSiriWaveView from 'react-native-siri-wave-view';

interface Props {}

interface State {
  startAnimation: boolean;
  stopAnimation: boolean;
}

export default class App extends Component<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = {
      startAnimation: false,
      stopAnimation: false,
    };
  }

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <RNSiriWaveView
          type={0}
          width={800}
          height={750}
          startAnimation={this.state.startAnimation}
          stopAnimation={this.state.stopAnimation}
        />
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={[styles.button]}
            onPress={() => {
              this.setState({
                startAnimation: true,
                stopAnimation: false,
              });
            }}>
            <Text>Start</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.button]}
            onPress={() => {
              this.setState({
                startAnimation: false,
                stopAnimation: true,
              });
            }}>
            <Text>Stop</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  buttonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    position: 'absolute',
    bottom: 20,
  },
  button: {
    height: 40,
    width: 100,
    backgroundColor: '#add8e6',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
  },
});
