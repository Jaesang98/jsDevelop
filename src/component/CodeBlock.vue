<template>
    <div>
        <pre v-html="highlightedCode"></pre>
    </div>
</template>

<script setup>
/* eslint-disable */
import { ref, onMounted, watch } from 'vue'
import hljs from 'highlight.js'
import 'highlight.js/styles/atom-one-dark.css'
import javascript from 'highlight.js/lib/languages/javascript'

hljs.registerLanguage('javascript', javascript)

const props = defineProps({
    code: {
        type: String,
        required: true
    },
    language: {
        type: String,
        default: 'javascript'
    }
})

const highlightedCode = ref('')

const highlightCode = () => {
    highlightedCode.value = hljs.highlight(props.code, {
        language: props.language
    }).value
}

onMounted(() => {
    highlightCode()
})

watch(() => props.code, highlightCode)
watch(() => props.language, highlightCode)
</script>

<style scoped>
pre {
    padding: 1em;
    border-radius: 5px;
    overflow-x: auto;
}
</style>