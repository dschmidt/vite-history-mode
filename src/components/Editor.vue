<script setup lang="ts">
import { ref } from 'vue'
import { useRoute } from 'vue-router';

defineProps<{ msg: string }>()

const $route = useRoute()
</script>

<template>
  <h1>EDITOR</h1>
  <h2>{{ $route.params.path }}</h2>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
