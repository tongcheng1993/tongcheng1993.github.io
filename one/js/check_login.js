(function () {
    let metoken = window.sessionStorage.getItem("meToken");
    let location_href = window.location.href
    if (metoken) {
        console.log(location_href)
    } else {
        if (location_href.includes("/login.html")) {

        } else {
            window.location.href = "/login.html"
        }
    }
})()