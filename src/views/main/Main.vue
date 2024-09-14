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
    <div class="main">
      <div class="list-message">
        <message></message>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import Navigation from "@/components/Navigation.vue";
import Message from "@/components/Message.vue";
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

  .main {
    width: 100%;
    display: flex;
    flex-direction: row;
  }
}

</style>