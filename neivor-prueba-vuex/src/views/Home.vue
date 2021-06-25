<template>
  <div class="p-col-12 p-md-6 p-lg-3">
    <div class="p-text-bold">
      Pantalla solo para elegir perfil, solo para desarrolladores
    </div>
    <div class="actions">
      <NavButton name="Propietario" nav="/propietario" i="user" />
      <NavButton name="Vigilante" nav="/datos" i="user" />
      <NavButton name="Self-CheckIn" nav="/datos2" i="user-plus" />
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
import NavButton from "@/components/NavButton.vue";
export default {
  components: { NavButton },
  methods: {
    ...mapActions({
      selectPage: "setPageA",
    }),
  },
  mounted() {
    this.selectPage("Elegir perfil");
  },
};
</script>
<style lang="sass" scoped>
$pink-300: #f1749e;
$pink-400: #ed4981;
$bluegray-50: #f7f9f9;
$bluegray-900: #263238
.home
  height: 100%
  display: flex
  justify-content: space-around
  flex-direction: column

  .actions
    display: flex
    justify-content: space-around
    flex-direction: column

  .p-text-bold
    font-size: 3rem
    padding: 3rem
</style>
