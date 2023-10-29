import { computed } from "vue";
import { useQuasar } from "quasar";

export const colorMainLayout = () => {
  const $q = useQuasar();

  let colorFooter = computed(() =>
    $q.screen.gt.sm
      ? "flex justify-end items-center bg-deep-purple-8"
      : "flex justify-center items-center bg-deep-purple-8"
  );
  let colorHeader = "q-pa-xs bg-deep-purple-8";

  return {
    colorFooter,
    colorHeader,
  };
};
