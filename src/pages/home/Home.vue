<template>
    <el-container class="home-container">
        <!-- 头部区域 -->
        <el-header>
            <div>
                <span>电商后台管理系统</span>
            </div>
            <el-button type="info" @click="logout">退出</el-button>
        </el-header>
        <el-container>
            <!-- 侧边栏 -->
            <el-aside :width="isCollapse ? '61px' : '200px'">
                <div class="toggle-button" @click="toggleCollpase">|||</div>
                <!-- 侧边栏菜单区域 -->
                <el-menu background-color="#333744" :unique-opened="true" :collapse="isCollapse"
                    :collapse-transition="false" :router="true" :default-active="activePath">
                    <!-- 一级菜单 -->
                    <el-submenu :index="item.id + ''" v-for="item in menuList" :key="item.id">
                        <!-- 一级菜单的模板区域 -->
                        <template>
                            <!-- 图标 -->
                            <i :class="iconsObj[item.id]"></i>
                            <!-- 文本 -->
                            <span>{{ item.authName }}</span>
                        </template>

                        <!-- 二级菜单 -->
                        <el-menu-item :index="'/' + sunItem.path" v-for="sunItem in item.children" :key="sunItem.id"
                            @click="saveActivePath('/' + sunItem.path)">
                            <template>
                                <!-- 二级菜单的模板区域 -->
                                <i class="el-icon-menu"></i>
                                <!-- 图标 -->
                                <span>{{ sunItem.authName }}</span>
                                <!-- 文本 -->
                            </template>
                        </el-menu-item>
                    </el-submenu>
                </el-menu>
            </el-aside>
            <!-- 右侧内容主题 -->
            <el-main>
                <!-- 路由占位符 -->
                <router-view></router-view>
            </el-main>
        </el-container>
    </el-container>
</template>

<script>
import axios from "axios";

export default {
    name: 'Home',
    data() {
        return {
            // 左侧菜单数据
            menuList: [],
            iconsObj: {
                // 一级菜单的icon图标
                147: 'el-icon-magic-stick',
                125: 'iconfont icon-users',
                103: 'iconfont icon-tijikongjian',
                101: 'iconfont icon-shangpin',
                102: 'iconfont icon-danju',
                145: 'iconfont icon-baobiao'
            },
            isCollapse: false, // 是否折叠属性
            activePath: '',
            welcome: {
                authName: '欢迎光临',
                id: 147,
                order: 1,
                path: '/welcome',
                children: [
                    {
                        authName: 'Welcome',
                        id: 124,
                        order: 1,
                        path: 'welcome',
                        children: []
                    }
                ]
            }
        }
    },
    created() {
        this.getMenuList()
        this.activePath = window.sessionStorage.getItem('activePath')
    },
    methods: {
        logout() {
            window.sessionStorage.clear()
            this.$router.push('/login')
        },
        // 获取所有的菜单
        async getMenuList() {

            // const { data: res } = await axios.get('https://lianghj.top:8888/api/private/v1/menus')
            // console.log(res);
            // if (res.meta.status !== 200) return this.$message.error(res.meta.msg)
            // this.$message.success(res.meta.msg)
            // res.data.unshift(this.welcome)
            // this.menuList = res.data
            this.menuList = [{
                "id": 125,
                "authName": "用户管理",
                "path": "users",
                "children": [{
                    "id": 110,
                    "authName": "用户列表",
                    "path": "users",
                    "children": [],
                    "order": null
                }],
                "order": 1
            }, {
                "id": 103,
                "authName": "权限管理",
                "path": "rights",
                "children": [{
                    "id": 111,
                    "authName": "角色列表",
                    "path": "welcome",
                    "children": [],
                    "order": null
                }, {
                    "id": 112,
                    "authName": "权限列表",
                    "path": "rights",
                    "children": [],
                    "order": null
                }],
                "order": 2
            }, {
                "id": 101,
                "authName": "商品管理",
                "path": "goods",
                "children": [{
                    "id": 104,
                    "authName": "商品列表",
                    "path": "goods",
                    "children": [],
                    "order": 1
                }, {
                    "id": 115,
                    "authName": "分类参数",
                    "path": "params",
                    "children": [],
                    "order": 2
                }, {
                    "id": 121,
                    "authName": "商品分类",
                    "path": "categories",
                    "children": [],
                    "order": 3
                }],
                "order": 3
            }, {
                "id": 102,
                "authName": "订单管理",
                "path": "orders",
                "children": [{
                    "id": 107,
                    "authName": "订单列表",
                    "path": "orders",
                    "children": [],
                    "order": null
                }],
                "order": 4
            }, {
                "id": 145,
                "authName": "数据统计",
                "path": "reports",
                "children": [{
                    "id": 146,
                    "authName": "数据报表",
                    "path": "reports",
                    "children": [],
                    "order": null
                }],
                "order": 5
            }];
            // console.log(res, 'menus')
        },
        // 点击按钮,切换菜单的折叠和展开
        toggleCollpase() {
            this.isCollapse = !this.isCollapse
        },
        saveActivePath(activePath) {
            window.sessionStorage.setItem('activePath', activePath)
            this.activePath = activePath
            // console.log(this.$route.path)
        }
    }
}
</script>
  
<style scoped>
.hwelcome {
    color: #fff;
    font-size: 15px;
    height: 25px;
    text-align: center;
    background: green;

    span {
        margin-left: 10px;
    }
}

.home-container {
    height: 100%;
}

.el-header {
    display: flex;
    justify-content: space-between;
    padding-left: 0;
    background-color: #373d3f;
    align-items: center;
    color: #fff;
    font-size: 20px;

    >div {
        display: flex;
        align-items: center;

        img {
            width: 60px;
            height: 60px;
            border-radius: 50%;
        }

        span {
            margin-left: 15px;
        }
    }
}

.el-aside {
    background-color: #0c39ce;

    .el-menu {
        border-right: none;
    }
}

.el-main {
    background-color: #b7ceec;
}

.iconfont {
    padding-right: 10px;
}

.toggle-button {
    background: #a7b3dc;
    font-size: 10px;
    text-align: center;
    line-height: 24px;
    color: #fff;
    letter-spacing: 0.2em;
    cursor: pointer;
}
</style>
  