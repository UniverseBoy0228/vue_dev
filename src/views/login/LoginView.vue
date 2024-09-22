<script setup lang="ts">
// 表单响应式数据
const form = reactive({
    phone: "11111111111",
    password: "123456",
})
// 登录事件处理
const onSubmit = () => {
    ElMessage.success("提交表单数据")
}
</script>

<template>
    <div class="login">
        <el-form :model="form" label-width="auto" style="max-width: 600px" label-position="top" size="large">
            <!-- label-position="top"表示手机号密码这些标签显示在输入框上方 -->
            <h2>登录</h2>
            <el-form-item label="手机号">
                <el-input v-model="form.phone" />
            </el-form-item>
            <el-form-item label="密码">
                <el-input v-model="form.password" />
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="onSubmit">登录</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>

<style scoped>
.login {
    background-color: #ccc;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    .el-form {
        width: 300px;
        background-color: #fff;
        padding: 30px;
        border-radius: 10px; /* 圆角 */
        .el-form-item {
            margin-top: 20px; /* 表单项顶部间隔 */
        }
        .el-button {
            width: 100%;
            margin-top: 30px;
        }
    }
}
</style>
