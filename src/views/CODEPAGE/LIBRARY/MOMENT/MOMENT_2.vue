<template>
  <div class="code-container">
    <div>
      <div>
        <h3 class="code-title">날짜더하기</h3>
        <div class="code-contents">
          <!--  months, weeks, days, hours, minutes, seconds, milliseconds 가능 -->
          <div class="content-item">{{ moment("2024-09-05").add(1, "years") }}</div>
          <div class="content-item">{{ moment("2024-09-05").add(1, "years").format("YYYY-MM-DD") }}</div>
        </div>
      </div>

      <div>
        <h3 class="code-title">날짜빼기</h3>
        <div class="code-contents">
          <!--  months, weeks, days, hours, minutes, seconds, milliseconds 가능 -->
          <div class="content-item">{{ moment("2024-09-05").subtract(1, "years") }}</div>
          <div class="content-item">{{ moment("2024-09-05").subtract(1, "years").format("YYYY-MM-DD") }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import moment from 'moment';
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