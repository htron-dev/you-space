<template>
    <w-card shadow='0'>
      <w-card-title class="flex items-end">
        <h1 class="font-bold flex-1">Uploads</h1>
        <w-btn>new upload</w-btn>
      </w-card-title>
      <w-card-content>
        <w-data-table
          :headers='state.headers'
          :items="state.videos">
          <template v-slot:item.thubmnailSrc="{ item }">
              <img :src="item.thubmnailSrc" :alt="item.name">
          </template>
        </w-data-table>

      </w-card-content>
    </w-card>
</template>

<script lang='ts'>
import { defineComponent, reactive } from '@vue/composition-api';
import { api } from '@/services/api';

interface Videos {
  title: string;
  path: string;
}

interface State {
  videos: Videos[];
  headers: {
    name: string;
    value: string;
    classes?: string;
  }[];
}
export default defineComponent({
  setup () {
    const state = reactive<State>({
      videos: [],
      headers: [
        {
          name: '',
          value: 'thubmnailSrc',
          classes: 'w-1/12'
        },
        {
          name: 'Name',
          value: 'name'
        },
        {
          name: 'File name',
          value: 'filename'
        }
      ]
    });

    const load = async () => {
      const { data } = await api.get<{ videos: Videos[]}>('/admin/videos');
      state.videos = data.videos;
    };

    load();

    return {
      state
    };
  }
})
</script>
