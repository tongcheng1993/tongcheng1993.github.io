import {get} from "../axios"


export function f(param) {
    let url = "/api/getInfo"
    return get(url,param)
}
