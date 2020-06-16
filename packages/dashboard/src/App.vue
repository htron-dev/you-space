<template>
  <w-app :drawer-class="['border-r']">

    <div slot="drawer">
      <app-drawer></app-drawer>
    </div>

    <div slot="top-bar" class="border-b">top-bar</div>

    <router-view />

  </w-app>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'App',
  components: {}
})
</script>
