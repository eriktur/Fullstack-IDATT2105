<template>
  <div class="ContactFormContainer">
    <h3 class="reveiwHeader">Submit Your Review</h3>
    <form @submit.prevent="submitForm">
      <div class="input">
        <input class="container1" placeholder="Name.." type="text" id="name" v-model="form.name" required>
      </div>

      <div class="input">
        <input class="container1" placeholder="E-mail.." type="email" id="email" v-model="form.email" required>
      </div>

      <div class="input">

        <textarea class="message-container" placeholder="Review.." id="message" v-model="form.message" required></textarea>
      </div>

      <button class="Send-button" type="submit">Send</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        name: '',
        email: '',
        message: ''
      }
    };
  },
  methods: {
    submitForm() {
      // Her kan du legge til logikk for hva som skal skje når skjemaet sendes inn.
      // For eksempel, sende data til en server eller vise en bekreftelsesmelding.
      console.log('Skjema sendt med følgende data:', this.form);

      // Reset skjemaet etter innsending
      this.form = {
        name: '',
        email: '',
        message: ''
      };
    }
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
  background-image: linear-gradient(45deg, #00e100 0%, #97fa97 67%, #00e100 100%);
  border-radius: 10px;
  border: 0;
  transition: background-image 0.4s ease-in-out;

}
.Send-button:hover{
  background-image: linear-gradient(25deg, #00e100 0%, #97fa97 21%, #00e100 100%);
  transition: background-image 0.5s ease-in-out;
}
</style>
