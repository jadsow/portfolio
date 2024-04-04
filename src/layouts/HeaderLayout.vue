<template>
  <q-header :class="colorHeader">
    <q-toolbar v-if="$q.screen.gt.md" class="q-gutter-sm">
      <q-btn :color="buttonsDesktop" to="/home">Histórico Profissional</q-btn>
      <q-btn :color="buttonsDesktop" to="/educacional"
        >Histórico Educacional</q-btn
      >
      <q-btn :color="buttonsDesktop" to="/competencias"
        >Habilidades e Soft Skills</q-btn
      >
      <q-btn :color="buttonsDesktop" to="/conselhos">API Conselhos</q-btn>
      <q-btn :color="buttonsDesktop" to="/filmes">API Filmes</q-btn>
      <q-btn :color="buttonsDesktop" to="/todo">ToDo Pinia</q-btn>
      <q-btn
        :color="buttonsDesktop"
        @click="openURL('https://desafio-frontend-api.vercel.app/#/')"
      >
        Integração API Rick and Morty
      </q-btn>
      <q-space />
      <div class="flex column items-center">
        <span class="text-caption text-bold">Jadson Pereira</span>
        <span class="text-caption text-bold">Desenvolvedor Front-End</span>
      </div>
    </q-toolbar>
    <q-toolbar v-else>
      <q-btn icon="menu">
        <q-menu class="bg-grey-10 text-white">
          <q-list style="min-width: 100px">
            <q-item clickable to="/home" active-class="menu-link">
              <q-item-section>Histórico Profissional</q-item-section>
            </q-item>
            <q-item clickable to="/educacional" active-class="menu-link">
              <q-item-section>Histórico Educacional</q-item-section>
            </q-item>
            <q-item clickable to="/competencias" active-class="menu-link">
              <q-item-section>Habilidades e Soft Skills</q-item-section>
            </q-item>
            <q-item clickable to="/conselhos" active-class="menu-link">
              <q-item-section>Conselhos</q-item-section>
            </q-item>
            <q-item clickable to="/filmes" active-class="menu-link">
              <q-item-section>Filmes</q-item-section>
            </q-item>
            <q-item clickable to="/todo" active-class="menu-link">
              <q-item-section>ToDo Pinia</q-item-section>
            </q-item>
            <q-item
              clickable
              @click="openURL('https://desafio-frontend-api.vercel.app/#/')"
              active-class="menu-link"
            >
              <q-item-section>API Rick and Morty</q-item-section>
            </q-item>
          </q-list>
        </q-menu>
      </q-btn>
      <q-space />
      <div class="flex column items-center">
        <span class="text-caption">Jadson Pereira</span>
        <span class="text-caption">Desenvolvedor Front-End</span>
      </div>
    </q-toolbar>
  </q-header>
</template>

<script setup>
import { computed, ref } from "vue";
import { useQuasar } from "quasar";
import { openURL } from "quasar";
import { colorButtons } from "../Composables/index.js";
import { colorMainLayout } from "../Composables/index.js";

const $q = useQuasar();
const { buttonsDesktop } = colorButtons();
const { colorHeader } = colorMainLayout();
</script>

<style>
.menu-link {
  color: white;
  background: #272725;
}
</style>
