<template>
  <div class="container">
    <router-view></router-view>
  </div>
</template>


<script setup lang="ts">
import ChatWindow from "@/components/chatwindow/ChatWindow.vue";
import { type AuthInterface, GoImClient} from "@/goim-web-sdk/goImClient";

// const goim = new GoImClient({
//   url: 'ws://192.168.10.200:3102/sub',
//   auth: {
//     mid: 123,
//     room_id: "live://1000",
//     platform: "web",
//     accepts: [1000, 1001, 1002]
//   },
//   authReplyOkFuncCallBack: function () {
//     console.log("认证成功回调")
//   },
//   receiveMessageFuncCallBack: function (data: any) {
//     console.log("消息回调", data)
//   },
//   receiveHeartbeatReplyFuncCallBack: function () {
//     console.log("心跳回调")
//   }
// })


</script>

<style lang="less" scoped>

</style>