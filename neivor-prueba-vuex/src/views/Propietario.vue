<template>
  <div class="p-col-12 p-md-6 p-lg-3">
    <h1>Registrar nueva visita</h1>
    <div>
      <NavButton name="Favoritos" nav="/favoritos" i="star" color="yellow" />
      <NavButton name="Nuevo visitante" nav="/datos" i="user" />
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";

import NavButton from "../components/NavButton.vue";
export default {
  components: {
    NavButton,
  },
  methods: {
    ...mapActions({
      selectPage: "setPageA",
    }),
  },
  mounted() {
    this.selectPage("Registrar Visita");
  },
};
</script>

<style lang="sass" scoped>
.container
</style>
