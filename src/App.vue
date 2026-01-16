<script setup lang="ts">
import zhCN from "@arco-design/web-vue/es/locale/lang/zh-cn"; //导入中文
const locale = zhCN; //定一个变量叫做locale
</script>

<template>
  <a-config-provider :locale="locale">
    <router-view />
  </a-config-provider>
</template>

<style scoped></style>
