<template>
  <q-layout view="hHh lpR fFf">
    <HeaderLayout />
    <div class="container_login">
      <q-page-container>
        <router-view v-slot="{Component, route}">
          <transition :class="route.meta.transition" mode="out-in">
            <component  :is="Component"/>
          </transition>
        </router-view>
      </q-page-container>
    </div>
    <q-footer class="flex justify-center bg-black">
      Desenvolvido por Jadson Pereira
    </q-footer>
  </q-layout>
</template>

<script setup>
import HeaderLayout from "./HeaderLayout.vue";
import 'animate.css';

</script>

<style>
.container_login {
  position: relative;
  height: 100%;
  background: linear-gradient(rgba(45, 55, 72, 0.75), rgba(45, 55, 72, 1)),
    url("assets/background/background-earth.jpg") no-repeat;
  background-size: cover;
}
@import url("https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@300&display=swap");
* {
  font-family: "Cormorant Garamond", serif;
  color: white;
}

.movearea {
  transition: 0.3s background-color ease;
}





</style>
