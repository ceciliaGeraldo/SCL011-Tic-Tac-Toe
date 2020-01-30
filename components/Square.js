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
    borderColor: '#edff8f',
    borderWidth: 2,
    borderRadius: 15,
    width: 100,
    height: 100,
    backgroundColor: '#ff9668',
  },
});

// Square.propTypes = {
//   gamer: PropTypes.string
// }
