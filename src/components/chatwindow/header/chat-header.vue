<template>
  <div class="chat-header">
    <div class="info">
      <div class="info-avatar">
        <el-avatar></el-avatar>
      </div>
      <div class="info-person">
        <div>jack over</div>
        <div class="online">在线</div>
      </div>
    </div>
    <div>
      <el-icon>
        <MoreFilled/>
      </el-icon>
    </div>
  </div>
</template>
<script setup lang="ts">

</script>
<style scoped lang="less">
.chat-header {
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  height: 60px;
  padding: 0 20px;
  align-items: center;
}

.info {
  display: flex;

  .info-person{
    margin-left: 15px;
    color: var(--font-555);
  }
  .online{
    color: var(--font-color);
    margin-top: 5px;
    font-size: 14px;
  }
}

</style>