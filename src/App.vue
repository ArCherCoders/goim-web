<template>
  <div class="container">
    <router-view></router-view>
  </div>
</template>


<script setup lang="ts">
import useMessageStore from "@/stores/message/message";
import {onUnmounted} from "vue";
const messageStore = useMessageStore();
messageStore.connectAction()
onUnmounted(() => {
  messageStore.disConnectActon();
})
</script>

<style lang="less" scoped>
.container{
  margin-top: 20px;
}
</style>