<template>
  <div class="calculator">

    <div class="display">{{ currentInput || '0' }}</div>

    <div class="buttonNumber" @click="appendToInput(9)">9</div>
    <div class="buttonNumber" @click="appendToInput(8)">8</div>
    <div class="buttonOperation" @click="appendToInput('+')">+</div>

    <div class="buttonNumber" @click="appendToInput(7)">7</div>
    <div class="buttonNumber" @click="appendToInput(6)">6</div>
    <div class="buttonOperation" @click="appendToInput('-')">-</div>

    <div class="buttonNumber" @click="appendToInput(5)">5</div>
    <div class="buttonNumber" @click="appendToInput(4)">4</div>
    <div class="buttonOperation" @click="appendToInput('*')">*</div>

    <div class="buttonNumber" @click="appendToInput(3)">3</div>
    <div class="buttonNumber" @click="appendToInput(2)">2</div>
    <div class="buttonOperation" @click="appendToInput('/')">/</div>

    <div class="buttonNumber" @click="appendToInput(1)">1</div>
    <div class="buttonNumber" @click="appendToInput(0)">0</div>
    <div class="buttonOperation" @click="appendToInput('.')">.</div>

    <div class="buttonEquals" @click="calculate">=</div>
    <div class="buttonClear" @click="clearInput">C</div>
    

    <div class="log">
          <h3>Calculator log:</h3>
          <ul>
            <li v-for="(entry, index) in calculationLog" :key="index">{{ entry }}</li>
          </ul>
        </div>
  </div>
</template>

<script>
 export default {
   data() {
     return {
       currentInput: '',
       calculationLog: [], // Logg for beregninger
       // Andre dataelementer...
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
      if (/\/0(?!\d)/.test(this.currentInput)) {
        this.currentInput = 'Can not divide by zero:(';
        return;
      }
 try {
          let result = eval(this.currentInput).toString();
          this.calculationLog.push(`${this.currentInput} = ${result}`);
          this.currentInput = result;
        } catch (e) {
          this.currentInput = 'Error :(';
        }
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
  grid-template-columns: repeat(3, 1fr);
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
  font-size: 1.5em;
  color: #333;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.25);
  transition: background-color 0.2s;
}
.buttonOperation {
  background-color: #939393;
  border: none;
  border-radius: 10px;
  font-size: 1.5em;                               
  color: #ffffff;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.25);
  transition: background-color 0.2s;
}
.buttonNumber:hover  {
  background-color: #6e6e6e;
  color:#ffffff;
}
.buttonOperation:hover {
  background-color: #6e6e6e;
  color:#ffffff;
}
.buttonEquals {
  grid-column: span 2;
  background-color: #f0f0f0;
  border: none;
  border-radius: 10px;
  font-size: 1.5em;
  color: #333;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.25);
  transition: background-color 0.2s;
}
.buttonClear{
  background-color: #ff8628;
  border: none;
  border-radius: 10px;                                                 
  font-size: 1.5em;
  color: #333;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.25);
  transition: background-color 0.2s;
}
.log{
  color: #ffffff;
}
</style>