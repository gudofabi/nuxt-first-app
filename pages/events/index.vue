<script setup lang="ts">
const { $sayHello } = useNuxtApp();
</script>
<template>
  <div class="text-3xl font-bold underline">Events</div>
  {{ $sayHello("Gudo") }}
</template>
