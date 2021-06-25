<template>
  <fragment>
    <ProgressBar :value="progreso" class="bar" />
  </fragment>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  computed: {
    ...mapGetters({
      progreso: "progress",
    }),
  },
  methods: {
    ...mapActions({
      selectPage: "setPageA",
    }),
  },
  /* mounted() {
    this.selectPage("asdasd");
  }, */
};
</script>

<style lang="sass" scoped>
$neivorBar: #f95758
$bluegray-50: #f7f9f9
::v-deep
  .bar.p-progressbar
    z-index: -1
    height: 1.5rem
    background: transparent
    border-radius: 0
    .p-progressbar-value
      background: $neivorBar
</style>
