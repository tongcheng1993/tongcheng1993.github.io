<template>
    <div>
        <a-layout>
            <a-layout-header>
                <router-link to="/">
                    <div class="logo">/</div>
                </router-link>
            </a-layout-header>
            <a-layout>
                <a-layout-side>
                    <a-menu>
                        <a-menu-item key="/dash">
                            <router-link to="/dash">
                                <user-outlined/>
                                <span class="nav-text">首页</span>
                            </router-link>
                        </a-menu-item>
                        <a-sub-menu>
                            <template #icon>
                                <AppstoreOutlined/>
                            </template>
                            <template #title>学习</template>
                            <a-menu-item key="/study/college_english">
                                <router-link to="/study/college_english">
                                    <video-camera-outlined/>
                                    <span class="nav-text">大学英语</span>
                                </router-link>
                            </a-menu-item>
                        </a-sub-menu>
                        <a-sub-menu>
                            <template #icon>
                                <AppstoreOutlined/>
                            </template>
                            <template #title>软考</template>
                            <a-sub-menu>
                                <template #icon>
                                    <upload-outlined/>
                                </template>
                                <template #title>初级</template>
                                <a-menu-item key="/it/first/chengxuyuan">
                                    <router-link to="/it/first/chengxuyuan">
                                        <bar-chart-outlined/>
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
                                        <appstore-outlined/>
                                        <span class="nav-text">软件设计师</span>
                                    </router-link>
                                </a-menu-item>
                            </a-sub-menu>
                            <a-sub-menu>
                                <template #icon>
                                    <AppstoreOutlined/>
                                </template>
                                <template #title>高级</template>
                                <a-menu-item key="/it/third/xitongjiagoushi">
                                    <router-link to="/it/third/xitongjiagoushi">
                                        <shop-outlined/>
                                        <span class="nav-text">系统架构师</span>
                                    </router-link>
                                </a-menu-item>
                            </a-sub-menu>
                        </a-sub-menu>
                    </a-menu>
                </a-layout-side>
                <a-layout>
                    <a-layout-content>
                        <router-view/>
                    </a-layout-content>
                </a-layout>
            </a-layout>
            <a-layout-footer> Ant Design ©2018 Created by Ant UED</a-layout-footer>
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
        MenuItemGroup as AMenuItemGroup,
        SubMenu as ASubMenu,
        MenuItem as AMenuItem
    } from 'ant-design-vue'
    import {Breadcrumb as ABreadcrumb, BreadcrumbItem as ABreadcrumbItem} from 'ant-design-vue'
    import {
        UserOutlined,
        VideoCameraOutlined,
        UploadOutlined,
        BarChartOutlined,
        CloudOutlined,
        AppstoreOutlined,
        TeamOutlined,
        ShopOutlined
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
            AMenuItemGroup,
            ASubMenu,
            AMenuItem,
            ABreadcrumb,
            ABreadcrumbItem,
            UserOutlined,
            VideoCameraOutlined,
            UploadOutlined,
            BarChartOutlined,
            CloudOutlined,
            AppstoreOutlined,
            TeamOutlined,
            ShopOutlined
        },
        data() {
            return {}
        },
    }
</script>

<style scoped>
    .ant-layout-sider {
        background: #3499ec;
    }

    .ant-layout-footer {
        color: #fff;
        background: #7dbcea;
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
