<template>
    <div>
        <a-layout>
            <a-layout-header>
                <router-link to="/">
                    <div class="logo">/</div>
                </router-link>
            </a-layout-header>
            <a-layout style="height: 560px;" >
                <a-layout-side>
                    <a-menu>
                        <a-menu-item key="/dash">
                            <router-link to="/dash">
                                <cloud-outlined/>
                                <span class="nav-text">首页</span>
                            </router-link>
                        </a-menu-item>
                        <a-sub-menu>
                            <template #icon>
                                <cloud-outlined/>
                            </template>
                            <template #title>学习</template>
                            <a-menu-item key="/study/college_english">
                                <router-link to="/study/college_english">
                                    <cloud-outlined/>
                                    <span class="nav-text">大学英语</span>
                                </router-link>
                            </a-menu-item>
                        </a-sub-menu>
                        <a-sub-menu>
                            <template #icon>
                                <cloud-outlined/>
                            </template>
                            <template #title>软考</template>
                            <a-sub-menu>
                                <template #icon>
                                    <cloud-outlined/>
                                </template>
                                <template #title>初级</template>
                                <a-menu-item key="/it/first/chengxuyuan">
                                    <router-link to="/it/first/chengxuyuan">
                                        <cloud-outlined/>
                                        <span class="nav-text">程序员</span>
                                    </router-link>
                                </a-menu-item>
                            </a-sub-menu>
                            <a-sub-menu>
                                <template #icon>
                                    <cloud-outlined/>
                                </template>
                                <template #title>中级</template>
                                <a-menu-item key="/it/second/ruanjianshejishi">
                                    <router-link to="/it/second/ruanjianshejishi">
                                        <cloud-outlined/>
                                        <span class="nav-text">软件设计师</span>
                                    </router-link>
                                </a-menu-item>
                            </a-sub-menu>
                            <a-sub-menu>
                                <template #icon>
                                    <cloud-outlined/>
                                </template>
                                <template #title>高级</template>
                                <a-menu-item key="/it/third/xitongjiagoushi">
                                    <router-link to="/it/third/xitongjiagoushi">
                                        <cloud-outlined/>
                                        <span class="nav-text">系统架构师</span>
                                    </router-link>
                                </a-menu-item>
                            </a-sub-menu>
                        </a-sub-menu>
                        <a-sub-menu>
                            <template #icon>
                                <cloud-outlined/>
                            </template>
                            <template #title>工具</template>
                            <a-menu-item key="/my_tool/date_tool">
                                <router-link to="/my_tool/date_tool">
                                    <cloud-outlined/>
                                    <span class="nav-text">时间工具</span>
                                </router-link>
                            </a-menu-item>
                        </a-sub-menu>
                    </a-menu>
                </a-layout-side>

                    <a-layout-content style="overflow: auto">
                        <router-view/>
                    </a-layout-content>

            </a-layout>
            <a-layout-footer style="text-align: center" >Ant Design ©2018 Created by Ant UED</a-layout-footer>
        </a-layout>
    </div>
</template>

<script>

    import {
        Layout as ALayout,
        LayoutHeader as ALayoutHeader,
        LayoutSider as ALayoutSide,
        LayoutContent as ALayoutContent,
        LayoutFooter as ALayoutFooter
    } from 'ant-design-vue'

    import {
        Menu as AMenu,
        SubMenu as ASubMenu,
        MenuItem as AMenuItem
    } from 'ant-design-vue'
    import {
        CloudOutlined,
    } from '@ant-design/icons-vue';

    export default {
        name: "contain",
        components: {
            ALayout,
            ALayoutHeader,
            ALayoutSide,
            ALayoutContent,
            ALayoutFooter,

            AMenu,
            ASubMenu,
            AMenuItem,


            CloudOutlined,

        },
        data() {
            return {}
        },
    }
</script>

<style scoped>
    .ant-layout-sider {
        background: #7dbcea;
    }

    .ant-layout-footer {
        color: #fff;
        background: #3499ec;
    }

    .ant-layout-header {
        color: #fff;
        background: #7dbcea;
    }

    .ant-layout-content {
        margin: 24px 16px;
        padding: 24px;
        background: #fff;
        minHeight: 280px
    }

    .logo {
        float: left;
        width: 120px;
        height: 31px;
        margin: 16px 24px 16px 0;
        line-height: 31px;
        text-align: center;
        background: rgba(255, 255, 255, 0.3);
    }
</style>
