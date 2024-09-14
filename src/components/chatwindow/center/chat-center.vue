<template>
  <div class="chat-center">
    <el-scrollbar height="600px">
     <Message></Message>
      <Message :is-self="true"></Message>
      <Message></Message>
      <Message :is-self="true"></Message>
      <Message></Message>
      <Message :is-self="true"></Message>
      <Message :is-self="true"></Message>
      <Message :is-self="true"></Message>
      <Message :is-self="true"></Message>

    </el-scrollbar>
  </div>
</template>
<script setup lang="ts">

import Message from "@/components/Message.vue";
</script>
<style scoped lang="less">

</style>