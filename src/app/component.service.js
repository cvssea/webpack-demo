export class ComponentService {
  constructor() {
    this.firstNum = document.getElementById('firstNum');
    this.secondNum = document.getElementById('secondNum');
    this.resultDiv = document.getElementById('result');
    this.button = document.getElementById('addValues');
  }

  calculate(parsedInputs) {
    return parsedInputs.reduce((a, i) => a + i);
  }

  displayResult(result) {
    this.resultDiv.innerText = result;
  }

  onClick(cb) {
    this.button.addEventListener('click', cb);
  }
}
