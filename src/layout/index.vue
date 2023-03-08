<template>
    <!-- 整体页面布局 -->
    <el-row class="app-wrapper">
        <el-container>
            <!-- 侧边栏 -->
            <el-aside width="420px">
                <sidebar />
            </el-aside>
            <el-container>
                <!-- 顶部 -->
                <el-header height="50px">header</el-header>
                <!-- 主页面 -->
                <el-main>主页面</el-main>
            </el-container>
        </el-container>
    </el-row>
</template>

<script>
import Sidebar from './components/Sidebar.vue'

export default {
    name: 'Layout',
    components: {
        Sidebar
    }
}
</script>