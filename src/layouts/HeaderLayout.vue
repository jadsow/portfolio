<template>
  <div></div>
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
