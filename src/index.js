import ComputerNumber from './models/ComputerNumber.js';

const tag = `[BaseballGame]`;
export default class BaseballGame {
  init() {
    console.log(`${tag} init`);
    this.computerInputNumber = new ComputerNumber().getComputerNumber();
    console.log(this.computerInputNumber);
  }

  play(computerInputNumber, userInputNumbers) {
    return '결과 값 String';
  }
}

new BaseballGame().init();
