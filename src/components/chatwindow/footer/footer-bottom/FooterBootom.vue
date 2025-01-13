<template>
  <div class="footer-bottom-container">
    <div class="footer-icon-button"></div>
    <el-button type="primary" @click="sendMessageBtnClick">Primary</el-button>
  </div>
</template>
<script setup lang="ts">
//点击按钮发送消息 发出事件
const emits =defineEmits(['sendMessageBtnClick'])
function sendMessageBtnClick(){
  emits("sendMessageBtnClick")
}



</script>
<style scoped lang="less">
.footer-bottom-container {
  box-sizing: border-box;
  padding-bottom: 5px;
  display: flex;
  flex-direction: row-reverse;
  margin-bottom: 10px;
}

</style>