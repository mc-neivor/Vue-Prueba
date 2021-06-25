<template>
  <Button
    class="btnNav"
    icon="pi pi-check"
    iconPos="right"
    @click="navigation(nav)"
  >
    <div class="btnName">
      <i :class="'pi pi-' + i" :style="{ color: color, fontSize: '1.75rem' }" />
      {{ name }}
    </div>
    <i class="pi pi-angle-right" style="fontSize: 2rem" />
  </Button>
</template>

<script>
export default {
  props: {
    nav: String,
    name: String,
    i: String,
    color: String,
  },
  methods: {
    navigation(nav) {
      this.$router.push(nav);
    },
  },
};
</script>

<style lang="sass" scoped>
$pink-300: #f1749e;
$bluegray-50: #f7f9f9;
.btnNav
  margin: 1.25rem auto
  padding: 0.5rem 1rem
  background: #fff
  border-color: transparent
  font-size: 1.5rem
  width: 80%
  box-shadow: 5px 5px 10px 0px rgba(0,0,0,0.5)
  display: flex
  align-items: center
  justify-content: space-between
  &:hover
    color: $bluegray-50
    background-color: $pink-300
  .btnName
    display: flex
    align-items: center
    i
      margin-right: 1rem
</style>
