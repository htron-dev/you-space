<template>
  <w-app :drawer-class="['border-r']">

    <div slot="drawer">
      <app-drawer></app-drawer>
    </div>

    <app-toolbar slot="top-bar" />

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
