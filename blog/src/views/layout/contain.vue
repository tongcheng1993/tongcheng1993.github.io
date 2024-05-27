<template>
    <div>
        <a-layout>

            <a-layout-header>
                <router-link to="/">
                    <div class="logo">
                        /
                    </div>
                </router-link>
            </a-layout-header>
            <a-layout>
                <a-layout-sider>
                    <a-menu v-model:selectedKeys="selectedKeys" theme="dark">
                        <a-menu-item key="1">
                            <router-link to="/dash">
                                <user-outlined/>
                                <span class="nav-text">dash</span>
                            </router-link>
                        </a-menu-item>
                        <a-menu-item key="2">
                            <video-camera-outlined/>
                            <span class="nav-text">nav 2</span>
                        </a-menu-item>
                        <a-menu-item key="3">
                            <upload-outlined/>
                            <span class="nav-text">nav 3</span>
                        </a-menu-item>
                        <a-menu-item key="4">
                            <bar-chart-outlined/>
                            <span class="nav-text">nav 4</span>
                        </a-menu-item>
                        <a-menu-item key="5">
                            <cloud-outlined/>
                            <span class="nav-text">nav 5</span>
                        </a-menu-item>
                        <a-menu-item key="6">
                            <appstore-outlined/>
                            <span class="nav-text">nav 6</span>
                        </a-menu-item>
                        <a-menu-item key="7">
                            <team-outlined/>
                            <span class="nav-text">nav 7</span>
                        </a-menu-item>
                        <a-menu-item key="8">
                            <shop-outlined/>
                            <span class="nav-text">nav 8</span>
                        </a-menu-item>
                    </a-menu>
                </a-layout-sider>
                <a-layout style="padding: 0 24px 24px">
                    <a-breadcrumb style="margin: 16px 0">
                        <a-breadcrumb-item>Home</a-breadcrumb-item>
                        <a-breadcrumb-item>List</a-breadcrumb-item>
                        <a-breadcrumb-item>App</a-breadcrumb-item>
                    </a-breadcrumb>
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
    import HeaderVue from './headerVue'
    import FooterVue from './footerVue'
    import AsideVue from './asideVue'
    import { UserOutlined, VideoCameraOutlined, UploadOutlined,BarChartOutlined,CloudOutlined,AppstoreOutlined,TeamOutlined,ShopOutlined } from '@ant-design/icons-vue';
    export default {
        name: "contain",
        components: {
            HeaderVue,
            FooterVue,
            AsideVue,
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
            return {
                selectedKeys: [2],
            }
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
