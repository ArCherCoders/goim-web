<template>
  <!--  头部容器-->
  <div class="header-container vac-app-border-b">
    <!--    头部内容-->
    <div class="header-content">
      <!--       头部信息-->
      <div class="header-info">
        <div class="header-image">
          <el-avatar :src="props.avatar"></el-avatar>
        </div>
        <div class="header-text">
          <span>{{props.name}}</span>
        </div>
      </div>
      <!--       头部ICo-->
      <div class="header-icon">
        <el-icon size="25">
          <MoreFilled/>
        </el-icon>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">

const props =defineProps({
  avatar:{
    type:String,
    default:""
  },
  name:{
    type:String,
    default:""
  }
})

</script>
<style scoped lang="less">
.header-container {
  width: 100%;
  background: var(--chat-header-bg-color);
  padding: 10px 0;
  border-top-right-radius: var(--chat-container-border-radius);

  .header-content {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 16px;

    .header-info {
      display: flex;
      justify-content: center;
      align-items: center;
      cursor: pointer;


      .header-text {
        padding: 0 10px;
        color: var(--chat-header-color-name)
      }


      }
    .header-icon {
      cursor: pointer;
      .el-icon{
        transform: rotate(90deg);
      }
    }


  }
}
</style>