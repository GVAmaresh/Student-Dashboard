import cookies from "js-cookie"
export const getUserFromCookie = ()=>{
    const cookie = cookies.get("auth")
    if(!cookie){
        return
    }
    return JSON.parse(cookie)
}
export const setUserCookie = (uid)=>{
    cookies.set("auth",JSON.stringify(uid),{
        expires: 90
    })
}

export const RemoveUserCookie = ()=>{
    cookies.remove("auth")
}