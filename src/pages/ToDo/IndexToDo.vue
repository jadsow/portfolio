<template>
  <q-page>
    <p class="text-center" style="font-size: 60px">To Do List</p>
    <q-card style="min-height: 400px; opacity: 40%" class="q-ma-md">
      <div class="row q-col-gutter-md flex justify-center">
        <div class="col-6">
          <q-input v-model="task" outlined style="font-size: 25px;"/>
        </div>
        <div class="flex items-center">
          <q-btn color="black" label="Adicionar Tarefa" @click="addNewTask" :loading="loading" />
        </div>

        <div
        class="flex justify-center col-12 text-black text-bold"
        style="font-size: 30px"
        >
        Lista de tarefas
      </div>
        <div></div>

        <div class="col-12" v-for="task in tasks.tasks" :key="task">
          <div class="row q-col-gutter-md q-pa-sm">
            <div class="col-7 flex task_p">
              <p class="text-black text-bold" style="font-size: 25px">
                {{ task.title }}
              </p>
            </div>
            <div class="col-5 flex justify-center items-center">
              <q-btn color="red" label="excluir" />
            </div>
            <div class="col-12"><q-separator /></div>
          </div>
          <div></div>
        </div>
      </div>
    </q-card>
  </q-page>
</template>
<script setup>
import { ref } from "vue";
import { taskStore } from "src/stores/todo";
import { useQuasar } from "quasar";


const $q = useQuasar();
const tasks = taskStore();
const task = ref("");
const loading = ref(false)

function addNewTask() {
  if (task.value.length > 1) {
    loading.value = true
    setTimeout(() => {
      tasks.addTask({
        id: Math.floor(Math.random() * 10000),
        title: task.value,
      });
      task.value = "";
      loading.value = false
    }, 2000);

  } else {
    $q.notify({
      type: "warning",
      message: "Insira uma tarefa.",
      timeout: 3000,
      position: "top",
    });
  }
}
</script>
<style>
.task_p {
  word-break: break-word;
}
</style>
