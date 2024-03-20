<template>
  <div class="login-container">
    <h2>Sign up</h2>
    <form @submit.prevent="createUser">
      <div class="input-container">
        <input v-model="username" type="text" id="username" placeholder=" " required>
        <label for="username">Username</label>
      </div>
      <div class="input-container">
        <input v-model="password" type="password" id="password" placeholder=" " required>
        <label for="password">Password</label>
      </div>
      <button type="submit">Create user</button>
    </form>
  </div>
</template>

<script setup>

  import { ref } from 'vue';
  import { useRouter } from 'vue-router';
  import axios from 'axios';

  const username = ref('');
  const FirstName = ref('');
  const LastName = ref('');
  const email = ref('');
  const password = ref('');
  const router = useRouter();

  const createUser = async () => {
    try {
      const user = {
      username: username.value,
      firstName: FirstName.value,
      lastName: LastName.value,
      email: email.value,
      password: password.value
    };
      console.log('hei')
      await axios.post('http://localhost:8081/users', user);
      // Naviger til innloggingssiden etter vellykket brukeropprettelse
      router.push('/login');
    } catch (error) {
      console.error("Kunne ikke opprette bruker:", error);
    }
};
</script>

<style scoped>
.login-container {
  margin: auto;
  background-color:#333;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.6);
  width: 40%;
  color: #fff;
  height: 270px;
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
button:hover{
  border: 1px solid #fff;
}
button:active{
  background-color: #354f67;
}
</style>
