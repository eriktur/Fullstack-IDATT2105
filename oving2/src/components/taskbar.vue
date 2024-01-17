<template>
  <div class="taskbar">
    <h1>calculator</h1>
  </div>
</template>

<script>
export default {

};
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 10 || document.documentElement.scrollTop > 60) {
    document.getElementById("taskbar").style.fontSize = "30px";
  } else {
    document.getElementById("taskbar").style.fontSize = "90px";
  }
}
</script>
<style scoped>
.taskbar {
  background-color: #f0f0f0;
  text-align: center;
  color: #e56d00;
  position: fixed;
  width: 100%;
}
</style>
