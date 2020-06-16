<template>
    <w-card>
        <w-card-title>
            List of files
        </w-card-title>
        <w-card-content>
            <div class="mb-5">
                <input type="file" @change="addfile">
                <w-btn class="ml-4" @click="sendFile">Send file</w-btn>
            </div>
            <w-data-table :headers='headers' :items='files'></w-data-table>
        </w-card-content>
    </w-card>
</template>

<script lang="ts">
import { api } from '@/services/api'

export default {
  data () {
    return {
      files: [],
      newFile: null,
      headers: [
        { name: 'name', value: 'name' },
        { name: 'path', value: 'path' }
      ]
    }
  },
  created () {
    this.load()
  },
  methods: {
    async load () {
      try {
        const { data } = await api('/videos')
        this.files = data.map(file => ({ path: file, name: file }))
      } catch (error) {
        alert('Error')
      }
    },
    addfile (event) {
      this.newFile = event.target.files[0]
    },
    async sendFile () {
      if (!this.newFile) {
        return
      }
      const formData = new FormData()
      formData.append('file', this.newFile)
      await api.post('/videos', formData)
      await this.load()
    }
  }
}
</script>
