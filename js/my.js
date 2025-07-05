// 全局定义方法a（可通过window.a调用）
function checkOnline() {
    console.log(" 全局方法a已执行，当前时间：2025年7月5日 14:43（周六）");
    // 其他逻辑...
}

(function() {
    checkOnline();
})()