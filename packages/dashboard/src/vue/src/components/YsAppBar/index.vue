<template>
  <v-app-bar
    clipped-left
    dense
    color="blue"
    dark
    v-bind="$attrs">
      Dashboard
  </v-app-bar>
</template>

<script lang="ts">
import { computed, createComponent } from "@vue/composition-api";

export default createComponent({
    name: "YsAppBar",
    setup ({ value }, { emit }) {
        return {

        };
    }
});
</script>

<style>

</style>
