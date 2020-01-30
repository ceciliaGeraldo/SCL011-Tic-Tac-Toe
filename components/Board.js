import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Alert,
} from 'react-native';
import Square from './Square';

export default class Board extends Component {
  constructor(props) {
    super(props);
    this.state = {
      gameState: [
        [0, 0, 0],
        [0, 0, 0],
        [0, 0, 0],
      ],
      currentPlayer: 1,
    };
  }

  componentDidMount() {
    this.initializeGame();
  }

  onclick(row, col) {
    const { gameState } = this.state;
    const value = gameState[row][col];
    if (value !== 0) {
      return;
    }
    const { currentPlayer } = this.state;
    const actualPlayer = currentPlayer;
    const arr = gameState.slice();
    arr[row][col] = actualPlayer;
    this.setState({ gameState: arr });

    const nextPlayer = actualPlayer === 1 ? -1 : 1;
    this.setState({ currentPlayer: nextPlayer });

    const winner = this.getWinnerPlayer();
    if (winner === 1) {
      Alert.alert('Ha ganado el jugador X');
      this.initializeGame();
    } else if (winner === -1) {
      Alert.alert('Ha ganado el jugador O');
      this.initializeGame();
    }
  }

  getWinnerPlayer() {
    const qtySquares = 3;
    const position = this.state.gameState;
    let sumRows;

    /* Revisando valores de las filas */
    for (let i = 0; i < qtySquares; i += 1) {
      sumRows = position[i][0] + position[i][1] + position[i][2];
      /* Si la suma da 3, ganó jugador X */
      if (sumRows === 3) {
        return 1;
      } if (sumRows === -3) {
        return -1;
      }
    }
    /* Revisando valores de las columnas */
    for (let i = 0; i < qtySquares; i += 1) {
      sumRows = position[0][i] + position[1][i] + position[2][i];
      /* Si la suma da 3, ganó jugador X */
      if (sumRows === 3) {
        return 1;
      } if (sumRows === -3) {
        return -1;
      }
    }
    /* Revisando ambas diagonales */
    sumRows = position[0][0] + position[1][1] + position[2][2];
    if (sumRows === 3) {
      return 1;
    } if (sumRows === -3) {
      return -1;
    }
    sumRows = position[2][0] + position[1][1] + position[0][2];
    if (sumRows === 3) {
      return 1;
    } if (sumRows === -3) {
      return -1;
    }
    return 2;
  }

  initializeGame() {
    this.setState({
      gameState: [
        [0, 0, 0],
        [0, 0, 0],
        [0, 0, 0],
      ],
      currentPlayer: 1,
    });
  }

  renderGamer(row, col) {
    const { gameState } = this.state;
    const value = gameState[row][col];
    switch (value) {
      case 1:
        return <Text style={boardStyles.gamerX}>X</Text>;
      case -1:
        return <Text style={boardStyles.gamerX}>O</Text>;
      default:
        return <Text />;
    }
  }

  render() {
    return (
      <View>
        <View style={{ flexDirection: 'row' }}>
          <Square
            onclick={() => this.onclick(0, 0)}
            gamer={this.renderGamer(0, 0)}
          />
          <Square
            onclick={() => this.onclick(0, 1)}
            gamer={this.renderGamer(0, 1)}
          />
          <Square
            onclick={() => this.onclick(0, 2)}
            gamer={this.renderGamer(0, 2)}
          />
        </View>
        <View style={{ flexDirection: 'row' }}>
          <Square
            onclick={() => this.onclick(1, 0)}
            gamer={this.renderGamer(1, 0)}
          />
          <Square
            onclick={() => this.onclick(1, 1)}
            gamer={this.renderGamer(1, 1)}
          />
          <Square
            onclick={() => this.onclick(1, 2)}
            gamer={this.renderGamer(1, 2)}
          />
        </View>
        <View style={{ flexDirection: 'row' }}>
          <Square
            onclick={() => this.onclick(2, 0)}
            gamer={this.renderGamer(2, 0)}
          />
          <Square
            onclick={() => this.onclick(2, 1)}
            gamer={this.renderGamer(2, 1)}
          />
          <Square
            onclick={() => this.onclick(2, 2)}
            gamer={this.renderGamer(2, 2)}
          />
        </View>
      </View>
    );
  }
}

const boardStyles = StyleSheet.create({
  gamerX: {
    fontSize: 70,
    textAlign: 'center',
    color: '#fff',
  },
  gamerO: {
    fontSize: 70,
    textAlign: 'center',
    color: '#fff',
  },
});
