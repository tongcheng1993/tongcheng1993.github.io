import {get} from "../axios"


export function f(param) {
    let url = "/api/f"
    return get(url,param)
}
