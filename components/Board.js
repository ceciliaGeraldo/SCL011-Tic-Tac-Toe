import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Alert,
  Image,
  TouchableOpacity,
} from 'react-native';
import Square from './Square';
import Bimo from '../assets/bimo.png';
import Jake from '../assets/jake.png';
import Reload from '../assets/reload.png';

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
      counter: 0,
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
    this.setState({ counter: this.state.counter + 1 });

    const { currentPlayer } = this.state;
    const actualPlayer = currentPlayer;
    const arr = gameState.slice();
    arr[row][col] = actualPlayer;
    this.setState({ gameState: arr });

    const nextPlayer = actualPlayer === 1 ? -1 : 1;
    this.setState({ currentPlayer: nextPlayer });
    const { counter } = this.state;

    const winner = this.getWinnerPlayer();
    if (winner === 1) {
      Alert.alert('Ha ganado Bimo');
      this.initializeGame();
    } else if (winner === -1) {
      Alert.alert('Ha ganado Jake');
      this.initializeGame();
    } if (counter === 8) {
      Alert.alert('EMPATE ¡JUGUEMOS OTRA VEZ!')
      this.initializeGame();
    }
  }

  getWinnerPlayer() {
    const qtySquares = 3;
    const position = this.state.gameState;
    let sumRows;
    let count = 0;

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
    return 0;
  }

  initializeGame() {
    this.setState({
      gameState: [
        [0, 0, 0],
        [0, 0, 0],
        [0, 0, 0],
      ],
      currentPlayer: 1,
      counter: 0,
    });
  }

  showTurnPlayer() {
    const { currentPlayer } = this.state;
    if (currentPlayer === 1) {
      return <Image source={Bimo} style={boardStyles.turnGamerX} />;
    } if (currentPlayer === -1) {
      return <Image source={Jake} style={boardStyles.turnGamerO} />;
    }
  }

  renderGamer(row, col) {
    const { gameState } = this.state;
    const value = gameState[row][col];
    switch (value) {
      case 1:
        return <Image source={Bimo} style={boardStyles.gamerX} />;
      case -1:
        return <Image source={Jake} style={boardStyles.gamerO} />;
      default:
        return <Text />;
    }
  }


  render() {
    return (
      <View styles={boardStyles.container}>
        <View style={boardStyles.turnContainer}>
          <Text style={boardStyles.turnText}>
            JUEGA:
          </Text>
          {this.showTurnPlayer()}
        </View>
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
        <TouchableOpacity
          style={boardStyles.button}
          onPress={() => this.initializeGame()}
        >
          <Image
            source={Reload}
            style={boardStyles.buttonImg}
          />
        </TouchableOpacity>
      </View>
    );
  }
}

const boardStyles = StyleSheet.create({
  gamerX: {
    height: 82,
    width: 90,
  },
  gamerO: {
    height: 80,
    width: 47,
  },
  turnContainer: {
    backgroundColor: '#ffffff',
    borderRadius: 20,
    alignItems: 'center',
    marginTop: -20,
    marginBottom: 20,
    padding: 8,
  },
  turnText: {
    fontSize: 25,
    color: '#0059BD',
    fontWeight: 'bold',
    marginBottom: 10,
  },
  turnGamerX: {
    height: 60,
    width: 65,
  },
  turnGamerO: {
    height: 65,
    width: 40,
  },
  buttonImg: {
    width: 40,
    height: 40,
    backgroundColor: 'transparent',
  },
  button: {
    width: 120,
    height: 80,
    backgroundColor: '#F794FE',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 25,
    borderRadius: 20,
    borderColor: '#d42ce0',
    borderWidth: 2,
    marginLeft: 'auto',
    marginRight: 'auto',
  },
});
