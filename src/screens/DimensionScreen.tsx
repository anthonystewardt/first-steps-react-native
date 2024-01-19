import { StyleSheet, Text, View, useWindowDimensions } from 'react-native';
import React from 'react';

const DimensionScreen = () => {
  const { height, width } = useWindowDimensions();

  return (
    <View style={styles.container}>
      <View
        style={[
          {
            ...styles.boxBlue,
            width: width * 0.5,
            height: height * 0.5,
          },
        ]}
      />
      <View
        style={[
          {
            ...styles.boxgray,
            width: width * 0.5,
            height: height * 0.5,
          },
        ]}
      />
    </View>
  );
};

export default DimensionScreen;

const styles = StyleSheet.create({
  // blue box
  container: {
    flex: 1,
    backgroundColor: '#f87171',
    flexDirection: 'row',
  },
  boxBlue: {
    width: 100,
    height: 100,
    backgroundColor: '#bae6fd',
  },
  boxgray: {
    width: 100,
    height: 100,
    backgroundColor: '#d4d4d4',
  }
});