import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';

export default function Square({ gamer, onclick }) {
  return (
    <TouchableOpacity onPress={onclick} style={styles.square}>
      { gamer }
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  square: {
    borderColor: '#FA03D8',
    borderWidth: 2,
    borderRadius: 15,
    width: 100,
    height: 100,
    margin: 5,
    backgroundColor: '#F794FE',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

// Square.propTypes = {
//   gamer: PropTypes.string
// }
