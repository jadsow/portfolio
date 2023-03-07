<template lang="">
  <q-header class="q-pa-xs bg-black" style="border: 1px solid white">
    <q-toolbar v-if="$q.screen.gt.sm" class="q-gutter-sm">
      <q-img
        style="height: 50px; width: 50px"
        src="../assets/gif-basketball.gif"
      />
      <q-btn rounded color="grey" to="/home">Histórico Profissional</q-btn>
      <q-btn rounded color="grey" to="/conselhos">API Conselhos</q-btn>
      <q-space />
      <q-space />
      <div class="flex column items-center">
        <span class="text-caption">Jadson Pereira</span>
        <span class="text-caption">Desenvolvedor Web</span>
      </div>

      <q-avatar :size="sizeAvatar">
        <q-img src="img/perfil-jadson-1.png"> </q-img>
      </q-avatar>
    </q-toolbar>
    <q-toolbar v-else>
      <q-btn icon="menu" rounded>
        <q-menu class="bg-grey text-white">
          <q-list style="min-width: 100px">
            <q-item clickable to="/home" active-class="menu-link">
              <q-item-section>Home</q-item-section>
            </q-item>
            <q-item clickable to="/conselhos" active-class="menu-link">
              <q-item-section>Conselhos</q-item-section>
            </q-item>
          </q-list>
        </q-menu>
      </q-btn>
      <q-space />

      <q-avatar :size="sizeAvatar">
        <q-img src="img/perfil-jadson-1.png"> </q-img>
      </q-avatar>
    </q-toolbar>
  </q-header>
</template>

<script setup>
import { computed, ref } from "vue";
import { useQuasar } from "quasar";
import { openURL } from "quasar";

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

const buttonAnimation = ref(false);
</script>

<style>
.menu-link {
  color: white;
  background: #f2c037;
}

.menuSocialMediasRotate1 {
  transform: rotatey(180deg);
  transition: 0.3s ease-in-out;
}

.menuSocialMediasRotate2 {
  transform: rotate(0deg);
  transition: 0.4s ease-in-out;
}
</style>
