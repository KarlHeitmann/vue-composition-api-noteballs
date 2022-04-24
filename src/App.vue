<template>
  <NavBar />
  <RouterLink to="/" class="button">Notes</RouterLink>
  <RouterLink to="/stats" class="button">Stats</RouterLink>
  <RouterView />
</template>

<script setup>
/*
  imports
*/
  import NavBar from '@/components/layout/NavBar.vue'
</script>

<style>
@import 'bulma/css/bulma.min.css';
</style>