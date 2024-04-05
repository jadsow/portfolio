import { computed } from "vue";
import { useQuasar } from "quasar";

export const colorButtons = () => {
  const $q = useQuasar();
  let buttonsDesktop = computed(() =>
    $q.screen.gt.sm ? "light-blue-10 text-bold" : "light-blue-10 text-bold"
  );

  return {
    buttonsDesktop,
  };
};
