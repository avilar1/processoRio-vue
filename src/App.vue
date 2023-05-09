<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import HeaderCarioca from './components/HeaderCarioca.vue';



</script>


<template>
  <HeaderCarioca />
  
  <main>
    <router-view> </router-view>
    
  </main>
</template>


<style>
@import 'assets/cssnovo/base.css';
@import 'assets/cssnovo/comum.css';
@import 'assets/cssnovo/corpo.css';
</style>
