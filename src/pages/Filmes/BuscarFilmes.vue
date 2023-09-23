<template>
  <q-page>
    <div class="flex justify-center items-center">
      <p style="font-size: 60px" class="text-center">Pesquise por um filme</p>

      <q-icon
        style="color: #f2c037"
        class="q-ml-sm"
        size="md"
        name="help_outline"
      >
        <q-tooltip transition-show="fscale" transition-hide="scale">
          <span style="font-size: 20px">
            Esta parte foi desenvolvida a partir do consumo de uma API para te
            passar informações sobre um filme desejado, com axios. Não esqueça
            de colocar o nome em Inglês!
          </span>
        </q-tooltip>
      </q-icon>
    </div>

    <p class="text-red text-center text-bold">
      Infelizmente essa API só funciona localmente :(
    </p>

    <div class="flex justify-center q-mt-md">
      <q-input
        v-model="filme"
        class="flex justify-center bg-grey-2"
        :input-style="{ 'font-weight': 'bold' }"
        style="font-size: 30px; width: 60%; opacity: 50%"
        @keyup.enter="buscarFilme()"
        outlined
        dense
      />
    </div>

    <div class="flex justify-center items-center">
      <div>
        <q-btn
          label="Pesquisar"
          class="q-mt-sm"
          color="grey"
          @click="buscarFilme"
          rounded
          :loading="loading"
        ></q-btn>
      </div>
    </div>

    <div class="row q-col-gutter-md q-mt-md q-ma-md">
      <div
        class="col-xs-12 col-sm-12 col-md-8 column q-pa-sm"
        style="border: 1px solid white"
      >
        <span style="font-size: 30px">
          <span style="font-weight: bold; text-decoration: underline"
            >Filme</span
          >: {{ filmeRecebido.Title }}
        </span>
        <span style="font-size: 30px">
          <span style="font-weight: bold; text-decoration: underline"
            >Lançamento</span
          >: {{ filmeRecebido.DVD }}
        </span>
        <span style="font-size: 30px">
          <span style="font-weight: bold; text-decoration: underline"
            >Diretor</span
          >: {{ filmeRecebido.Director }}
        </span>
        <span style="font-size: 30px">
          <span style="font-weight: bold; text-decoration: underline"
            >Resumo</span
          >: {{ filmeRecebido.Plot }}
        </span>
      </div>
      <div class="col-xs-12 col-sm-12 col-md-4 flex justify-center">
        <img :src="filmeRecebido.Poster" alt="" />
      </div>
    </div>
  </q-page>
</template>

<script setup>
import { useQuasar } from "quasar";
import { ref, computed, watch } from "vue";
import apis from "../../api/apis";
import { buscarFilmes } from "src/stores/filmes";

const $q = useQuasar();
const filme = ref("");
const loading = ref(false);
const store = buscarFilmes();
const data = computed(() => {
  return store.retornarFilme;
});
const filmeRecebido = ref({
  Title: "",
  DVD: "",
  Director: "",
  Plot: "",
  Poster: "",
});

watch(data, () => {
  filmeRecebido.value.Title =
    data.value.Title ||
    "Filme não encontrado (Dê prioridade pelo seu nome em inglês)";
  filmeRecebido.value.DVD = data.value.DVD;
  filmeRecebido.value.Director = data.value.Director;
  filmeRecebido.value.Plot = data.value.Plot;
  filmeRecebido.value.Poster = data.value.Poster;
});

function buscarFilme() {
  if (filme.value.length > 1) {
    onRequest();
  } else {
    $q.notify({
      color: "negative",
      message: '<span style="font-size: 20px"> Insira um filme válido </span>',
      timeout: 3000,
      position: "top",
      progress: true,
      html: true,
    });
  }
}

async function onRequest() {
  loading.value = true;
  try {
    const data = await apis.Filmes(`${filme.value}`);
    store.addFilme(data);
    loading.value = false;
    filme.value = "";
  } catch (error) {
    loading.value = false;
    store.clearStore();
  }
}
</script>

<style></style>
