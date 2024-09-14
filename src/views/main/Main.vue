<template>
  <div class="layout">
    <div class="navigation">
      <Navigation></Navigation>
    </div>
    <div class="sidebar">
      <div class="tab-content">
        <transition>
          <router-view></router-view>
        </transition>
      </div>
    </div>
    <div class="chat-window-container">
      <el-container>
        <el-header>
          <chat-header/>
        </el-header>
        <el-main>
          <chat-center></chat-center>
        </el-main>
        <el-footer>
          <chat-footer/>
        </el-footer>
      </el-container>
    </div>
  </div>
</template>

<script setup lang="ts">
import Navigation from "@/components/Navigation.vue";
import Message from "@/components/Message.vue";
import ChatHeader from "@/components/chatwindow/header/chat-header.vue";
import ChatCenter from "@/components/chatwindow/center/chat-center.vue";
import ChatFooter from "@/components/chatwindow/footer/chat-footer.vue";
</script>

<style lang="less" scoped>
.layout {
  height: 100vh;
  background-color: var(--body-color);
  display: flex;
  flex-direction: row;

  .navigation {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    width: 80px;
    height: 100vh;
    background-color: var(--sidebar-bg);
    border-right: 2px solid var(--white-color);
  }

  .sidebar {
    box-sizing: border-box;
    width: 400px;
    padding: 24px;
    background-color: var(--sidebar-bg);
    display: flex;
    justify-content: center;
    height: 100vh;

    .tab-content {
      width: 350px;
      height: 100%;
      background-color: var(--sidebar-bg);
    }
  }

  .v-enter-from {
    opacity: 0;
  }

  .v-enter-to {
    opacity: 1;
  }

  .v-enter-active {
    transition: opacity 0.4s ease-out;
  }

  .chat-window-container {
    flex: 1;
    :deep(.el-header ) {
      padding: 20px 0;
    }
    flex-direction: row;
    background-color: var(--white-color);
    .el-header{
      box-shadow:0px 1px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);
      padding: 0;
    }
    .el-main{
      padding-right: 30px;
    }
  }
}

</style>