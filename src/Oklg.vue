<template>
  <div id="app">
    <!-- Loader -->
    <div id="preloader" v-if="loading">
      <div id="status">
        <div class="spinner"></div>
      </div>
    </div>
    <router-view />
  </div>
</template>

<script>
export default {
  data() {
    return {
      loading: true,
    };
  },
  created() {
    // setTimeout(() => (this.loading = false), 0);
    this.loading = false;
  },
};
</script>
