<template>
  <q-layout view="lHh Lpr lFf">
  <HeaderLayout/>
    <div class="container_login">
      <q-page-container>
        <router-view />
      </q-page-container>
    </div>

  </q-layout>
</template>

<script setup>
import HeaderLayout from "./HeaderLayout.vue";
</script>

<style>
.container_login {
  position: relative;
  height: 100vh;
  background: linear-gradient(rgba(45, 55, 72, 0.75), rgba(45, 55, 72, 1)),
    url("assets/background/background-earth.jpg") no-repeat;
  background-size: cover;
}
</style>
