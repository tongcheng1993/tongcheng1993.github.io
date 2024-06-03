import {get} from "../axios"


export function getInfo(param) {
    let url = "/api/getInfo"
    return get(url,param)
}
