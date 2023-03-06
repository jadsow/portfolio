<template lang="">
  <q-header class="q-pa-xs bg-black">
    <q-toolbar class="q-gutter-sm">
      <q-img style="height: 50px; width: 50px" src="../assets/gif-basketball.gif" />
      <q-btn rounded color="grey" to="/">Home</q-btn>
      <q-btn rounded color="grey" to="/conselhos">Conselhos</q-btn>
      <q-space/>
      <q-space />
      <q-avatar :size="sizeAvatar">
        <q-img src="img/perfil-jadson-1.png"> </q-img>
      </q-avatar>

    </q-toolbar>
  </q-header>
</template>


<script setup>
import { computed } from "vue";
import { useQuasar } from "quasar";

const $q = useQuasar();
const sizeAvatar = computed(() => {
  let size = {
    xs: "48px",
    sm: "48px",
    md: "60px",
    lg: "90px",
    xl: "90px",
  };
  return size[$q.screen.name];
});
</script>
<style lang=""></style>
