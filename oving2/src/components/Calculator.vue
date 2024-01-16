<template>
  <div class="calculator">

    <div class="display">{{ currentInput || '0' }}</div>

    <div class="numbButton" v-for="num in [1, 2, 3, 4, 5, 6, 7, 8, 9]" :key="`num-${num}`" @click="appendToInput(num)">
      {{ num }}
    </div>
    <div class="ZeroButton" v-for="num in [0]" :key="num" @click="appendToInput(num)">
          {{ num }}
    </div>
    <div class="opButton" v-for="op in ['+', '-', '*', '/']" :key="`op-${op}`" @click="appendToInput(op)">
      {{ op }}
    </div>

    <div class="buttonEquals" @click="calculate">=</div>
    <div class="buttonClear" @click="clearInput">C</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      currentInput: ''
    };
  },
  methods: {
    appendToInput(value) {
      this.currentInput += value;
    },
    
    calculate() {
      try {
        this.currentInput = eval(this.currentInput).toString();
      } catch (e) {
        this.currentInput = 'Error';
        setTimeout(() => {
          this.clearInput();
        }, 1500);
      }
    },

    clearInput() {
      this.currentInput = '';
    }
  }
};
</script>

<style scoped>
.calculator {
  display: grid;
  grid-template-columns: repeat(3, 1fr); /* 4 kolonner */
  grid-template-rows: auto repeat(4, 1fr); /* 1 rad for display, 5 for knapper */
  gap: 10px;
  max-width: 400px;
  margin: auto;
  padding: 10px;
  border-radius: 20px;
  background-color: #333;
}

.display {
  grid-column: 1 / -1; /* Display strekker seg over alle 4 kolonner */
  background-color: #818181;
  color: white;
  text-align: right;
  padding: 20px;
  border-radius: 20px;
  font-size: 2em;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.5);
}

.numbButton {
  background-color: #f0f0f0;
  border: none;
  border-radius: 10px;
  font-size: 1.5em;
  color: #333;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.25);
  transition: background-color 0.2s;
}
.opButton {
  background-color: #f0f0f0;
  border: none;
  border-radius: 10px;
  font-size: 1.5em;                               
  color: #333;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.25);
  transition: background-color 0.2s;

}
.numbButton:hover {
  background-color: #6e6e6e;
  color:#ffffff;
}
.opButton:hover {
  background-color: #6e6e6e;
  color:#ffffff;
}                           
.buttonEquals {
  grid-column: span 2; /* Dette får knappen til å dekke 2 kolonner */
  background-color: #f0f0f0;
  border: none;
  border-radius: 10px;
  font-size: 1.5em;
  color: #333;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.25);
  transition: background-color 0.2s;
}
.buttonClear{
  background-color: #ff8628;
  border: none;
  border-radius: 10px;                                                 
  font-size: 1.5em;
  color: #333;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.25);
  transition: background-color 0.2s;
  
}
.ZeroButton{
 background-color: #f0f0f0;
 border: none;
 border-radius: 10px;
 font-size: 1.5em;
 color: #333;
 box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.25);
 transition: background-color 0.2s;
}
</style>