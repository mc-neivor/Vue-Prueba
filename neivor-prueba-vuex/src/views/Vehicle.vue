<template>
  <div class="p-col-11 p-md-6">
    <div class="title">
      <span>¿Qué vehículo usa?</span>
    </div>
    <div class="main">
      <div>
        <SelectButton v-model="vehicle" :options="vehicles" dataKey="value">
          <template #option="slotProps">
            <i :class="slotProps.option.icon"></i>
          </template>
        </SelectButton>
        <span class="p-float-label">
          <InputText
            id="enrollment"
            type="text"
            v-model="enrollment"
            style="width:100%"
          />
          <label for="enrollment">Matrícula</label>
        </span>
      </div>
      <NextButton name="Siguiente" nav="/datos2" i="user-plus" />
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import NextButton from "@/components/NextButton";
export default {
  components: {
    NextButton,
  },
  data() {
    return {
      vehicle: null,
      vehicles: [
        { icon: "pi pi-android", value: "Auto" },
        { icon: "pi pi-apple", value: "Bicicleta" },
        { icon: "pi pi-desktop", value: "Moto" },
      ],
      enrollment: null,
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
    this.setPageAction({ page: "Registrar Visita", progress: 80 });
  },
};
</script>

<style lang="sass" scoped>
$disabled: #707070
$enabled: #3bbfad

::v-deep
  .p-highlight
    background: $enabled !important
  .p-selectbutton
    display: flex
    justify-content: space-between
    margin-bottom: 3rem
  .p-buttonset
    .p-component
      border: 1px solid gray
      border-radius: 0.5rem !important
      margin: 0 0.25rem !important
      width: 30%
      display: flex
      justify-content: center
      i
        font-size: 5rem

  .p-selectbutton



.title
  height: 8rem
  display: flex
  align-items: center
  justify-content: center
  font-size: 2.25rem
  font-weight: bolder
  flex-direction: column

.main
  height: calc(100% - 8rem)
  display: flex
  flex-direction: column
  justify-content: space-between
</style>
