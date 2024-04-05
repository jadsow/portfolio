<template>
  <div class="row q-col-gutter-md q-mb-md">
    <div class="col-12 text-center q-gutter-sm">
      <q-btn :color="buttonsDesktop" to="/conselhos">API Conselhos</q-btn>
      <q-btn :color="buttonsDesktop" to="/filmes">API Filmes</q-btn>
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
                >Outras Qualificações</span
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
      <div class="q-mx-sm">
        <q-card class="q-pa-sm cardApresentacao" :style="card">
          <div class="row">
            <div class="col-12 flex justify-center">
              <span class="text-h5 text-center q-mb-md"
                >Habilidades e Soft Skills</span
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
        </q-card>
      </div>
    </div>
  </div>
</template>
<script setup>
import { useQuasar } from "quasar";
import { colorButtons, cardSize } from "../../Composables/index";
import { openURL } from "quasar";

const $q = useQuasar();
const { buttonsDesktop } = colorButtons();
const { card } = cardSize();

const historicoProfissional = [
  {
    empresa: "Ibrowse Consultoria - Nov/23 - Atual",
    funcao: "Desenvolvedor Front-end Pleno",
  },
  {
    empresa: "Panteu Sistemas - Fev/22",
    funcao: "Desenvolvedor Front-end",
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
    qualificacao: "Java: criando a sua primeira aplicação - Alura",
  },
  {
    qualificacao: "Java: aplicando a Orientação a Objetos - Alura",
  },
  {
    qualificacao:
      "Java: consumindo API, gravando arquivos e lidando com erros - Alura",
  },
  {
    qualificacao: "Testes automatizados com Cypress - básico",
  },
];

const habilidades = [
  { habilidade: "HTML, CSS e Javascript" },
  { habilidade: "Vue.js" },
  { habilidade: "Vuex/Pinia" },
  { habilidade: "Java, Spring e Spring boot 3" },
  { habilidade: "MySQL" },
  { habilidade: "Docker" },
  { habilidade: "Quasar Framework" },
  { habilidade: "React.js e Next.js" },
  { habilidade: "Pipeline CI com Cypress" },
  { habilidade: "Integração com API's" },
  { habilidade: "Git e Github" },
  { habilidade: "Kanban, Scrum e Jira" },
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
  background-color: #212025;
  border: 1px solid white;
  transition: transform 0.3s ease;
}

.cardApresentacao:hover {
  background-color: #343238;
  transform: scale(1.01);
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
}
</style>
