import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Board from './components/Board';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>THE MICHIGANG</Text>
      <Board />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#edff8f',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
