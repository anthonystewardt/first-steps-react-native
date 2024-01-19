import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

const PositionScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.boxGreen} />
      <View style={styles.boxBlue} />
    </View>
  );
};

export default PositionScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'red',
  },
  boxGreen: {
    width: 100,
    height: 100,
    borderWidth: 10,
    borderColor: 'white',
    backgroundColor: 'green',
    position: 'absolute',
    bottom: 0,
  },
  boxBlue: {
    width: 100,
    height: 100,
    borderWidth: 10,
    borderColor: 'white',
    backgroundColor: 'blue',
  },
});