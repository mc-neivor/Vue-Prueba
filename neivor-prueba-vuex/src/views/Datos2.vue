<template>
  <div class="p-col-11 p-md-6">
    <div class="title">
      <span>Algunos datos más</span>
    </div>
    <div class="main">
      <div class="switch">
        <span>Visita de varios días</span>
        <Switch v-model="dateCheck" />
      </div>
      <div class="days">
        <span
          class="p-float-label"
          :style="dateCheck ? 'width: 49%' : 'width: 100%'"
        >
          <Calendar
            id="calendar"
            v-model="dateIn"
            :showIcon="true"
            class="date"
            style="width: 100%"
          />
          <label for="calendar">Día de inicio</label>
        </span>
        <span class="p-float-label" v-if="dateCheck" style="width: 49%">
          <Calendar
            id="calendar"
            v-model="dateOut"
            :showIcon="true"
            class="date"
            style="width: 100%"
          />
          <label for="calendar">Día de fin</label>
        </span>
      </div>
      <span class="p-float-label">
        <Dropdown
          id="dropdown"
          v-model="visit"
          :options="typeVisit"
          optionLabel="name"
          class="typeVisit"
        />
        <label for="dropdown">Tipo de visita</label>
      </span>
      <div class="switch">
        <span>¿Viene en coche?</span>
        <Switch v-model="vehicle" />
      </div>
      <NextButton name="Siguiente" nav="/vehicle" />
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
      dateCheck: false,
      dateIn: null,
      dateOut: null,
      visit: null,
      vehicle: null,
      typeVisit: [
        { name: "Social", code: "Social" },
        { name: "Normal", code: "Normal" },
        { name: "London", code: "LDN" },
      ],
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
    this.setPageAction({ page: "Registrar Visita", progress: 50 });
  },
};
</script>

<style lang="sass" scoped>
$disabled: #707070
$enabled: #3bbfad

::v-deep

  .p-inputtext
    padding: 1rem 0.75rem

  .p-inputswitch
    .p-inputswitch-slider
      background: $disabled
    .p-inputswitch-slider:before
      background: #fff

  .p-inputswitch-checked
    .p-inputswitch-slider
      background: $enabled
    .p-inputswitch-slider:before
      background: #fff;

.title
  height: 8rem
  display: flex
  align-items: center
  justify-content: center
  font-size: 2.25rem
  font-weight: bolder

.main
  height: calc(100% - 8rem)
  display: flex
  flex-direction: column
  justify-content: space-between

.switch, .days
  display: flex
  justify-content: space-between
  align-items: center

.typeVisit
  width: 100%

.p-inputtext
  background: transparent
  display: block;
  margin-bottom: .5rem;
  color: var(--surface-a)
  &:last-child
    margin-bottom: 0;
</style>
