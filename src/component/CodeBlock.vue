<!-- src/components/CodeBlock.vue -->
<template>
    <pre><code ref="codeBlock" class="language-javascript">{{ code }}</code></pre>
</template>

<script setup>
/* eslint-disable */
import { onMounted, ref } from 'vue';
import hljs from 'highlight.js';
import 'highlight.js/styles/default.css'; // 원하는 스타일로 변경 가능

// Define the props using defineProps
const props = defineProps({
    code: {
        type: String,
        required: true
    }
});

const codeBlock = ref(null);

onMounted(() => {
    if (codeBlock.value) {
        hljs.highlightElement(codeBlock.value);
    }
});
</script>

<style scoped>
pre {
    padding: 1em;
    background: #f5f5f5;
    border-radius: 5px;
    overflow-x: auto;
}
</style>
