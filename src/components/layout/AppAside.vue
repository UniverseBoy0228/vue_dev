<script setup lang="ts">
import {isCollapse} from "./isCollapse"
// const isCollapse = ref(false)
</script>

<template>
    <el-aside>
        <el-scrollbar>
            <el-menu router unique-opened :collapse="isCollapse">
                <!-- 加上router后表示按下下面的菜单可以跳转到新的页面 -->
                <!-- unique-opened表示下面的菜单中同时只能有一个子菜单展开 -->
                <a href="" class="logo">
                    <img src="@/assets/logo.svg" alt="">
                    <h1>水哥澎湃</h1>
                </a>
                <el-sub-menu index="1">
                    <template #title>
                        <el-icon><IEpSetting /></el-icon> <span> 权限管理 </span>
                    </template>
                    <el-menu-item index="/menus">
                        <el-icon><IEpSetting /></el-icon> <span> 菜单列表 </span>
                    </el-menu-item>
                    <el-menu-item index="/resources">
                        <el-icon><IEpSetting /></el-icon> <span> 资源列表 </span>
                    </el-menu-item>
                    <el-menu-item index="/roles">
                        <el-icon><IEpSetting /></el-icon> <span> 角色列表 </span>
                    </el-menu-item>
                </el-sub-menu>


                <el-menu-item index="/users">
                    <el-icon>
                        <IEpSetting />
                    </el-icon> <span> 用户管理 </span>
                </el-menu-item>

                <el-menu-item index="/course">
                    <el-icon>
                        <IEpSetting />
                    </el-icon> <span> 课程管理 </span>
                </el-menu-item>

                <el-sub-menu index="2">
                    <template #title>
                        <el-icon><IEpSetting /></el-icon> <span> 广告管理 </span>
                    </template>
                    <el-menu-item index="/advertisement">
                        <el-icon><IEpSetting /></el-icon> <span> 广告列表 </span>
                    </el-menu-item>
                    <el-menu-item index="/advertisement-space">
                        <el-icon><IEpSetting /></el-icon> <span> 广告位管理 </span>
                    </el-menu-item>
                </el-sub-menu>
            </el-menu>
        </el-scrollbar>
    </el-aside>
</template>

<style lang="scss" scoped>
.el-aside {
    background-color: #eee;
    height: 100vh;
    width: auto;
}

.el-menu {
    background-color: #eee;
    border-right: none;
    width: 200px;
    &.el-menu--collapse { // &表示父类，所以&.el-menu--collapse表示el-menu.el-menu--collapse
        // 也就是菜单栏折叠时的样式
        width: 60px; // 当el-menu有el-menu--collapse这个类样式时宽度显示为60px，否则默认200px
        & h1 { // 菜单栏折叠时文本部分要取消显示，只留下Logo图标
            display: none;
        }
    }
}

.logo {
    display: flex; // 图片和文字水平摆放
    justify-content: center; // 水平居中
    align-items: center; // 垂直居中
    height: 60px; // logo这个类的高度
    text-decoration: none; // 去除超链接文本的下划线
    color: black; // 文字颜色为黑色
    img { // 图片的大小
        width: 32px;
        height: 32px;
    }
}
</style>