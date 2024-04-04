import { computed } from "vue";
import { useQuasar } from "quasar";

export const colorButtons = () => {
  const $q = useQuasar();
  let buttonsDesktop = computed(() =>
    $q.screen.gt.sm ? "deep-orange-5 text-bold" : ""
  );

  return {
    buttonsDesktop,
  };
};
