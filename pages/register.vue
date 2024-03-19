<script setup lang="ts">
import { Form, Field, ErrorMessage } from "vee-validate";
import * as yup from "yup";

const data_form: any = reactive({
  email: "",
  username: "",
  password: "",
  description: "",
});

const formSchema = {
  fields: [
    {
      label: "Your Name",
      name: "username",
      as: "input",
      rules: yup.string().required(),
    },
    {
      label: "Your Email",
      name: "email",
      as: "input",
      rules: yup.string().required().email(),
    },
    {
      label: "Your Password",
      name: "password",
      as: "input",
      type: "password",
      rules: yup.string().required().min(8),
    },
    {
      label: "Your Description",
      name: "description",
      as: "textarea",
      rules: yup.string().required(),
    },
  ],
};

function onSubmit(values: any) {
  // Submit values to API...
  console.log(values);
}
</script>

<template>
  <p>Register Page</p>
  <Form @submit="onSubmit" class="flex flex-col">
    <!-- <div
      v-for="{ as, name, label, ...attrs } in formSchema.fields"
      :key="name"
      class="flex flex-col"
    >
      <label :for="name">{{ label }}</label>
      <Field
        :as="as"
        :id="name"
        :name="name"
        v-bind="attrs"
        class="text-black"
        v-model="data_form[name]"
      />
      <ErrorMessage :name="name" class="text-red-400 capitalize" />
    </div> -->
    <FormInput
      v-for="{ as, name, label, ...attrs } in formSchema.fields"
      :key="name"
      :as="as"
      class="flex flex-col"
      :attrs="attrs"
      :name="name"
      :label="label"
      :model-value="data_form[name]"
      @update:modelValue="(value) => (data_form[name] = value)"
    />
    <div>
      <button type="submit">Register</button>
    </div>
  </Form>
  {{ data_form }}
</template>
