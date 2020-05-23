<template>
    <w-card class="h-screen">
        <w-card-title>
            List of files<w-btn class="ml-5">add new file</w-btn>        
        </w-card-title>
        <w-card-content>
            <w-data-table :headers='headers' :items='files'></w-data-table>
        </w-card-content>
    </w-card>
</template>

<script>
import axios from "axios";

export default {
    data () {
        return {
            files: [],
            headers: [
                { name: "name", value: "name" },
                { name: "path", value: "path" },
            ]
        }
    },
    created () {
        this.load();
    },
    methods: {
        async load () {
            try {
                const { data } = await axios("/api/videos");
                this.files = data;                
            } catch (error) {
                
            }
        }
    }
}
</script>