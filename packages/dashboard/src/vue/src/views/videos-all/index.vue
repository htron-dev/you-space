<template>
    <v-row
        class="fill-height" align="start">

        <v-col cols="6">
            <videos-all-list
                @select-video="setVideo"
                :videos="state.videos" />
        </v-col>

        <v-col
            v-if="state.selectedVideo"
            cols="6">
            <video
                controls
                width="100%"
                height="100%"
                :src="state.selectedVideo"></video>
        </v-col>

    </v-row>
</template>

<script lang="ts">
import { createComponent, onMounted, reactive } from "@vue/composition-api";
export default createComponent({
    components: {
        VideosAllList: () => import("./VideosAllList.vue")
    },
    setup () {
        const state = reactive({
            selectedVideo: "",
            videos: [

            ]
        });

        const getVideos = async () => {
            if (process.env.NODE_ENV === "production") {
                const request = await fetch("/videos-list");

                const json = await request.json();

                state.videos = json;
            }
        };

        onMounted(getVideos);

        const setVideo = (video: string) => {
            if (process.env.NODE_ENV === "production") {
                state.selectedVideo = `/video/${video}`;
            } else {
                state.selectedVideo = video;
            }
        };

        return {
            state,
            setVideo

        };
    }
});
</script>

<style>

</style>
