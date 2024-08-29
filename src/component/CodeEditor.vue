<template>
  <div>
    <iframe :src="iframeSrc" width="100%" height="500" frameborder="0" allowfullscreen></iframe>
  </div>
</template>

<script setup>
import { ref, defineProps } from 'vue'
const props = defineProps({
  codeURL: {
    type: String,
    required: true
  }
})


const iframeSrc = ref(props.codeURL);
</script>