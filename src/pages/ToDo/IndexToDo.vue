<template>
  <q-page>
    <div class="flex justify-center items-center">
      <p class="text-center" style="font-size: 60px">To Do List</p>
      <q-icon
        style="color: #f2c037"
        class="q-ml-sm"
        size="md"
        name="help_outline"
      >
        <q-tooltip transition-show="fscale" transition-hide="scale">
          <span style="font-size: 20px">
            Lista de tarefas desenvolvida com o Pinia, um gerenciador de estados
            assim como o Vuex.
          </span>
        </q-tooltip>
      </q-icon>
    </div>
    <q-card style="min-height: 400px; opacity: 60%" class="q-ma-md">
      <div class="row q-col-gutter-md flex justify-center">
        <div class="col-6">
          <q-input
            v-model="task"
            outlined
            dense
            style="font-size: 25px"
            @keyup.enter="addNewTask"
          />
        </div>
        <div class="flex items-center">
          <q-btn
            color="black"
            label="Adicionar Tarefa"
            @click="addNewTask"
            :loading="loading"
          />
        </div>

        <div
          class="flex justify-center col-12 text-black text-bold"
          style="font-size: 30px"
        >
          Lista de tarefas
        </div>
        <div></div>

        <div class="col-12" v-for="(task, i) in tasks.tasks" :key="i">
          <div class="row q-col-gutter-md q-pa-sm">
            <div class="col-7 flex task_p">
              <p class="text-black text-bold" style="font-size: 25px">
                {{ task.title }}
              </p>
            </div>
            <div class="col-5 flex justify-center items-center">
              <q-btn
                color="red"
                label="excluir"
                @click="tasks.deleteTask(task.id)"
              />
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
const loading = ref(false);

function addNewTask() {
  if (task.value.length > 1) {
    loading.value = true;
    setTimeout(() => {
      tasks.addTask({
        id: Math.floor(Math.random() * 10000),
        title: task.value,
      });
      task.value = "";
      loading.value = false;
    }, 0);
  } else {
    $q.notify({
      color: "negative",
      message:
        '<span style="font-size: 20px"> Insira uma tarefa válida </span>',
      timeout: 3000,
      position: "top",
      progress: true,
      html: true,
    });
  }
}
</script>
<style>
.task_p {
  word-break: break-word;
}
</style>
