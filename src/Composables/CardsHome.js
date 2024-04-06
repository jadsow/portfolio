import { computed } from "vue";
import { useQuasar } from "quasar";

export const cardSize = () => {
  const $q = useQuasar();

  // Use uma função dentro de computed para calcular o valor com base nas telas
  const card = computed(() => {
    if ($q.screen.xs) {
      return "min-height: 300px";
    } else if ($q.screen.sm) {
      return "min-height: 300px";
    } else if ($q.screen.md) {
      return "min-height: 560px";
    } else if ($q.screen.lg) {
      return "min-height: 450px";
    } else {
      return "min-height: 450px"; // Retorne um valor padrão se nenhum caso for atendido
    }
  });

  return {
    card,
  };
};
