<template>
  <v-app>
    <ys-app-drawer
      app
      v-model="state.drawer" />

    <ys-app-bar app />

    <v-content>
      <v-container fluid fill-height>
        <router-view></router-view>
      </v-container>
    </v-content>

    <ys-app-footer app />
  </v-app>
</template>

<script lang="ts">
import { reactive, createComponent } from "@vue/composition-api";

export default createComponent({
    name: "Ysapp",
    components: {
        YsAppDrawer: () => import("@/components/YsAppDrawer/index.vue"),
        YsAppBar: () => import("@/components/YsAppBar/index.vue"),
        YsAppFooter: () => import("@/components/YsAppFooter/index.vue")
    },
    setup () {
        const state = reactive({
            drawer: true
        });

        return {
            state
        };
    }
});

</script>
