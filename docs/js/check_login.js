(function () {
    let metoken = window.sessionStorage.getItem("meToken");
    let toPage = window.sessionStorage.getItem("toPage");
    let location_href = window.location.href
    if (metoken) {
        if(toPage){
            if(toPage === location_href ){
                window.sessionStorage.removeItem("toPage")
            }else{
                window.location.href = toPage
            }
        }else{
            console.log(location_href)
        }
        
    } else {
        if (location_href.includes("/login.html")) {

        } else {
            window.sessionStorage.setItem("toPage",location_href)
            window.location.href = "/login.html"
        }
    }
})()
