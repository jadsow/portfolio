<template>
  <div class="row q-col-gutter-md q-mb-md">
    <div class="col-12">
      <ApresentacaoJadson />
    </div>
    <div class="col-12 text-center q-gutter-sm">
      <q-btn :color="buttonsDesktop" to="/conselhos">API Conselhos</q-btn>
      <!-- <q-btn :color="buttonsDesktop" to="/filmes">API Filmes</q-btn> -->
      <q-btn :color="buttonsDesktop" to="/todo">ToDo Pinia</q-btn>
      <q-btn
        :color="buttonsDesktop"
        @click="openURL('https://desafio-frontend-api.vercel.app/#/')"
      >
        Integração API Rick and Morty
      </q-btn>
      <q-space />
    </div>
  </div>
  <div class="row q-col-gutter-md">
    <div class="col-xs-12 col-sm-12 col-md-4">
      <div class="q-mx-sm">
        <q-card class="q-pa-sm cardApresentacao" :style="card">
          <div class="row">
            <div class="col-12 flex justify-center">
              <span class="text-h5 text-center">Histórico Profissional</span>
            </div>
            <div
              v-for="i in historicoProfissional"
              :key="i"
              class="q-mt-md flex column text-center col-xs-12 col-sm-12 col-md-12 col-lg-12"
            >
              <span style="font-size: 17px">
                {{ i.empresa }}
              </span>
              <span style="font-size: 15px"> {{ i.funcao }} </span>
            </div>
          </div>
        </q-card>
      </div>
    </div>
    <div class="col-xs-12 col-sm-12 col-md-4">
      <div class="q-mx-sm">
        <q-card class="q-pa-sm cardApresentacao" :style="card">
          <div class="row">
            <div class="col-12 flex justify-center">
              <span class="text-h5 text-center">Histórico Educacional</span>
            </div>
            <div
              v-for="i in historico"
              :key="i"
              class="q-mt-md flex column text-center col-xs-12 col-sm-12 col-md-12 col-lg-12"
            >
              <span class="text-bold" style="font-size: 17px">
                {{ i.instituicao }}
              </span>
              <span style="font-size: 15px"> {{ i.curso }} </span>
              <span style="font-size: 15px" class="text-bold text-italic">
                {{ i.premio }}
              </span>
            </div>

            <div class="col-12 flex justify-center q-mt-sm">
              <span
                style="font-size: 17px; text-decoration: underline"
                class="text-bold"
                >Cursos Livres</span
              >
            </div>
            <div
              v-for="i in qualificacoes"
              :key="i"
              class="q-mt-xsflex column text-center col-xs-12 col-sm-12 col-md-12 col-lg-12"
            >
              <span style="font-size: 15px">
                {{ i.qualificacao }}
              </span>
            </div>
          </div>
        </q-card>
      </div>
    </div>
    <div class="col-xs-12 col-sm-12 col-md-4">
      <div class="q-mx-sm q-mb-md">
        <q-card class="q-pa-sm cardApresentacao" :style="card">
          <div class="row">
            <div class="col-12 flex justify-center">
              <span class="text-h5 text-center q-mb-md"
                >Habilidades Consolidadas</span
              >
            </div>
            <div
              v-for="i in habilidades"
              :key="i"
              class="flex column items-center col-xs-12 col-sm-12 col-md-12 col-lg-12"
            >
              <span style="font-size: 15px">
                {{ i.habilidade }}
              </span>
            </div>
          </div>
          <div class="row">
            <div class="col-12 flex justify-center q-mt-md">
              <span
                style="font-size: 17px; text-decoration: underline"
                class="text-bold"
                >Conhecimentos</span
              >
            </div>
            <div
              v-for="i in conhecimentos"
              :key="i"
              class="flex column items-center col-xs-12 col-sm-12 col-md-12 col-lg-12"
            >
              <span style="font-size: 15px">
                {{ i.conhecimento }}
              </span>
            </div>
          </div>
        </q-card>
      </div>
    </div>
  </div>
</template>
<script setup>
import { useQuasar } from "quasar";
import { colorButtons, cardSize } from "../../Composables/index";
import { openURL } from "quasar";
import ApresentacaoJadson from "../Apresentacao/ApresentacaoJadson.vue";

const $q = useQuasar();
const { buttonsDesktop } = colorButtons();
const { card } = cardSize();

const historicoProfissional = [
  {
    empresa: "Ibrowse Consultoria - Nov/23 - Atual",
    funcao:
      "Desenvolvedor Full-stack Pleno - C# - .NET Core - Microsoft SQL Server - Bootstrap - jQuery - Javascript - Angular - Angular Material",
  },
  {
    empresa: "Panteu Sistemas - Fev/22",
    funcao: "Desenvolvedor Front-end Pleno - Vue.js - Quasar Framework",
  },
  {
    empresa:
      "FAPESC - Fundação de Amparo à Pesquisa e Inovação do Estado de Santa Catarina",
    funcao: "Coordenador de projetos de inovação",
  },
  {
    empresa: "SANTUR - Agência de Desenvolvimento do Turismo de Santa Catarina",
    funcao: "Apoio administrativo junto à Gerência de Inteligência de dados",
  },
  {
    empresa: "Oi Telecom - 2017 - 2019",
    funcao:
      "Técnico ADSL - Reparos, instalações e configurações do acesso a internet",
  },
];

const historico = [
  {
    instituicao: "FIAP Pós tech - Em andamento",
    curso: "Arquitetura de Sistemas .NET",
  },
  {
    instituicao: "UDESC - Universidade do Estado de Santa Catarina",
    curso: "Bacharel em Administração Pública",
    premio: "Prêmio melhor estágio curricular supervisionado (TCC)",
  },
  {
    instituicao: "SENAC - Serviço Nacional de Aprendizagem",
    curso: "Técnico em redes de computadores e informática",
  },
];

const qualificacoes = [
  { qualificacao: "Curso Vue JS - O guia completo - Udemy" },
  {
    qualificacao:
      "Next.js e React - Curso Completo - Aprenda com Projetos - Cod3r Cursos Online",
  },
  {
    qualificacao: "FastAPI - The Complete Course 2024 (Beginner + Advanced)",
  },
  {
    qualificacao: "Testes automatizados com Cypress - básico",
  },
  {
    qualificacao:
      "Curso de ASP .NET Core MVC - Criando um Site do Zero (NET 6)",
  },
];

const habilidades = [
  { habilidade: "HTML, CSS e Javascript" },
  { habilidade: "Vue.js" },
  { habilidade: "Vuex/Pinia" },
  { habilidade: "Quasar Framework" },
  { habilidade: "Pipeline CI com Cypress" },
  { habilidade: "ASP .NET Core MVC" },
  { habilidade: ".NET Framework" },
  { habilidade: "C#" },
  { habilidade: "Microsoft SQL Server" },
  { habilidade: "Mobile first" },
  { habilidade: "Git e Github" },
  { habilidade: "Metodologias ágeis" },
];

const conhecimentos = [
  { conhecimento: "Java, Spring e Spring boot 3" },
  { conhecimento: "MySQL" },
  { conhecimento: "Docker" },
  { conhecimento: "React.js e Next.js" },
];
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Josefin+Sans:ital,wght@0,100..700;1,100..700&display=swap");

* {
  font-family: "Josefin Sans", sans-serif;
  font-optical-sizing: auto;
  font-weight: 400;
  font-style: normal;
}

.cardApresentacao {
  /* Define o gradiente inicial */
  background: radial-gradient(ellipse at bottom, #1b2735 0%, #181b29);
}

.cardApresentacao:hover {
  opacity: 0.9; /* Opacidade parcial para revelar o gradiente gradualmente */
  box-shadow: 0 0 0 rgba(255, 255, 255, 0); /* Define uma sombra inicial sem desfoque */
}
</style>
