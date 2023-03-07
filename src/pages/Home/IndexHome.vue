<template>
  <q-page class="flex column">
    <div class="row q-col-gutter-sm">
      <div class="col-12 flex justify-center q-mt-md">
        <span style="font-size: 30px" class="text-bold">Histórico Profissional</span>
      </div>
      <div v-for="i in historico" :key="i" class="q-mt-md flex column text-center col-xs-12 col-sm-12 col-md-12 col-lg-12">
        <p class="text-bold" style="font-size: 2em"> {{ i.empresa }} </p>
        <p style="font-size: 20px;"> {{ i.funcao }} </p>
      </div>
    </div>
  </q-page>
</template>
<script setup>

const historico = [
  {empresa: 'Panteu Sistemas - Fev/22 - Atual', funcao: 'Desenvolvedor front-end (Vue.JS e Quasar Framework)'},
  {empresa: 'FAPESC - Fundação de Amparo à Pesquisa e Inovação do Estado de Santa Catarina', funcao: 'Coordenador de projetos de inovação'},
  {empresa: 'SANTUR - Agência de Desenvolvimento do Turismo de Santa Catarina', funcao: 'Apoio administrativo junto à Gerência de Inteligência de dados'},
  {empresa: 'FAPESC - Fundação de Amparo à Pesquisa e Inovação do Estado de Santa Catarina', funcao: 'Estágio no setor de Gerência e Inovação'},
  {empresa: 'Oi Telecom - 2017 - 2017', funcao: 'Técnico ADSL - Reparos, instalações e configurações do acesso a internet'},
  {empresa: 'Produza SA - 2013', funcao: 'Estágio na área de testes de placas eletrônicas'},
]

</script>
<style>



</style>
