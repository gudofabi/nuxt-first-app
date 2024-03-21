<template>
  {{ (branch as any)?.result }}
</template>

<script lang="ts" setup>
import { maintenanceApi } from "~/utils/repository/maintenanceApi";

const { $api } = useNuxtApp();
const branchRepository = maintenanceApi($api);

const { data: branch, pending } = await useAsyncData("branch", () =>
  branchRepository.getBranchDropdown()
);
</script>
