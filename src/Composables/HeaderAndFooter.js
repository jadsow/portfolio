import { computed } from "vue";
import { useQuasar } from "quasar";

export const colorMainLayout = () => {
  const $q = useQuasar();

  let colorFooter = computed(() =>
    $q.screen.gt.sm
      ? "flex justify-end items-center bg-blue-grey-8"
      : "flex justify-center items-center bg-blue-grey-8"
  );
  let colorHeader = "q-pa-xs bg-blue-grey-10";

  return {
    colorFooter,
    colorHeader,
  };
};
