<script setup lang="ts">
definePageMeta({
  layout: "custom",
});

const { sayHello } = useUtils();
sayHello();
</script>

<template>
  <p>Login Page</p>
</template>
