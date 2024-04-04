<template>
  <q-layout view="hHh lpR fFf">
    <HeaderLayout />
    <div class="container_login">
      <q-page-container>
        <router-view v-slot="{ Component, route }">
          <transition :class="route.meta.transition" mode="out-in">
            <component :is="Component" />
          </transition>
        </router-view>
      </q-page-container>
    </div>
    <q-footer :class="colorFooter">
      <span class="text-body1"
        >Desenvolvido por Jadson Pereira - 2024 &copy;</span
      >
      <div class="flex">
        <q-item
          clickable
          @click="openURL('https://wa.me/5548984176989?text=Ol%C3%A1%21')"
        >
          <q-avatar size="sm" square>
            <q-img src="../assets/icons/whatsapp.png" />
          </q-avatar>
        </q-item>
        <q-item clickable @click="openURL('https://github.com/jadsow')">
          <q-avatar size="sm">
            <q-img src="../assets/icons/github.png" />
          </q-avatar>
        </q-item>
        <q-item
          clickable
          @click="openURL('https://www.facebook.com/jadson.mariaeduarda')"
        >
          <q-avatar size="sm">
            <q-img src="../assets/icons/facebook.png" />
          </q-avatar>
        </q-item>
        <q-item
          clickable
          @click="openURL('https://www.instagram.com/p.jadsonn/')"
        >
          <q-avatar size="sm">
            <q-img src="../assets/icons/instagram.png" />
          </q-avatar>
        </q-item>
        <q-item
          clickable
          @click="
            openURL('https://www.linkedin.com/in/jadson-pereira-a64421191/')
          "
        >
          <q-avatar size="sm">
            <q-img src="../assets/icons/linkedin.png" />
          </q-avatar>
        </q-item>
      </div>
    </q-footer>
  </q-layout>
</template>

<script setup>
import HeaderLayout from "./HeaderLayout.vue";
import { openURL } from "quasar";
import { colorMainLayout } from "../Composables/index.js";

import "animate.css";

const { colorFooter } = colorMainLayout();
</script>

<style>
.container_login {
  position: relative;
  height: 100%;
  background: linear-gradient(rgba(45, 55, 72, 0.75), rgb(43, 50, 71)),
    url("assets/background/background-earth.jpg") no-repeat;
  background-size: cover;
}
@import url("https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@300&display=swap");
* {
  font-family: "Cormorant Garamond", serif;
  color: white;
}
</style>
