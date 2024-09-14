<template>
  <div class="friends">
    <div class="top">
      <div class="top-text">
        <h3>好友列表</h3>
        <el-button>添加好友</el-button>
      </div>
      <div class="top-search">
        <el-input size="large" placeholder="Search" :prefix-icon="Search"/>
      </div>
    </div>
    <el-scrollbar  height="800px">
      <div class="card-item">
        <Card></Card>
      </div>
      <div class="card-item">
        <Card></Card>
      </div>
      <div class="card-item">
        <Card></Card>
      </div>
      <div class="card-item">
        <Card></Card>
      </div>
      <div class="card-item">
        <Card></Card>
      </div>
      <div class="card-item">
        <Card></Card>
      </div>
      <div class="card-item">
        <Card></Card>
      </div>
      <div class="card-item">
        <Card></Card>
      </div>
      <div class="card-item">
        <Card></Card>
      </div>
      <div class="card-item">
        <Card></Card>
      </div>
      <div class="card-item">
        <Card></Card>
      </div>
    </el-scrollbar>
  </div>

</template>
<script setup lang="ts">
import {Search} from '@element-plus/icons-vue'
import Card from "@/components/Card.vue";
</script>
<style scoped lang="less">
.friends {
  box-sizing: border-box;
}

.top {
  margin-bottom: 20px;
}

.top-text {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;

  h3 {
    color: var(--primary-color);
  }

  .el-button {
    background-color: var(--dark-color);
    color: white;
  }
}

.el-icon {
  fill: #333333;
}

:deep(.el-input__wrapper.is-focus) {
  outline: none;
  box-shadow: 0 0 0 1px var(--primary-color) inset;
  background-color: var(--sidebar-bg);
}

.card-item {
  border: 1px solid var(--white-color);
  margin-bottom: 10px;
  border-radius: 5px;
}

.card-item:hover {
  border: 1px solid var(--primary-color);
  cursor: pointer;
  box-shadow: var(--el-box-shadow-light);
  transition: border 0.3s ease-in;
}



</style>