<template>
  <Header></Header>

  <section class="container">
    <div class="main-base">
      <button class="button-main" @click="util.pageOpen('CODE_1000')">오늘은 뭘 보러왔니?</button>
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