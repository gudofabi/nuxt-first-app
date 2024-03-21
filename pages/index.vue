<script setup lang="ts">
// const { data: branch, pending } = await useFetch(
//   "https://novadeci-be-ecs-dev.yondu.net/membership/api/v1/maintenance/branches/dropdown?filter=external",
//   { transform: (_branch) => (_branch as any).result }
// );

// const { data: branch, pending } = await useLazyFetch(
//   "https://novadeci-be-ecs-dev.yondu.net/membership/api/v1/maintenance/branches/dropdown?filter=external",
//   { transform: (_branch) => (_branch as any).result }
// );

const { data: branch, pending } = await useAsyncData("branch", () =>
  $fetch(
    "https://novadeci-be-ecs-dev.yondu.net/membership/api/v1/maintenance/branches/dropdown?filter=external"
  )
);

const func_refresh = () => refreshNuxtData("branch");
// console.log((branch.value as any)?.result);
console.log(branch.value);

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
  </div>
  <div>
    <div class="p-5 rounded border border-gray-100">
      {{ pending ? "Loading" : branch }}
    </div>
    <br />
    <button @click="func_refresh" class="px-3 py-2 bg-indigo-300 rounded">
      Refresh
    </button>
  </div>
</template>
