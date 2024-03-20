<template>
  <div class="login-container">
    <h2>Login</h2>
    <form @submit.prevent="login">
      <div class="input-container">
        <input v-model="username" type="text" id="username" placeholder=" " required>
        <label for="username">Username</label>
      </div>
      <div class="input-container">
        <input v-model="password" type="password" id="password" placeholder=" " required>
        <label for="password">Password</label>
      </div>
      <button type="submit">Login</button>
    </form>
  </div>
</template>

<script setup>
// JavaScript-scriptet ditt her
</script>

<style scoped>
.login-container {
  margin: auto;
  background-color:#333;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.6);
  width: 40%; /* Eller en annen fast bredde som du ønsker */
  color: #fff;
}

.input-container {
  position: relative;
  margin-bottom: 10px;
  padding-right: 20px;
}

input {
  width: 100%;
  padding: 10px;
  margin: 10px 0;
  border: none;
  border-bottom: 2px solid #40607e;
  background-color: transparent;
  color: #fff;
}

input::placeholder {
  color: transparent;
}

input:focus {
  outline: none;
}

input:focus + label,
input:not(:placeholder-shown) + label {
  transform: translateY(-20px);
  font-size: 12px;
  color: #fff;
}

label {
  position: absolute;
  left: 10px;
  top: 10px;
  transition: all 0.3s ease;
  pointer-events: none;
}

button {
  padding: 10px 30px;
  margin-top: 20px;
  border: none;
  border-radius: 5px;
  background-color: #40607e;
  color: #fff;
  cursor: pointer;
}
</style>
