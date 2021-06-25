<template>
  <div class="p-col-10 p-md-6 p-lg-3">
    <div class="title">
      <span>Datos de la visita</span>
    </div>
    <div class="main">
      <div class="inputs">
        <!-- <InputField id="username" field="name" name="Nombre y apellido" /> -->
        <span class="p-float-label">
          <InputText
            id="username"
            type="text"
            v-model="name"
            style="width:100%"
          />
          <label for="username">Nombre y apellido</label>
        </span>
        <span class="p-float-label">
          <InputText id="dni" type="text" v-model="dni" style="width:100%" />
          <label for="dni">DNI</label>
        </span>
      </div>
      <NextButton name="Siguiente" nav="/datos2" i="user-plus" />
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import NextButton from "@/components/NextButton";
/* import InputField from "@/components/InputField"; */
export default {
  components: {
    NextButton,
    /* InputField, */
  },
  data() {
    return {
      name: null,
      dni: null,
    };
  },
  computed: {
    ...mapGetters({
      progreso: "progress",
    }),
  },
  methods: {
    ...mapActions(["setPageAction"]),
  },
  mounted() {
    this.setPageAction({ page: "Registrar Visita", progress: 10 });
  },
};
</script>

<style lang="sass" scoped>

.title
  height: 8rem
  display: flex
  align-items: center
  justify-content: center
  font-size: 3rem
  font-weight: bolder

.main
  height: calc(100% - 8rem)
  display: flex
  flex-direction: column
  justify-content: space-between

.p-float-label
  display: flex;
  margin: 0
  margin: 2rem 0;
  height: 3.5rem
  justify-content: center;
  background: transparent
  &:last-child
    margin-bottom: 0;
.p-inputtext
  background: transparent
  display: block;
  margin-bottom: .5rem;
  color: var(--surface-a)
  &:last-child
    margin-bottom: 0;
</style>
