<template>
    <div>
        <a-layout>
            <a-layout-sider>
                <div class="logo"/>
            </a-layout-sider>
            <a-layout>
                <a-layout-header>Header</a-layout-header>
                <a-layout-content>Content <router-view/></a-layout-content>
                <a-layout-footer>Footer</a-layout-footer>
            </a-layout>
        </a-layout>
    </div>
</template>

<script>
    import HeaderVue from './headerVue'
    import FooterVue from './footerVue'
    import AsideVue from './asideVue'

    export default {
        name: "contain",
        components: {
            HeaderVue,
            FooterVue,
            AsideVue,
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
        height: 32px;
        background: rgba(255, 255, 255, 0.3);
        margin: 16px;
    }
</style>
