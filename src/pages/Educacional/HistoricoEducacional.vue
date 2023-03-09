<template>
  <q-page class="flex column">
    <div class="row q-col-gutter-sm">
      <div class="col-12 flex justify-center q-mt-md">
        <span style="font-size: 30px; text-decoration: underline" class="text-bold">Histórico Educacional</span>
      </div>
      <div v-for="i in historico" :key="i" class="q-mt-md flex column text-center col-xs-12 col-sm-12 col-md-12 col-lg-12">
        <span class="text-bold" style="font-size: 2em"> {{ i.instituicao }} </span>
        <span style="font-size: 20px;"> {{ i.curso }} </span>
        <span style="font-size: 20px" class="text-bold text-italic"> {{ i.premio }} </span>
      </div>

      <div class="col-12 flex justify-center q-mt-md">
        <span style="font-size: 30px; text-decoration: underline;" class="text-bold">Outras Qualificações</span>
      </div>
      <div v-for="i in qualificacoes" :key="i" class="q-mt-md flex column text-center col-xs-12 col-sm-12 col-md-12 col-lg-12">
        <span class="text-bold" style="font-size: 20px"> {{ i.qualificacao }} </span>
      </div>
    </div>
  </q-page>
</template>
<script setup>

const historico = [
  {instituicao: 'UDESC - Universidade do Estado de Santa Catarina', curso: 'Bacharel em Administração Pública', premio: 'Prêmio melhor estágio curricular supervisionado (TCC)'},
  {instituicao: 'SENAC - Serviço Nacional de Aprendizagem', curso: 'Técnico em redes de computadores e informática'},
  {instituicao: 'IFSC - Instituto Federal de Santa Catarina', curso: 'Módulo 1 - Sistemas Eletrônicos / Módulos 1 e 2 - Curso técnico em informática'},
]

const qualificacoes = [
  {qualificacao: 'Curso Vue JS - O guia completo - Udemy'},
  {qualificacao: 'Qualificação profissional técnica em analista de suporte de redes de computadores para internet'},
  {qualificacao: 'Certificação Cisco módulo 1'},
  {qualificacao: 'React do Zero ao Pro - EBAC - Com previsão de término em set/2023'},
]

</script>
<style>



</style>
