<template>
  <div class="card">
    <div class="card-info">
      <div class="avatar">
        <el-avatar></el-avatar>
      </div>
      <div class="right">
        <div class="nickname">昵称</div>
        <div class="lastMessage">你好啊！！！！！！！</div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">

</script>
<style scoped lang="less">
.card {
  padding: 20px;
  background-color: var(--white-color);
  border-radius: 5px;
}
.card-info {
  display: flex;

  .avatar {
    box-sizing: border-box;
    height: 44px;
    width: 44px;
    margin-right: 20px;
  }

  .right {
    flex: 1;
    align-items: center;

    .nickname {
      margin-bottom: 10px;
      color: var(--font-555);
    }

    .lastMessage {
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      color: var(--font-color);
      font-size: 13px;
    }
  }
}
</style>