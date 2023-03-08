<template lang="">
  <q-header class="q-pa-xs bg-black" style="border: 1px solid white">
    <q-toolbar v-if="$q.screen.gt.sm" class="q-gutter-sm">
      <q-btn rounded color="grey" to="/home">Histórico Profissional</q-btn>
      <q-btn rounded color="grey" to="/conselhos">API Conselhos</q-btn>
      <q-btn rounded color="grey" to="/todo">ToDo Pinia</q-btn>
      <q-space />
      <q-space />
      <div class="flex column items-center">
        <span class="text-caption">Jadson Pereira</span>
        <span class="text-caption">Desenvolvedor Web</span>
        <div class="loader">
        </div>
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
            <q-item clickable to="/todo" active-class="menu-link">
              <q-item-section>ToDo Pinia</q-item-section>
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

.loader {
  position: relative;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background: linear-gradient(45deg,transparent,transparent 40%, #e5f403);
  animation: animate 2s linear infinite;
}

@keyframes animate {
  0% {
    transform: rotate(0deg);
    filter: hue-rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
    filter: hue-rotate(360deg);
  }
}

.loader:before {
  content: '';
  position: absolute;
  top: 6px;
  left: 6px;
  bottom: 6px;
  right: 6px;
  background: #000;
  border-radius: 50%;
  z-index: 1000;
}

.loader:after {
  content: '';
  position: absolute;
  top: 0px;
  left: 0px;
  bottom: 0px;
  right: 0px;
  background: linear-gradient(45deg,transparent,transparent 40%, #e5f403);
  border-radius: 50%;
  z-index: 1000;
  z-index: 1;
  filter: blur(30px);
}
</style>
