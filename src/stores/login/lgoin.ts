import {defineStore} from "pinia";


interface UserInfo {
    userName: string
    userPic: string
    userId: number
    token: string
    online: number
}

const useLoginStore = defineStore("login", {
    state: () => ({
      userInfo:{}
    }),
})