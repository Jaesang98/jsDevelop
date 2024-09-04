<template>
  <div class="code-container">
    <div>
      <h3 class="code-title">각 요소별 스크롤 이동</h3>

      <div class="code-contents">
        <div class="content-item" ref="element0">첫번째 요소</div>
        <div class="content-item" ref="element1">두번째 요소</div>
        <div class="content-item" ref="element2">세번째 요소</div>
        <div class="content-item" ref="element3">네번째 요소</div>
        <div class="content-item" ref="element4">다섯번째 요소</div>
      </div>

      <div class="button-group">
        <button @click="scrollToElement($refs, 'element0')">첫번째로 이동</button>
        <button @click="scrollToElement($refs, 'element1')">두번째로 이동</button>
        <button @click="scrollToElement($refs, 'element2')">세번째로 이동</button>
        <button @click="scrollToElement($refs, 'element3')">네번째로 이동</button>
        <button @click="scrollToElement($refs, 'element4')">다섯번째로 이동</button>
      </div>
    </div>
  </div>
</template>

<script setup>
function scrollToElement(refs, refName) {
  const element = refs[refName];
  if (element) {
    //block는 start center end nearest
    element.scrollIntoView({ behavior: 'smooth',  block: "nearest"});
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
  margin-bottom: 250px;
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