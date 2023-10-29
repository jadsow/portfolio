<template>
  <q-page class="flex column">
    <div class="row q-col-gutter-sm">
      <div class="col-12 flex justify-center q-mt-md">
        <span
          style="font-size: 30px; text-decoration: underline"
          class="text-bold"
          >Habilidades e Soft Skills</span
        >
      </div>
      <div
        v-for="i in habilidades"
        :key="i"
        class="q-mt-md flex column items-center col-xs-12 col-sm-12 col-md-12 col-lg-12"
      >
        <span class="text-bold" style="font-size: 20px">
          {{ i.habilidade }}
        </span>
      </div>
    </div>
  </q-page>
</template>
<script setup>
const habilidades = [
  { habilidade: "HTML, CSS e Javascript" },
  { habilidade: "Vue.js" },
  { habilidade: "Vuex/Pinia" },
  { habilidade: "Quasar Framework" },
  { habilidade: "React.js e Next.js" },
  { habilidade: "Pipeline CI com Cypress" },
  { habilidade: "Integração com API's" },
  { habilidade: "Git e Github" },
  { habilidade: "Kanban, Scrum e Jira" },
  { habilidade: "Inglês intermediário (Ainda cursando)" },
  { habilidade: "Trabalho em equipe, boa comunicação" },
  { habilidade: "Responsabilidade e assiduidade" },
];
</script>
<style></style>
