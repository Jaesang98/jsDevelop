<template>
  <Header></Header>

  <section class="container">
    <!-- 사이드 -->
    <div class="code-sideMenu">
      <div class="code-sideTemplete">
        <strong>소개</strong>
        <div class="code-sideList">내가 궁금하면 클릭 ㄱㄱ</div>
      </div>

      <div class="code-sideTemplete">
        <strong>네이버 API사용</strong>
        <div class="code-sideList">로그인</div>
        <div class="code-sideList">검색엔진</div>
        <div class="code-sideList">네이버맵</div>
      </div>

      <div class="code-sideTemplete">
        <strong>카카오 API사용</strong>
        <div class="code-sideList">로그인</div>
        <div class="code-sideList">검색엔진</div>
        <div class="code-sideList">네이버맵</div>
      </div>

      <div class="code-sideTemplete">
        <strong>네이버 API사용</strong>
        <div class="code-sideList">로그인</div>
        <div class="code-sideList">검색엔진</div>
        <div class="code-sideList">네이버맵</div>
      </div>

      <div class="code-sideTemplete">
        <strong>카카오 API사용</strong>
        <div class="code-sideList">로그인</div>
        <div class="code-sideList">검색엔진</div>
        <div class="code-sideList">네이버맵</div>
      </div>

      <div class="code-sideTemplete">
        <strong>네이버 API사용</strong>
        <div class="code-sideList">로그인</div>
        <div class="code-sideList">검색엔진</div>
        <div class="code-sideList">네이버맵</div>
      </div>

      <div class="code-sideTemplete">
        <strong>카카오 API사용</strong>
        <div class="code-sideList">로그인</div>
        <div class="code-sideList">검색엔진</div>
        <div class="code-sideList">네이버맵</div>
      </div>

      <div class="code-sideTemplete">
        <strong>네이버 API사용</strong>
        <div class="code-sideList">로그인</div>
        <div class="code-sideList">검색엔진</div>
        <div class="code-sideList">네이버맵</div>
      </div>

      <div class="code-sideTemplete">
        <strong>카카오 API사용</strong>
        <div class="code-sideList">로그인</div>
        <div class="code-sideList">검색엔진</div>
        <div class="code-sideList">네이버맵</div>
      </div>

      <div class="code-sideTemplete">
        <strong>네이버 API사용</strong>
        <div class="code-sideList">로그인</div>
        <div class="code-sideList">검색엔진</div>
        <div class="code-sideList">네이버맵</div>
      </div>

      <div class="code-sideTemplete">
        <strong>카카오 API사용</strong>
        <div class="code-sideList">로그인</div>
        <div class="code-sideList">검색엔진</div>
        <div class="code-sideList">네이버맵</div>
      </div>
    </div>
    <!-- 사이드 -->

    <div class="code-contents">
      <div class="content-template">
        <div class="template-header">
          <h1>소개</h1>
          <h4 class="mt-3">이것은 소개의 설명입니다 이것은 소개의 설명입니다 이것은 소개의 설명입니다 이것은 소개의 설명입니다</h4>
        </div>

        <div class="template-img mt-3">
          <img src="https://picsum.photos/400/300" alt="Lorem Picsum Image">
        </div>

        <div class="template-gif mt-3">
          <img src="https://media.giphy.com/media/3ohs7Q4aZCs6Dr7sgI/giphy.gif" alt="Waving Flag">
        </div>

        <div class="template-html mt-3">
          <button @click="testFuntion()">테스트 버튼 입니다</button>
        </div>

        <div class="mt-4">
          <ul class="nav nav-underline">
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="#">Vue</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" aria-current="page" href="#">React</a>
            </li>
          </ul>
          <div class="template-code mt-3">
            <CodeBlock :code="vueCode" />
          </div>

          <div class="template-description mt-3">
            간략한 코드 설명 입니다
          </div>
        </div>
      </div>

      <div class="content-template">
        <div class="template-header">
          <h1>소개</h1>
          <h4 class="mt-3">이것은 소개의 설명입니다 이것은 소개의 설명입니다 이것은 소개의 설명입니다 이것은 소개의 설명입니다</h4>
        </div>

        <div class="template-img mt-3">
          <img src="https://picsum.photos/400/300" alt="Lorem Picsum Image">
        </div>

        <div class="template-gif mt-3">
          <img src="https://media.giphy.com/media/3ohs7Q4aZCs6Dr7sgI/giphy.gif" alt="Waving Flag">
        </div>

        <div class="template-html mt-3">
          <button @click="testFuntion()">테스트 버튼 입니다</button>
        </div>

        <div class="mt-4">
          <ul class="nav nav-underline">
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="#">Vue</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" aria-current="page" href="#">React</a>
            </li>
          </ul>
          <div class="template-code mt-3">
            <CodeBlock :code="vueCode" />
          </div>

          <div class="template-description mt-3">
            간략한 코드 설명 입니다
          </div>
        </div>
      </div>
    </div>
  </section>

  <Footer></Footer>
</template>

<script setup>
import '@/assets/css/global.css'
import Header from '@/component/Header.vue';
import Footer from '@/component/Footer.vue';
import CodeBlock from '@/component/CodeBlock.vue';
// import * as util from '@/shared/util';

function testFuntion() {
  alert("테스트 입니다")
}

const vueCode =
  `function testFuntion() {
  alert("테스트 입니다")
}`


</script>

<style></style>