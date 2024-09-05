<template>
  <div class="code-container">
    <div>
      <div>
        <h3 class="code-title">두 날짜를 비교</h3>
        <div class="code-contents">
          <!--  isAfter, isSame 사용가능 -->
          <div class="content-item">2024-09-05는 2024-09-06 보다 이전날짜인가요?</div>
          <div class="content-item">{{ moment("2024-09-05").isBefore("2024-09-06") }}</div>
        </div>
      </div>

      <div>
        <h3 class="code-title">두 날짜를 비교 (가장 빠른날짜)</h3>
        <div class="code-contents">
          <div class="content-item">[2024-09-05, 2024-09-06, 2024-09-07] 중 가장 빠른날짜는?</div>
          <div class="content-item">{{ moment.min([moment("2024-09-05"), moment("2024-09-06"), moment("2024-09-07")]) }}</div>
          <div class="content-item">{{ moment.min([moment("2024-09-05"), moment("2024-09-06"), moment("2024-09-07")]).format("YYYY-MM-DD") }}</div>
        </div>
      </div>

      <div>
        <h3 class="code-title">두 날짜를 비교 (가장 늦은날짜)</h3>
        <div class="code-contents">
          <div class="content-item">[2024-09-05, 2024-09-06, 2024-09-07] 중 가장 늦은날짜는?</div>
          <div class="content-item">{{ moment.max([moment("2024-09-05"), moment("2024-09-06"), moment("2024-09-07")]) }}</div>
          <div class="content-item">{{ moment.max([moment("2024-09-05"), moment("2024-09-06"), moment("2024-09-07")]).format("YYYY-MM-DD") }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import moment from 'moment';
/* eslint-disable */ 

const a = `<template>
  <div class="code-container">
    <div>
      <div>
        <h3 class="code-title">두 날짜를 비교</h3>
        <div class="code-contents">
          <!--  isAfter, isSame 사용가능 -->
          <div class="content-item">2024-09-05는 2024-09-06 보다 이전날짜인가요?</div>
          <div class="content-item">{{ moment("2024-09-05").isBefore("2024-09-06") }}</div>
        </div>
      </div>

      <div>
        <h3 class="code-title">두 날짜를 비교 (가장 빠른날짜)</h3>
        <div class="code-contents">
          <div class="content-item">[2024-09-05, 2024-09-06, 2024-09-07] 중 가장 빠른날짜는?</div>
          <div class="content-item">{{ moment.min([moment("2024-09-05"), moment("2024-09-06"), moment("2024-09-07")]) }}</div>
          <div class="content-item">{{ moment.min([moment("2024-09-05"), moment("2024-09-06"), moment("2024-09-07")]).format("YYYY-MM-DD") }}</div>
        </div>
      </div>

      <div>
        <h3 class="code-title">두 날짜를 비교 (가장 늦은날짜)</h3>
        <div class="code-contents">
          <div class="content-item">[2024-09-05, 2024-09-06, 2024-09-07] 중 가장 늦은날짜는?</div>
          <div class="content-item">{{ moment.max([moment("2024-09-05"), moment("2024-09-06"), moment("2024-09-07")]) }}</div>
          <div class="content-item">{{ moment.max([moment("2024-09-05"), moment("2024-09-06"), moment("2024-09-07")]).format("YYYY-MM-DD") }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import moment from 'moment';
<\/script>`

console.log(JSON.stringify(a));

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
  margin-bottom: 30px;
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
</style>