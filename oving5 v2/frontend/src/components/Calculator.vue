<template>
  <taskbar/>
  <div class="calculator">
    <div class="display">{{ currentInput || '0' }}</div>

    <div class="buttonClear" data-test="clearData" @click="clearInput">C</div>
    <div></div>
    <div></div>
    <div class="buttonOperation" data-test="operationDivide" @click="appendToInput('/')">/</div>

    <div class="buttonNumber" data-test="number-7" @click="appendToInput(7)">7</div>
    <div class="buttonNumber" data-test="number-8" @click="appendToInput(8)">8</div>
    <div class="buttonNumber" data-test="number-9" @click="appendToInput(9)">9</div>
    <div class="buttonOperation"  data-test="operationMultiply"@click="appendToInput('*')">*</div>

    <div class="buttonNumber" data-test="number-4" @click="appendToInput(4)">4</div>
    <div class="buttonNumber" data-test="number-5" @click="appendToInput(5)">5</div>
    <div class="buttonNumber" data-test="number-6" @click="appendToInput(6)">6</div>
    <div class="buttonOperation" data-test="operationSubtract" @click="appendToInput('-')">-</div>

    <div class="buttonNumber" data-test="number-1" @click="appendToInput(1)">1</div>
    <div class="buttonNumber" data-test="number-2" @click="appendToInput(2)">2</div>
    <div class="buttonNumber" data-test="number-3"@click="appendToInput(3)">3</div>
    <div class="buttonOperation" data-test="operationAdd" @click="appendToInput('+')">+</div>

    <div class="buttonZero" data-test="number-0" @click="appendToInput(0)">0</div>
    <div class="buttonNumber" @click="appendToInput('.')">.</div>
    <div class="buttonOperation" data-test="operationEqual" @click="calculate('=')">=</div>



    <div class="log">
          <h3>Calculator log:</h3>
          <ul>
            <li v-for="(entry, index) in calculationLog" :key="index">{{ entry }}</li>
          </ul>
        </div>
  </div>
</template>

<script>
import Taskbar from "@/components/taskbar.vue";
 export default {
   components: {Taskbar},
   data() {
     return {
       currentInput: '',
       calculationLog: [],
     };
   },

  mounted() {
    document.addEventListener("keydown", this.handleKeyPress);
  },
  beforeUnmount() {
    document.removeEventListener('keydown', this.handleKeyPress);
  },
  methods: {

    appendToInput(value) {
      this.currentInput += value;
    },

    calculate() {
      const apiUrl = 'http://localhost:8081/calculate';
      const payload = {
        expression: this.currentInput
      };

      fetch(apiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      })
          .then(response => response.json())
          .then(data => {
            this.currentInput = data.result;
            this.calculationLog.push(`${payload.expression} = ${data.result}`);
          })
          .catch(error => {
            console.error('Error:', error);
            this.currentInput = 'Error';
          });
    },


    clearInput() {
      this.currentInput = '';
    },

    handleKeyPress(e) {

      if (e.key >= '0' && e.key <= '9') {
        this.appendToInput(e.key);
      } else if (e.key === '+' || e.key === '-' || e.key === '*' || e.key === '/') {
        this.appendToInput(e.key);
      } else if (e.key === 'Enter') {
        this.calculate();
      } else if (e.key === 'Backspace') {
        this.currentInput = this.currentInput.slice(0, -1);
      } else if (e.key === 'Escape') {
        this.clearInput();
      }
    }
  }
};
</script>

<style scoped>
.calculator {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: auto repeat(4, 1fr);
  gap: 10px;
  max-width: 400px;
  margin: auto;
  padding: 10px;
  border-radius: 20px;
  background-color: #333;
}

.display {
  grid-column: 1 / -1;
  background-color: #818181;
  color: white;
  text-align: right;
  padding: 20px;
  border-radius: 20px;
  font-size: 2em;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.5);
}
.buttonNumber {
  background-color: #f0f0f0;
  border: none;
  border-radius: 10px;
  color: #333;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.25);
  transition: background-color 0.2s;
  font-size: 30px;
}

.buttonOperation {
  background-color: #939393;
  border: none;
  border-radius: 10px;
  color: #ffffff;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.25);
  transition: background-color 0.2s;
  font-size: 30px;
}
.buttonNumber:hover  {
  background-color: #6e6e6e;
  color:#ffffff;
}
.buttonOperation:hover {
  background-color: #6e6e6e;
}
.buttonZero{
  grid-column: span 2;
  background-color: #f0f0f0;
  border: none;
  border-radius: 10px;
  font-size: 30px;
  color: #333;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.25);
  transition: background-color 0.2s;

}
.buttonZero:hover  {
  background-color: #6e6e6e;
  color:#ffffff;
}

.buttonClear{
  background-color: #ff8628;
  border: none;
  border-radius: 10px;
  font-size: 30px;
  color: #333;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.25);
  transition: background-color 0.2s;
}
.buttonClear:hover {
  background-color: #e56d00;
}
.log{
  color: #ffffff;
  grid-column:span 4;
}

</style>