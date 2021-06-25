<template>
  <Button class="btnNav" @click="navigation(nav)">
    {{ name }}
  </Button>
</template>

<script>
export default {
  props: {
    nav: String,
    name: String,
  },
  methods: {
    navigation(nav) {
      this.$router.push(nav);
    },
  },
};
</script>

<style lang="sass" scoped>
$neivorBtn: #ff595a
$bluegray-50: #f7f9f9;
.btnNav
  margin: 1.25rem auto
  padding: 0.5rem 1rem
  background: $neivorBtn
  color: $bluegray-50
  font-size: 1.5rem
  width: 100%
  //box-shadow: 5px 5px 10px 0px rgba(0,0,0,0.5)
  display: flex
  align-items: center
  justify-content: center
  &:hover
    color: #fff
    border-color: transparent
    background: var(--surface-900)
  .btnName
    display: flex
    align-items: center
    i
      margin-right: 1rem
</style>
