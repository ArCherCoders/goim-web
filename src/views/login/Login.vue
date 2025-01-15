<template>
  <div class="login">
    <login-panel></login-panel>
  </div>
</template>
<script setup lang="ts">
import LoginPanel from "@/views/login/c-cpn/login-panel.vue";
</script>
<style scoped lang="less">
.login {
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: url("../../assets/img/login-bg.svg")
}
</style>