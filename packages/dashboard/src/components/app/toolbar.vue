<template>
    <div class="border-b p-4">
        app mode:
        <span :class="[state.color, 'p-1 px-2 ml-4 text-white rounded']">
            {{state.appMode}}
        </span>
    </div>
</template>

<script>
import { defineComponent } from '@vue/composition-api';

export default defineComponent({
  setup () {
    const state = {
      color: 'bg-green-500',
      appMode: process.env.VUE_APP_MODE || process.env.VUE_APP_MODE
    };
    if (state.appMode === 'production') {
      state.color = 'bg-red-500';
    }
    return { state };
  }
});

</script>
