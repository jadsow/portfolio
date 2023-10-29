import { computed } from "vue";
import { useQuasar } from "quasar";

export const colorButtons = () => {
  const $q = useQuasar();
  let buttonsDesktop = computed(() =>
    $q.screen.gt.sm ? "deep-purple-6 text-bold" : ""
  );

  return {
    buttonsDesktop,
  };
};
