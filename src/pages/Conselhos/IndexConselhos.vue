<template>
  <q-page>
    <div class="flex justify-center items-center bordas_div">
      <h3 class="text-grey text-center">Precisa de um conselho?</h3>
    </div>

    <div class="flex justify-center">
      <q-btn
        label="Me dê um conselho"
        class="q-mt-sm"
        color="grey"
        @click="onRequest"
        rounded
        :disable="loading"
      ></q-btn>
      <div></div>
    </div>
    <div class="flex justify-center items-center text-center q-mt-md q-pa-sm">
      <q-spinner-tail color="white" size="5em" v-if="loading" />
      <p v-else style="color: whitesmoke; font-size: 30px" class="text-bold">
        {{ conselho }}
      </p>
    </div>
  </q-page>
</template>

<script setup>
import { ref } from "vue";
import Conselho from "../../api/conselho";

const conselho = ref("");
const loading = ref(false);
async function onRequest() {
  try {
    loading.value = true;
    const data = await Conselho.get("advice");
    conselho.value = data;
    loading.value = false;
  } catch (error) {
    console.log(error);
  }
}
</script>

<style>

.bordas_div {
  border: 2px solid rgb(255, 255, 255);
}
</style>
