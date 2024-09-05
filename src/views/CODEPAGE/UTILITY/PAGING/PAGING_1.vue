<template>
  <div class="code-container">
    <div>
      <h3 class="code-title">스크롤 시 페이징 처리</h3>
      <div class="code-contents" @scroll="scrollToBottom()">
        <div class="content-item" v-for="(array, idx) in arrays" :key="idx">
          <span>{{ array }}번</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const count = ref(1);
const arrays = ref([]);
onMounted(() => {
  for (let i = count.value; i < count.value + 10; i++) {
    arrays.value.push(i);
  }
})

//맨 아래로 스크롤 시 페이징 처리
function scrollToBottom() {
  const container = document.querySelector('.code-contents');
  const scrollTop = container.scrollTop;
  const scrollHeight = container.scrollHeight;
  const clientHeight = container.clientHeight;

  if (scrollTop + clientHeight >= scrollHeight - 1) {
    count.value += 10;

    for (let i = count.value; i < count.value + 10; i++) {
      arrays.value.push(i);
    }
  }
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