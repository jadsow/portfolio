<template>
  <q-page>
    <div class="flex justify-center items-center">
      <p style="font-size: 60px" class="text-center">Precisa de um conselho?</p>
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

      <div class="flex items-center q-mt-sm q-ml-sm">
        <q-icon style="color: #f2c037" size="md" name="help_outline">
          <q-tooltip transition-show="fscale" transition-hide="scale">
            <span style="font-size: 20px">
              Esta parte foi desenvolvida a partir do consumo de uma API para
              dar conselhos, com axios.
            </span>
          </q-tooltip>
        </q-icon>
      </div>
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
import apis from "src/services/apis";

const conselho = ref("");
const loading = ref(false);
async function onRequest() {
  try {
    loading.value = true;
    const data = await apis.Conselho("advice");
    conselho.value = data;
    loading.value = false;
  } catch (error) {
    console.log(error);
  }
}
</script>

<style></style>
