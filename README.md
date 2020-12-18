# ⚾ 미션 - 숫자 야구 게임
1부터 9까지 서로 다른 수로 이루어진 3자리의 수를 맞추는 게임이다.

## 📝 구현할 기능 목록

1. 1부터 9까지의 숫자로만 이루어진 3자리 수를 생성한다.
    - [조건] 숫자의 각 자리수가 1부터 9까지의 수이며, 중복되는 수는 없다.
2. 사용자는 서로 다른 수 3자리를 입력한다.
    - [예외처리] 똑같은 숫자가 없는지 검증한다.
    - [예외처리] 숫자의 각 자리수가 1부터 9까지의 수 인지 검증한다.
    - [예외처리] 3자리 수인지 검증한다.
    - [예외처리] 숫자로만 이루어졌는지 검증한다.
3. 사용자가 입력한 수와 컴퓨터의 값을 비교한다.
    - [조건] 같은 수가 같은 자리에 있으면 `스트라이크`, 다른 자리에 있으면 `볼`, 같은 수가 전혀 없으면 `낫싱`이란 힌트를 제공한다.
    - [조건] 힌트는 볼과 스트라이크 중 볼이 먼저 출력된다.
4. 사용자가 정답을 입력하면 게임이 종료된다.
    - [조건] 축하한다는 문구를 출력한다.
5. 게임이 종료되면 재시작할 수 있는 버튼을 보여준다.
    - [조건] 버튼을 누르면 게임을 재시작 할 수 있다.
<br>

## 💻 프로그램 요구사항
- 게임을 종료한 후 id가 `game-restart-button`인 버튼을 클릭함으로써 게임을 다시 시작할 수 있다.
  - `예) <button id="game-restart-button">재시작</button>`
- `play`(컴퓨터의 랜덤 값, 유저의 입력 값) 메서드를 만들어 게임을 진행한다.
- `play`메서드는 `String`으로 결과값을 return 한다.
- `index.js`에서 아래의 function 또는 class 형태를 활용한다.

```javascript
export default function BaseballGame() {
  this.play = function (computerInputNumbers, userInputNumbers) {
    return "결과 값 String";
  };
}

export default class BaseballGame {
  play(computerInputNumbers, userInputNumbers) {
    return "결과 값 String";
  }
}

// 예시
play(123, 456); // '낫싱'
play(123, 345); // '1볼'
play(123, 432); // '2볼'
play(123, 312); // '3볼'
play(123, 145); // '1스트라이크'
play(123, 134); // '1볼 1스트라이크'
play(123, 132); // '2볼 1스트라이크'
play(123, 124); // '2스트라이크'
```

- 스트라이크와 볼이 같이 있는 경우 볼을 먼저쓰고, 스트라이크를 쓴다.
- 사용자가 잘못된 입력 값을 작성한 경우 `alert`을 이용해 메시지를 보여주고, 재입력할 수 있게 한다.
- 외부 라이브러리(jQuery, Lodash 등)를 사용하지 않고, 순수 Vanilla JS로만 구현한다.
- **자바스크립트 코드 컨벤션을 지키면서 프로그래밍** 한다
  - [https://google.github.io/styleguide/jsguide.html](https://google.github.io/styleguide/jsguide.html)
  - [https://ui.toast.com/fe-guide/ko_CODING-CONVENSION/](https://ui.toast.com/fe-guide/ko_CODING-CONVENTION)
- **indent(인덴트, 들여쓰기) depth를 3이 넘지 않도록 구현한다. 2까지만 허용**한다.
  - 예를 들어 while문 안에 if문이 있으면 들여쓰기는 2이다.
  - 힌트: indent(인덴트, 들여쓰기) depth를 줄이는 좋은 방법은 함수(또는 메소드)를 분리하면 된다.
- **함수(또는 메소드)가 한 가지 일만 하도록 최대한 작게** 만들어라.
