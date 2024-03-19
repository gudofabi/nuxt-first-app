<template>
  <div>
    <label :for="name">{{ label }}</label>
    <Field
      :as="as"
      :id="name"
      :name="name as any"
      v-bind="attrs"
      class="text-black"
      :value="modelValue"
      @input="updateValue"
    />
    <ErrorMessage :name="name as any" class="text-red-400 capitalize" />
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  modelValue: [String, Number, Object, Array],
  name: [String],
  label: String,
  as: String,
  placeholder: String,
  attrs: Object,
});

const emits = defineEmits(["update:modelValue"]);

// Function to emit update:modelValue event
const updateValue = (event) => {
  // Assuming the event directly contains the value
  // Adjust if the event structure is different
  const value = event.target.value;
  emits("update:modelValue", value);
};
</script>
