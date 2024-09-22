<script setup lang="ts">
import {isCollapse} from "./isCollapse"
// const isCollapse = ref(false)
</script>

<template>
    <el-header>
        <!-- 图标 -->
        <el-icon @click="isCollapse = !isCollapse">
            <IEpExpand v-show="isCollapse" />
            <IEpFold v-show="!isCollapse" />
        </el-icon>
        <!-- 面包屑 -->
        <el-breadcrumb separator="/">
            <el-breadcrumb-item :to="{ path: '/' }">homepage</el-breadcrumb-item>
            <el-breadcrumb-item>
                <a href="/">promotion management</a>
            </el-breadcrumb-item>
            <el-breadcrumb-item>promotion list</el-breadcrumb-item>
            <el-breadcrumb-item>promotion detail</el-breadcrumb-item>
        </el-breadcrumb>
        <!-- 下拉菜单 -->
        <el-dropdown>
            <span class="el-dropdown-link">
                <el-avatar :size="32" :src="'https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png'" /> <!-- 头像 -->
                <el-icon class="el-icon--right">
                    <IEpArrowDown />
                </el-icon>
            </span>
            <template #dropdown>
                <el-dropdown-menu>
                    <el-dropdown-item>用户</el-dropdown-item>
                    <el-dropdown-item divided>退出</el-dropdown-item> <!-- divided样式的下拉菜单会有一条灰线，disabled样式表示此项无效 -->
                </el-dropdown-menu>
            </template>
        </el-dropdown>
    </el-header>
</template>

<style lang="scss" scoped>
.el-header {
    display: flex; // 所有组件一行显示
    align-items: center; // 垂直居中
    background-color: #ddd; // 背景颜色
    .el-icon {
        margin-right: 17px; // 图标右边加上间隔，使后面元素与这个元素不那么接近
    }
}

.el-dropdown {
    margin-left: auto;
    .el-dropdown-link {
        display: flex;
        justify-content: center;
        align-items: center;
    }
}
</style>