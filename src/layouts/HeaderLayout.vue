<template lang="">
  <q-header class="q-pa-xs bg-grey-6" style="border: 1px solid white">
    <q-toolbar v-if="$q.screen.gt.md" class="q-gutter-sm">
      <q-btn color="grey-9" to="/home">Histórico Profissional</q-btn>
      <q-btn color="grey-9" to="/educacional">Histórico Educacional</q-btn>
      <q-btn color="grey-9" to="/competencias">Habilidades e Soft Skills</q-btn>
      <q-btn color="grey-9" to="/conselhos">API Conselhos</q-btn>
      <q-btn color="grey-9" to="/filmes">API Filmes</q-btn>
      <q-btn color="grey-9" to="/todo">ToDo Pinia</q-btn>
      <q-space />
      <q-space />
      <div class="flex column items-center">
        <span class="text-caption">Jadson Pereira</span>
        <span class="text-caption">Desenvolvedor Web</span>
      </div>
    </q-toolbar>
    <q-toolbar v-else>
      <q-btn icon="menu">
        <q-menu class="bg-grey text-white">
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
          </q-list>
        </q-menu>
      </q-btn>
      <q-space />
      <div class="flex column items-center">
        <span class="text-caption">Jadson Pereira</span>
        <span class="text-caption">Desenvolvedor Web</span>
      </div>
    </q-toolbar>
  </q-header>
</template>

<script setup>
import { computed, ref } from "vue";
import { useQuasar } from "quasar";

const $q = useQuasar();
</script>

<style>
.menu-link {
  color: white;
  background: #272725;
}
</style>
