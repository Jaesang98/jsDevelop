<template>
  <nav class="navbar navbar-expand-lg bg-dark border-bottom" data-bs-theme="dark">
    <div class="container-fluid container-header">
      <a class="navbar-brand" @click="util.pageOpen('HOME_1000')">JSDEV</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarToggler"
        aria-controls="navbarToggler" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarToggler">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <a class="nav-link active" @click="util.pageOpen('CODE_1000')">예제코드</a>
          </li>
          <li class="nav-item">
            <a class="nav-link active" @click="util.pageOpen('SITE_1000')">예제사이트</a>
          </li>
          <li class="nav-item">
            <a class="nav-link disabled" href="#">뭘만들지고민중</a>
          </li>
        </ul>
        <form class="d-flex" role="search">
          <input class="form-control me-2" type="search" placeholder="뭔가 검색하는곳" aria-label="Search">
          <button class="btn btn-outline-success" type="submit">Search</button>
        </form>
      </div>
    </div>
  </nav>
</template>

<script setup>
import '@/assets/css/global.css'
import * as util from '@/shared/util'

</script>

<style></style>
