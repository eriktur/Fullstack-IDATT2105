<template>
  <div class="ContactFormContainer">
    <h3 class="reveiwHeader">Submit Your Review</h3>
    <form @submit.prevent="submitForm">
      <div class="input">
        <input class="container1" placeholder="Name.." type="text" id="name" v-model="contact.name" required>
      </div>

      <div class="input">
        <input class="container1" placeholder="E-mail.." type="email" id="email" v-model="contact.email" required>
      </div>

      <div class="input">

        <textarea class="message-container" placeholder="Review.." id="message" v-model="contact.message" required></textarea>
      </div>

      <button class="Send-button" type="submit" :disabled="isFormInvalid">Send</button>
    </form>
  </div>
</template>

<script>
import { ref, watch, computed } from 'vue';
import { useStore } from 'vuex';

export default {
  name: 'ContactForm',
  setup() {
    // Using Vuex store for state management
    const store = useStore();
    // Contact form state with reactivity
    const contact = ref({
      name: store.state.contact.name,
      email: store.state.contact.email,
      message: ''
    });

    // Watches for changes in name and email to update the Vuex store
    watch(() => contact.value.name, (newName) => {
      store.commit('updateName', newName);
    });
    watch(() => contact.value.email, (newEmail) => {
      store.commit('updateEmail', newEmail);
    });

    // Computed property to validate form fields
    const isFormInvalid = computed(() => {
      const emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      const isEmailValid = emailRegex.test(contact.value.email);
      return !contact.value.name || !isEmailValid || !contact.value.message;
    });

    // Function to handle form submission
    const submitForm = async () => {
      try {
        const response = await fetch('http://localhost:3000/feedbacks', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(contact.value)
        });

        const data = await response.json();
        if (data) {
          alert('Success');

          // Oppdaterer Vuex store med de sendte verdiene
          store.commit('updateContact', { name: contact.value.name, email: contact.value.email, message: contact.value.message });

          // tømmer input ved innsending
          contact.value.message = '';
          contact.value.name = '';
          contact.value.email = '';
        }
      } catch (error) {
        alert(error.message);
      }
    };

    return { contact, isFormInvalid, submitForm };
  }
};
</script>

<style scoped>
.ContactFormContainer {
  max-width: 500px;
  margin: auto;
}

.input {
  margin-bottom: 1rem;
}

.input label {
  display: block;
}

.input input,
.input textarea {
  width: 100%;
  padding: 0.5rem;
  font-size: 1rem;
}

.input button {
  padding: 0.5rem 1rem;
  font-size: 1rem;
  cursor: pointer;
}
.message-container {
  height: 100px;
  border-radius: 10px;
}

.container1 {
  border-radius: 10px;
}
.reveiwHeader{
  color: #ffffff;
  font-size: 30px;
}
.Send-button{
  padding: 10px 40px 10px 40px;
  background-color: #97fa97;
  border-radius: 10px;
  border: 0;
  transition: background-image 0.4s ease-in-out;

}
.Send-button:hover{
  background-color: #00ff0d;
  transition: background-image 0.5s ease-in-out;
}

.Send-button:disabled {
  background-color: #cccccc; /* Grå bakgrunn når deaktivert */
  cursor: not-allowed; /* Endrer musepekeren for å indikere at knappen er deaktivert */
}
</style>
