<template>
  <div id="app">
    <FormProvider :form="form">
      <SchemaField :schema="schema" />
    </FormProvider>
  </div>
</template>

<script>
import { Input, FormItem } from "@formily/antdv";
import { FormProvider, createSchemaField } from "@formily/vue";
import { createForm } from "@formily/core";

const { SchemaField } = createSchemaField({
  components: {
    Input,
    FormItem
  },
});

export default {
  name: "App",
  components: {
    FormProvider,
    SchemaField,
  },
  data() {
    const form = createForm({ editable: false });
    const schema = {
      type: "object",
      properties: {
        Input: {
          type: "string",
          title: "Input",
          "x-decorator": "FormItem",
          "x-component": "Input",
          "x-validator": [],
          "x-component-props": {},
          "x-decorator-props": {},
          name: "Input",
          "x-designable-id": "8zq561r4ebq",
          "x-index": 0,
        },
      },
      "x-designable-id": "83u6b8yund8",
    };
    return {
      form,
      schema,
    };
  },
  mounted() {
    this.form.setValues({
      Input: 123
    });
  },
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>