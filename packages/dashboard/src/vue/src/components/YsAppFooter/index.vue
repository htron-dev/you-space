<template>
  <v-footer
    color="blue"
    dark
    dense
    v-bind="$attrs">
      You space
      <v-spacer />
      <span>&copy; {{ new Date().getFullYear() }}</span>
  </v-footer>
</template>

<script lang="ts">
import { computed, createComponent } from "@vue/composition-api";

export default createComponent({
    name: "YsAppFooter",
    setup ({ value }, { emit }) {
        return {

        };
    }
});
</script>

<style>

</style>
