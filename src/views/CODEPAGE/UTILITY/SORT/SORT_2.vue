<template>
  <div class="code-container">
    <div class="mt-4">
      <h3 class="code-title">Array-Object1 (String - 삼항연산자)</h3>
      <div>
        <div class="mt-3" v-for="(code, idx) in code1" :key="idx">{{ code }}</div>
        <div class="mt-3">
          <button class="code-button1" @click="sortObjectStringIncreasing1()">오름차순</button>
          <button class="code-button2" @click="sortObjectStringDescending1()">내림차순</button>
        </div>
      </div>
    </div>

    <div class="mt-4">
      <h3 class="code-title">Array-Object2 (String - localeCompare)</h3>
      <div>
        <div class="mt-3" v-for="(code, idx) in code2" :key="idx">{{ code }}</div>
        <div class="mt-3">
          <button class="code-button1" @click="sortObjectStringIncreasing2()">오름차순</button>
          <button class="code-button2" @click="sortObjectStringDescending2()">내림차순</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

//코드 - Array-Object 
const code1 = ref([
  { id: 3, name: "Charlie", age: 22 },
  { id: 2, name: "Alice", age: 28 },
  { id: 1, name: "Ethan", age: 40 },
  { id: 5, name: "Bob", age: 35 },
  { id: 4, name: "Diana", age: 30 },
]);

const code2 = ref([
  { id: 3, name: "Charlie", age: 22 },
  { id: 2, name: "Alice", age: 28 },
  { id: 1, name: "Ethan", age: 40 },
  { id: 5, name: "Bob", age: 35 },
  { id: 4, name: "Diana", age: 30 },
]);


//코드정렬 (오름차순) - 문자열(삼항연산자)
function sortObjectStringIncreasing1() {
  code1.value.sort(function (a, b) {
    return a.name < b.name ? -1 : a.name > b.name ? 1 : 0;
  });
}

//코드정렬 (내림차순) - 문자열(삼항연산자)
function sortObjectStringDescending1() {
  code1.value.sort(function (a, b) {
    return a.name > b.name ? -1 : a.name > b.name ? 1 : 0;
  })
}

//코드정렬 (오름차순) - 문자열(localeCompare)
function sortObjectStringIncreasing2() {
  code2.value.sort(function (a, b) {
    return a.name.localeCompare(b.name);
  });
}

//코드정렬 (내림차순) - 문자열(localeCompare)
function sortObjectStringDescending2() {
  code2.value.sort(function (a, b) {
    return b.name.localeCompare(a.name);
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