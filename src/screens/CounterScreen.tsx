import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export const CounterScreen = () => {
  const [counter, setCounter] = useState(10);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>CounterScreen: {counter}</Text>
      <TouchableOpacity
        onPress={() => {
          setCounter(counter + 1);
        }}
        style={styles.buttonPositionRight}>
        <View style={styles.buttonRoundedFloatingRight}>
          <Text style={styles.textButton}>+1</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => {
          setCounter(counter - 1);
        }}
        style={styles.buttonPositionLeft}>
        <View style={styles.buttonRoundedFloatLeft}>
          <Text style={styles.textButton}>-1</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#0284c7',
  },
  buttonRoundedFloatingRight: {
    borderRadius: 50,
    width: 50,
    height: 50,
    backgroundColor: '#0284c7',
    justifyContent: 'center',
    alignItems: 'center',
  },
  textButton: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 24,
  },
  buttonPositionRight: {
    position: 'absolute',
    bottom: 10,
    right: 10,
  },
  buttonRoundedFloatLeft: {
    borderRadius: 50,
    width: 50,
    height: 50,
    backgroundColor: '#0284c7',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonPositionLeft: {
    position: 'absolute',
    bottom: 10,
    left: 10,
  },
});