<template>
  <div id="app">
    <Navbar />
    <div class="p-grid p-jc-center p-nogutter">
      <router-view />
    </div>
  </div>
</template>

<script>
import Navbar from "./components/Navbar";
import { mapState } from "vuex";
export default {
  components: {
    Navbar,
  },
  computed: {
    ...mapState({
      progreso: "progress",
    }),
  },
  data() {},
};
</script>

<style lang="sass">

@import url('https://fonts.googleapis.com/css2?family=Jost&display=swap');
$fontColor: #4b4f54

*
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  color: $fontColor;

#app
  font-family: Jost, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  height: 100vh

#nav
  padding: 30px;
  a
    font-weight: bold;
    color: #ffffff;
.p-grid
  height: calc(100vh - 5.5rem)
</style>
