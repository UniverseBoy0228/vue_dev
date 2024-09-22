<script setup lang="ts">
import AppAside from "./AppAside.vue"
import AppHeader from "./AppHeader.vue"
</script>

<template>
    <div class="common-layout">
        <el-container>
            <AppAside />
            <el-container class="header-and-main">
                <AppHeader />
                <el-main>
                    <el-scrollbar>
                        <RouterView />
                    </el-scrollbar>
                </el-main>
            </el-container>
        </el-container>
    </div>
</template>

<style lang="scss" scoped>
.header-and-main {
    flex-direction: column; // header-and-main类中的组件垂直显示
    height: 100vh;
}

.el-main {
    background-color: #f4f4f5;
    padding-right: 0; // 效果是这部分贴着浏览器最右侧
}
</style>