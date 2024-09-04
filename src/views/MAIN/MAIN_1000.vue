<template>
  <Header></Header>

  <section class="container">
    <div class="main-base">
      <h1 class="mt-3">JSDV에 오신걸 환영합니다!</h1>
      <p class="mt-3">Though it looks quite polished in English, this is still a developer site with much room for improvement.</p>
      <button class="button-main mt-3" @click="util.pageOpen('CODE_1000')">오늘은 뭘 보러왔니?</button>

      <!-- <iframe src="https://jaesang98.github.io/jsnamDeveloper/#CODE_1000" width="100%" height="500px" frameborder="0"></iframe> -->
    </div>
  </section>

  <Footer></Footer>
</template>

<script setup>
import '@/assets/css/global.css'
import Header from '@/component/Header.vue';
import Footer from '@/component/Footer.vue';
import * as util from '@/shared/util';


</script>

<style>
</style>