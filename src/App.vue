<template>
  <div id="app">
    <FormProvider :form="form">
      <SchemaField :schema="schema" />
    </FormProvider>
  </div>
</template>

<script>
import { Input, Select, FormItem } from "@formily/antdv";
import { FormProvider, createSchemaField } from "@formily/vue";
import { createForm } from "@formily/core";

const { SchemaField } = createSchemaField({
  components: {
    Input,
    Select,
    FormItem,
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
        input: {
          type: "string",
          title: "Input",
          "x-decorator": "FormItem",
          "x-component": "Input",
          "x-validator": [],
          "x-component-props": {},
          "x-decorator-props": {},
          "x-designable-id": "8rcvroraxyu",
          "x-index": 0,
          name: "input",
        },
        select: {
          title: "Select",
          "x-decorator": "FormItem",
          "x-component": "Select",
          "x-validator": [],
          "x-component-props": {},
          "x-decorator-props": {},
          enum: [
            {
              children: [],
              label: "选项 1",
              value: "1",
            },
            {
              children: [],
              label: "选项 2",
              value: "2",
            },
          ],
          "x-designable-id": "qpnczwtd4we",
          "x-index": 1,
          name: "select",
        },
      },
      "x-designable-id": "rnvse6w4fyl",
    };
    return {
      form,
      schema,
    };
  },
  mounted() {
    this.form.setValues({
      input: '123',
      select: '1'
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
