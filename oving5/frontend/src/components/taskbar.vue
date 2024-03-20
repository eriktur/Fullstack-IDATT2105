<template>
  <header class="taskbar">
    <div class="navbarContentImg">
    <a class="navbar-logo">
      <img src="/61d183263a856e0004c6334a.png" alt="Logo">
    </a>
    </div>

    <div class="navbarContent1">
      <router-link to="Calculator" class="Routlink">Calculator</router-link>
    </div>
    <div class="navbarContent2">
      <router-link to="/contactForm" class="Routlink"><Calculator>Contact</Calculator></router-link>
    </div>
    <div class="navbarContent3">
      <router-link to="/Review" class="Routlink">Review</router-link>
    </div>
    <div class="navbarContent4">
      <router-link to="/" class="logout">log out</router-link>
    </div>
  </header>
</template>

<style scoped>
.taskbar {
  display: grid;
  grid-template-columns: auto  1fr 1fr 1fr 1fr 1fr 1fr 1fr auto;
  text-align: center;
  color: #ffffff;
  width: 100%;
  top:0;
  position: absolute;
  min-height: 80px;
  align-items: center;
  font-size: 20px;
  font-family: "Arial Black",serif;
  transition: min-height 0.3s ease, background-color 0.3s ease, color 0.3s ease;
}

.taskbar img{
  height: 80px;

}
.navbarContent1, .navbarContent2, .navbarContent3 {
  grid-column: auto; /* Bruker automatisk tildeling */
}
.navbarContent4 {
  grid-column: 8; /* Bruker automatisk tildeling */
}

.navbarContentImg{
  grid-column: 1;
  margin-left: 30px;
}
.taskbar:hover{
  background-color: rgba(255, 255, 255);
  transition: background-color 0.3s;
}

.taskbar:hover .Routlink{
  color:#181818;
  transition: background-color 0.3s;
}

.Routlink{
  color: #ffffff;
  text-decoration: none;
}
.logout{
    color: #ffffff;
    text-decoration: none;
    text-align: right;
}





</style>
<script setup>

</script>
