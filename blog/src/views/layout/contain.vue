<template>
   <HeaderVue></HeaderVue>
    <div>
        <AsideVue>

        </AsideVue>
        <router-view/>
    </div>
    <FooterVue>

    </FooterVue>
</template>

<script>
    import HeaderVue from './headerVue'
    import FooterVue from './footerVue'
    import AsideVue from './asideVue'

    export default {
        name: "contain",
        components:{
            HeaderVue,
            FooterVue,
            AsideVue,
        }
    }
</script>

<style scoped>

</style>
