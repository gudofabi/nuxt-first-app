<script setup lang="ts">
const { sayHello } = useUtils();
const { $sayHello } = useNuxtApp();
sayHello();
</script>
<template>
  <Alert />
  <Profile />
  <br />
  <ProfileHeader />
  <div class="main-view">
    Main Page
    {{ $sayHello("Fabi") }}
    <img src="@/assets/img/man.png" alt="man floating" />
    <ContentDoc />
  </div>
</template>
