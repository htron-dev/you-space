<template>
    <v-row>
        <v-col>
            <div v-if="state.file">
                <p>
                    {{ '/ys-json/dashboard/sections/' + state.section.name + '/js/' + state.file.name }}
                </p>

            </div>

            <div :id="state.section.name">

            </div>

            <p>{{ state.section }}</p>
            <p>{{ state.file }}</p>
        </v-col>
    </v-row>
</template>

<script lang="ts">
import { createComponent, reactive } from "@vue/composition-api";
import { Sections, SectionsJSFiles } from "@/types";

type State = {
    section: Sections | null;
    file: any | null;
}

export default createComponent({
    setup (props, { root }) {
        const state = reactive<State>({
            section: null,
            file: null
        });

        const getSection = async () => {
            const sectionName = root.$route.params.sectionName;
            console.log(sectionName);
            const request = await fetch(`/ys-json/dashboard/sections/${sectionName}`);
            const section = await request.json();
            state.section = section;
            state.file = section.js[0];
            if (section.js) {
                section.js.forEach((js: SectionsJSFiles) => {
                    const script = document.createElement("script");
                    if (js.url) {
                        script.setAttribute("src", js.url);
                    } else {
                        script.setAttribute("src", `/ys-json/dashboard/sections/${section.name}/js/${js.name}`);
                    }
                    document.head.appendChild(script);
                });
            }
        };

        getSection();

        return {
            state
        };
    }
});
</script>

<style>

</style>