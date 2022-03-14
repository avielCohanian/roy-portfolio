<template>
  <div class="app" id="app main-layout">
    <app-header />
    <app-nav />
    <router-view class="app-container" />
    <app-footer />
  </div>
</template>
<script>
  import appHeader from './cmp/app-header.vue';
  import appNav from './cmp/app-nav.vue';
  import appFooter from './cmp/app-footer.vue';
  export default {
    components: { appHeader, appNav, appFooter },
    data() {
      return {};
    },
  };
</script>
<style lang="scss"></style>
