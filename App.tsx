import React from 'react';
// import { CounterScreen } from './src/screens/CounterScreen';
// import BoxObjectModelScreen from './src/screens/BoxObjectModelScreen';
import { SafeAreaView, StyleSheet } from 'react-native';
// import DimensionScreen from './src/screens/DimensionScreen';
import PositionScreen from './src/screens/PositionScreen';


const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      {/* <BoxObjectModelScreen /> */}
      {/* <DimensionScreen /> */}
      <PositionScreen />
    </SafeAreaView>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

