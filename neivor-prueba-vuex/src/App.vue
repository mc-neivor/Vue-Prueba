<template>
  <div id="app">
    <Navbar />
    <div id="nav">
      <router-link to="/about">About</router-link>
      <router-link to="/asd">Salir</router-link>
    </div>
    <router-view />
  </div>
</template>

<script>
import Navbar from "./components/Navbar";
export default {
  components: {
    Navbar,
  },
  setup() {},
};
</script>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
:root {
  --pink-50: #fef4f7;
  --pink-100: #fac9da;
  --pink-200: #f69ebc;
  --pink-300: #f1749e;
  --pink-400: #ed4981;
  --pink-500: #e91e63;
  --pink-600: #c61a54;
  --pink-700: #a31545;
  --pink-800: #801136;
  --pink-900: #5d0c28;
  --bluegray-50: #f7f9f9;
  --bluegray-100: #d9e0e3;
  --bluegray-200: #bbc7cd;
  --bluegray-300: #9caeb7;
  --bluegray-400: #7e96a1;
  --bluegray-500: #607d8b;
  --bluegray-600: #526a76;
  --bluegray-700: #435861;
  --bluegray-800: #35454c;
  --bluegray-900: #263238;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: var(--bluegray-50);
  background-color: var(--bluegray-900);

  height: 100vh;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #ffffff;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
