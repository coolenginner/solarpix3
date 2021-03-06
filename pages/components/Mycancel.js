/*Custom Button*/
import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
const Mycancel = props => {
  return (
    <TouchableOpacity style={styles.button} onPress={props.customClick}>
      <Text style={styles.text}>{props.title}</Text>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    backgroundColor: 'gray',
    color: '#ffffff',
    padding: 10,
    marginTop: 15,
    marginLeft: 25,
    marginRight: 25,
    borderRadius:5,
    height:40,
  },
  text: {
    color: '#ffffff',
  },
});
export default Mycancel;