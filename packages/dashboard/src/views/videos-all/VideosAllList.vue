<template>
  <v-list>
      <v-list-item
        v-for="(video, index) in videos"
        :key="index"
        @click="$emit('select-video', video)"
      >
        <v-list-item-content>
            {{ video }}
        </v-list-item-content>
      </v-list-item>
  </v-list>
</template>

<script>
import { createComponent, onMounted, reactive } from "@vue/composition-api";
export default createComponent({
    props: {
        videos: {
            type: Array,
            required: false,
            default: () => []
        }
    },
    setup () {
        return {

        };
    }
});
</script>

<style>

</style>
