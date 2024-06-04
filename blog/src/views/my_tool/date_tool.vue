<template>
    <div style="margin: 20px">
        <div style="margin: 20px">
            <a-input-number style="width: 100%" v-model:value="intValue" placeholder="请输入时间戳"/>
            <div></div>
            <a-button @click="exchangeToDate">转换</a-button>
            <div></div>
            <a-input v-model:value="formatIntValue"/>
        </div>
        <div style="margin: 20px">
            <a-date-picker style="width: 100%" show-time v-model:value="dateValue"
                           :format="dateFormat"/>
            <div></div>
            <a-button @click="exchangeToInt">转换</a-button>
            <div></div>
            <a-input v-model:value="formatDateValue"/>
            <div></div>
            <a-input v-model:value="formatDateValueAll"/>
        </div>

    </div>
</template>

<script>
    import {
        Button as AButton,
        Input as AInput,
        InputNumber as AInputNumber,
        DatePicker as ADatePicker
    } from 'ant-design-vue'
    import moment from "moment"

    export default {
        name: "date_tool",
        // 引用组件
        components: {
            AButton,
            AInput,
            AInputNumber,
            ADatePicker
        },
        data() {
            return {
                dateFormat: "YYYY-MM-DD HH:mm:ss",
                intValue: 0,
                formatIntValue: "",
                dateValue: null,
                formatDateValue: 0,
                formatDateValueAll: 0,
            }
        },
        mounted() {
            this.init();
        },
        methods: {

            // 初始化数据
            init() {

            },

            exchangeToDate() {
                let _that = this
                const timestamp = "" + _that.intValue
                if (timestamp.length === 13) {
                    _that.formatIntValue = new Date(parseInt(timestamp)).toLocaleString();
                } else if (timestamp.length === 10) {
                    _that.formatIntValue = new Date(parseInt(timestamp) * 1000).toLocaleString();
                } else {
                    alert("当前时间戳有问题")
                }


            },
            exchangeToInt() {
                let _that = this
                _that.formatDateValue = _that.dateValue.unix()
                _that.formatDateValueAll = _that.formatDateValue * 1000
            }

        },
    }
</script>

<style scoped>

</style>
