function postWithToken(path, data, extraHeaders = {}) {
    let url = "https://tongcheng.picp.vip:20443" + path;

    // 1. 从 sessionStorage 获取 Token（兼容性处理）
    let token = "";
    try {
        const p1 = sessionStorage.getItem("p1");
        if (p1) token = JSON.parse(p1).token;
    } catch (e) {
        console.error("Token  解析失败:", e);
    }

    // 2. 配置请求头 
    const headers = {
        "Tc-Token": token,
        "Content-Type": "application/json", // 根据实际需求调整 
        "X-Request-Time": new Date().toISOString(), // 附加当前时间戳 
        ...extraHeaders // 合并动态头信息
    };
    // 3. 发送请求（全参数配置）
    return axios({
        method: "post",          // 请求方法 
        url: url,                // 接口地址
        data: JSON.stringify(data),              // 请求体数据 
        headers: headers,        // 自定义头 
        timeout: 10000,          // 超时时间（10秒）
        withCredentials: true,   // 跨域携带 Cookie
        responseType: "json",    // 响应数据类型 
        validateStatus: (status) => status >= 200 && status < 500 // 自定义有效状态码 
    })
        .then(response => {
            // 4. 统一处理响应
            return response.data.result;
        })
        .catch(error => {
            // 5. 错误处理（细分网络错误、服务端错误等）
            if (error.response) {
                console.error(" 服务端错误:", error.response.status);
            } else if (error.request) {
                console.error(" 网络错误:", error.message);
            } else {
                console.error(" 请求配置错误:", error.message);
            }
            throw error; // 继续向上抛出错误 
        });
}










// 全局定义方法a（可通过window.checkOnline调用）
function checkOnline() {
    let url = window.location.href
    let urlObj = new URL(url)
    let path = urlObj.pathname;
    if (path == "/login.html") {
        sessionStorage.setItem("p1", "")
    } else {
        if (sessionStorage.getItem("p1")) {
            postWithToken("/api/sys/getInfo", {})





        } else {
            window.location.href = "/login.html"
        }
    }


    // 其他逻辑...
}

(function () {
    checkOnline();
})()