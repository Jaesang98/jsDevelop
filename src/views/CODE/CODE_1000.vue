<template>
  <Header></Header>

  <section class="container">
    <!-- 사이드 -->
    <div class="code-sideMenu">
      <div class="code-sideTemplete" v-for="(menuList, idx) in menuList" :key="idx">
        <strong @click="selMenu = menuList.subMenus[0].id; resCodeList(menuList.subMenus[0].id)">{{ menuList.name
          }}</strong>
        <div class="code-sideList" v-for="(subMenu, idx2) in menuList.subMenus" :key="idx2"
          @click="selMenu = subMenu.id; resCodeList(menuList.subMenus[idx2].id)">
          {{ subMenu.name }}
        </div>
      </div>
    </div>
    <!-- 사이드 -->

    <div class="code-contents">
      <div class="content-template" v-for="(codeList, idx) in codeList" :key="idx" :id="'CAT' + idx" :ref="'CAT' + idx">
        <div class="template-header">
          <h1>{{ codeList.title }}</h1>
          <h4 class="mt-3">{{ codeList.content }}</h4>
        </div>

        <!-- 이미지 -->
        <div class="template-img mt-3" v-if="codeList.img">
          <img src="" alt="Lorem Picsum Image">
        </div>

        <!-- gif -->
        <div class="template-gif mt-3" v-if="codeList.gif">
          <img src="" alt="Waving Flag">
        </div>

        <!--  -->
        <div class="template-html mt-3" v-if="codeList.iframeSrc">
          <CodeEditor :codeURL="codeList.iframeSrc" />
        </div>

        <!-- 코드 -->
        <div class="mt-4">

          <ul class="nav nav-underline">
            <li class="nav-item" v-for="(codeInfo, idx2) in codeList.codeInfo" :key="idx2">
              <a class="nav-link" :class="{ active: codeInfo.codeId === selCodeIds[idx] }"
                @click="selCodeIds[idx] = codeInfo.codeId">
                {{ codeInfo.codeLanguage }}
              </a>
            </li>
          </ul>

          <div v-for="(codeInfo, idx2) in codeList.codeInfo" :key="idx2">
            <div v-if="codeInfo.codeId === selCodeIds[idx]" class="template-code mt-3">
              <CodeBlock :code="codeInfo.codeContent" />
            </div>
            <div v-if="codeInfo.codeId === selCodeIds[idx]" class="template-description mt-3">
              {{ codeInfo.codeDescription }}
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="code-category">
      <div class="code-sideTemplete">
        <div class="code-sideList" v-for="(category, idx) in categoryList" :key="idx"
          @click="scrollCategory($refs, idx)">
          {{ category.name }}</div>
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
import CodeEditor from '@/component/CodeEditor.vue';
import * as util from '@/shared/util';
import { ref, computed, onMounted } from 'vue';

const menuList = ref([]);                                 // 메뉴 카테고리 전체 데이터
const selMenu = ref("");                                  // 선택한 서브 메뉴 아이디
const categoryList = computed(() => {                     // 선택한 서브 메뉴의 카테고리 리스트
  const selectedMenu = menuList.value
    .flatMap(menu => menu.subMenus)
    .find(subMenu => subMenu.id === selMenu.value);
  return selectedMenu ? selectedMenu.categories : [];
});

const codeList = ref([]);                                 //각 카테고리의 맞는 리스트
const selCodeIds = ref([]);                               //각 템플릿의 코드 언어에 따라 구분하는 아이디값 (vue React)

// 메뉴, 서브메뉴, 카테고리 받아옴
function resMenuList() {
  util.JSNetwort({
    url: "./testData/menuList.json",
    method: "GET",
    headers: {},
    body: {}
  })
    .then(res => {
      menuList.value = res.body.menuList;
      selMenu.value = menuList.value[0].subMenus[0].id;
    })
    .catch(err => {
      console.log(err)
    });
}

// 각 메뉴의 맞는 데이터 호출
function resCodeList(menuId) {
  const page = ref("showList");

  //소개
  if (menuId == "MNU01_SUB01" || menuId == "") {
    page.value = "showList";
  }

  /** 프레임워크 */
  //watch
  else if (menuId == "MNU02_SUB01") {
    page.value = "vueList";
  }
  /** 프레임워크 */

  /** 라이브러리 */
  //정렬
  else if (menuId == "MNU04_SUB01") {
    page.value = "moment";
  }
  /** 라이브러리 */

  /** 유틸 */
  //정렬
  else if (menuId == "MNU05_SUB01") {
    page.value = "sortList";
  }
  //스크롤
  else if (menuId == "MNU05_SUB02") {
    page.value = "scrollList";
  }
  //페이징
  else if (menuId == "MNU05_SUB03") {
    page.value = "pagingList";
  }
  //ARRAY
  else if (menuId == "MNU05_SUB04") {
    page.value = "ArrayList";
  }
  /** 유틸 */

  util.JSNetwort({
    url: `./testData/${page.value}.json`,
    method: "GET",
    headers: {},
    body: {
      selMenu: menuId || "MNU01_SUB01"
    }
  }).then(res => {
    codeList.value = res.body.codeList;
    selCodeIds.value = res.body.codeList.map(code => code.codeInfo[0]?.codeId || '');
  })
}

function scrollCategory(refs, idx) {
  const IdKey = "CAT" + idx;
  const element = refs[IdKey][0]; //ref로 찾은 요소
  // const element = document.getElementById(IdKey);  //ID로 찾은 요소
  const container = document.querySelector(".code-contents");

  if (element && container) {
    container.scrollTo({
      top: element.offsetTop - 50,
      behavior: "smooth"
    });
  }
}

onMounted(() => {
  resMenuList();
  resCodeList();
});

</script>

<style></style>