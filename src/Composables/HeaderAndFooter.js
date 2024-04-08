import { computed } from "vue";
import { useQuasar } from "quasar";

export const colorMainLayout = () => {
  const $q = useQuasar();

  let colorFooter = computed(() =>
    $q.screen.gt.sm
      ? "flex justify-end items-center"
      : "flex justify-center items-center"
  );
  let colorHeader = "q-pa-xs bg-light-blue-10";

  return {
    colorFooter,
    colorHeader,
  };
};
