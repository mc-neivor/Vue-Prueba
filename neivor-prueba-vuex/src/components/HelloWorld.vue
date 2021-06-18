<template>
  <div class="hello">
    <h1>{{ $store.getters.mensaje }}</h1>
    <h4>{{ $store.getters.nombreCompleto }}</h4>
    <h2>Amigos</h2>
    <input type="text" v-model="amigo" />
    <button @click="addAmigo">Añadir amigo</button>
    <ul>
      <li v-for="(amigo, index) in $store.state.amigos" :key="index">
        {{ amigo }}
      </li>
    </ul>
  </div>
</template>

<script>
import { ref } from "vue";
import { useStore } from "vuex";
export default {
  name: "HelloWorld",
  setup() {
    const store = useStore();
    let amigo = ref("");
    const addAmigo = () => {
      store.state.amigo = amigo.value;
      store.dispatch("addAmigoAction");
      amigo.value = "";
    };
    return {
      amigo,
      addAmigo,
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
