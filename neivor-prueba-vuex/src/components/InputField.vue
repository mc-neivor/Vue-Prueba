<template>
  <span class="p-float-label">
    <InputText :id="id" type="text" v-model="text" style="width:100%" />
    <label for="id">{{ name }}</label>
  </span>
</template>

<script>
export default {
  props: {
    field: String,
    name: String,
    id: String,
  },
};
</script>

<style lang="sass" scoped>
.p-float-label
  display: flex;
  margin: 0
  margin-bottom: .5rem;
  justify-content: center;
  &:last-child
    margin-bottom: 0;
.p-inputtext
  display: block;
  margin-bottom: .5rem;
  &:last-child
    margin-bottom: 0;
</style>
