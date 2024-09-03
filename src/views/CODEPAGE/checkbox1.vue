<template>
    <div class="mt-3">
        <div>
            <CodeBlock :code="code"></CodeBlock>
        </div>
    </div>
</template>

<script setup>
import CodeBlock from "@/component/CodeBlock.vue";  //highlight.js사용

const code = `
const selMenu = ref("");                                  // 선택한 서브 메뉴 아이디
const categoryList = computed(() => {                     // 선택한 서브 메뉴의 카테고리 리스트
  const selectedMenu = menuList.value
    .flatMap(menu => menu.subMenus)
    .find(subMenu => subMenu.id === selMenu.value);
  return selectedMenu ? selectedMenu.categories : [];
});
`;


</script>

<style></style>