import React from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';
import { Speech } from 'expo';

export default class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      name: null,
      myInterval: null,
    };
  }

  giveAttention = () => {
    clearInterval(this.state.myInterval);
    this.state.myInterval;
    let myInterval = setInterval(this.saySomethin, 5000);
    this.setState({ myInterval })
  }

  breakUp = () => {
    clearInterval(this.state.myInterval);
    let text = `Alright bye ${this.state.name}`;
    let options = { language: 'en', pitch: 3.0, rate: 0.8, };
    Speech.speak(text, options);
  }



  saySomethin = () => {
    let needySayings = ['Spend time with me', 'Where you at', 'I need you', ' I want you', 'I will break up with you ', 'You doing okay'];
    let text;
    if (this.state.name) { text = this.state.name + ', ' + needySayings[Math.floor(Math.random() * 5)] }
    else { text = needySayings[Math.floor(Math.random() * 5)] }
    let options = { language: 'en', pitch: 3.0, rate: 0.8, };
    Speech.speak(text, options)
  }

  changeName = (e) => {
    e.preventDefault();
    let name = e.target.value;
    this.setState({ name })
  }

  componentDidMount = () => {
    let myInterval = setInterval(this.saySomethin, 100000);
    this.setState({ myInterval })
  }

  render() {
    return (
      <View style={styles.container}>

        <Text style={styles.header}>
          Insecure GF
          </Text>
        <TextInput
          style={styles.textInput}
          onChangeText={(name) => this.setState({ name })}
          value={this.state.name}
          placeholder="Place your name here"
        />
        <Text>
          Your name: {this.state.name}
        </Text>
        <Button onPress={this.giveAttention} title="Give Attention" />
        <Button onPress={this.breakUp} title="Break up with this hoe" />
      </View >
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    fontSize: 30,
  },
  textInput: {
    height: 40,
    borderColor: 'black',
    borderRadius: 10,
    borderWidth: 2,
    padding: 10,
    margin: 10,
  },
});
