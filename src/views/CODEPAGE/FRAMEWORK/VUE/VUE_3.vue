<template>
  <div class="code-container">
    <div>
      <h3 class="code-title">부모 컴포넌트 입니다.</h3>
      <div class="code-contents">
        <div class="mt-3">받은 데이터: {{ childmessage1 }} , {{ childmessage2 }}</div>
      </div>
    </div>
    <div class="button-group">
      <button @click="showChild = !showChild">자식 컴포넌트를 보여줘</button>
      <button @click="parentmessage = '데이터를 보냄'">자식에게 데이터를 전달</button>
    </div>
  </div>
  <div class="mt-3">
    <VUE_4 v-show="showChild" :parentmessage = "parentmessage" @message = "message"></VUE_4>
  </div>
  {{ childmessage }}
</template>

<script setup>
import {ref} from 'vue'
import VUE_4 from './VUE_4.vue'

const showChild = ref(false);
const parentmessage = ref("");
const childmessage1 = ref("");
const childmessage2 = ref("");

const message = (msg1, msg2) => {
  childmessage1.value = msg1;
  childmessage2.value = msg2;
}
</script>


<style scoped>
.code-container {
  padding: 20px;
  max-width: 600px;
  margin: 0 auto;
  background-color: #f9f9f9;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.code-title {
  font-weight: 700;
  text-align: center;
  margin-bottom: 20px;
  color: #333;
}

.code-container .code-contents {
  max-height: 300px;
  overflow-y: auto;
  margin-bottom: 20px;
  border: 1px solid #ddd;
  border-radius: 5px;
  padding: 10px;
  background-color: #fff;
}

.content-item {
  padding: 15px;
  margin-bottom: 5px;
  background-color: #f0f0f0;
  border-radius: 5px;
  text-align: center;
  font-size: 16px;
  color: #333;
}

.button-group {
  display: flex;
  justify-content: space-between;
  gap: 10px;
}

.button-group button {
  flex: 1;
  padding: 10px 15px;
  font-size: 14px;
  color: #fff;
  background-color: #007bff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;
}

.button-group button:hover {
  background-color: #0056b3;
}

.filter-input {
  width: 100%;
  padding: 10px;
  margin-bottom: 20px;
  font-size: 14px;
  border: 1px solid #ddd;
  border-radius: 5px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: border-color 0.3s ease;
}

.filter-input:focus {
  border-color: #007bff;
  outline: none;
  box-shadow: 0 0 5px rgba(0, 123, 255, 0.5);
}
</style>