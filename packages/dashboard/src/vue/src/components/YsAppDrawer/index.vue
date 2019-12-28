<template>
    <v-navigation-drawer
        v-model="model"
        v-bind="$attrs"
        clipped>
        <v-list flat>
            <v-list-item-group
                v-model="state.route"
                color="primary">
                <v-list-item
                    v-for="(menu, index) in menus"
                    :to="menu.path"
                    :key="index">

                    <v-list-item-icon>
                        <v-icon v-text="menu.icon || 'mdi-label'"></v-icon>
                    </v-list-item-icon>

                    <v-list-item-content>
                        {{ menu.text }}
                    </v-list-item-content>

                </v-list-item>
            </v-list-item-group>
        </v-list>
        {{ sections }}
    </v-navigation-drawer>
</template>

<script lang="ts">
import { computed, createComponent, reactive } from "@vue/composition-api";
import { Sections } from "@/types";

export type MenuItem = {
    path: string;
    text: string;
    icon?: string;
}

export default createComponent({
    name: "YsDrawer",
    props: {
        // v-model
        value: {
            type: Boolean,
            required: false,
            default: false
        }
    },
    setup ({ value }, { emit, root }) {
        const state = reactive({
            route: root.$route.path
        });

        const sections = computed<Sections[]>(() => root.$store.state.sections);

        const menus = computed<MenuItem[]>(() => {
            const menus = [
                {
                    text: "Home",
                    path: "/",
                    icon: "mdi-home"
                },
                {
                    text: "Upload",
                    path: "/upload"
                },
                {
                    text: "Videos",
                    path: "/videos-all"
                }
            ];

            if (sections) {
                for (let i = 0; i < sections.value.length; i++) {
                    const section = sections.value[i];
                    menus.push({
                        text: section.name,
                        path: `/sections/${section.name}`
                    });
                }
            }

            return menus;
        });

        root.$store.dispatch("setSections");

        const model = computed({
            get: () => value,
            set: val => emit("input", val)
        });

        return {
            model,
            menus,
            sections,
            state
        };
    }
});
</script>

<style>

</style>
