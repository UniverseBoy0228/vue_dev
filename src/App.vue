<script setup lang="ts">
import { RouterView } from 'vue-router'
import request from './utils/request'
request({
  method: "GET",
  url: "/front/ad/getAdList", // 实际上是http://127.0.0.2:8001/front/ad/getAdList
}).then((res) =>
  console.log(res)
)
</script>

<template>
  <RouterView />
</template>

<style scoped></style>
