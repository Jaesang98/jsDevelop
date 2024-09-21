<template>
  <div class="code-container">
    <div>
      <h3 class="code-title">특정값 필터링</h3>
      <div class="code-contents">
        <div class="mt-3" v-for="(item, idx) in data" :key="idx">{{ item }}</div>
      </div>

      <div class="code-contents">
        <div>필터링 된 값:</div>
        <div class="mt-3" v-for="(item, idx) in dataFilter" :key="idx">{{ item }}</div>
      </div>

      <input class="filter-input" placeholder="이름만 적으셈" v-model="inpValue">

      <div class="button-group">
        <button @click="filterSub()">이거 빼고보여줘</button>
        <button @click="filterOnly()">이거만 보여줘</button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

//ARRAY 필터링 하기
const data = ref([
  { name: 'John', age: 25, city: 'New York' },
  { name: 'Jane', age: 30, city: 'London' },
  { name: 'Tom', age: 22, city: 'Paris' },
]);

let dataFilter = ref([]);                                              //필터링 된 데이터
let inpValue = ref("");                                                //필터링 할 값 *이건 인풋태그에 v-model로 바인딩*


//특정값 제거한것 보여줌
function filterSub() {
  dataFilter.value = data.value.filter((item) => {
    return item.name != inpValue.value;
  })
}

//특정값만 보여줌
function filterOnly() {
  dataFilter.value = data.value.filter((item) => {
    return item.name == inpValue.value;
  })
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