<template>
    <div>
        <header class="border-b py-4 text-center mb-5">
            Header
        </header>

        <w-list>
            <template v-for="(section, index) in sections">
                <w-list-item
                    :key="index"
                    :expand="!!section.subItems"
                    :to="section.to"
                >
                    <w-icon class="mr-4">icon</w-icon>
                    {{section.name}}
                    <template v-slot:expand-area>
                        <w-list-item
                            :key="index"
                            v-for="index in 3"
                        >
                            {{`> sub-item ${index}`}}
                        </w-list-item>
                    </template>
                </w-list-item>
            </template>
        </w-list>
    </div>
</template>

<script>
import { defineComponent, reactive } from '@vue/composition-api'

export default defineComponent({
  setup () {
    const sections = reactive([
      {
        name: 'Dashboard',
        to: '/'
      },
      {
        name: 'Videos manager',
        to: '/videos/list',
        subItems: [
          {
            name: 'sub-item'
          }
        ]
      }
    ])
    return {
      sections
    }
  }
})

</script>
