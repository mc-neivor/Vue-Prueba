<template>
  <div class="container">
    <ProgressBar v-if="progress" mode="indeterminate" class="bar" />
    <Button @click="add">Toggle</Button>
  </div>
</template>

<script>
import { ref } from "vue";
export default {
  setup() {
    let progress = ref(true);
    const add = () => {
      progress.value = !progress.value;
    };

    return {
      progress,
      add,
    };
  },
};
</script>

<style lang="scss" scoped>
.container {
  ::v-deep(.bar.p-progressbar) {
    height: 2rem;
    background: transparent;
    .p-progressbar-value {
      background: var(--pink-400);
    }
  }

  button {
    background: blue;
    color: #fff;
    outline: none;
    border: none;
    padding: 0.25rem 0.5rem;
    border-radius: 0.25rem;
  }
}
</style>
