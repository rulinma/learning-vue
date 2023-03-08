<!--
 * @Author: rulinma rulinma@gmail.com
 * @Date: 2023-03-08 10:39:38
 * @LastEditors: rulinma rulinma@gmail.com
 * @LastEditTime: 2023-03-08 10:39:44
 * @Description: 程序员学习和实战指南 https://github.com/rulinma/it 获取更多内容
 * @copyright: 马如林保留所有版权
-->
<template>
    <!-- 整体页面布局 -->
    <el-row class="app-wrapper">
        <el-container>
            <!-- 侧边栏 -->
            <el-aside width="220px">侧边栏</el-aside>
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
export default {
    name: 'Layout'
}
</script>
<style lang="scss" scoped>
.app-wrapper {
    position: relative;
    height: 100%;
    width: 100%;
}
</style>