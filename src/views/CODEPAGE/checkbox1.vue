<template>
  <div class="testStyle">아이프레임 테스트</div>
  <button class="btnTest" @click="testClick">버튼 클릭되나?</button>
</template>

<script setup>
function testClick() {
    alert("휴 클릭이되네");
}
</script>

<style>
.testStyle {
    text-align: center;
    color: aqua;
    font-size: 700;
}

.btnTest {
    padding: 20px;
    background-color: black;
    color: aliceblue;
}
</style>