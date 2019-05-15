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
          Insecure Phone
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
        <Text style={styles.button1} onPress={this.giveAttention}>
          Give Them Attention
        </Text>
        {/* <Button onPress={this.giveAttention} title="Give Attention" /> */}
        <Button onPress={this.breakUp} title="Break Up With Them" />
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
  button1: {
    // width: 200,
    // height: 200 - 200/10,
    lineHeight: 200,
    // alignItems: 'center',
    borderColor: 'black',
    borderRadius: 100,
    borderWidth: 20,
    backgroundColor: '#f74d4d',
    fontSize: 20,
    color: 'white',
    
    // background-image: -webkit-gradient(linear, left top, left bottom, color-stop(0%, #f74d4d), color-stop(100%, #f86569)),
    
    //  background-image: -moz-gradient(linear, left top, left bottom, color-stop(0%,'#f74d4d'), color-stop(100%,#f86569)),
    
    // box-shadow: 0 15px #e24f4f,

    // &:active {
    //   box-shadow: 0 0 #e24f4f,
    //   .translate(0px, 15px),
    //   .transition( 0.1s all ease-out),
    // }
}
});
