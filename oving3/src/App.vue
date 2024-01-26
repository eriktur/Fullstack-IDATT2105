<script setup>
import Taskbar from "@/components/taskbar.vue";
</script>

<template>
  <header>
    <taskbar/>
  </header>
  <main class="main">
    <router-view/>
  </main>
</template>

<style scoped>
.main{
  margin-top: 155px ;
}
</style>
