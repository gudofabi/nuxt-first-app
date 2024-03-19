<script setup lang="ts">
definePageMeta({
  layout: "custom",
  middleware: "auth",
});
import { useCounterStore } from "~/stores/counter";
const counter = useCounterStore();
</script>

<template>
  <p>Profile Page</p>
  <div>{{ counter.count }}</div>
  <button
    @click="counter.increment()"
    class="bg-green-400 text-white rounded px-2 py-5"
  >
    +
  </button>
  <button
    @click="counter.decrement()"
    class="bg-green-400 text-white rounded px-2 py-5"
  >
    -
  </button>
</template>
