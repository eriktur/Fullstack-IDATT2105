<template>
  <h2 class="Reviews">Reviews</h2>
  <div class="reviewCointainers">
    <div CLASS="feedbacks" v-for="(feedback, index) in feedbacks" :key="index">
      <h3><strong>{{ feedback.name }}</strong></h3>
      <p class="feedback-text">{{ feedback.message }}</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      feedbacks: []
    };
  },
  async mounted() {
    const response = await fetch('http://localhost:3000/feedbacks');
    this.feedbacks = await response.json();
  }
};
</script>

<style>
.reviewCointainers{
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(3, 1fr);
  grid-gap: 25px 5px;
}
.Reviews{
  color: #ffffff;
  font-size: 30px;
}
.feedbacks{
  background-color: #ffffff;
  margin: 0 15px 0 15px;
  color: #000000;
  border-radius: 10px;
}
.feedback-text{
  font-size: 17px;
}
</style>
