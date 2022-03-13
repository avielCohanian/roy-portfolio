<template>
  <div class="app" id="app main-layout">
    <app-header />
    <app-nav />
    <router-view class="app-container" />
  </div>
</template>
<script>
  import appHeader from './cmp/app-header.vue';
  import appNav from './cmp/app-nav.vue';
  export default {
    components: { appHeader, appNav },
    data() {
      return {};
    },
  };
</script>
<style lang="scss"></style>
