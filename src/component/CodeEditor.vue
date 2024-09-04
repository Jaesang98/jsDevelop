<template>
  <div>
    <iframe :src="iframeSrc" width="100%" height="500" frameborder="0" allowfullscreen></iframe>
  </div>
</template>

<script setup>
import { ref, defineProps, watch} from 'vue'
const props = defineProps({
  codeURL: {
    type: String,
    required: true
  }
})

const iframeSrc = ref(props.codeURL);
watch(() => props.codeURL, (newURL) => {
  iframeSrc.value = newURL;
});
</script>