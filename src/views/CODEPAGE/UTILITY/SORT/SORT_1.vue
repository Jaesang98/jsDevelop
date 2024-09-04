<template>
  <div class="code-container">
    <div>
      <h3 class="code-title">Array</h3>
      <div>
        <div class="mt-3">{{ code1 }}</div>
        <div class="mt-3">
          <button class="code-button1" @click="sortArrayIncreasing()">오름차순</button>
          <button class="code-button2" @click="sortArrayDescending()">내림차순</button>
        </div>
      </div>
    </div>

    <div class="mt-4">
      <h3 class="code-title">Array-Object</h3>
      <div>
        <div class="mt-3" v-for="(code, idx) in code2" :key="idx">{{ code }}</div>
        <div class="mt-3">
          <button class="code-button1" @click="sortObjectIncreasing()">오름차순</button>
          <button class="code-button2" @click="sortObjectDescending()">내림차순</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

//코드 - Array
const code1 = ref([1, 4, 3]);

//코드 - Array-Object 
const code2 = ref([
  { id: 3, name: "Charlie", age: 22 },
  { id: 2, name: "Alice", age: 28 },
  { id: 1, name: "Ethan", age: 40 },
  { id: 5, name: "Bob", age: 35 },
  { id: 4, name: "Diana", age: 30 },
]);


//코드정렬 (오름차순)
function sortArrayIncreasing() {
  code1.value.sort(function (a, b) {
    return a - b;
  });
}

//코드정렬 (내림차순)
function sortArrayDescending() {
  code1.value.sort(function (a, b) {
    return b - a;
  })
}

//코드정렬 (오름차순)
function sortObjectIncreasing() {
  code2.value.sort(function (a, b) {
    return a.id - b.id;
  });
}

//코드정렬 (내림차순)
function sortObjectDescending() {
  code2.value.sort(function (a, b) {
    return b.id - a.id;
  })
}
</script>

<style>
.code-container {
  padding: 20px;
}

.code-title {
  font-weight: 700;
}

.code-button1 {
  padding: 10px;
  background-color: #4CAF50;
  color: white;
  font-weight: 700;
  border: none;
  margin-right: 10px;
}

.code-button2 {
  padding: 10px;
  background-color: #f44336;
  color: white;
  font-weight: 700;
  border: none;
}
</style>