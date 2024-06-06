<template>
    <div>
        <el-container>
            <el-header>
                <el-row>
                    <el-col :span="4">
                        <router-link to="/">
                            <div class="logo">/</div>
                        </router-link>
                    </el-col>
                    <el-col :span="16">
                        <el-menu mode="horizontal" router="true">
                            <el-menu-item index="/dash">
                                <i class="el-icon-menu"></i>
                                <span slot="title">首页 </span>
                            </el-menu-item>
                            <el-submenu index="/study">
                                <template slot="title">
                                    <i class="el-icon-location"></i>
                                    <span>工商管理</span>
                                </template>
                                <el-menu-item index="/study/college_english">
                                    <i class="el-icon-menu"></i>
                                    <span slot="title">大学英语</span>
                                </el-menu-item>
                            </el-submenu>
                            <el-submenu index="/it">
                                <template slot="title">
                                    <i class="el-icon-location"></i>
                                    <span>软考</span>
                                </template>
                                <el-submenu index="/it/first">
                                    <template slot="title">
                                        <i class="el-icon-location"></i>
                                        <span>初级</span>
                                    </template>
                                    <el-menu-item index="/it/first/chengxuyuan">
                                        <i class="el-icon-menu"></i>
                                        <span slot="title">程序员</span>
                                    </el-menu-item>
                                </el-submenu>
                                <el-submenu index="/it/second">
                                    <template slot="title">
                                        <i class="el-icon-location"></i>
                                        <span>中级</span>
                                    </template>
                                    <el-menu-item index="/it/second/ruanjianshejishi">
                                        <i class="el-icon-menu"></i>
                                        <span slot="title">软件设计师</span>
                                    </el-menu-item>
                                </el-submenu>
                                <el-submenu index="/it/third">
                                    <template slot="title">
                                        <i class="el-icon-location"></i>
                                        <span>高级</span>
                                    </template>
                                    <el-menu-item index="/it/third/xitongjiagoushi">
                                        <i class="el-icon-menu"></i>
                                        <span slot="title">系统架构设计师</span>
                                    </el-menu-item>
                                </el-submenu>
                            </el-submenu>
                            <el-submenu index="/ai">
                                <template slot="title">
                                    <i class="el-icon-location"></i>
                                    <span>人工智能</span>
                                </template>
                                <el-menu-item index="/ai/chat">
                                    <i class="el-icon-menu"></i>
                                    <span slot="title">机器人聊天</span>
                                </el-menu-item>
                            </el-submenu>
                        </el-menu>
                    </el-col>
                    <el-col :span="4"></el-col>
                </el-row>
            </el-header>
            <el-main>
                <router-view></router-view>
            </el-main>
            <el-footer>

            </el-footer>
        </el-container>
    </div>
</template>

<script>
    export default {
        name: "contain"
    }
</script>

<style scoped>
    .el-container {
        margin: auto;
        width: 800px;
        background-color: #7dbcea;
    }

    .el-header {
        /*background-color: #3499ec;*/
    }

    .el-aside {
        /*background: #3499ec;*/
    }

    .el-main {
        /*min-height: 300px;*/
    }

    .el-footer {
        /*background-color: #7dbcea;*/
    }

    .logo {
        /*float: left;*/
        width: 120px;
        height: 31px;
        margin: 16px 24px 16px 0;
        line-height: 31px;
        text-align: center;
        background-color: rgba(255, 255, 255, 0.3);
    }
</style>
