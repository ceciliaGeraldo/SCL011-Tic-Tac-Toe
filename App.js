import React from 'react';
import {
  StyleSheet,
  Image,
  View,
} from 'react-native';

import Banner from './assets/banner_bimojakejake_II.png';
import Board from './components/Board';

export default function App() {
  return (
    <View style={[styles.bigContainer, {height: '100%'}]}>
      <View style={{
        width: '100%',
        alignItems: 'center',
      }}
      >
        <Image
          source={Banner}
          style={{
            height: '30%',
            width: '90%',
            marginTop: '10%',
          }}
        />
      </View>
      <View style={styles.container}>
        <Board />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  bigContainer: {
    backgroundColor: '#FEDE33',
    flex: 3,
  },
  container: {
    marginTop: -80,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
