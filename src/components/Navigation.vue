<template>
  <div class="navigation-bar">
    <span style="height: 80px"></span>
    <el-menu router>
      <el-menu-item index="/main/profile" >
       <el-avatar/>
      </el-menu-item>
      <el-menu-item index="/main/session">
        <el-icon>
          <Comment />
        </el-icon>
      </el-menu-item>
      <el-menu-item index="/main/friends">
        <el-icon>
          <el-icon><UserFilled /></el-icon>
        </el-icon>
      </el-menu-item>
    </el-menu>
  </div>
</template>
<script setup lang="ts">

</script>
<style scoped lang="less">
.navigation-bar {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  width: 80px;
  height: 100vh;
  background-color: var(--sidebar-bg);
  border-left: 1px solid #ffffff;

  .el-menu {
    background-color: var(--sidebar-bg);
    border-right:none;
  }

  .el-menu-item:hover {
    background-color: var(--sidebar-bg);
  }

  .el-menu-item.is-active {
    color: var(--primary-color);
  }

  .el-avatar {
    width: 26px;
    height: 26px;
  }

  .el-icon {
    transform: rotateY(180deg);
    //width: 40px;
    //height: 40px;
  }
  .el-icon svg {
    width: 40px;
    height: 40px;
    fill: var(--font-555);
  }
  .el-icon svg path{
    width: 40px;
    height: 40px;
    fill: var(--font-555);
  }

}


</style>