<script setup lang="ts">
const nuxtApp = useNuxtApp();
const route = useRoute();

console.log(route.query.token);
console.log(nuxtApp);
</script>

<template>
  <div class="text-3xl font-bold underline">Events #{{ $route.params.id }}</div>
</template>
