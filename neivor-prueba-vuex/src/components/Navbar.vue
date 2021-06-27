<template>
  <div class="container">
    <div class="navbar">
      <Button class="back p-button-raised" @click="back">
        <i class="pi pi-arrow-left" />
      </Button>
      <span>{{ page }}</span>
    </div>
    <Progress />
  </div>
</template>

<script>
import { mapState } from "vuex";
import Progress from "./Progress.vue";
export default {
  props: {
    progress: Number,
    site: String,
  },
  components: {
    Progress,
  },
  computed: {
    ...mapState(["page"]),
  },
  methods: {
    back() {
      window.history.length > 1 ? this.$router.go(-1) : this.$router.push("/");
    },
  },
};
</script>

<style lang="sass" scoped>
$neivor1: #ff7172
$bluegray-50: #f7f9f9
$bluegray-900: #263238
.container
  height: 5.5rem
  .navbar
    display: flex;
    background: $neivor1
    height: 4rem
    align-items: center
    box-shadow: 1px 2px 10px 0px rgba(0,0,0,0.5)
    color: #fff
    .back
      color: #fff
      height: 3rem
      width: 3rem
      display:flex
      margin: 0 1rem
      background: transparent
      outline: none
      border: none
      box-shadow: none
      border-radius: 50%

      justify-content: center
      i
        font-size: 2rem
    span
      font-size: 1.5rem
      margin: 0 1rem
</style>
