import { BASEBALL_GAME_NUMBER, NUMBER_RANGE, RANDOM_NUMBER } from '../utils/constants.js';

export default class ComputerNumber {
  getRandomNumber() {
    return Math.floor(Math.random() * RANDOM_NUMBER - 1 + 1);
  }

  createComputerNumber() {
    this.computerNumbers = [];
    while (this.computerNumbers.length < BASEBALL_GAME_NUMBER) {
      const newRandomNumber = this.getRandomNumber();
      if (NUMBER_RANGE.includes(newRandomNumber) && !this.computerNumbers.includes(newRandomNumber)) {
        this.computerNumbers.push(newRandomNumber);
      }
    }
  }

  getComputerNumber() {
    this.createComputerNumber();
    return parseInt(this.computerNumbers.join(''));
  }
}
