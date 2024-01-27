<template>
  <div>
    <h2>Reviews</h2>
    <div v-for="(feedback, index) in feedbacks" :key="index">
      <p><strong>{{ feedback.name }}</strong>: {{ feedback.message }}</p>
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
