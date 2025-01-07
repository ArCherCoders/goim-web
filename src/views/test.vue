<template>
  <div class="container">
  </div>
</template>


<script setup lang="ts">
import {type AuthInterface, GoImClient} from "@/goim-web-sdk/goImClient";

let AUTH: AuthInterface = {
  mid: 123,
  room_id: "199",
  platform: "web",
  accepts: [1000, 1002, 1003]
}

function authReplyOkFunc() {
  console.log("认证成功")
}

function receiveHeartbeatReplyFunc() {
  console.log("接收服务端心跳包的回应")
}

function receieveMessageFunc(data: any) {
  console.log("接收消息=",data)
}

let goimClient = new GoImClient(
    "ws://192.168.31.77:3102/sub",
    AUTH,// 认证
    authReplyOkFunc,// 认证成功的回到函数
    receiveHeartbeatReplyFunc,// 接收服务端心跳包的回应回调函数,
    receieveMessageFunc// 接收消息的回调函数
)

</script>

<style lang="less" scoped>

</style>